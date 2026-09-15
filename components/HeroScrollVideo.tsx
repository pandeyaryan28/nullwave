"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play, Pause, RotateCcw, MoveHorizontal } from "lucide-react";

const TOTAL_FRAMES = 180;

/**
 * Calibrated Monotonic Pacing Curve:
 * In the raw 3D sequence, frames 120-137 contained a hyper-rapid whip-spin that flashed
 * past in milliseconds, while earlier frames barely moved.
 *
 * This piecewise monotonic spline redistributes scroll runway proportionally to actual
 * visual angle of rotation, ensuring uniform physical angular velocity across the entire
 * scroll journey, with a gentle cinematic settle into the final hero beauty shot.
 */
const PACING_POINTS = [
  { p: 0.00, f: 0.0 },
  { p: 0.06, f: 12.1 },
  { p: 0.12, f: 20.5 },
  { p: 0.18, f: 34.9 },
  { p: 0.28, f: 68.0 },
  { p: 0.38, f: 94.7 },
  { p: 0.48, f: 115.9 },
  { p: 0.58, f: 130.2 },
  { p: 0.68, f: 134.3 },
  { p: 0.78, f: 149.6 },
  { p: 0.88, f: 171.3 },
  { p: 0.94, f: 175.2 },
  { p: 1.00, f: 179.0 },
];

function mapProgressToFrame(p: number): number {
  const clamped = Math.max(0, Math.min(1, p));
  for (let i = 0; i < PACING_POINTS.length - 1; i++) {
    const p0 = PACING_POINTS[i];
    const p1 = PACING_POINTS[i + 1];
    if (clamped >= p0.p && clamped <= p1.p) {
      if (p0.f === p1.f) return p0.f;
      const u = (clamped - p0.p) / (p1.p - p0.p);
      const smoothU = u * u * (3 - 2 * u);
      return p0.f + smoothU * (p1.f - p0.f);
    }
  }
  return clamped >= 1 ? TOTAL_FRAMES - 1 : 0;
}

