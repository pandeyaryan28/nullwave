import Link from "next/link";
import { Coffee, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "About Us — NullWave",
  description:
    "Learn about NullWave and our mission to make voice communication private and comfortable in public spaces.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-28 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <div className="space-y-4">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block">
            About NullWave
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-white tracking-tight leading-tight">
            Building the future <br />
            <span className="text-zinc-500 font-light">of private voice.</span>
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed pt-2">
            We believe voice is the fastest and most natural way to talk with people and AI. But you shouldn&apos;t have to give up your privacy every time you speak in public.
          </p>
        </div>
      </section>

      {/* 2. The Story (Plain English) */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20 space-y-8 text-zinc-400 font-light text-base sm:text-lg leading-relaxed border-t border-white/[0.06] pt-14">
        <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
          Why we started
        </h2>

        <p>
          Today, millions of people work from coffee shops, airport waiting areas, trains, and open-plan offices. We take important client meetings, make personal phone calls, and talk to voice assistants.
        </p>

        <p>
          Yet, speaking aloud in public creates friction: strangers overhear your private details, and your voice disturbs people working nearby.
        </p>

        <p>
          We created <strong className="text-white font-medium">NullWave</strong> to solve this dilemma. NullWave is a comfortable, lightweight wearable that absorbs your voice at the mouth. You can speak naturally without anyone around you hearing what you say.
        </p>

        {/* 3 Simple Principles */}
        <div className="pt-8">
          <h3 className="text-xl font-medium text-white mb-6">What We Believe In</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-2">
              <div className="text-nw-gold font-mono text-xs uppercase">01</div>
              <h4 className="text-white font-medium text-base">Complete Privacy</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Your private calls and voice notes should only be heard by the person on the other end.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-2">
              <div className="text-nw-gold font-mono text-xs uppercase">02</div>
              <h4 className="text-white font-medium text-base">Real Comfort</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Soft medical-grade silicone and quiet airflow designed for hours of effortless wear.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-2">
              <div className="text-nw-gold font-mono text-xs uppercase">03</div>
              <h4 className="text-white font-medium text-base">Quiet Spaces</h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Freedom to talk out loud without annoying or distracting the people around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Support the Project (Simple & Clean) */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-nw-card border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-medium text-white">
              Support Our Work
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
              NullWave is built by an independent hardware team passionate about privacy and design.
            </p>
          </div>

          <a
            href="https://buymeacoffee.com/pandeyaryan28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10 text-xs uppercase tracking-wider font-medium transition-all shrink-0"
          >
            <Coffee size={14} className="text-nw-gold" />
            <span>Buy Us a Coffee</span>
          </a>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-nw-dark border border-white/[0.08] space-y-6">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Be part of the first release.
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Reserve your place on the waitlist to receive early updates and launch invitations.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider hover:bg-nw-gold-light transition-all"
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
