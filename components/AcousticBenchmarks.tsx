"use client";

import { useState } from "react";
import { Check, X, ShieldCheck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BenchmarkRow {
  feature: string;
  shortDesc: string;
  nullwave: string | boolean;
  earbuds: string | boolean;
  headset: string | boolean;
  booth: string | boolean;
  highlight?: boolean;
}

const BENCHMARKS: BenchmarkRow[] = [
  {
    feature: "Voice Leakage",
    shortDesc: "How close someone can be before overhearing you",
    nullwave: "< 0.2m (Inaudible to your neighbor)",
    earbuds: "4.8m (Clearly audible across the room)",
    headset: "3.5m (Easily overheard)",
    booth: "< 0.1m (Contained inside)",
    highlight: true,
  },
  {
    feature: "Call Privacy",
    shortDesc: "Protection for confidential work and private calls",
    nullwave: "Total privacy (sound stays in mask)",
    earbuds: "No privacy (everyone hears you)",
    headset: "Low privacy (voice bleeds out)",
    booth: "High privacy (enclosed room)",
    highlight: true,
  },
  {
    feature: "Noise Blocking",
    shortDesc: "Stopping cafe and street noise from entering your call",
    nullwave: "99% (Physical acoustic seal)",
    earbuds: "Partial (Software filters only)",
    headset: "Good (Boom mic rejection)",
    booth: "High (Thick acoustic walls)",
  },
  {
    feature: "Portability & Weight",
    shortDesc: "Everyday carry weight and packability",
    nullwave: "88g (Folds into your pocket)",
    earbuds: "50g (Pocketable case)",
    headset: "280g (Bulky in a bag)",
    booth: "320kg (Immovable booth)",
    highlight: true,
  },
  {
    feature: "Breathing & Airflow",
    shortDesc: "Comfort during long conversations",
    nullwave: "Fresh, silent airflow circulation",
    earbuds: "Ear canal pressure & fatigue",
    headset: "Ear cup warmth & sweat",
    booth: "Often stuffy with poor airflow",
  },
  {
    feature: "Voice AI Accuracy",
    shortDesc: "Clarity when dictating or talking to AI assistants",
    nullwave: "Crystal clear (lip-level microphone)",
    earbuds: "Frequent mistakes in noisy spaces",
    headset: "Decent in moderate noise",
    booth: "Clear inside the booth",
    highlight: true,
  },
  {
    feature: "Usable Anywhere",
    shortDesc: "Trains, cafes, airports, and open offices",
    nullwave: true,
    earbuds: false,
    headset: false,
    booth: false,
  },
];

type Competitor = "earbuds" | "headset" | "booth";

const COMPETITOR_INFO: Record<Competitor, { label: string; sub: string }> = {
  earbuds: {
    label: "Earbuds",
    sub: "AirPods / In-ear buds",
  },
  headset: {
    label: "Over-Ear ANC",
    sub: "Bose / Sony headsets",
  },
  booth: {
    label: "Phone Booth",
    sub: "Office acoustic booths",
  },
};

export default function AcousticBenchmarks() {
  const [activeCompetitor, setActiveCompetitor] = useState<Competitor>("earbuds");

  const renderVal = (val: string | boolean, isNullWave = false) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex items-center gap-1.5 text-nw-gold-dark dark:text-nw-gold font-medium">
          <Check size={15} />
          <span>Yes</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-1.5 text-zinc-400 font-medium">
          <X size={15} />
          <span>No</span>
        </span>
      );
    }
    return <span className={isNullWave ? "text-nw-gold-dark dark:text-nw-gold font-medium" : "text-zinc-600 dark:text-zinc-400"}>{val}</span>;
  };

  return (
    <section className="w-full bg-background dark:bg-nw-pitch text-foreground py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
            Why headphones don't <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">protect your privacy.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Noise-cancelling headphones only protect what you hear. They do nothing to stop others from hearing your private conversations. NullWave traps your speech right where it starts.
          </p>
        </div>

        {/* Mobile View: Head-to-Head Responsive Switcher (md:hidden) */}
        <div className="md:hidden space-y-6">
          <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-white/[0.04] p-1 rounded-md border border-zinc-200 dark:border-white/[0.08]">
            {(Object.keys(COMPETITOR_INFO) as Competitor[]).map((key) => {
              const active = activeCompetitor === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCompetitor(key)}
                  className={`flex-1 py-2 text-xs font-mono uppercase tracking-wide rounded-sm transition-all ${
                    active
                      ? "bg-white dark:bg-nw-card text-zinc-900 dark:text-white font-medium shadow-sm border border-zinc-200 dark:border-white/10"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  {COMPETITOR_INFO[key].label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompetitor}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {BENCHMARKS.map((row, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-colors ${
                    row.highlight
                      ? "bg-white dark:bg-nw-card border-zinc-200 dark:border-white/[0.1] shadow-xs"
                      : "bg-zinc-50/70 dark:bg-white/[0.02] border-zinc-200/70 dark:border-white/[0.05]"
                  }`}
                >
                  <div className="text-xs font-medium text-zinc-900 dark:text-white mb-0.5">
                    {row.feature}
                  </div>
                  <div className="text-[11px] text-zinc-500 mb-3">
                    {row.shortDesc}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-100 dark:border-white/[0.06] text-xs">
                    <div className="bg-nw-gold/10 dark:bg-nw-gold/5 p-2.5 rounded-md border border-nw-gold/20">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold mb-1">
                        NullWave
                      </div>
                      <div className="text-xs leading-snug">
                        {renderVal(row.nullwave, true)}
                      </div>
                    </div>

                    <div className="bg-zinc-100/70 dark:bg-white/[0.03] p-2.5 rounded-md border border-zinc-200/80 dark:border-white/[0.06]">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        {COMPETITOR_INFO[activeCompetitor].label}
                      </div>
                      <div className="text-xs leading-snug">
                        {renderVal(row[activeCompetitor])}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View: Full Grid Table (hidden md:block) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-nw-card shadow-sm dark:shadow-2xl">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-white/[0.02]">
                <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Feature
                </th>
                <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold bg-nw-gold/10 dark:bg-nw-gold/5 border-x border-zinc-200 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck size={14} />
                    <span>NullWave</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Standard Earbuds
                </th>
                <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Over-Ear ANC Headsets
                </th>
                <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Office Phone Booth
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-white/[0.04]">
              {BENCHMARKS.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors ${
                    row.highlight ? "bg-zinc-50/40 dark:bg-white/[0.01]" : ""
                  }`}
                >
                  <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white whitespace-nowrap">
                    <div>{row.feature}</div>
                    <div className="text-[11px] text-zinc-500 font-normal">{row.shortDesc}</div>
                  </td>

                  {/* NullWave Column */}
                  <td className="py-4 px-6 font-medium bg-nw-gold/10 dark:bg-nw-gold/5 border-x border-zinc-200 dark:border-white/[0.06] whitespace-nowrap">
                    {renderVal(row.nullwave, true)}
                  </td>

                  {/* Earbuds Column */}
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {renderVal(row.earbuds)}
                  </td>

                  {/* Headset Column */}
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {renderVal(row.headset)}
                  </td>

                  {/* Booth Column */}
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {renderVal(row.booth)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
