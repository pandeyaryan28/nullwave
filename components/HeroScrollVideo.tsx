"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ShieldCheck, Wind, Radio, Volume2, Sparkles } from "lucide-react";

const TOTAL_FRAMES = 180;

/**
 * Precision monotonic pacing curve.
 * Mathematically calibrated against optical frame diffs:
 * - Frames 0-115 (gentle intro & turn): mapped across p 0.00 to 0.38
 * - Frames 115-160 (high velocity spin): dilated across 34% of scroll runway (p 0.38 to 0.72)
 * - Frames 160-179 (settles into heroic front lockup): p 0.72 to 0.82
 * - Hero Climax Hold & Conversion Zone: p 0.82 to 1.00 (locks at final frame 179 for ~85vh)
 * This guarantees the user has ample time to interact with Batch 01 reservation without the section flashing away.
 */
function mapProgressToFrame(p: number, totalFrames: number): number {
  const points = [
    { p: 0.00, f: 0 },
    { p: 0.15, f: 30 },
    { p: 0.38, f: 115 },
    { p: 0.72, f: 160 },
    { p: 0.82, f: totalFrames - 1 },
    { p: 1.00, f: totalFrames - 1 },
  ];
  const clamped = Math.max(0, Math.min(1, p));
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    if (clamped >= p0.p && clamped <= p1.p) {
      if (p0.f === p1.f) return p0.f;
      const u = (clamped - p0.p) / (p1.p - p0.p);
      // Cubic smoothstep for continuous acceleration & deceleration
      const smoothU = u * u * (3 - 2 * u);
      return p0.f + smoothU * (p1.f - p0.f);
    }
  }
  return clamped >= 0.82 ? totalFrames - 1 : 0;
}

