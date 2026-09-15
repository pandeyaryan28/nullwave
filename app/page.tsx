import Image from "next/image";
import Link from "next/link";
import HeroScrollVideo from "@/components/HeroScrollVideo";
import AcousticSimulator from "@/components/AcousticSimulator";
import HardwareBlueprint from "@/components/HardwareBlueprint";
import AcousticBenchmarks from "@/components/AcousticBenchmarks";
import ScentCustomizer from "@/components/ScentCustomizer";
import {
  ArrowRight,
  ShieldCheck,
  Wind,
  Mic,
  VolumeX,
  Battery,
  Globe,
  Coffee,
  Plane,
  Train,
  Building2,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground transition-colors">
      {/* 1. Cinematic Scroll Video Hero with Calibrated Pacing & Direct Drag Scrub */}
      <HeroScrollVideo />

      {/* 2. The Problem */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
              The Acoustic Dilemma
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
              Speaking out loud in public <br />
              <span className="text-zinc-500 dark:text-zinc-400 font-light">is full of friction.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              Whether taking a confidential client call, dictating notes to voice AI, or speaking on a crowded commuter train, you face two immediate problems:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-2xl">
              <div className="w-10 h-10 rounded-md bg-red-500/10 text-red-500 dark:text-red-400 flex items-center justify-center border border-red-500/20">
                <VolumeX size={18} />
              </div>
              <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
                Zero Speech Privacy
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                Strangers sitting right beside you overhear every detail of your business calls, confidential company metrics, and personal conversations.
              </p>
              <div className="pt-2 font-mono text-xs text-zinc-500">
                Average Speech Bleed Radius: 4.5 – 6.0 Meters
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-2xl">
              <div className="w-10 h-10 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Mic size={18} />
              </div>
              <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
                Acoustic Disturbance to Others
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
                Speaking aloud in quiet train cars, airport departure lounges, and shared co-working desks distracts and annoys the people around you.
              </p>
              <div className="pt-2 font-mono text-xs text-zinc-500">
                Acoustic Disturbance Threshold: &gt; 65 dB SPL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Acoustic Isolation Simulator */}
      <AcousticSimulator />

      {/* 4. The Solution: Wearable Acoustic Isolation */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-nw-dark/40 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/[0.08] shadow-md dark:shadow-2xl">
              <Image
                src="/images/mask-lifestyle.png"
                alt="Person wearing NullWave mask in a modern metropolitan environment"
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
                NullWave traps your voice sound waves at the source. You speak naturally at normal conversational volume, but your acoustic energy never escapes into the public space.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] shadow-xs">
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1">
                      Complete Voice Containment
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Micro-cellular acoustic dampening traps voice waves before sound can escape into public spaces.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] shadow-xs">
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5">
                    <Mic size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1">
                      Studio-Quality Speech Pickup
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Internal beamforming MEMS microphones pick up your speech with crystalline clarity while rejecting ambient street chatter.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] shadow-xs">
                  <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5">
                    <Wind size={16} />
                  </div>
                  <div>
                    <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1">
                      Continuous Bladeless Fresh Air
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Smooth, silent airflow circulation eliminates stuffiness and heat without producing mic buffeting or motor noise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Hardware Blueprint & Architecture */}
      <HardwareBlueprint />

      {/* 6. Product Showcase & Engineering Pillars */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
              Designed for effortless daily wear.
            </h2>
          </div>

          {/* Studio Showcase Frame */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center p-8 mb-12 shadow-sm dark:shadow-2xl">
            <Image
              src="/images/mask-studio.png"
              alt="NullWave Hardware Studio Angle"
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
                Bladeless micro-impeller provides smooth fresh air circulation with less than 14 dB acoustic floor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
                <Globe size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-zinc-900 dark:text-white">
                Live Translation
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                On-device neural translation engine allows seamless international communication without cellular lag.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
                <ShieldCheck size={16} />
              </div>
              <h3 className="text-base font-sans font-medium text-zinc-900 dark:text-white">
                Medical-Grade Silicone
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Hypoallergenic liquid silicone contour conforms gently to facial contours with zero skin pressure.
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
                High-density lithium cell with USB-C fast charging providing 5 hours of continuous speech in 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Acoustic Benchmarks Matrix */}
      <AcousticBenchmarks />

      {/* 8. Botanical Aromatherapy Customizer */}
      <ScentCustomizer />

      {/* 9. Everyday Scenarios Preview */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] bg-zinc-50/70 dark:bg-nw-dark/40 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
                Public Deployments
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
                Everyday Scenarios.
              </h2>
            </div>
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <span>Explore All Scenarios</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Coffee size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Crowded Cafés</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Take confidential investor calls and team standups without leaving your table.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Plane size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Airport Departure Gates</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Talk privately at crowded transit lounges without broadcasting details to nearby passengers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Train size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Commuter Rail & Transit</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Speak at normal volume on quiet trains without disturbing surrounding commuters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
              <Building2 size={20} className="text-nw-gold-dark dark:text-nw-gold" />
              <h4 className="text-base font-medium text-zinc-900 dark:text-white">Open Coworking Desks</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-light leading-relaxed">
                Jump straight onto client calls at your desk without hunting for an available phone booth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Priority Waitlist CTA */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 border-t border-zinc-200 dark:border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block">
            Priority Allocation
          </span>
          <h2 className="text-3xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Be the first to experience NullWave.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
            Join the waitlist to receive priority access to our first production batch, complimentary travel pouch, and 3 botanical scent pods.
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
