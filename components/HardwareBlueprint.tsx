"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Wind, Mic, Sparkles, Battery, Cpu, Check, Layers, LucideIcon } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface Hotspot {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  icon: LucideIcon;
  x: number; // percentage coordinates on image
  y: number;
  description: string;
  specs: { label: string; value: string }[];
}

const hotspots: Hotspot[] = [
  {
    id: "acoustic-core",
    name: "Multi-Chamber Acoustic Labyrinth",
    shortName: "Acoustic Core",
    subtitle: "Acoustic Attenuation Core",
    icon: ShieldCheck,
    x: 48,
    y: 52,
    description:
      "A 3D-sculpted acoustic labyrinth lined with micro-porous acoustic absorption foam. As sound waves enter from your mouth, internal geometry traps and dissipates vocal kinetic energy across all human speech frequencies (100Hz to 8,000Hz).",
    specs: [
      { label: "Acoustic Attenuation", value: "-38 dB" },
      { label: "Absorption Coefficient", value: "99.4%" },
      { label: "Chamber Volume", value: "48 cm³" },
    ],
  },
  {
    id: "micro-turbine",
    name: "Bladeless Coandă Micro-Turbine",
    shortName: "Micro Turbine",
    subtitle: "Whisper Airflow System",
    icon: Wind,
    x: 68,
    y: 36,
    description:
      "An ultra-miniature, brushless bladeless turbine engineered around the Coandă aerodynamic effect. Delivers smooth, continuous internal airflow to prevent moisture, humidity, and heat buildup without creating microphone buffeting or audible motor whine.",
    specs: [
      { label: "Noise Level", value: "< 14 dBA" },
      { label: "Flow Rate", value: "1.2 L/sec" },
      { label: "Thermal Delta", value: "-4.2°C" },
    ],
  },
  {
    id: "mems-array",
    name: "Dual MEMS Beamforming Array",
    shortName: "MEMS Array",
    subtitle: "Studio Vocal Pickup",
    icon: Mic,
    x: 35,
    y: 62,
    description:
      "Paired wide-dynamic-range MEMS microphones calibrated specifically for close-proximity speech isolation. Digital beamforming algorithms capture vocal warmth and articulation while completely rejecting external ambient noise.",
    specs: [
      { label: "Frequency Response", value: "20Hz – 20kHz" },
      { label: "SNR Ratio", value: "72 dB" },
      { label: "Sampling Depth", value: "24-bit / 48kHz" },
    ],
  },
  {
    id: "silicone-seal",
    name: "Ergonomic Liquid Silicone Seal",
    shortName: "Silicone Seal",
    subtitle: "Hypoallergenic Comfort",
    icon: Layers,
    x: 24,
    y: 40,
    description:
      "Precision-molded medical-grade liquid silicone rubber (LSR). Conforms dynamically to diverse facial anatomies, distributing seal pressure evenly across the zygomatic arch and mandible to eliminate fatigue during multi-hour meetings.",
    specs: [
      { label: "Hardness Shore", value: "30A Ultra-Soft" },
      { label: "Biocompatibility", value: "ISO 10993" },
      { label: "Weight", value: "22 grams" },
    ],
  },
  {
    id: "scent-port",
    name: "Aromatherapy Scent Chamber",
    shortName: "Scent Chamber",
    subtitle: "Magnetic Micro-Capsule",
    icon: Sparkles,
    x: 72,
    y: 68,
    description:
      "Quick-swap magnetic capsule receptacle that gently diffuses natural cedar, mint, or neutral clean air aromas into the inhalation stream, invigorating your respiratory passage during long transit days and back-to-back calls.",
    specs: [
      { label: "Capsule Lifespan", value: "60 Hours / Pod" },
      { label: "Ingredients", value: "100% Organic Oils" },
      { label: "Mounting", value: "Neodymium Snap" },
    ],
  },
  {
    id: "edge-core",
    name: "Neural Edge Processor & 18h Cell",
    shortName: "Neural DSP Core",
    subtitle: "On-Device AI Engine",
    icon: Cpu,
    x: 52,
    y: 82,
    description:
      "High-efficiency low-power neural DSP chip responsible for on-device voice translation, real-time meeting transcription, and low-latency Bluetooth 5.4 LE audio streaming powered by a custom curved lithium cell.",
    specs: [
      { label: "Battery Runtime", value: "Up to 18 Hours" },
      { label: "Fast Charging", value: "15 min = 5 hours" },
      { label: "Latency", value: "< 12 ms" },
    ],
  },
];

export default function HardwareBlueprint() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(hotspots[0]);

  return (
    <div className="w-full">
      <SpotlightCard className="p-6 sm:p-10 border border-white/[0.1] bg-nw-card/60">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.06]">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-nw-gold block">
              Exploded Architecture // Blueprint
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
              Anatomy of Acoustic Isolation
            </h3>
          </div>
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nw-gold" />
            <span>SELECT HOTSPOT TO INSPECT SUB-ASSEMBLY</span>
          </div>
        </div>

        {/* Interactive Layout: Left Blueprint / Right Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          {/* Blueprint Graphic with Pins */}
          <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden bg-nw-pitch/80 border border-white/[0.08] flex items-center justify-center p-4">
            <Image
              src="/images/mask-blueprint.png"
              alt="NullWave Hardware Engineering Blueprint"
              fill
              className="object-contain p-4 filter contrast-[1.08] brightness-95"
            />

            {/* Subtle Blueprint Grid Lines */}
            <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

            {/* Hotspot Pins */}
            {hotspots.map((hs) => {
              const isSelected = activeHotspot.id === hs.id;
              return (
                <button
                  key={hs.id}
                  onClick={() => setActiveHotspot(hs)}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                  aria-label={`Inspect ${hs.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute w-8 h-8 rounded-full transition-all duration-500 ${
                        isSelected
                          ? "bg-nw-gold/30 scale-125 animate-ping"
                          : "bg-white/10 group-hover:bg-nw-gold/20 scale-100"
                      }`}
                    />

                    {/* Outer border circle */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-nw-gold text-nw-pitch shadow-[0_0_15px_rgba(197,168,128,0.8)] scale-110"
                          : "bg-nw-card/90 border border-white/30 text-white group-hover:border-nw-gold group-hover:text-nw-gold"
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-current" />
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:block whitespace-nowrap bg-nw-pitch/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] font-mono text-zinc-300 pointer-events-none shadow-lg">
                      {hs.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Sub-Assembly Telemetry Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-nw-pitch/80 border border-white/[0.08] space-y-5">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-nw-gold/15 text-nw-gold flex items-center justify-center">
                    <activeHotspot.icon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-nw-gold block">
                      {activeHotspot.subtitle}
                    </span>
                    <h4 className="text-lg font-medium text-white tracking-tight">
                      {activeHotspot.name}
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                {activeHotspot.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                {activeHotspot.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="p-3 rounded-xl bg-nw-card/90 border border-white/[0.05] space-y-1"
                  >
                    <span className="text-[9px] font-mono uppercase text-zinc-500 block truncate">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Component Switcher List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {hotspots.map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => setActiveHotspot(hs)}
                  className={`p-2.5 rounded-xl text-left text-[11px] font-mono transition-all border ${
                    activeHotspot.id === hs.id
                      ? "bg-nw-gold/10 border-nw-gold/50 text-white font-medium shadow-sm"
                      : "bg-nw-card/40 border-white/[0.04] text-zinc-500 hover:text-zinc-300 hover:border-white/10"
                  }`}
                >
                  <span className="truncate block">{hs.shortName}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
