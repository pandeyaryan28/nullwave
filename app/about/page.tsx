import Link from "next/link";
import { Coffee, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — NullWave",
  description:
    "Learn about NullWave and our mission to build the future of private voice communication in public spaces.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground pt-28 pb-32 transition-colors">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <div className="space-y-4">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block font-medium">
            Company Vision
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight">
            Building the future <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">of private voice.</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-lg sm:text-xl font-light leading-relaxed pt-2">
            We believe voice is the fastest, most expressive interface between humans and intelligent systems. But you shouldn&apos;t have to surrender your privacy every time you speak in public.
          </p>
        </div>
      </section>

      {/* 2. The Story */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20 space-y-8 text-zinc-600 dark:text-zinc-300 font-light text-base sm:text-lg leading-relaxed border-t border-zinc-200 dark:border-white/[0.06] pt-14">
        <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
          Why we started
        </h2>

        <p>
          Today, hundreds of millions of knowledge workers operate from coffee shops, airport waiting lounges, commuter trains, and open-plan shared workspaces. We take high-stakes negotiations, conduct sensitive client consultations, and speak to generative voice models.
        </p>

        <p>
          Yet, speaking aloud in public creates friction: strangers overhear your private details, and your voice disturbs people working nearby.
        </p>

        <p>
          We created <strong className="text-zinc-900 dark:text-white font-medium">NullWave</strong> to solve this dilemma at the acoustic foundation. NullWave is a lightweight, comfortable wearable that traps and absorbs speech sound waves inside the mask. You can speak naturally without anyone around you hearing what you say.
        </p>

        {/* 3 Core Principles */}
        <div className="pt-8">
          <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-6">Our Engineering Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-2 shadow-sm dark:shadow-xl">
              <div className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-wider font-medium">Principle 01</div>
              <h4 className="text-zinc-900 dark:text-white font-medium text-base">Absolute Privacy</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Your private speech and voice notes should only reach the intended recipient on your call or your secure local DSP.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-2 shadow-sm dark:shadow-xl">
              <div className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-wider font-medium">Principle 02</div>
              <h4 className="text-zinc-900 dark:text-white font-medium text-base">Uncompromised Comfort</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Biocompatible liquid silicone and continuous whisper-quiet airflow engineered for hours of natural breathing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-2 shadow-sm dark:shadow-xl">
              <div className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-wider font-medium">Principle 03</div>
              <h4 className="text-zinc-900 dark:text-white font-medium text-base">Acoustic Courtesy</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Empowering individuals to talk out loud without creating friction, noise, or annoyance in shared public spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Support Independent Hardware */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm dark:shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
              Support Independent Hardware Development
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light max-w-md">
              NullWave is engineered by an independent hardware collective passionate about acoustic privacy and human-centered design.
            </p>
          </div>

          <a
            href="https://buymeacoffee.com/pandeyaryan28"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/10 text-xs font-mono uppercase tracking-wider font-medium transition-colors shrink-0 shadow-xs"
          >
            <Coffee size={14} className="text-nw-gold-dark dark:text-nw-gold" />
            <span>Support the Team</span>
          </a>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-6 shadow-sm dark:shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Be part of the first release.
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Reserve your place on the priority waitlist to receive early batch invitations and manufacturing updates.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-nw-gold text-nw-pitch font-semibold text-xs font-mono uppercase tracking-wider hover:bg-nw-gold-light transition-colors shadow-md"
          >
            <span>Join Priority Waitlist</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