export default function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isPlayingRef = useRef(false);
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);

  // Drag interaction state
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);

  // Preload all 180 high-res frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `/frames/frame_${frameNum}.webp`;

      img.onload = () => {
        loadedCount++;
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) {
            drawFrameToCanvas(canvasRef.current, ctx, img);
          }
        }
        if (loadedCount >= Math.min(20, TOTAL_FRAMES)) {
          setImagesLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  const drawFrameToCanvas = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const targetWidth = 1280;
      const targetHeight = 720;

      if (canvas.width !== targetWidth * dpr || canvas.height !== targetHeight * dpr) {
        canvas.width = targetWidth * dpr;
        canvas.height = targetHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, targetWidth, targetHeight);
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
      ctx.restore();
    },
    []
  );

  // Scroll handler & Render Loop with silky physics interpolation
  useEffect(() => {
    let animationFrameId: number;
    let lastRenderedFrame = -1;

    const handleScroll = () => {
      if (!containerRef.current || isPlayingRef.current || isDragging) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / scrollHeight));

      targetProgressRef.current = rawProgress;
      setProgress(rawProgress);

      if (rawProgress < 0.28) setActivePhase(0);
      else if (rawProgress < 0.58) setActivePhase(1);
      else if (rawProgress < 0.84) setActivePhase(2);
      else setActivePhase(3);
    };

    const renderLoop = () => {
      if (isPlayingRef.current) {
        // Smooth auto-play loop
        targetProgressRef.current += 0.0028;
        if (targetProgressRef.current >= 1) {
          targetProgressRef.current = 0;
          currentProgressRef.current = 0;
        }
        setProgress(targetProgressRef.current);
      }

      // Exponential smoothing for weighted, inertia-rich feel
      const delta = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += delta * 0.18;

      const calculatedFrame = mapProgressToFrame(currentProgressRef.current);
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(calculatedFrame)));

      if (frameIndex !== lastRenderedFrame) {
        lastRenderedFrame = frameIndex;

        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            let imgToDraw = imagesRef.current[frameIndex];
            if (!imgToDraw || !imgToDraw.complete) {
              // Bidirectional nearest neighbor lookup for zero blank flicker
              for (let offset = 1; offset < 18; offset++) {
                const prev = imagesRef.current[frameIndex - offset];
                if (prev && prev.complete) {
                  imgToDraw = prev;
                  break;
                }
                const next = imagesRef.current[frameIndex + offset];
                if (next && next.complete) {
                  imgToDraw = next;
                  break;
                }
              }
            }
            if (imgToDraw && imgToDraw.complete) {
              drawFrameToCanvas(canvas, ctx, imgToDraw);
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    renderLoop();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [drawFrameToCanvas, isDragging]);

  // Pointer drag scrubbing interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isPlayingRef.current) {
      setIsPlaying(false);
      isPlayingRef.current = false;
    }
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartProgressRef.current = targetProgressRef.current;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const sensitivity = 0.0018; // calibrated rotation sensitivity
    let newProgress = dragStartProgressRef.current + deltaX * sensitivity;
    newProgress = Math.max(0, Math.min(1, newProgress));
    targetProgressRef.current = newProgress;
    setProgress(newProgress);

    if (newProgress < 0.28) setActivePhase(0);
    else if (newProgress < 0.58) setActivePhase(1);
    else if (newProgress < 0.84) setActivePhase(2);
    else setActivePhase(3);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const toggleAutoPlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      if (targetProgressRef.current >= 0.98) {
        targetProgressRef.current = 0;
        currentProgressRef.current = 0;
      }
      setIsPlaying(true);
      isPlayingRef.current = true;
    }
  };

  const resetPlay = () => {
    targetProgressRef.current = 0;
    currentProgressRef.current = 0;
    setProgress(0);
    setActivePhase(0);
    setIsPlaying(false);
    isPlayingRef.current = false;
    if (containerRef.current) {
      window.scrollTo({ top: containerRef.current.offsetTop, behavior: "smooth" });
    }
  };

  const scrollToPhase = (phaseIndex: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targets = [0.04, 0.42, 0.72, 0.94];
    const targetY = containerTop + targets[phaseIndex] * totalHeight;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const isHoldZone = progress >= 0.86;

  return (
    <div ref={containerRef} className="relative w-full h-[460vh] bg-nw-pitch">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Studio Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/15 via-nw-pitch to-nw-pitch pointer-events-none" />

        {/* Interactive Canvas Stage with Direct Drag to Scrub */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`relative w-full h-full flex items-center justify-center p-4 sm:p-8 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          title="Drag horizontally to rotate 360°"
        >
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-contain max-h-[85vh] filter contrast-[1.04] brightness-95 transition-opacity duration-500 pointer-events-none"
            style={{ opacity: imagesLoaded ? 1 : 0.4 }}
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-nw-pitch via-transparent to-nw-pitch/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-nw-pitch/60 via-transparent to-nw-pitch/60 pointer-events-none" />
        </div>

        {/* Phase Navigation Bar (Rectangular, Non-Pill, Anti-Slop) */}
        <div className="absolute top-20 sm:top-24 inset-x-6 sm:inset-x-12 z-20 flex items-center justify-between pointer-events-none">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-nw-card/85 border border-white/[0.08] backdrop-blur-md">
            <span className="w-2 h-2 rounded-sm bg-emerald-500" />
            <span className="font-mono text-[11px] tracking-wider uppercase text-zinc-300">
              Acoustic Hardware
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-nw-card/85 p-1 rounded-md border border-white/[0.08] backdrop-blur-xl pointer-events-auto shadow-xl">
            {[
              { label: "Overview", index: 0 },
              { label: "Acoustic Containment", index: 1 },
              { label: "Bladeless Airflow", index: 2 },
              { label: "Priority Access", index: 3 },
            ].map((phase) => (
              <button
                key={phase.index}
                onClick={() => scrollToPhase(phase.index)}
                className={`px-3 py-1.5 rounded-sm text-xs font-mono tracking-wide transition-all ${
                  activePhase === phase.index
                    ? "bg-white/[0.14] text-white font-medium shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={toggleAutoPlay}
              aria-label={isPlaying ? "Pause rotation preview" : "Play rotation preview"}
              className="px-3 py-1.5 rounded-md bg-nw-card/85 border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white text-xs font-mono flex items-center gap-2 backdrop-blur-md transition-colors shadow-lg"
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? "Pause 360°" : "Auto-Rotate 360°"}</span>
            </button>
            <button
              onClick={resetPlay}
              aria-label="Reset rotation to start"
              className="p-1.5 rounded-md bg-nw-card/85 border border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-white transition-colors shadow-lg"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Drag Hint Indicator */}
        <div className="hidden lg:flex absolute bottom-8 left-8 items-center gap-2 font-mono text-[11px] text-zinc-500 pointer-events-none z-10 bg-nw-card/60 px-2.5 py-1 rounded-sm border border-white/[0.05] backdrop-blur-sm">
          <MoveHorizontal size={12} className="text-zinc-400" />
          <span>Drag horizontally to rotate 360°</span>
        </div>

        {/* ======================================================== */}
        {/* STORYTELLING PHASES                                      */}
        {/* ======================================================== */}

        {/* PHASE 1: Hero Introduction (0.00 - 0.26) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 pointer-events-none ${
            progress < 0.28 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="max-w-2xl flex flex-col items-center">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
              Wearable Acoustic Privacy
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium tracking-tight text-white mb-6 leading-tight">
              Speak privately. <br />
              <span className="text-zinc-400 font-light">Anywhere.</span>
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-8">
              A refined acoustic wearable that traps voice sound waves at the mouth. Conduct confidential calls, speak with voice AI, and converse without anyone nearby hearing your speech.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link
                href="/waitlist"
                className="px-7 py-3.5 rounded-md bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/product"
                className="px-7 py-3.5 rounded-md bg-white/[0.08] text-white hover:bg-white/[0.14] border border-white/10 text-xs tracking-wider uppercase transition-colors backdrop-blur-md"
              >
                Explore Hardware
              </Link>
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs font-mono tracking-wider">
            <span>Scroll to inspect mechanics</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* PHASE 2: Sound Stays Inside (0.30 - 0.58) */}
        <div
          className={`absolute inset-x-0 bottom-8 sm:bottom-16 px-4 sm:px-12 flex justify-center transition-all duration-700 pointer-events-none ${
            progress >= 0.30 && progress < 0.58
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-md w-full bg-nw-card/95 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-white/[0.08] text-center sm:text-left shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-nw-gold text-xs font-mono uppercase tracking-wider">
                Sound Containment
              </span>
              <span className="text-[11px] font-mono text-zinc-300 bg-white/[0.06] px-2 py-0.5 rounded-sm">
                -38 dB Attenuation
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight mb-2">
              Your voice stays inside.
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Multi-layer acoustic dampening traps speech sound waves before they radiate into the room. Speak at conversational volume with zero leakage to the person standing beside you.
            </p>
          </div>
        </div>

        {/* PHASE 3: Silent Airflow (0.60 - 0.84) */}
        <div
          className={`absolute inset-x-0 bottom-8 sm:bottom-16 px-4 sm:px-12 flex justify-center transition-all duration-700 pointer-events-none ${
            progress >= 0.60 && progress < 0.85
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-md w-full bg-nw-card/95 backdrop-blur-2xl p-6 sm:p-8 rounded-2xl border border-white/[0.08] text-center sm:text-left shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-nw-gold text-xs font-mono uppercase tracking-wider">
                Silent Airflow
              </span>
              <span className="text-[11px] font-mono text-zinc-300 bg-white/[0.06] px-2 py-0.5 rounded-sm">
                Whisper Floor &lt; 14 dB
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight mb-2">
              Continuous fresh circulation.
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Bladeless micro-turbine delivers smooth fresh air without buffeting internal microphones or making annoying fan noise. Wear for hours in total comfort.
            </p>
          </div>
        </div>

        {/* PHASE 4: Calibrated Hold & Conversion Zone (0.86 - 1.00) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${
            isHoldZone ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
          }`}
        >
          <div className="max-w-xl bg-nw-card/95 backdrop-blur-2xl p-8 sm:p-10 rounded-2xl border border-white/[0.1] shadow-2xl">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
              Early Production Batch
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-3">
              Private calls in public spaces.
            </h2>
            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-md mx-auto">
              Engineered with hypoallergenic liquid silicone, close-proximity MEMS microphones, and 18-hour continuous battery life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/waitlist"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Reserve Priority Access</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/technology"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10 text-xs uppercase tracking-wider transition-colors"
              >
                <span>Acoustic Science</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
          <div
            className="h-full bg-nw-gold transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