export default function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedSetRef = useRef<Set<number>>(new Set());

  // Preload all 180 frames into memory
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `/frames/frame_${frameNum}.webp`;

      img.onload = () => {
        loadedCount++;
        loadedSetRef.current.add(i - 1);

        // Always render true first frame (index 0) once loaded
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

  // Scroll handler & Render Loop with Damped Physics
  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;
    let lastRenderedFrame = -1;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / scrollHeight));

      targetProgress = rawProgress;
      setProgress(rawProgress);

      // Determine active storytelling phase
      if (rawProgress < 0.24) setActivePhase(0);
      else if (rawProgress < 0.55) setActivePhase(1);
      else if (rawProgress < 0.81) setActivePhase(2);
      else setActivePhase(3);
    };

    const renderLoop = () => {
      // Cinematic physics interpolation with responsive damping
      const delta = targetProgress - currentProgress;
      currentProgress += delta * 0.14;

      // Apply precision monotonic pacing curve to frames
      const calculatedFrame = mapProgressToFrame(currentProgress, TOTAL_FRAMES);
      const frameIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(calculatedFrame)));

      if (frameIndex !== lastRenderedFrame) {
        lastRenderedFrame = frameIndex;
        setCurrentFrameIndex(frameIndex);

        const canvas = canvasRef.current;
        if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
            // Pick requested frame or fallback to closest loaded frame to avoid blank flickers
            let imgToDraw = imagesRef.current[frameIndex];
            if (!imgToDraw || !imgToDraw.complete) {
              for (let offset = 1; offset < 15; offset++) {
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
  }, [drawFrameToCanvas]);

  // Jump to specific storytelling phase with Lenis coordination
  const scrollToPhase = (phaseIndex: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
    const targets = [0.05, 0.35, 0.65, 0.90];
    const targetY = containerTop + targets[phaseIndex] * totalHeight;

    if (typeof window !== "undefined" && (window as any).__lenis) {
      (window as any).__lenis.scrollTo(targetY, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const calculatedAzimuth = Math.min(360, Math.round((currentFrameIndex / (TOTAL_FRAMES - 1)) * 360));
  const isHoldZone = progress >= 0.82;

  return (
    <div ref={containerRef} className="relative w-full h-[480vh] bg-nw-pitch">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Deep Atmosphere Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-nw-gold/5 via-nw-pitch/90 to-nw-pitch pointer-events-none" />

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 tech-dot-grid opacity-30 pointer-events-none" />

        {/* ======================================================== */}
        {/* TELEMETRY & HARDWARE HUD                                 */}
        {/* ======================================================== */}

        {/* Top Floating HUD Bar */}
        <div className="absolute top-20 sm:top-24 inset-x-6 sm:inset-x-12 z-20 flex items-center justify-between pointer-events-none">
          {/* Left: Device Telemetry */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
                NULLWAVE // HW-01
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-zinc-500 font-mono text-[10px]">
              <span>FREQ: 100Hz - 8kHz</span>
            </div>
          </div>

          {/* Center: Phase Navigation Pills (Interactive) */}
          <div className="hidden md:flex items-center gap-1 bg-nw-card/80 p-1 rounded-full border border-white/[0.08] backdrop-blur-xl pointer-events-auto">
            {[
              { label: "01 OVERVIEW", index: 0 },
              { label: "02 ISOLATION", index: 1 },
              { label: "03 AIRFLOW", index: 2 },
              { label: "04 RESERVE", index: 3 },
            ].map((phase) => (
              <button
                key={phase.index}
                onClick={() => scrollToPhase(phase.index)}
                className={`px-3 py-1 text-[10px] font-mono tracking-wider uppercase rounded-full transition-all duration-300 ${
                  activePhase === phase.index
                    ? "bg-nw-gold text-nw-pitch font-semibold shadow-md"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>

          {/* Right: Rotation & Frame Counter */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md font-mono text-[10px] text-zinc-400">
              <Radio size={12} className={isHoldZone ? "text-emerald-400 animate-pulse" : "text-nw-gold"} />
              <span className="text-white font-medium">{calculatedAzimuth}°</span>
              <span className="text-zinc-600">|</span>
              <span>{isHoldZone ? "360° LOCKED" : `F ${String(currentFrameIndex + 1).padStart(3, "0")}`}</span>
            </div>
          </div>
        </div>

        {/* Hardware Frame Brackets */}
        <div className="absolute inset-8 sm:inset-12 pointer-events-none hidden sm:block">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />
        </div>

        {/* ======================================================== */}
        {/* CANVAS 3D VIEWPORT                                       */}
        {/* ======================================================== */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-contain max-h-[85vh] filter contrast-[1.06] brightness-[0.98] transition-opacity duration-700"
            style={{ opacity: imagesLoaded ? 1 : 0.3 }}
          />

          {/* Subtle Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-nw-pitch via-transparent to-nw-pitch/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-nw-pitch/70 via-transparent to-nw-pitch/70 pointer-events-none" />
        </div>

        {/* ======================================================== */}
        {/* CINEMATIC STORYTELLING OVERLAYS                          */}
        {/* ======================================================== */}

        {/* PHASE 1: Hero Introduction (0.00 - 0.22) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 pointer-events-none ${
            progress < 0.23 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          }`}
        >
          <div className="max-w-3xl flex flex-col items-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nw-gold/10 border border-nw-gold/20 text-nw-gold text-[11px] font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
              <Sparkles size={13} />
              <span>The World&apos;s First Voice Containment Wearable</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium tracking-tight text-white mb-6 leading-[1.08]">
              Speak Privately. <br />
              <span className="bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600 bg-clip-text text-transparent font-light">
                Anywhere in the World.
              </span>
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mb-8">
              A luxury wearable that traps your speech at the source. Conduct confidential business calls, dictate to AI, and speak aloud without anyone hearing a single word.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link
                href="/waitlist"
                className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2"
              >
                <span>Reserve for Batch 01</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/technology"
                className="px-8 py-4 rounded-full bg-white/[0.05] text-white hover:bg-white/[0.1] border border-white/10 text-xs tracking-wider uppercase transition-all backdrop-blur-md"
              >
                Explore Technology
              </Link>
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-[11px] font-mono tracking-widest uppercase">
            <span>Scroll to Rotate</span>
            <ChevronDown size={14} className="animate-bounce text-nw-gold" />
          </div>
        </div>

        {/* PHASE 2: Acoustic Containment (0.25 - 0.54) */}
        <div
          className={`absolute inset-x-0 bottom-10 sm:bottom-16 md:bottom-20 px-4 sm:px-12 flex justify-center transition-all duration-700 pointer-events-none ${
            progress >= 0.25 && progress < 0.55
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="max-w-xl w-full bg-nw-card/85 backdrop-blur-2xl p-5 sm:p-8 rounded-3xl border border-white/[0.1] shadow-2xl space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-nw-gold/15 text-nw-gold flex items-center justify-center">
                  <ShieldCheck size={16} />
                </div>
                <span className="text-nw-gold text-xs font-mono uppercase tracking-wider">
                  Acoustic Voice Isolation
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-400 bg-white/[0.05] px-2.5 py-1 rounded-full">
                -38 dB Attenuation
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-sans font-medium text-white tracking-tight leading-snug">
              Your voice stays trapped inside.
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Multi-layer acoustic foam labyrinths absorb and neutralize spoken sound waves before they escape into the surrounding environment. Speak at your natural conversational volume with zero leakage to the person beside you.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1 text-[11px] font-mono text-zinc-400">
              <div className="p-2.5 rounded-xl bg-nw-pitch/60 border border-white/[0.04]">
                <span className="text-zinc-500 block text-[9px] uppercase">Frequency Range</span>
                <span className="text-white font-medium">100Hz – 8,000Hz</span>
              </div>
              <div className="p-2.5 rounded-xl bg-nw-pitch/60 border border-white/[0.04]">
                <span className="text-zinc-500 block text-[9px] uppercase">External Bleed</span>
                <span className="text-emerald-400 font-medium">&lt; 0.6% Leakage</span>
              </div>
            </div>
          </div>
        </div>

        {/* PHASE 3: Silent Airflow & Thermal Comfort (0.57 - 0.80) */}
        <div
          className={`absolute inset-x-0 bottom-10 sm:bottom-16 md:bottom-20 px-4 sm:px-12 flex justify-center transition-all duration-700 pointer-events-none ${
            progress >= 0.57 && progress < 0.81
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div className="max-w-xl w-full bg-nw-card/85 backdrop-blur-2xl p-5 sm:p-8 rounded-3xl border border-white/[0.1] shadow-2xl space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                  <Wind size={16} />
                </div>
                <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider">
                  Bladeless Micro-Turbine
                </span>
              </div>
              <span className="font-mono text-xs text-zinc-400 bg-white/[0.05] px-2.5 py-1 rounded-full">
                &lt; 14 dB Whisper Floor
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-sans font-medium text-white tracking-tight leading-snug">
              Continuous cool airflow. Zero fan buzz.
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
              Proprietary micro-bladeless Coandă turbine circulates fresh air across the breathing chamber continuously. Breathe naturally with zero humidity buildup, zero stuffiness, and zero aerodynamic buffeting on internal microphones.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-1 text-[11px] font-mono text-zinc-400">
              <div className="p-2.5 rounded-xl bg-nw-pitch/60 border border-white/[0.04]">
                <span className="text-zinc-500 block text-[9px] uppercase">Acoustic Noise Floor</span>
                <span className="text-white font-medium">&lt; 14 dB (Inaudible)</span>
              </div>
              <div className="p-2.5 rounded-xl bg-nw-pitch/60 border border-white/[0.04]">
                <span className="text-zinc-500 block text-[9px] uppercase">Thermal Reduction</span>
                <span className="text-cyan-400 font-medium">-4.2°C Internal Cooling</span>
              </div>
            </div>
          </div>
        </div>

        {/* PHASE 4: Hero Climax Hold & Conversion Zone (0.82 - 1.00) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-700 ${
            isHoldZone ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
          }`}
        >
          <div className="max-w-xl bg-nw-card/90 backdrop-blur-2xl p-6 sm:p-10 md:p-12 rounded-3xl border border-white/[0.12] shadow-2xl space-y-5 sm:space-y-6">
            <div className="w-12 h-12 rounded-full bg-nw-gold/15 text-nw-gold flex items-center justify-center mx-auto border border-nw-gold/30">
              <Volume2 size={24} />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nw-gold/10 border border-nw-gold/30 text-nw-gold font-mono text-[10px] uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Batch 01 Early Access // Priority Allocation</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-3 leading-tight">
                Private voice. Public freedom.
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
                Medical-grade liquid silicone, studio MEMS microphones, 18-hour talk time, and live AI translation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/waitlist"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider hover:bg-nw-gold-light transition-all shadow-[0_0_25px_rgba(197,168,128,0.4)]"
              >
                <span>Get Early Access</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/product"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 text-xs uppercase tracking-wider transition-all"
              >
                <span>Full Specifications</span>
              </Link>
            </div>

            <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-4">
              <span>INITIAL RUN: 1,000 UNITS</span>
              <span>•</span>
              <span>GLOBAL SHIPPING Q3</span>
            </div>
          </div>
        </div>

        {/* Bottom Ambient Progress Track */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04] z-20">
          <div
            className="h-full bg-gradient-to-r from-nw-gold/50 via-nw-gold to-nw-gold-light transition-all duration-75 shadow-[0_0_10px_rgba(197,168,128,0.5)]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
