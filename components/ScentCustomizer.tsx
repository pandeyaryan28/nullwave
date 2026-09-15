"use client";

import { useState } from "react";
import { Sparkles, Wind, Droplets, Check, Compass } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface ScentPod {
  id: string;
  name: string;
  tagline: string;
  accentColor: string;
  glowColor: string;
  topNotes: string;
  heartNotes: string;
  baseNotes: string;
  bestFor: string;
  description: string;
  lifespan: string;
}

const pods: ScentPod[] = [
  {
    id: "cedar",
    name: "Nordic Cedar & Vetiver",
    tagline: "Deep Focus & Mental Calm",
    accentColor: "#C5A880",
    glowColor: "rgba(197, 168, 128, 0.25)",
    topNotes: "Crushed Pine Needles, Bergamot",
    heartNotes: "Virginian Cedarwood, Elemi",
    baseNotes: "Haitian Vetiver, Smoked Amber",
    bestFor: "High-stakes executive meetings, deep focus coding, and long negotiation calls.",
    description:
      "A dry, refined woody profile that stabilizes breathing and reduces conversational cortisol during intense, multi-hour negotiations.",
    lifespan: "65 Active Hours",
  },
  {
    id: "mint",
    name: "Glacier Peppermint & Eucalyptus",
    tagline: "Crisp Airway & Vitality",
    accentColor: "#67e8f9",
    glowColor: "rgba(103, 232, 249, 0.25)",
    topNotes: "Crisp Peppermint, Menthol Crystals",
    heartNotes: "Blue Eucalyptus, Thyme",
    baseNotes: "White Musk, Mineral Ice",
    bestFor: "Red-eye international flights, early morning subway commutes, and late-night gaming.",
    description:
      "Instant bronchial dilation with micro-menthol diffusion that keeps your respiratory airway feeling open, crisp, and fully energized.",
    lifespan: "60 Active Hours",
  },
  {
    id: "yuzu",
    name: "Tokyo Yuzu & Hinoki",
    tagline: "Zesty Clarity & Balance",
    accentColor: "#facc15",
    glowColor: "rgba(250, 204, 21, 0.25)",
    topNotes: "Japanese Yuzu, Grapefruit Zest",
    heartNotes: "Hinoki Wood, Green Tea Leaves",
    baseNotes: "Cedar Moss, Clean Vetiver",
    bestFor: "Creative brainstorming with Voice AI, walking meetings, and transit between appointments.",
    description:
      "Bright, effervescent citrus balanced by sacred Japanese Hinoki wood to stimulate creative linguistic flow and sharp vocal cadence.",
    lifespan: "55 Active Hours",
  },
  {
    id: "neutral",
    name: "Pure Oxygen Neutral",
    tagline: "Ultra-Filtered Air Neutralizer",
    accentColor: "#e2e8f0",
    glowColor: "rgba(226, 232, 240, 0.2)",
    topNotes: "Zero Aroma Profile",
    heartNotes: "Activated Carbon Neutralizer",
    baseNotes: "Pure Crisp Oxygen",
    bestFor: "Fragrance-sensitive users, long hospital/lab transit, and scent-neutral spaces.",
    description:
      "Designed for purists. Contains catalytic microporous coconut carbon that scrubs stale ambient odors and exhaled humidity with zero added scent.",
    lifespan: "80 Active Hours",
  },
];

export default function ScentCustomizer() {
  const [selectedPod, setSelectedPod] = useState<ScentPod>(pods[0]);

  return (
    <div className="w-full">
      <SpotlightCard
        className="p-6 sm:p-10 border border-white/[0.1] bg-nw-card/70"
        spotlightColor={selectedPod.glowColor}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.06]">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-nw-gold block">
              Sensory Well-being // Aromatherapy Capsule System
            </span>
            <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
              Personalized Internal Micro-Climate
            </h3>
          </div>
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
            <Sparkles size={14} className="text-nw-gold" />
            <span>MAGNETIC SNAP-IN AROMA RECEPTACLE</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
          {/* Left: Interactive Pod Selector */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Select Capsule Formulation:
            </div>

            {pods.map((pod) => {
              const isSelected = selectedPod.id === pod.id;
              return (
                <button
                  key={pod.id}
                  onClick={() => setSelectedPod(pod)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border flex items-center justify-between group ${
                    isSelected
                      ? "bg-nw-pitch/90 border-white/20 shadow-xl"
                      : "bg-nw-pitch/40 border-white/[0.04] hover:bg-nw-pitch/70 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-4 h-4 rounded-full border transition-transform duration-300"
                      style={{
                        backgroundColor: pod.accentColor,
                        borderColor: isSelected ? "#fff" : "transparent",
                        transform: isSelected ? "scale(1.15)" : "scale(1)",
                        boxShadow: isSelected ? `0 0 12px ${pod.accentColor}` : "none",
                      }}
                    />
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-white">
                        {pod.name}
                      </div>
                      <div className="text-xs text-zinc-400 font-light">{pod.tagline}</div>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-mono transition-opacity ${
                      isSelected ? "text-white opacity-100" : "text-zinc-600 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {pod.lifespan}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Scent Profile Card with Ambient Lighting */}
          <div className="lg:col-span-6 relative">
            <div
              className="p-8 rounded-3xl bg-nw-pitch/90 border border-white/[0.1] space-y-6 shadow-2xl relative overflow-hidden transition-all duration-500"
              style={{
                boxShadow: `0 0 40px -10px ${selectedPod.glowColor}`,
              }}
            >
              {/* Subtle ambient light gradient in card */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full filter blur-3xl opacity-20 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: selectedPod.accentColor }}
              />

              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div>
                  <span
                    className="text-xs font-mono uppercase tracking-widest block mb-1"
                    style={{ color: selectedPod.accentColor }}
                  >
                    Active Capsule
                  </span>
                  <h4 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight">
                    {selectedPod.name}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono text-[10px] text-zinc-300">
                  {selectedPod.lifespan}
                </div>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                {selectedPod.description}
              </p>

              {/* Olfactory Pyramid Notes */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                  <Droplets size={13} style={{ color: selectedPod.accentColor }} />
                  <span>Fragrance Pyramid Notes</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-nw-card border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase">Top Notes</span>
                    <span className="text-white font-light">{selectedPod.topNotes}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-nw-card border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase">Heart Notes</span>
                    <span className="text-white font-light">{selectedPod.heartNotes}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-nw-card border border-white/[0.05] flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase">Base Notes</span>
                    <span className="text-white font-light">{selectedPod.baseNotes}</span>
                  </div>
                </div>
              </div>

              {/* Recommended Scenario */}
              <div className="p-4 rounded-xl bg-nw-card/70 border border-white/[0.06] flex items-start gap-3">
                <Compass size={16} className="text-zinc-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-0.5">
                    Recommended Application
                  </span>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {selectedPod.bestFor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
