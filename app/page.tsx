import Image from "next/image";
import Link from "next/link";
import HeroScrollVideo from "@/components/HeroScrollVideo";
import AcousticBenchmarks from "@/components/AcousticBenchmarks";
import ScentCustomizer from "@/components/ScentCustomizer";
import {
  ArrowRight,
  ShieldCheck,
  Wind,
  Mic,
  VolumeX,
  Battery,
  Coffee,
  Plane,
  Train,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground transition-colors">
      {/* 1. Cinematic Scroll Video Hero */}
      <HeroScrollVideo />

      {/* 2. The Problem */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
              The Reality
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
              Speaking in public <br />
              <span className="text-zinc-500 dark:text-zinc-400 font-light">is awkward and distracting.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              Whether taking an urgent client call, dictating notes to voice AI, or speaking on a quiet train, you run into two immediate problems:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-2xl">
              <div className="w-10 h-10 rounded-md bg-red-500/10 text-red-500 dark:text-red-400 flex items-center justify-center border border-red-500/20">
                <VolumeX size={18} />
              </div>
              <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
                No Speech Privacy
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                People sitting next to you overhear confidential work details, personal thoughts, and client metrics.
              </p>
              <div className="pt-2 font-mono text-xs text-zinc-500">
                Typical speech bleed: 4.5 to 6 meters
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-2xl">
              <div className="w-10 h-10 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Mic size={18} />
              </div>
              <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
                Disturbing People Nearby
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                Speaking aloud on quiet trains, airport departure gates, and shared desks annoys and distracts people around you.
              </p>
              <div className="pt-2 font-mono text-xs text-zinc-500">
                Conversational speech level: ~65 dB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution: Wearable Acoustic Isolation */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-nw-dark/40 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.08] shadow-md dark:shadow-2xl">
              <Image
                src="/images/mask-lifestyle.png"
                alt="Person wearing NullWave mask in a modern city setting"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block">
                The Solution
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight">
                An acoustic chamber <br />
                <span className="text-zinc-500 dark:text-zinc-400 font-light">for your voice.</span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300 text-base font-light leading-relaxed">
                NullWave traps your voice sound waves at the source. Talk naturally at your normal volume without sound escaping into the public space.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] shadow-xs">
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1">
                      Complete Voice Privacy
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Soft internal acoustic foam absorbs your speech before sound can leak out into the room.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] shadow-xs">
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5">
                    <Mic size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1">
                      Studio-Quality Voice Pickup
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Microphones positioned right at your lips catch your speech clearly while locking out cafe chatter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] shadow-xs">
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5">
                    <Wind size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1">
                      Continuous Fresh Airflow
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Silent bladeless air circulation prevents heat and stuffiness with zero motor noise or mic buffeting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimalist Key Specs Ribbon (Breaks Visual Cadence) */}
      <section className="py-14 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] bg-white dark:bg-nw-pitch transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-nw-card border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white tracking-tight">
                -38 dB
              </span>
              <div className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                Sound Containment
              </div>
              <p className="text-xs text-zinc-500 font-light">
                Voice stays inside. People nearby hear nothing.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-nw-card border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white tracking-tight">
                88 grams
              </span>
              <div className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                Ultra-Light Design
              </div>
              <p className="text-xs text-zinc-500 font-light">
                Soft medical silicone for hours of zero-pressure wear.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-nw-card border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white tracking-tight">
                18 Hours
              </span>
              <div className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                All-Day Battery
              </div>
              <p className="text-xs text-zinc-500 font-light">
                USB-C fast charge. 15 minutes gives 5 hours.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-nw-card border border-zinc-200/80 dark:border-white/[0.06] space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-medium text-zinc-900 dark:text-white tracking-tight">
                &lt; 14 dB
              </span>
              <div className="text-xs font-mono uppercase tracking-wider text-nw-gold-dark dark:text-nw-gold font-medium">
                Silent Airflow
              </div>
              <p className="text-xs text-zinc-500 font-light">
                Continuous fresh air without fan noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Product Showcase & Capabilities */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
              Everyday Wear
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
              Designed for everyday comfort.
            </h2>
          </div>

          {/* Studio Showcase Frame */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center p-8 mb-12 shadow-sm dark:shadow-2xl">
            <Image
              src="/images/mask-studio.png"
              alt="NullWave Hardware Studio Profile"
              fill
              className="object-contain p-6"
            />
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
                <Wind size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-zinc-900 dark:text-white">
                Silent Airflow
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Bladeless micro-impeller circulates fresh air quietly with less than 14 dB sound.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
                <Mic size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-zinc-900 dark:text-white">
                Lip-Level Clarity
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Close microphones pick up your voice with crystal clarity while blocking environmental noise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
                <ShieldCheck size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-zinc-900 dark:text-white">
                Soft Silicone Seal
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Medical liquid silicone conforms naturally to your facial structure without skin redness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
                <Battery size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-zinc-900 dark:text-white">
                18-Hour Battery
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                High-density battery with USB-C quick charge gives 5 hours of talk time in 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Acoustic Benchmarks Matrix */}
      <AcousticBenchmarks />

      {/* 7. Botanical Aromatherapy Customizer */}
      <ScentCustomizer />

      {/* 8. Everyday Scenarios Preview */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-nw-dark/40 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
                Everyday Situations
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
                Built for real life.
              </h2>
            </div>
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <span>View All Scenarios</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Coffee size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Crowded Cafés</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Take urgent calls and team standups without leaving your table or whispering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Plane size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Airport Departure Gates</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Converse in busy transit lounges without sharing details with passengers next to you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Train size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Commuter Rail & Transit</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Speak at normal volume on quiet trains without disturbing passengers around you.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Building2 size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Open Coworking Desks</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Jump straight onto client calls at your desk without hunting for a free phone booth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Priority Waitlist CTA */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block">
            Priority Allocation
          </span>
          <h2 className="text-3xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Be the first to experience NullWave.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
            Join the waitlist to receive priority access to our first production batch, travel pouch, and botanical scent pods.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/waitlist"
              className="px-8 py-4 rounded-md bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
            >
              <span>Join Priority Waitlist</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/product"
              className="px-8 py-4 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] text-zinc-900 dark:text-white border border-zinc-300 dark:border-white/10 text-xs font-mono uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Full Specifications</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
