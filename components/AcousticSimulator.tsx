"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, Play, Square, ShieldCheck, Activity } from "lucide-react";

type Environment = {
  id: string;
  name: string;
  ambientDb: number;
  unmaskedLeakRadius: string;
  maskedLeakRadius: string;
  unmaskedDbNearby: number;
  maskedDbNearby: number;
  description: string;
};

const ENVIRONMENTS: Environment[] = [
  {
    id: "cafe",
    name: "Crowded Café",
    ambientDb: 72,
    unmaskedLeakRadius: "4.8 meters (16 ft)",
    maskedLeakRadius: "< 0.2 meters (8 in)",
    unmaskedDbNearby: 68,
    maskedDbNearby: 16,
    description: "Espresso steam, grinder noise, and adjacent tables 1 meter away.",
  },
  {
    id: "train",
    name: "Commuter Rail",
    ambientDb: 76,
    unmaskedLeakRadius: "5.2 meters (17 ft)",
    maskedLeakRadius: "< 0.2 meters (8 in)",
    unmaskedDbNearby: 71,
    maskedDbNearby: 18,
    description: "Rumble of tracks and quiet passenger cabin where normal voices stand out.",
  },
  {
    id: "airport",
    name: "Airport Departure Gate",
    ambientDb: 68,
    unmaskedLeakRadius: "4.5 meters (15 ft)",
    maskedLeakRadius: "< 0.2 meters (8 in)",
    unmaskedDbNearby: 66,
    maskedDbNearby: 15,
    description: "Flight announcements, rolling luggage, and dense seating rows.",
  },
  {
    id: "office",
    name: "Open Workspace",
    ambientDb: 58,
    unmaskedLeakRadius: "6.0 meters (20 ft)",
    maskedLeakRadius: "< 0.15 meters (6 in)",
    unmaskedDbNearby: 64,
    maskedDbNearby: 14,
    description: "Pin-drop quiet floors where conversational speech disrupts everyone.",
  },
];

