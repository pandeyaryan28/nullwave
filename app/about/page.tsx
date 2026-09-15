import Link from "next/link";
import { Coffee, ArrowRight, Check, ShieldCheck, Heart, Sparkles, Compass } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import MarqueeTicker from "@/components/MarqueeTicker";

export const metadata = {
  title: "About NullWave — The Voice Privacy Manifesto",
  description:
    "We believe voice is the most natural way to interact with computers and people. But the future of voice is not possible without privacy.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-32 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20 space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nw-gold" />
          <span className="text-nw-gold font-mono text-xs uppercase tracking-widest">
            Founding Manifesto // Our Conviction
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-white tracking-tight leading-[1.08]">
          The Future of Voice <br />
          <span className="text-zinc-500 font-light">Requires Absolute Privacy.</span>
        </h1>
        <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed">
          We believe the next era of human computing will be spoken. But you should never have to sacrifice personal confidentiality or disturb others to communicate freely.
        </p>
      </section>

      {/* 2. Ticker */}
      <MarqueeTicker />

      {/* 3. The Core Manifesto */}
      <section className="py-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-12 text-zinc-400 font-light text-base sm:text-lg leading-relaxed">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            The Keyboard Dilemma
          </h2>
          <p>
            For fifty years, computing trapped human thought behind physical plastic keys and glass touchscreens. Our fingers tap at an agonizing 40 words per minute, while the human vocal tract effortlessly commands 150 words per minute.
          </p>
          <p>
            With the advent of Large Language Models and voice-first AI agents, the world wants to speak. We want to brainstorm aloud, dictate long-form strategy documents, and take confidential client calls on the move.
          </p>
          <p>
            Yet our physical world was never acoustically designed for it. Coffee shops, airport lounges, commuter trains, and open coworking benches force us into an uncomfortable bind: whisper self-consciously, disturb everyone within earshot, or stay silent.
          </p>
        </div>

        {/* 3 Foundational Pillars */}
        <div className="pt-8 space-y-6">
          <h3 className="text-xl font-medium text-white">Our Engineering Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard className="p-6 space-y-3 border border-white/[0.08]">
              <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
                Pillar 01
              </span>
              <h4 className="text-white font-medium text-base">Absolute Sanctuary</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Your thoughts and business discussions belong exclusively to you and the person on the other end. No passive listening, no bystander eavesdropping.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-3 border border-white/[0.08]">
              <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
                Pillar 02
              </span>
              <h4 className="text-white font-medium text-base">Uncompromising Comfort</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Hardware that feels better to wear than to remove. Surgical liquid silicone, balanced 88-gram mass, and continuous fresh airflow.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-3 border border-white/[0.08]">
              <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
                Pillar 03
              </span>
              <h4 className="text-white font-medium text-base">Zero Friction Society</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Complete vocal freedom without creating environmental noise pollution. A quieter, more productive public space for everyone.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. Support Independent Hardware Project */}
      <section className="py-12 px-6 sm:px-8 max-w-4xl mx-auto">
        <SpotlightCard className="p-8 sm:p-10 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-nw-gold block">
              Independent Hardware Engineering
            </span>
            <h3 className="text-lg sm:text-xl font-medium text-white">
              Support the Project & Prototype Lab
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
              NullWave is designed by an independent hardware research team passionate about acoustic containment and open privacy.
            </p>
          </div>

          <a
            href="https://buymeacoffee.com/pandeyaryan28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-nw-gold text-nw-pitch hover:bg-nw-gold-light text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_20px_rgba(197,168,128,0.25)] shrink-0"
          >
            <Coffee size={15} />
            <span>Buy Us a Coffee</span>
          </a>
        </SpotlightCard>
      </section>

      {/* 5. Bottom Reservation CTA */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center mt-12">
        <SpotlightCard className="p-10 sm:p-14 border border-nw-gold/30 space-y-6">
          <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            Join the Movement for Voice Privacy.
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Reserve your place in Batch 01. Priority serial numbers and direct access to founder updates.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg"
          >
            <span>Reserve Batch 01 Pass</span>
            <ArrowRight size={14} />
          </Link>
        </SpotlightCard>
      </section>
    </div>
  );
}
