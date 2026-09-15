"use client";

import { useState } from "react";
import Image from "next/image";
import { Layers, ShieldCheck, Wind, Mic, Sliders, Cpu, Crosshair } from "lucide-react";

interface LayerSpec {
  id: string;
  name: string;
  category: string;
  material: string;
  metric: string;
  description: string;
  icon: any;
  hotspot: { x: string; y: string; width: string; height: string };
}

const LAYERS: LayerSpec[] = [
  {
    id: "seal",
    name: "Liquid Silicone Facial Gasket",
    category: "Ergonomics & Acoustic Seal",
    material: "Medical-Grade Liquid Silicone Rubber (22 Shore A)",
    metric: "0.02 mm Facial Contour Tolerance",
    description:
      "Engineered to conform naturally to diverse facial bone structures. Creates a complete acoustic hermetic seal around the nose and mouth without causing skin irritation or pressure headaches during hours of wear.",
    icon: ShieldCheck,
    hotspot: { x: "28%", y: "42%", width: "44%", height: "30%" },
  },
  {
    id: "foam",
    name: "Multi-Chamber Acoustic Labyrinth",
    category: "Voice Containment Core",
    material: "Open-Cell Reticulated Acoustic Foam Matrix",
    metric: "-38 dB Sound Pressure Absorption",
    description:
      "Internal sound-absorbing cellular matrix that forces voice sound waves through microscopic tortuous passages. Spoken acoustic energy is converted into negligible thermal energy before sound can escape into the room.",
    icon: Layers,
    hotspot: { x: "32%", y: "30%", width: "36%", height: "42%" },
  },
  {
    id: "mics",
    name: "Close-Proximity MEMS Array",
    category: "Audio Capture System",
    material: "Dual Knowles High-SNR Digital Microphones",
    metric: "68 dB Signal-to-Noise Ratio",
    description:
      "Positioned directly at mouth aperture (12 mm distance) for intimate voice capture. Outward environmental noise—traffic, coffee shop chatter, terminal announcements—is acoustically prevented from reaching the capsules.",
    icon: Mic,
    hotspot: { x: "44%", y: "46%", width: "16%", height: "18%" },
  },
  {
    id: "cooling",
    name: "Bladeless Coandă Air Circulation",
    category: "Thermal Management",
    material: "Ceramic Bearing Micro-Centrifugal Impeller",
    metric: "< 14 dB Acoustic Floor (1.8 CFM)",
    description:
      "A quiet airflow system continuously introduces fresh filtered air into the breathing chamber. Eliminates heat and humidity buildup without causing microphone buffeting or annoying motor whine.",
    icon: Wind,
    hotspot: { x: "18%", y: "40%", width: "24%", height: "26%" },
  },
  {
    id: "controls",
    name: "Tactile Hardware Switchboard",
    category: "Interface & Controls",
    material: "CNC-Machined 6000-Series Anodized Aluminum",
    metric: "Zero Latency Hardware Interrupts",
    description:
      "Dedicated physical mute toggle, volume rocker, and AI assistant key on the outer chassis. Instantly mute your microphone with a tactile click without fumbling for screen buttons.",
    icon: Sliders,
    hotspot: { x: "62%", y: "35%", width: "22%", height: "28%" },
  },
  {
    id: "processor",
    name: "Neural Audio DSP & Bluetooth 5.4",
    category: "Silicon & Connectivity",
    material: "Ultra-Low-Power Dual-Core DSP Engine",
    metric: "18-Hour Continuous Talk Time",
    description:
      "Handles on-device voice isolation filters, low-latency audio codec transmission, and real-time live translation processing directly without taxing your smartphone battery.",
    icon: Cpu,
    hotspot: { x: "52%", y: "48%", width: "24%", height: "24%" },
  },
];