export default function AcousticSimulator() {
  const [activeEnv, setActiveEnv] = useState<Environment>(ENVIRONMENTS[0]);
  const [isMasked, setIsMasked] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const nodesRef = useRef<{ [key: string]: any }>({});
  const animFrameRef = useRef<number | null>(null);

  // Canvas visualizer loop with real AnalyserNode frequency coupling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const freqData = new Uint8Array(64);

    const render = () => {
      time += 0.035;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Dark acoustic radar viewport background
      ctx.fillStyle = "#07070a";
      ctx.fillRect(0, 0, w, h);

      const centerX = w / 2;
      const centerY = h / 2;
      const maxRadius = Math.min(w, h) * 0.44;

      // Audio reactive amplitude
      let liveEnergy = 0;
      if (analyserRef.current && isPlayingAudio) {
        analyserRef.current.getByteFrequencyData(freqData);
        let sum = 0;
        for (let i = 0; i < freqData.length; i++) {
          sum += freqData[i];
        }
        liveEnergy = sum / (freqData.length * 255); // 0 to 1
      }

      // Distance rings
      for (let r = 40; r <= maxRadius; r += 45) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - maxRadius, centerY);
      ctx.lineTo(centerX + maxRadius, centerY);
      ctx.moveTo(centerX, centerY - maxRadius);
      ctx.lineTo(centerX, centerY + maxRadius);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.stroke();

      // Sound Wave Propagation
      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        const speed = isMasked ? 12 : 28;
        const offset = (time * speed + i * 36) % maxRadius;
        ctx.beginPath();

        if (isMasked) {
          // Acoustic containment: sound wave is physically confined
          const boost = liveEnergy * 8;
          const confinedRadius = Math.min(offset, 28 + Math.sin(time * 2.5 + i) * 3 + boost);
          ctx.arc(centerX, centerY, confinedRadius, 0, Math.PI * 2);
          const alpha = Math.max(0, 0.65 - confinedRadius / 36);
          ctx.strokeStyle = `rgba(197, 168, 128, ${alpha})`;
          ctx.lineWidth = 1.6;
        } else {
          // Unmasked: sound waves blast across the entire radius
          const boost = liveEnergy * 15;
          ctx.arc(centerX, centerY, Math.min(maxRadius, offset + boost), 0, Math.PI * 2);
          const alpha = Math.max(0, 0.75 - offset / maxRadius);
          ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
          ctx.lineWidth = 1.6;
        }
        ctx.stroke();
      }

      // Live Spectrum Arc if audio playing
      if (isPlayingAudio && analyserRef.current) {
        const bars = 32;
        const radius = isMasked ? 34 : 70;
        for (let b = 0; b < bars; b++) {
          const angle = (b / bars) * Math.PI * 2;
          const barHeight = (freqData[b] / 255) * (isMasked ? 8 : 26);
          const x1 = centerX + Math.cos(angle) * radius;
          const y1 = centerY + Math.sin(angle) * radius;
          const x2 = centerX + Math.cos(angle) * (radius + barHeight);
          const y2 = centerY + Math.sin(angle) * (radius + barHeight);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = isMasked ? "rgba(197, 168, 128, 0.6)" : "rgba(239, 68, 68, 0.7)";
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Center emitter (speaker / user mouth)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
      ctx.fillStyle = isMasked ? "#C5A880" : "#EF4444";
      ctx.fill();

      // Adjacent listener icon at 1.2m
      const listenerDistance = maxRadius * 0.68;
      const listenerX = centerX + listenerDistance;
      const listenerY = centerY;

      ctx.beginPath();
      ctx.arc(listenerX, listenerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = isMasked ? "#52525B" : "#EF4444";
      ctx.fill();

      // Labels on radar
      ctx.fillStyle = "#A1A1AA";
      ctx.font = "10px monospace";
      ctx.fillText("Neighbor (1.2m)", listenerX - 35, listenerY + 16);
      ctx.fillText(
        isMasked
          ? `Inaudible (${activeEnv.maskedDbNearby} dB)`
          : `Overheard (${activeEnv.unmaskedDbNearby} dB)`,
        listenerX - 35,
        listenerY + 28
      );

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isMasked, activeEnv, isPlayingAudio]);

  // Authentic Web Audio API Demonstration
  const startAudioDemo = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Pink noise / ambient generator
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.08;
        b6 = white * 0.115926;
      }

      const whiteNoiseSource = ctx.createBufferSource();
      whiteNoiseSource.buffer = noiseBuffer;
      whiteNoiseSource.loop = true;

      // Voice harmonic simulation (vocal cords fundamental + formants)
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      osc1.type = "sawtooth";
      osc1.frequency.setValueAtTime(140, ctx.currentTime);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(280, ctx.currentTime);

      const voiceGain = ctx.createGain();
      const voiceFilter = ctx.createBiquadFilter();

      // Configure based on initial mask state
      if (isMasked) {
        voiceFilter.type = "lowpass";
        voiceFilter.frequency.setValueAtTime(180, ctx.currentTime);
        voiceGain.gain.setValueAtTime(0.015, ctx.currentTime); // -38 dB inaudible bleed
      } else {
        voiceFilter.type = "bandpass";
        voiceFilter.frequency.setValueAtTime(1200, ctx.currentTime);
        voiceFilter.Q.setValueAtTime(0.8, ctx.currentTime);
        voiceGain.gain.setValueAtTime(0.18, ctx.currentTime);
      }

      osc1.connect(voiceFilter);
      osc2.connect(voiceFilter);
      voiceFilter.connect(voiceGain);

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.2, ctx.currentTime);

      // Real-time Analyser node for live spectrum analysis
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 64;
      analyserRef.current = analyser;

      voiceGain.connect(masterGain);
      whiteNoiseSource.connect(masterGain);
      masterGain.connect(analyser);
      analyser.connect(ctx.destination);

      whiteNoiseSource.start();
      osc1.start();
      osc2.start();

      nodesRef.current = {
        whiteNoiseSource,
        osc1,
        osc2,
        voiceGain,
        voiceFilter,
        masterGain,
      };

      setIsPlayingAudio(true);
    } catch (e) {
      console.warn("Audio demo not supported:", e);
    }
  };

  const stopAudioDemo = () => {
    try {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    } catch {
      // Ignored
    }
    analyserRef.current = null;
    setIsPlayingAudio(false);
  };

  // Toggle mode dynamically while playing
  useEffect(() => {
    if (isPlayingAudio && nodesRef.current.voiceFilter && audioCtxRef.current) {
      const { voiceFilter, voiceGain } = nodesRef.current;
      const ctx = audioCtxRef.current;
      if (isMasked) {
        voiceFilter.type = "lowpass";
        voiceFilter.frequency.setTargetAtTime(180, ctx.currentTime, 0.05);
        voiceGain.gain.setTargetAtTime(0.015, ctx.currentTime, 0.05);
      } else {
        voiceFilter.type = "bandpass";
        voiceFilter.frequency.setTargetAtTime(1200, ctx.currentTime, 0.05);
        voiceFilter.Q.setTargetAtTime(0.8, ctx.currentTime, 0.05);
        voiceGain.gain.setTargetAtTime(0.18, ctx.currentTime, 0.05);
      }
    }
  }, [isMasked, isPlayingAudio]);

  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Acoustic Laboratory
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
            Hear the difference. <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">Interactive Voice Containment.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            See and audition how NullWave isolates spoken sound waves in real time. Compare speech radius and decibel leakage across typical public environments.
          </p>
        </div>

        {/* Environment Selector (Clean Rectangular Tabs) */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-200 dark:border-white/[0.06] pb-4">
          {ENVIRONMENTS.map((env) => (
            <button
              key={env.id}
              onClick={() => setActiveEnv(env)}
              className={`px-4 py-2 rounded-md text-xs font-mono uppercase tracking-wide transition-all ${
                activeEnv.id === env.id
                  ? "bg-zinc-900 text-white dark:bg-white/[0.12] dark:text-white border border-zinc-900 dark:border-white/20 font-medium shadow-sm"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/[0.03] border border-transparent"
              }`}
            >
              {env.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Wave Radar Stage */}
          <div className="lg:col-span-7 bg-white dark:bg-nw-card rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm dark:shadow-2xl">
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-2">
                <Activity size={16} className={isMasked ? "text-nw-gold" : "text-red-500"} />
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300 uppercase tracking-wider">
                  Speech Radiation Mapping
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500">
                Ambient: {activeEnv.ambientDb} dB
              </span>
            </div>

            {/* Radar Canvas with Dark Acoustic Viewport */}
            <div className="relative w-full aspect-square max-h-[380px] mx-auto flex items-center justify-center rounded-xl overflow-hidden border border-zinc-300 dark:border-white/10">
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />

              {/* Status overlay banner */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-nw-pitch/90 border border-white/[0.1] font-mono text-[10px] text-zinc-300">
                Mode: {isMasked ? "Acoustic Containment Active" : "Unmasked Public Speech"}
              </div>
            </div>

            {/* State Toggle Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-5 z-10">
              <button
                onClick={() => setIsMasked(false)}
                className={`py-3 px-4 rounded-md text-xs font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  !isMasked
                    ? "bg-red-500/15 text-red-600 dark:text-red-300 border border-red-500/40 font-semibold"
                    : "bg-zinc-100 dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/[0.06]"
                }`}
              >
                <Volume2 size={14} />
                <span>Without Mask</span>
              </button>

              <button
                onClick={() => setIsMasked(true)}
                className={`py-3 px-4 rounded-md text-xs font-mono tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                  isMasked
                    ? "bg-nw-gold/20 text-nw-pitch dark:text-nw-gold border border-nw-gold/50 font-semibold"
                    : "bg-zinc-100 dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-white/[0.06]"
                }`}
              >
                <ShieldCheck size={14} />
                <span>NullWave Active</span>
              </button>
            </div>
          </div>

          {/* Telemetry & Audio Comparison Panel */}
          <div className="lg:col-span-5 bg-white dark:bg-nw-card rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm dark:shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/[0.06] pb-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-400 font-medium">
                  {activeEnv.name} Acoustics
                </span>
                <span className="text-xs font-mono text-zinc-500">Benchmark Data</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6">
                {activeEnv.description}
              </p>

              {/* Metrics Grid */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.05] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                      Leakage Radius
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">
                      {isMasked ? activeEnv.maskedLeakRadius : activeEnv.unmaskedLeakRadius}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded-sm ${
                      isMasked
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                        : "bg-red-500/10 text-red-600 dark:text-red-400 font-medium"
                    }`}
                  >
                    {isMasked ? "-96% Radius" : "Full Bleed"}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.05] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                      Audible Decibels at 1.2m
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">
                      {isMasked ? activeEnv.maskedDbNearby : activeEnv.unmaskedDbNearby} dB SPL
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded-sm ${
                      isMasked
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                        : "bg-red-500/10 text-red-600 dark:text-red-400 font-medium"
                    }`}
                  >
                    {isMasked ? "-38 dB Cut" : "Audible"}
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.05] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                      Eavesdropping Risk
                    </span>
                    <span className="text-sm font-medium text-zinc-900 dark:text-white">
                      {isMasked ? "Undetectable" : "High Speech Intelligibility"}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-xs px-2 py-0.5 rounded-sm ${
                      isMasked
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium"
                        : "bg-red-500/10 text-red-600 dark:text-red-400 font-medium"
                    }`}
                  >
                    {isMasked ? "100% Private" : "Compromised"}
                  </span>
                </div>
              </div>
            </div>

            {/* Audio Synthesis Demonstration */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-nw-pitch border border-zinc-200 dark:border-white/[0.06] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-800 dark:text-zinc-300 font-medium">
                  Audio Simulation Demo
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Web Audio API</span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                Experience simulated speech propagation in your headphones. Toggle modes above while playing to audition the -38 dB acoustic isolation gate.
              </p>

              <button
                onClick={isPlayingAudio ? stopAudioDemo : startAudioDemo}
                className={`w-full py-2.5 rounded-md text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-colors ${
                  isPlayingAudio
                    ? "bg-zinc-800 dark:bg-zinc-800 text-white hover:bg-zinc-700"
                    : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] border border-zinc-800 dark:border-white/10"
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <Square size={12} className="text-red-400 fill-current" />
                    <span>Stop Audio Demo</span>
                  </>
                ) : (
                  <>
                    <Play size={12} className="text-nw-gold fill-current" />
                    <span>Listen to Acoustic Demo</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
