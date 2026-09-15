"use client";

import { useState } from "react";
import { Check } from "lucide-react";

interface ScentOption {
  id: string;
  name: string;
  category: string;
  notes: string[];
  duration: string;
  bestFor: string;
  description: string;
}

const SCENTS: ScentOption[] = [
  {
    id: "cedar",
    name: "Japanese Hinoki Cedar",
    category: "Woody & Grounding",
    notes: ["Fresh Hinoki", "Smoked Pine", "Dry Amber"],
    duration: "60 Days Active Diffusion",
    bestFor: "Executive calls, focused strategy work, deep thinking",
    description:
      "A serene, dry cedar aroma distilled from sustainably harvested Japanese cypress. Promotes relaxed breathing and sharp concentration during prolonged back-to-back client conferences.",
  },
  {
    id: "eucalyptus",
    name: "Alpine Eucalyptus & Wild Mint",
    category: "Cooling & Crisp",
    notes: ["Crushed Eucalyptus Leaves", "Crisp Peppermint", "Menthol"],
    duration: "60 Days Active Diffusion",
    bestFor: "Long-haul flights, red-eye travel, stuffy airport terminals",
    description:
      "An invigorating botanical mist that opens nasal airways and prevents sensory fatigue when breathing recirculated cabin air during long international transit.",
  },
  {
    id: "breeze",
    name: "Arctic Clean Air",
    category: "Pure & Neutral",
    notes: ["Pure Oxygenation", "Zero Odor", "Ozone Touch"],
    duration: "60 Days Active Diffusion",
    bestFor: "Commuter rail, shared co-working desks, fragrance-sensitive users",
    description:
      "Contains active ceramic microporous filters that neutralize stale room odors and morning coffee breath without adding any artificial perfume or lingering scent.",
  },
  {
    id: "bergamot",
    name: "Calabrian Bergamot & Vetiver",
    category: "Citrus & Earth",
    notes: ["Sun-Drenched Bergamot", "Haitian Vetiver", "White Tea"],
    duration: "60 Days Active Diffusion",
    bestFor: "Daily urban walking, subway transit, evening casual calls",
    description:
      "A crisp, uplifting Italian citrus note rounded out with subtle smoky vetiver roots. Designed for energetic daily commutes across modern metropolitan tech hubs.",
  },
];

export default function ScentCustomizer() {
  const [selectedScent, setSelectedScent] = useState<ScentOption>(SCENTS[0]);

  return (
    <section className="w-full bg-background dark:bg-nw-pitch text-foreground py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Aromatherapy Capsule System
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
            Fresh air with every breath. <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">Natural Botanical Scent Pods.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Snap interchangeable organic aroma capsules directly into the bladeless airflow stream. Keep your breathing space fresh, cool, and personalized throughout the day.
          </p>
        </div>

        {/* Interactive Selector & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Active Scent Showcase Card */}
          <div className="lg:col-span-7 bg-white dark:bg-nw-card rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm dark:shadow-2xl">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                  {selectedScent.category}
                </span>
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.06] px-2.5 py-1 rounded-sm">
                  {selectedScent.duration}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white tracking-tight">
                {selectedScent.name}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed pt-1">
                {selectedScent.description}
              </p>
            </div>

            {/* Notes & Best For Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-white/[0.06]">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.04] space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Aromatic Notes
                </span>
                <div className="space-y-1">
                  {selectedScent.notes.map((note, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                      <Check size={12} className="text-nw-gold-dark dark:text-nw-gold" />
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.04] space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Recommended Scenario
                </span>
                <p className="text-xs text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  {selectedScent.bestFor}
                </p>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 pt-1 font-medium">
                  100% Organic Botanical Extracts
                </div>
              </div>
            </div>
          </div>

          {/* Scent Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {SCENTS.map((scent) => {
              const isSelected = selectedScent.id === scent.id;

              return (
                <button
                  key={scent.id}
                  onClick={() => setSelectedScent(scent)}
                  className={`p-5 rounded-xl text-left border transition-all flex items-start justify-between gap-4 ${
                    isSelected
                      ? "bg-zinc-100 dark:bg-white/[0.08] border-nw-gold/50 shadow-md"
                      : "bg-white dark:bg-nw-card border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/15 hover:bg-zinc-50 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                        {scent.category}
                      </span>
                    </div>
                    <div className="text-base font-medium text-zinc-900 dark:text-white truncate">
                      {scent.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-light line-clamp-1">
                      {scent.notes.join(" • ")}
                    </div>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-1 ${
                      isSelected
                        ? "bg-nw-gold text-nw-pitch"
                        : "border border-zinc-300 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.04] text-transparent"
                    }`}
                  >
                    <Check size={12} />
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
