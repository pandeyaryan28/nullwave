"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const TOTAL_FRAMES = 180;

export default function HeroScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload frames into memory
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `/frames/frame_${frameNum}.webp`;

      img.onload = () => {
        loadedCount++;
        // Render first frame immediately once it arrives
        if (loadedCount === 1 && canvasRef.current) {
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

  const drawFrameToCanvas = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement
  ) => {
    if (!img.complete || img.naturalWidth === 0) return;

    canvas.width = 1280;
    canvas.height = 720;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  // Scroll handler & Render Loop
  useEffect(() => {
    let animationFrameId: number;
    let targetProgress = 0;
    let currentProgress = 0;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / scrollHeight));

      targetProgress = rawProgress;
      setProgress(rawProgress);
    };

    const renderLoop = () => {
      // Smooth lerp interpolation for silky motion
      const delta = targetProgress - currentProgress;
      currentProgress += delta * 0.18;

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgress * (TOTAL_FRAMES - 1)))
      );

      const canvas = canvasRef.current;
      if (canvas && imagesRef.current[frameIndex]) {
        const ctx = canvas.getContext("2d");
        const img = imagesRef.current[frameIndex];
        if (ctx && img && img.complete) {
          drawFrameToCanvas(canvas, ctx, img);
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
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-nw-pitch">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Background Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-nw-pitch to-nw-pitch pointer-events-none" />

        {/* Canvas Render Container */}
        <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-8">
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-contain max-h-[85vh] filter contrast-[1.05] brightness-95 transition-opacity duration-500"
            style={{ opacity: imagesLoaded ? 1 : 0.4 }}
          />

          {/* Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-nw-pitch via-transparent to-nw-pitch/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-nw-pitch/60 via-transparent to-nw-pitch/60 pointer-events-none" />
        </div>

        {/* ======================================================== */}
        {/* MINIMALIST STORYTELLING PHASES                           */}
        {/* ======================================================== */}

        {/* PHASE 1: Hero Introduction (0.00 - 0.25) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 pointer-events-none ${
            progress < 0.25 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div className="max-w-2xl flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium tracking-tight text-white mb-6 leading-tight">
              Speak privately. <br />
              <span className="text-zinc-400 font-light">Anywhere.</span>
            </h1>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-lg font-light leading-relaxed mb-8">
              A comfortable wearable that keeps your voice private in public places. Take calls and talk freely without anyone around you hearing what you say.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto">
              <Link
                href="/waitlist"
                className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-lg"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/product"
                className="px-8 py-3.5 rounded-full bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 text-xs tracking-wider uppercase transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-xs tracking-wider">
            <span>Scroll down</span>
            <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>

        {/* PHASE 2: Sound Stays Inside (0.30 - 0.55) */}
        <div
          className={`absolute inset-x-0 bottom-10 sm:bottom-20 px-4 sm:px-12 flex justify-center transition-all duration-500 pointer-events-none ${
            progress >= 0.30 && progress < 0.58
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-md w-full bg-nw-pitch/90 backdrop-blur-xl p-5 sm:p-8 rounded-2xl border border-white/[0.08] text-center sm:text-left">
            <span className="text-nw-gold text-[11px] sm:text-xs font-mono uppercase tracking-wider block mb-1.5">
              Sound Containment
            </span>
            <h2 className="text-xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-2">
              Your voice stays inside.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Special sound-absorbing materials trap your voice when you speak. You can talk at your normal volume without leaking sound to people standing right next to you.
            </p>
          </div>
        </div>

        {/* PHASE 3: Quiet Airflow (0.62 - 0.85) */}
        <div
          className={`absolute inset-x-0 bottom-10 sm:bottom-20 px-4 sm:px-12 flex justify-center transition-all duration-500 pointer-events-none ${
            progress >= 0.62 && progress < 0.88
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-md w-full bg-nw-pitch/90 backdrop-blur-xl p-5 sm:p-8 rounded-2xl border border-white/[0.08] text-center sm:text-left">
            <span className="text-nw-gold text-[11px] sm:text-xs font-mono uppercase tracking-wider block mb-1.5">
              Silent Airflow
            </span>
            <h2 className="text-xl sm:text-3xl font-sans font-medium text-white tracking-tight mb-2">
              Cool, quiet, and comfortable.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              A quiet airflow system continuously brings in fresh air to keep you comfortable. No loud fan noise, no stuffiness, and no disturbance on your calls.
            </p>
          </div>
        </div>

        {/* PHASE 4: Final Call (0.90 - 1.00) */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-500 pointer-events-none ${
            progress >= 0.90 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-lg bg-nw-pitch/80 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/[0.1]">
            <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight mb-3">
              Private calls in public spaces.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
              Comfortable liquid silicone, clear internal microphones, and all-day battery life.
            </p>
            <div className="pointer-events-auto">
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider hover:bg-nw-gold-light transition-all"
              >
                <span>Get Early Access</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Minimal Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.04]">
          <div
            className="h-full bg-nw-gold/80 transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
