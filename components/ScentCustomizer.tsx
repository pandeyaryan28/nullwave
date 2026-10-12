"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScentOption {
  id: string;
  name: string;
  category: string;
  notes: string[];
  duration: string;
  bestFor: string;
  description: string;
  gradient: string;
  accentColor: string;
}

const SCENTS: ScentOption[] = [
  {
    id: "cedar",
    name: "Japanese Hinoki Cedar",
    category: "Woody & Grounding",
    notes: ["Hinoki Cypress", "Pine", "Dry Amber"],
    duration: "60 Days Active",
    bestFor: "Focused deep work and back-to-back client calls",
    description:
      "A calming, dry cedar aroma. Helps clear your mind and maintain steady, relaxed breathing through long meetings.",
    gradient: "from-amber-500/10 via-amber-900/5 to-transparent",
    accentColor: "border-amber-500/30 text-amber-600 dark:text-amber-400",
  },
  {
    id: "eucalyptus",
    name: "Alpine Eucalyptus & Mint",
    category: "Cooling & Crisp",
    notes: ["Eucalyptus Leaf", "Peppermint", "Menthol"],
    duration: "60 Days Active",
    bestFor: "Long-haul flights, red-eye travel, and train commutes",
    description:
      "Invigorating botanical mist that keeps airways open and prevents stuffiness when breathing cabin or train air.",
    gradient: "from-emerald-500/10 via-emerald-900/5 to-transparent",
    accentColor: "border-emerald-500/30 text-emerald-600 dark:text-emerald-400",
  },
  {
    id: "breeze",
    name: "Arctic Clean Air",
    category: "Pure & Fragrance-Free",
    notes: ["Active Carbon", "Micro-Filtration", "Pure Neutral"],
    duration: "60 Days Active",
    bestFor: "Crowded transit, co-working desks, sensitive users",
    description:
      "Microporous ceramic filtration that neutralizes stale odors and morning coffee breath with zero added fragrance.",
    gradient: "from-cyan-500/10 via-sky-900/5 to-transparent",
    accentColor: "border-cyan-500/30 text-cyan-600 dark:text-cyan-400",
  },
  {
    id: "bergamot",
    name: "Calabrian Bergamot & Vetiver",
    category: "Citrus & Earth",
    notes: ["Sun-Drenched Citrus", "Haitian Vetiver", "White Tea"],
    duration: "60 Days Active",
    bestFor: "Daily city walks, morning commutes, and casual calls",
    description:
      "Fresh, bright Italian citrus balanced with subtle woody vetiver roots. Clean, energetic, and natural.",
    gradient: "from-orange-500/10 via-amber-900/5 to-transparent",
    accentColor: "border-orange-500/30 text-orange-600 dark:text-orange-400",
  },
];

export default function ScentCustomizer() {
  const [selectedScent, setSelectedScent] = useState<ScentOption>(SCENTS[0]);

  return (
    <section className="w-full bg-background dark:bg-nw-pitch text-foreground py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] transition-colors relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Aromatherapy Pods
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
            Fresh air with every breath. <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">Natural Botanical Pods.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Snap interchangeable organic scent pods into the silent airflow stream. Keep your breathing air cool, clean, and pleasant all day.
          </p>
        </div>

        {/* Interactive Selector & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Active Scent Showcase Card with Atmospheric Tint */}
          <div className="lg:col-span-7 relative bg-white dark:bg-nw-card rounded-2xl border border-zinc-200 dark:border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between shadow-sm dark:shadow-2xl overflow-hidden transition-all">
            {/* Ambient Lighting Gradient based on Scent */}
            <motion.div
              key={selectedScent.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 bg-gradient-to-br ${selectedScent.gradient} pointer-events-none`}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedScent.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 relative z-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                    {selectedScent.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.06] px-2.5 py-1 rounded-sm border border-zinc-200 dark:border-white/10">
                    {selectedScent.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white tracking-tight">
                  {selectedScent.name}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed pt-1">
                  {selectedScent.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Notes & Best For Callouts */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedScent.id + "-meta"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-zinc-200 dark:border-white/[0.06] relative z-10 mt-8"
              >
                <div className="p-4 rounded-xl bg-zinc-50/90 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Scent Notes
                  </span>
                  <div className="space-y-1">
                    {selectedScent.notes.map((note, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-light">
                        <Check size={12} className="text-nw-gold-dark dark:text-nw-gold shrink-0" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50/90 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                    Ideal For
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                    {selectedScent.bestFor}
                  </p>
                  <div className="text-[10px] font-mono text-zinc-500 pt-1">
                    100% Organic Botanical Extracts
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scent Selector Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {SCENTS.map((scent) => {
              const isSelected = selectedScent.id === scent.id;

              return (
                <button
                  key={scent.id}
                  onClick={() => setSelectedScent(scent)}
                  className={`p-5 rounded-xl text-left border transition-all flex items-start justify-between gap-4 relative overflow-hidden ${
                    isSelected
                      ? "bg-zinc-100 dark:bg-white/[0.08] border-nw-gold/60 shadow-md"
                      : "bg-white dark:bg-nw-card border-zinc-200 dark:border-white/[0.06] hover:border-zinc-300 dark:hover:border-white/15 hover:bg-zinc-50 dark:hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium block">
                      {scent.category}
                    </span>
                    <div className="text-base font-medium text-zinc-900 dark:text-white truncate">
                      {scent.name}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 font-light line-clamp-1">
                      {scent.notes.join(" • ")}
                    </div>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-1 transition-colors ${
                      isSelected
                        ? "bg-nw-gold text-nw-pitch font-bold"
                        : "border border-zinc-300 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.04] text-transparent"
                    }`}
                  >
                    <Check size={13} />
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
