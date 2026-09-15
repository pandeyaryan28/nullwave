"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, VolumeX, Volume2, Mic, Activity, Info, Check } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function AcousticSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [shieldActive, setShieldActive] = useState(true);
  const [speechIntensity, setSpeechIntensity] = useState<"normal" | "loud" | "whisper">("normal");
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      title: "Confidential Call",
      location: "Airport Departure Lounge",
      ambientDb: 64,
      speechDb: 68,
      containedDb: 22,
      risk: "Financial & Client Data Exposed",
    },
    {
      title: "Open Desk Meeting",
      location: "Coworking Space",
      ambientDb: 52,
      speechDb: 65,
      containedDb: 21,
      risk: "Colleagues Distracted & Listening",
    },
    {
      title: "AI Voice Dictation",
      location: "Crowded Metro Train",
      ambientDb: 72,
      speechDb: 70,
      containedDb: 24,
      risk: "Social Awkwardness & Ambient Friction",
    },
    {
      title: "Late-Night Voice Comms",
      location: "Apartment Bedroom",
      ambientDb: 32,
      speechDb: 74,
      containedDb: 20,
      risk: "Wakes Family / Roommates in Next Room",
    },
  ];

  const current = scenarios[selectedScenario];
  const dbValue = shieldActive ? current.containedDb : current.speechDb;
  const attenuation = current.speechDb - current.containedDb;

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const audioIntervalRef = useRef<any>(null);

  // Web Audio Speech Containment Synthesizer
  const toggleAudioDemo = async () => {
    if (isPlayingAudio) {
      // Stop audio
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
      audioCtxRef.current = null;
      setIsPlayingAudio(false);
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      if (ctx.state === "suspended") {
        await ctx.resume();
      }

      // Master output gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(shieldActive ? 0.04 : 0.4, ctx.currentTime);

      // Acoustic shield biquad filter
      const acousticFilter = ctx.createBiquadFilter();
      acousticFilter.type = "lowpass";
      acousticFilter.frequency.setValueAtTime(shieldActive ? 280 : 4500, ctx.currentTime);
      acousticFilter.Q.setValueAtTime(shieldActive ? 0.7 : 2.5, ctx.currentTime);

      // Realtime Analyser
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;

      acousticFilter.connect(masterGain);
      masterGain.connect(analyser);
      analyser.connect(ctx.destination);

      audioCtxRef.current = ctx;
      gainNodeRef.current = masterGain;
      filterNodeRef.current = acousticFilter;
      analyserRef.current = analyser;

      // Syllabic speech cadence generator (simulating human speech formant bursts)
      const formants = [140, 280, 520, 1600, 2400];
      const speakSyllable = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === "closed") return;
        const now = ctx.currentTime;
        const duration = 0.12 + Math.random() * 0.14;

        formants.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = idx === 0 ? "sawtooth" : "sine";
          // Slight pitch inflection
          const baseFreq = freq * (speechIntensity === "loud" ? 1.15 : speechIntensity === "whisper" ? 0.85 : 1.0);
          osc.frequency.setValueAtTime(baseFreq, now);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * (0.95 + Math.random() * 0.1), now + duration);

          const weight = idx === 0 ? 0.3 : 0.15 / (idx + 1);
          oscGain.gain.setValueAtTime(0, now);
          oscGain.gain.linearRampToValueAtTime(weight, now + 0.02);
          oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

          osc.connect(oscGain);
          oscGain.connect(acousticFilter);

          osc.start(now);
          osc.stop(now + duration + 0.05);
        });
      };

      // Initial syllable burst
      speakSyllable();
      audioIntervalRef.current = setInterval(() => {
        if (Math.random() > 0.15) {
          speakSyllable();
        }
      }, 220);

      setIsPlayingAudio(true);
    } catch (e) {
      console.warn("Audio Context init error:", e);
    }
  };

  // Update audio filter dynamically when shield or intensity toggles
  useEffect(() => {
    if (!audioCtxRef.current || !filterNodeRef.current || !gainNodeRef.current) return;
    const now = audioCtxRef.current.currentTime;
    if (shieldActive) {
      // Acoustic containment engaged: -38 dB gain drop & lowpass wall at 280Hz
      filterNodeRef.current.frequency.exponentialRampToValueAtTime(280, now + 0.15);
      const targetGain = speechIntensity === "loud" ? 0.06 : speechIntensity === "whisper" ? 0.02 : 0.035;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(targetGain, now + 0.15);
    } else {
      // Unshielded vocal projection: wide open 4500Hz & high gain
      filterNodeRef.current.frequency.exponentialRampToValueAtTime(4500, now + 0.15);
      const targetGain = speechIntensity === "loud" ? 0.55 : speechIntensity === "whisper" ? 0.2 : 0.4;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(targetGain, now + 0.15);
    }
  }, [shieldActive, speechIntensity]);

  // Clean up audio context on unmount
  useEffect(() => {
    return () => {
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Real-time canvas soundwave simulation loop with Retina DPR support
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let phase = 0;
    const targetWidth = 900;
    const targetHeight = 320;

    const render = () => {
      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      if (canvas.width !== targetWidth * dpr || canvas.height !== targetHeight * dpr) {
        canvas.width = targetWidth * dpr;
        canvas.height = targetHeight * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, targetWidth, targetHeight);
      const width = targetWidth;
      const height = targetHeight;
      const centerY = height / 2;

      // Multi-layer sine waves simulating acoustic pressure waves
      const waveCount = shieldActive ? 3 : 6;
      const baseAmp = shieldActive
        ? speechIntensity === "loud"
          ? 12
          : speechIntensity === "whisper"
          ? 4
          : 8
        : speechIntensity === "loud"
        ? 65
        : speechIntensity === "whisper"
        ? 25
        : 45;

      for (let w = 0; w < waveCount; w++) {
        ctx.beginPath();
        const freq = 0.015 + w * 0.008;
        const speed = shieldActive ? 0.02 + w * 0.01 : 0.05 + w * 0.02;
        const amp = baseAmp * (1 - w * 0.15);

        ctx.strokeStyle = shieldActive
          ? `rgba(197, 168, 128, ${0.75 - w * 0.18})`
          : `rgba(239, 68, 68, ${0.8 - w * 0.14})`;
        ctx.lineWidth = shieldActive ? 2 : 2.5;

        for (let x = 0; x < width; x++) {
          // Attenuation envelope: if shield is active, wave collapses completely on the right (outside the mask)
          let envelope = 1;
          if (shieldActive) {
            // Internal mask zone (left 42%) vs External zone (right 58%)
            if (x > width * 0.42) {
              envelope = Math.max(0.03, Math.exp(-(x - width * 0.42) * 0.028));
            }
          }

          const y =
            centerY +
            Math.sin(x * freq + phase * speed) *
              amp *
              envelope *
              Math.cos(x * 0.003 + phase * 0.01);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // If shield is active, draw the acoustic boundary wall indicator
      const barrierX = width * 0.42;
      ctx.save();
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = shieldActive ? "rgba(197, 168, 128, 0.5)" : "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(barrierX, 20);
      ctx.lineTo(barrierX, height - 20);
      ctx.stroke();

      // Zone tags
      ctx.font = "10px monospace";
      ctx.fillStyle = shieldActive ? "rgba(197, 168, 128, 0.9)" : "rgba(255, 255, 255, 0.4)";
      ctx.fillText("INTERNAL CHAMBER", barrierX - 145, 28);
      ctx.fillStyle = shieldActive ? "rgba(74, 222, 128, 0.9)" : "rgba(239, 68, 68, 0.9)";
      ctx.fillText(
        shieldActive ? "EXTERNAL: ZERO LEAKAGE" : "EXTERNAL: UNRESTRICTED BLEED",
        barrierX + 15,
        28
      );
      ctx.restore();

      ctx.restore();
      phase += 1;
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [shieldActive, speechIntensity]);

  return (
    <div className="w-full">
      <SpotlightCard className="p-6 sm:p-10 border border-white/[0.1] bg-nw-card/70">
        {/* Header with Title and Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nw-gold animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-nw-gold">
                Interactive Acoustic Laboratory
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
              Real-Time Voice Containment Simulation
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              Toggle the NullWave Acoustic Shield to visualize how speech sound waves are trapped before entering the room.
            </p>
          </div>

          {/* Controls: Mode Switcher & Audio Demonstration Button */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            {/* Audio Synthesis Test Button */}
            <button
              onClick={toggleAudioDemo}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${
                isPlayingAudio
                  ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse"
                  : "bg-white/[0.05] text-zinc-300 border-white/[0.1] hover:bg-white/[0.1] hover:text-white"
              }`}
              title="Toggle Web Audio vocal synthesis to hear the -38 dB sound containment in real time"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX size={15} className="text-emerald-400" />
                  <span>Stop Audio</span>
                </>
              ) : (
                <>
                  <Volume2 size={15} className="text-nw-gold" />
                  <span>Listen to Demo</span>
                </>
              )}
            </button>

            {/* Primary State Toggle Switch */}
            <div className="flex items-center gap-2 bg-nw-pitch/90 p-1.5 rounded-full border border-white/[0.08]">
              <button
                onClick={() => setShieldActive(false)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  !shieldActive
                    ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-lg"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                <Volume2 size={14} />
                <span>Without NullWave</span>
              </button>
              <button
                onClick={() => setShieldActive(true)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  shieldActive
                    ? "bg-nw-gold text-nw-pitch font-semibold shadow-[0_0_20px_rgba(197,168,128,0.3)]"
                    : "text-zinc-500 hover:text-white"
                }`}
              >
                <ShieldCheck size={14} />
                <span>NullWave Engaged</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap gap-2 pt-6 pb-6">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.title}
              onClick={() => setSelectedScenario(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedScenario === idx
                  ? "bg-white/[0.1] text-white border border-nw-gold/40 shadow-sm"
                  : "bg-nw-pitch/40 text-zinc-500 border border-white/[0.04] hover:text-zinc-300"
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Main Waveform Canvas Viewport */}
        <div className="relative aspect-[16/7] w-full rounded-2xl bg-nw-pitch/90 border border-white/[0.08] overflow-hidden flex items-center justify-center p-4">
          <canvas
            ref={canvasRef}
            width={900}
            height={320}
            className="w-full h-full object-contain"
          />

          {/* Floating Decibel HUD Meter in Canvas */}
          <div className="absolute top-4 right-4 flex items-center gap-3 bg-nw-card/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-white/[0.1] font-mono shadow-xl">
            <div className="flex flex-col text-right">
              <span className="text-[9px] uppercase tracking-wider text-zinc-500">
                Audible Noise Level (1m Away)
              </span>
              <span
                className={`text-xl font-bold tracking-tight ${
                  shieldActive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {dbValue} dB
              </span>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${
                shieldActive ? "bg-emerald-400 animate-pulse" : "bg-red-500 animate-ping"
              }`}
            />
          </div>

          {/* Speech Intensity Buttons */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-nw-card/80 backdrop-blur-md p-1 rounded-xl border border-white/[0.08] text-[10px] font-mono">
            <span className="text-zinc-500 px-2 uppercase">Vocal Level:</span>
            {(["whisper", "normal", "loud"] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSpeechIntensity(lvl)}
                className={`px-2.5 py-1 rounded-lg uppercase tracking-wider transition-all ${
                  speechIntensity === lvl
                    ? "bg-nw-gold text-nw-pitch font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Telemetry Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-nw-pitch/70 border border-white/[0.06] space-y-1">
            <span className="font-mono text-[10px] uppercase text-zinc-500 block">
              Acoustic Attenuation
            </span>
            <div className="text-xl font-medium text-white flex items-center gap-1.5">
              <span>{shieldActive ? `-${attenuation} dB` : "0 dB (None)"}</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light">
              {shieldActive ? "99.4% speech acoustic damping" : "100% sound wave radiation"}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-nw-pitch/70 border border-white/[0.06] space-y-1">
            <span className="font-mono text-[10px] uppercase text-zinc-500 block">
              Speech Intelligibility
            </span>
            <div
              className={`text-xl font-medium ${
                shieldActive ? "text-emerald-400" : "text-amber-400"
              }`}
            >
              {shieldActive ? "0.0% (Inaudible)" : "100% (High Risk)"}
            </div>
            <p className="text-[11px] text-zinc-400 font-light">
              {shieldActive ? "Eavesdropping mathematically impossible" : "Every word transcribed by strangers"}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-nw-pitch/70 border border-white/[0.06] space-y-1">
            <span className="font-mono text-[10px] uppercase text-zinc-500 block">
              Microphone Clarity
            </span>
            <div className="text-xl font-medium text-white flex items-center gap-1.5">
              <span>Studio Warmth</span>
            </div>
            <p className="text-[11px] text-zinc-400 font-light">
              Dual beamforming MEMS mics isolate your true vocal timbre
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-nw-pitch/70 border border-white/[0.06] space-y-1">
            <span className="font-mono text-[10px] uppercase text-zinc-500 block">
              Bystander Impact
            </span>
            <div
              className={`text-xl font-medium ${
                shieldActive ? "text-nw-gold" : "text-red-400"
              }`}
            >
              {shieldActive ? "Zero Friction" : "Acoustic Disturbance"}
            </div>
            <p className="text-[11px] text-zinc-400 font-light">
              {shieldActive ? "Peace and silence maintained" : "Surrounding people annoyed"}
            </p>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