export default function HardwareBlueprint() {
  const [selectedLayer, setSelectedLayer] = useState<LayerSpec>(LAYERS[0]);

  return (
    <section className="w-full bg-background dark:bg-nw-pitch text-foreground py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
              Hardware Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight">
              Engineered layer by layer. <br />
              <span className="text-zinc-500 dark:text-zinc-400 font-light">Precision Acoustic Anatomy.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-nw-card p-3.5 rounded-md border border-zinc-200 dark:border-white/[0.08] shrink-0 shadow-sm">
            <div className="text-zinc-900 dark:text-zinc-200 font-medium">TOTAL WEIGHT: 88 GRAMS</div>
            <div className="text-zinc-500 text-[10px]">DIMENSIONS: 118 × 82 × 64 MM</div>
          </div>
        </div>

        {/* Interactive Anatomy Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Blueprint Image Visualizer Stage */}
          <div className="lg:col-span-7 bg-white dark:bg-nw-card rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden tech-grid shadow-sm dark:shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/[0.06] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Crosshair size={14} className="text-nw-gold" />
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-300 uppercase tracking-wider font-medium">
                  Cross-Section Schematic
                </span>
              </div>
              <span className="font-mono text-[11px] text-nw-gold-dark dark:text-nw-gold font-medium">
                Layer {LAYERS.findIndex((l) => l.id === selectedLayer.id) + 1} of {LAYERS.length}
              </span>
            </div>

            {/* Blueprint illustration Stage with Hotspot Framing */}
            <div className="relative aspect-[4/3] w-full flex items-center justify-center my-2 rounded-xl bg-zinc-950 overflow-hidden border border-zinc-300 dark:border-white/10">
              <Image
                src="/images/mask-blueprint.png"
                alt="NullWave Hardware Blueprint"
                fill
                className="object-contain p-4 filter contrast-125 brightness-95 transition-transform duration-500"
              />

              {/* Dynamic layer hotspot highlight reticle */}
              <div
                className="absolute border border-nw-gold/80 rounded-sm pointer-events-none transition-all duration-500 bg-nw-gold/10"
                style={{
                  left: selectedLayer.hotspot.x,
                  top: selectedLayer.hotspot.y,
                  width: selectedLayer.hotspot.width,
                  height: selectedLayer.hotspot.height,
                }}
              >
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-nw-gold" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-nw-gold" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-nw-gold" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-nw-gold" />
              </div>

              {/* Technical crosshairs metadata */}
              <div className="absolute top-3 left-3 font-mono text-[9px] text-zinc-400 bg-black/60 px-2 py-0.5 rounded-sm">
                SPEC: NW-ENG-01
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] text-zinc-400 bg-black/60 px-2 py-0.5 rounded-sm">
                TOLERANCE ±0.02mm
              </div>
            </div>

            {/* Layer Detail Callout Card */}
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-nw-pitch/90 backdrop-blur-md border border-zinc-200 dark:border-white/[0.08] space-y-2 mt-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                  {selectedLayer.category}
                </span>
                <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-200/70 dark:bg-white/[0.06] px-2 py-0.5 rounded-sm">
                  {selectedLayer.metric}
                </span>
              </div>
              <h4 className="text-lg font-medium text-zinc-900 dark:text-white">{selectedLayer.name}</h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {selectedLayer.description}
              </p>
              <div className="text-[10px] font-mono text-zinc-500 pt-1">
                MATERIAL: {selectedLayer.material}
              </div>
            </div>
          </div>

          {/* Layer Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5">
            {LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              const isSelected = selectedLayer.id === layer.id;

              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer)}
                  className={`p-4 rounded-xl text-left border transition-all flex items-start gap-4 ${
                    isSelected
                      ? "bg-zinc-100 dark:bg-white/[0.08] border-nw-gold/50 shadow-md"
                      : "bg-white dark:bg-nw-card border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/15 hover:bg-zinc-50 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? "bg-nw-gold text-nw-pitch"
                        : "bg-zinc-100 dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10"
                    }`}
                  >
                    <Icon size={16} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Layer 0{index + 1}
                      </span>
                      <span className="text-[10px] font-mono text-nw-gold-dark dark:text-nw-gold font-medium">
                        {layer.metric.split(" ")[0]}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-zinc-900 dark:text-white truncate">
                      {layer.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-light truncate mt-0.5">
                      {layer.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
