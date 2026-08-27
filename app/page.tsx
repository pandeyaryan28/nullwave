import Image from "next/image";
import Link from "next/link";
import HeroScrollVideo from "@/components/HeroScrollVideo";
import { ArrowRight, ShieldCheck, Wind, Mic, VolumeX, Sparkles, Battery, Globe, Coffee, Plane, Train, Building2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground">
      {/* 1. Cinematic Scroll Video Hero */}
      <HeroScrollVideo />

      {/* 2. The Problem (Simple & Clear Language) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-3">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight leading-tight mb-6">
              Speaking out loud in public is uncomfortable.
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              When you take a call or talk to AI in a café, airport, or open office, you face two common problems:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-nw-card border border-white/[0.06] space-y-4">
              <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                <VolumeX size={18} />
              </div>
              <h3 className="text-xl font-sans font-medium text-white">
                No Privacy for Your Calls
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Strangers standing right next to you can hear every word of your work meetings, confidential business deals, and personal conversations.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-nw-card border border-white/[0.06] space-y-4">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Mic size={18} />
              </div>
              <h3 className="text-xl font-sans font-medium text-white">
                Disturbing People Around You
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Talking aloud in quiet trains, waiting rooms, and shared workspaces creates noise that annoys and distracts people nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution: Real-Life Photo & Simple Explanation */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-nw-dark/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.08]">
              <Image
                src="/images/mask-lifestyle.png"
                alt="Person wearing NullWave mask in a modern city"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block">
                The Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight leading-tight">
                A private bubble for your voice.
              </h2>
              <p className="text-zinc-400 text-base font-light leading-relaxed">
                NullWave is a lightweight wearable mask that captures your voice at the source. You speak at a normal volume, but your sound never escapes into the room.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-nw-gold shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Sound Stays Trapped</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light">
                      Special sound-absorbing materials stop your voice from leaking out into public spaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-nw-gold shrink-0 mt-0.5">
                    <Mic size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">Clear Audio for Your Calls</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light">
                      Built-in internal microphones pick up your voice in crisp, clear quality while blocking outside background noise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-nw-gold shrink-0 mt-0.5">
                    <Wind size={16} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">All-Day Comfort</h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light">
                      Soft medical-grade silicone fits comfortably over your face without pressure points or fatigue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Highlights (Clean Studio Image & Feature Grid) */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-2">
              Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight">
              Designed for your everyday life.
            </h2>
          </div>

          {/* Clean Studio Showcase Card */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-nw-card/70 border border-white/[0.08] flex items-center justify-center p-8 mb-12">
            <Image
              src="/images/mask-studio.png"
              alt="NullWave Product"
              fill
              className="object-contain p-6"
            />
          </div>

          {/* Simple 4-Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
                <Wind size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-white">
                Silent Airflow
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                A quiet, bladeless airflow system keeps you cool and fresh with zero fan noise on your calls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
                <Globe size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-white">
                Live Translation
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Translate languages in real time so you can travel and speak with anyone smoothly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
                <Sparkles size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-white">
                Fresh Scent Pods
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Interchangeable aroma pods let you enjoy clean, pleasant cedar or mint scents while wearing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
                <Battery size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-white">
                18-Hour Battery
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                All-day battery life with fast USB-C charging that gives hours of talk time in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real-World Use Cases Preview */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-nw-dark/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-2">
                Everyday Use
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight">
                Where NullWave helps you most.
              </h2>
            </div>
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <span>View All Scenarios</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <Coffee size={20} className="text-nw-gold" />
              <h4 className="text-base font-medium text-white">Crowded Cafés</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Take urgent work calls from busy coffee shops without leaving your seat.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <Plane size={20} className="text-nw-gold" />
              <h4 className="text-base font-medium text-white">Airports & Travel</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Talk privately at noisy departure gates while waiting for your flight.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <Train size={20} className="text-nw-gold" />
              <h4 className="text-base font-medium text-white">Public Transit</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Make calls on quiet trains and buses without disturbing fellow commuters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-3">
              <Building2 size={20} className="text-nw-gold" />
              <h4 className="text-base font-medium text-white">Open Offices</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Jump on 1-on-1 team meetings at your desk without hunting for a phone booth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Simple Call to Action */}
      <section className="py-28 px-6 sm:px-8 border-t border-white/[0.06] text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight">
            Be the first to experience NullWave.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Join the waitlist to receive priority access and updates on our first release.
          </p>
          <div className="pt-2">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg"
            >
              <span>Join the Waitlist</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
