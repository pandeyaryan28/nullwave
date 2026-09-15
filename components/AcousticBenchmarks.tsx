"use client";

import { Check, X, ShieldCheck } from "lucide-react";

interface BenchmarkRow {
  feature: string;
  nullwave: string | boolean;
  earbuds: string | boolean;
  headset: string | boolean;
  booth: string | boolean;
  highlight?: boolean;
}

const BENCHMARKS: BenchmarkRow[] = [
  {
    feature: "Voice Leakage Distance",
    nullwave: "< 0.2 meters (Inaudible to neighbor)",
    earbuds: "4.8 meters (Clearly audible)",
    headset: "3.5 meters (Audible)",
    booth: "< 0.1 meters (Contained)",
    highlight: true,
  },
  {
    feature: "Confidential Call Privacy",
    nullwave: "100% Speech Containment",
    earbuds: "Zero Privacy (Full Room Bleed)",
    headset: "Low Privacy (Bleeds Speech)",
    booth: "High Privacy (Enclosed Room)",
    highlight: true,
  },
  {
    feature: "Background Noise Rejection",
    nullwave: "99.2% (Physical acoustic seal)",
    earbuds: "64% (Software DSP only)",
    headset: "78% (Boom mic rejection)",
    booth: "92% (Room insulation)",
  },
  {
    feature: "Weight & Portability",
    nullwave: "88g (Wearable anywhere)",
    earbuds: "50g (Pocketable)",
    headset: "280g (Bulky bag stowage)",
    booth: "320kg (Immovable structure)",
    highlight: true,
  },
  {
    feature: "Thermal Comfort & Airflow",
    nullwave: "Bladeless Fresh Air Circulation",
    earbuds: "In-ear canal fatigue",
    headset: "Ear cup heat & sweating",
    booth: "Often stuffy / poor ventilation",
  },
  {
    feature: "Public AI Voice Dictation Accuracy",
    nullwave: "99.8% in 75 dB Cafe",
    earbuds: "74.2% (High word error rate)",
    headset: "82.5% in public noise",
    booth: "98.0% in quiet room",
    highlight: true,
  },
  {
    feature: "Freedom to Speak in Public Transit",
    nullwave: true,
    earbuds: false,
    headset: false,
    booth: false,
  },
];

export default function AcousticBenchmarks() {
  return (
    <section className="w-full bg-background dark:bg-nw-pitch text-foreground py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Acoustic Comparison
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
            Why traditional audio <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">cannot solve speech privacy.</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Noise-cancelling headphones cancel incoming sound for your ears, but do nothing to stop your voice from leaking out into public spaces. NullWave solves voice containment at the acoustic source.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-white/[0.08] bg-white dark:bg-nw-card shadow-sm dark:shadow-2xl">
          <table className="w-full text-left text-xs font-sans">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-white/[0.08] bg-zinc-50 dark:bg-white/[0.02]">
                <th className="py-5 px-6 font-mono text-[11px] uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
                  Performance Metric
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
                    {row.feature}
                  </td>

                  {/* NullWave Column */}
                  <td className="py-4 px-6 font-medium text-zinc-900 dark:text-white bg-nw-gold/10 dark:bg-nw-gold/5 border-x border-zinc-200 dark:border-white/[0.06] whitespace-nowrap">
                    {typeof row.nullwave === "boolean" ? (
                      row.nullwave ? (
                        <div className="inline-flex items-center gap-1.5 text-nw-gold-dark dark:text-nw-gold font-mono font-medium">
                          <Check size={15} />
                          <span>Yes</span>
                        </div>
                      ) : (
                        <X size={15} className="text-zinc-400 dark:text-zinc-500" />
                      )
                    ) : (
                      <span className="text-nw-gold-dark dark:text-nw-gold-light font-medium">{row.nullwave}</span>
                    )}
                  </td>

                  {/* Earbuds Column */}
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {typeof row.earbuds === "boolean" ? (
                      row.earbuds ? (
                        <Check size={15} className="text-zinc-600 dark:text-zinc-400" />
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-red-500 dark:text-red-400 font-mono">
                          <X size={15} />
                          <span>No</span>
                        </div>
                      )
                    ) : (
                      row.earbuds
                    )}
                  </td>

                  {/* Headset Column */}
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {typeof row.headset === "boolean" ? (
                      row.headset ? (
                        <Check size={15} className="text-zinc-600 dark:text-zinc-400" />
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-red-500 dark:text-red-400 font-mono">
                          <X size={15} />
                          <span>No</span>
                        </div>
                      )
                    ) : (
                      row.headset
                    )}
                  </td>

                  {/* Booth Column */}
                  <td className="py-4 px-6 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {typeof row.booth === "boolean" ? (
                      row.booth ? (
                        <Check size={15} className="text-zinc-600 dark:text-zinc-400" />
                      ) : (
                        <div className="inline-flex items-center gap-1.5 text-red-500 dark:text-red-400 font-mono">
                          <X size={15} />
                          <span>No</span>
                        </div>
                      )
                    ) : (
                      row.booth
                    )}
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
