"use client";

import { useState } from "react";
import { BarChart3, ShieldCheck, Activity, Info, Check } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface ComparisonItem {
  method: string;
  attenuation: number; // in dB
  leakagePercentage: number;
  speechAudibleDistance: string; // meters
  comfortScore: string;
  verdict: string;
  color: string;
}

const comparisons: ComparisonItem[] = [
  {
    method: "NullWave Acoustic Wearable",
    attenuation: 38,
    leakagePercentage: 0.6,
    speechAudibleDistance: "< 0.3 m (Whisper Floor)",
    comfortScore: "9.8 / 10 (Ergonomic LSR)",
    verdict: "Complete vocal privacy. Conversational volume trapped completely.",
    color: "#C5A880",
  },
  {
    method: "Whispering with Hand Over Mouth",
    attenuation: 12,
    leakagePercentage: 62,
    speechAudibleDistance: "2.5 m (Easily Overheard)",
    comfortScore: "3.2 / 10 (Fatiguing)",
    verdict: "Strains vocal cords; high-frequency sibilance still easily understood.",
    color: "#f59e0b",
  },
  {
    method: "Standard Cloth Face Mask",
    attenuation: 3,
    leakagePercentage: 94,
    speechAudibleDistance: "6.0 m (Zero Isolation)",
    comfortScore: "6.0 / 10",
    verdict: "Filters particulates only; zero acoustic sound wave containment.",
    color: "#ef4444",
  },
  {
    method: "Unprotected Speech (Standard)",
    attenuation: 0,
    leakagePercentage: 100,
    speechAudibleDistance: "12.0+ m (Broadcasting)",
    comfortScore: "N/A",
    verdict: "Total exposure. Every word can be recorded and overheard in public.",
    color: "#dc2626",
  },
];

const frequencyData = [
  { freq: "125 Hz", label: "Vocal Sub-Fundamental", nullwave: 34, cloth: 1 },
  { freq: "250 Hz", label: "Baritone Chest Resonance", nullwave: 36, cloth: 2 },
  { freq: "500 Hz", label: "Core Vowel Intelligibility", nullwave: 39, cloth: 3 },
  { freq: "1000 Hz", label: "Mid Speech Formant", nullwave: 42, cloth: 4 },
  { freq: "2000 Hz", label: "Consonant Articulation", nullwave: 40, cloth: 5 },
  { freq: "4000 Hz", label: "Sibilance & Fricatives ('s','t')", nullwave: 38, cloth: 4 },
  { freq: "8000 Hz", label: "Air & Breath Presence", nullwave: 35, cloth: 3 },
];

export default function AcousticBenchmarks() {
  const [activeTab, setActiveTab] = useState<"methods" | "frequency">("methods");

  return (
    <div className="w-full">
      <SpotlightCard className="p-6 sm:p-10 border border-white/[0.1] bg-nw-card/70">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.06]">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-nw-gold block">
              Acoustic Benchmarks // Empirical Lab Testing
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
              Validated Sound Containment Performance
            </h3>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-nw-pitch/80 p-1 rounded-full border border-white/[0.08]">
            <button
              onClick={() => setActiveTab("methods")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "methods"
                  ? "bg-nw-gold text-nw-pitch font-semibold"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Method Comparison
            </button>
            <button
              onClick={() => setActiveTab("frequency")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "frequency"
                  ? "bg-nw-gold text-nw-pitch font-semibold"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Frequency Spectrum
            </button>
          </div>
        </div>

        {/* Tab 1: Method Comparison */}
        {activeTab === "methods" && (
          <div className="space-y-6 pt-8">
            <div className="grid grid-cols-1 gap-4">
              {comparisons.map((item, idx) => (
                <div
                  key={item.method}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    idx === 0
                      ? "bg-nw-pitch/90 border-nw-gold/40 shadow-[0_0_20px_rgba(197,168,128,0.1)]"
                      : "bg-nw-pitch/50 border-white/[0.05]"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-1.5 max-w-md">
                      <div className="flex items-center gap-2">
                        {idx === 0 && (
                          <span className="w-2 h-2 rounded-full bg-nw-gold animate-pulse" />
                        )}
                        <h4 className="text-base sm:text-lg font-medium text-white">
                          {item.method}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {item.verdict}
                      </p>
                    </div>

                    {/* Attenuation Metric Bar */}
                    <div className="flex-1 max-w-xs space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-500 uppercase text-[10px]">
                          Attenuation Depth
                        </span>
                        <span className="text-white font-bold">{item.attenuation} dB</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-nw-dark/80 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${(item.attenuation / 40) * 100}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>

                    {/* Audibility Radius */}
                    <div className="text-right sm:min-w-[140px]">
                      <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                        Audible Radius
                      </span>
                      <span className="text-sm font-semibold text-zinc-200">
                        {item.speechAudibleDistance}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Frequency Spectrum */}
        {activeTab === "frequency" && (
          <div className="space-y-6 pt-8">
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-2xl">
              Human speech spans from 100 Hz up to 8,000 Hz. NullWave provides flat-response acoustic damping across the entire human vocal spectrum, neutralizing low vocal drone as well as high-frequency consonants.
            </p>

            <div className="space-y-3">
              {frequencyData.map((f) => (
                <div
                  key={f.freq}
                  className="p-4 rounded-xl bg-nw-pitch/70 border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="w-48 font-mono">
                    <span className="text-white font-bold">{f.freq}</span>
                    <span className="text-zinc-500 block text-[10px] font-sans">
                      {f.label}
                    </span>
                  </div>

                  {/* Relative bar comparison */}
                  <div className="flex-1 flex items-center gap-4">
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between text-[10px] font-mono">
                        <span className="text-nw-gold">NullWave: -{f.nullwave} dB</span>
                        <span className="text-zinc-600">Cloth Mask: -{f.cloth} dB</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden flex">
                        <div
                          className="h-full bg-nw-gold rounded-full transition-all"
                          style={{ width: `${(f.nullwave / 45) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="font-mono text-emerald-400 font-medium text-right sm:w-24">
                    &gt; 99% Neutralized
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </SpotlightCard>
    </div>
  );
}
