import Image from "next/image";
import Link from "next/link";
import HeroScrollVideo from "@/components/HeroScrollVideo";
import SpotlightCard from "@/components/SpotlightCard";
import AcousticSimulator from "@/components/AcousticSimulator";
import HardwareBlueprint from "@/components/HardwareBlueprint";
import ScentCustomizer from "@/components/ScentCustomizer";
import AcousticBenchmarks from "@/components/AcousticBenchmarks";
import MarqueeTicker from "@/components/MarqueeTicker";
import {
  ArrowRight,
  ShieldCheck,
  Wind,
  Mic,
  VolumeX,
  Volume2,
  Sparkles,
  Battery,
  Globe,
  Coffee,
  Plane,
  Train,
  Building2,
  Lock,
  Radio,
  Cpu,
  Check,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground">
      {/* 1. Cinematic Scroll Video Hero with Precision Pacing */}
      <HeroScrollVideo />

      {/* 2. Architectural Infinite Typography Ticker */}
      <MarqueeTicker />

      {/* 3. The Problem: The Voice Dilemma in Public Spaces */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 border-t border-white/[0.06] relative">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-red-400 font-mono text-xs uppercase tracking-widest">
                The Public Friction
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight leading-tight mb-6">
              Voice is the ultimate interface. <br />
              <span className="text-zinc-500 font-light">Public space makes it impossible.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              Every day, 350 million hybrid professionals and commuters are forced to choose between awkward silence, stepping out into cold hallways, or exposing confidential conversations to strangers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard className="p-8 sm:p-10 space-y-5 border-red-500/20 bg-nw-card/60">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
                <Lock size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-1">
                  Vulnerability 01
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight">
                  Zero Privacy for Confidential Discourse
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Conducting client negotiations, medical discussions, or executive check-ins in cafes and shared lounges leaves your proprietary data vulnerable to passive eavesdropping and recording.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-red-300">
                <Volume2 size={14} />
                <span>Standard Speech Carries 12+ Meters</span>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-8 sm:p-10 space-y-5 border-amber-500/20 bg-nw-card/60">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <VolumeX size={20} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                  Vulnerability 02
                </span>
                <h3 className="text-xl sm:text-2xl font-sans font-medium text-white tracking-tight">
                  Acoustic Friction to Everyone Nearby
                </h3>
              </div>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Talking aloud on quiet commuter trains, airport departure gates, and shared office benches disrupts surrounding people, creating social awkwardness and environmental friction.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-amber-300">
                <Radio size={14} />
                <span>65–75 dB Ambient Noise Pollution</span>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 4. Interactive Acoustic Laboratory & Voice Containment Simulator */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-nw-dark/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
              Empirical Science
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight">
              Acoustic Isolation in Action
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Test real-world scenarios and discover how speech sound waves are trapped before they ever radiate into the room.
            </p>
          </div>

          <AcousticSimulator />
        </div>
      </section>

      {/* 5. The Solution: Lifestyle Reveal & Acoustic Sanctuary */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 border-t border-white/[0.06] relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Lifestyle Photography Card */}
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl group">
              <Image
                src="/images/mask-lifestyle.png"
                alt="Person wearing NullWave mask in modern architectural environment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nw-pitch/90 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-nw-pitch/80 backdrop-blur-xl border border-white/[0.08] text-xs font-mono flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 uppercase text-[9px] block">Field Deployment</span>
                  <span className="text-white font-medium">Urban Transit // Public Spaces</span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-500 uppercase text-[9px] block">Acoustic Shield</span>
                  <span className="text-emerald-400 font-bold">-38 dB Active</span>
                </div>
              </div>
            </div>

            {/* Architectural Content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
                  The Sanctuary
                </span>
                <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight leading-tight">
                  Your voice trapped inside. <br />
                  <span className="text-zinc-500 font-light">Zero leakage to the world.</span>
                </h2>
                <p className="text-zinc-400 text-base font-light leading-relaxed">
                  NullWave is not a tactical respirator. It is a piece of luxury, high-tech wearable design that functions as a private acoustic room over your mouth.
                </p>
              </div>

              <div className="space-y-4">
                <SpotlightCard className="p-5 rounded-2xl bg-nw-card/70 border border-white/[0.06] flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-nw-gold/15 text-nw-gold flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">
                      Acoustic Labyrinth Core
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Micro-porous acoustic foam absorbs 99.4% of vocal pressure waves across all human speech frequencies before they escape.
                    </p>
                  </div>
                </SpotlightCard>

                <SpotlightCard className="p-5 rounded-2xl bg-nw-card/70 border border-white/[0.06] flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Wind size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">
                      Bladeless Coandă Airflow
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      Smooth, continuous micro-turbine circulation keeps your airway refreshed with zero fan blade whine on your calls.
                    </p>
                  </div>
                </SpotlightCard>

                <SpotlightCard className="p-5 rounded-2xl bg-nw-card/70 border border-white/[0.06] flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mic size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">
                      Studio-Grade Beamforming MEMS
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      High-fidelity close-proximity microphones capture rich, uncompressed vocal warmth while completely rejecting ambient noise.
                    </p>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Exploded Hardware Blueprint */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-nw-dark/20">
        <div className="max-w-6xl mx-auto space-y-12">
          <HardwareBlueprint />
        </div>
      </section>

      {/* 7. Product Showcase Studio Hero Card */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
              Industrial Design
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight">
              Wearable Luxury. Precision Mechanics.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Engineered from surgical-grade liquid silicone, sandblasted aerospace aluminum trim, and magnetic modular attachments.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-nw-card/80 border border-white/[0.1] shadow-2xl flex items-center justify-center p-8 group">
            <Image
              src="/images/mask-studio.png"
              alt="NullWave Wearable Studio Render"
              fill
              className="object-contain p-8 filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-nw-pitch/80 pointer-events-none" />

            {/* Corner Markers */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 font-mono text-[10px] text-zinc-400 bg-nw-pitch/80 px-3 py-1.5 rounded-full border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-nw-gold" />
              <span>CHASSIS MASS: 88 GRAMS</span>
            </div>
            <div className="absolute bottom-6 right-6 font-mono text-[10px] text-zinc-400 bg-nw-pitch/80 px-3 py-1.5 rounded-full border border-white/[0.08]">
              <span>FINISH: OBSIDIAN MATTE / CHAMPAGNE GOLD</span>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] text-nw-gold flex items-center justify-center border border-white/[0.08]">
                <Wind size={18} />
              </div>
              <h3 className="text-base font-medium text-white">Sub-14 dBA Airflow</h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Proprietary bladeless turbine circulates 1.2 L/sec of cool air with zero audible whisper on calls.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] text-nw-gold flex items-center justify-center border border-white/[0.08]">
                <Globe size={18} />
              </div>
              <h3 className="text-base font-medium text-white">Live AI Translation</h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Real-time edge translation across 32 languages delivered directly to connected headphones.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] text-nw-gold flex items-center justify-center border border-white/[0.08]">
                <Battery size={18} />
              </div>
              <h3 className="text-base font-medium text-white">18-Hour Battery</h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                High-density custom curved lithium cell with fast USB-C charge (15 min gives 5h runtime).
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.05] text-nw-gold flex items-center justify-center border border-white/[0.08]">
                <Cpu size={18} />
              </div>
              <h3 className="text-base font-medium text-white">Automated AI Meeting Notes</h3>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Continuous edge transcription and automated action item extraction for confidential calls.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 8. Scent Pod Customizer */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-nw-dark/20">
        <div className="max-w-6xl mx-auto">
          <ScentCustomizer />
        </div>
      </section>

      {/* 9. Acoustic Benchmarks & Lab Testing */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <AcousticBenchmarks />
        </div>
      </section>

      {/* 10. Real-World Scenarios Matrix */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 border-t border-white/[0.06] bg-nw-dark/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
                Deployment Environments
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight">
                Privacy Wherever You Work
              </h2>
            </div>
            <Link
              href="/use-cases"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <span>Explore All Scenarios</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SpotlightCard className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Coffee size={22} className="text-nw-gold" />
                <span className="font-mono text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-1 rounded-full">
                  72 dB AMBIENT
                </span>
              </div>
              <h4 className="text-base font-medium text-white">Busy Metro Cafés</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Take urgent investor calls or client updates from crowded coffee shops without stepping into the street.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-2">
                -38 dB Isolation Active
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Plane size={22} className="text-nw-gold" />
                <span className="font-mono text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-1 rounded-full">
                  78 dB AMBIENT
                </span>
              </div>
              <h4 className="text-base font-medium text-white">Airport Departure Gates</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Coordinate complex travel logistics and confidential pitches at noisy international departure gates.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-2">
                Live Translation Ready
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Train size={22} className="text-nw-gold" />
                <span className="font-mono text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-1 rounded-full">
                  68 dB AMBIENT
                </span>
              </div>
              <h4 className="text-base font-medium text-white">Commuter Trains & Metro</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Dictate voice memos and talk comfortably without annoying fellow passengers sitting right next to you.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-2">
                Zero Sound Leakage
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Building2 size={22} className="text-nw-gold" />
                <span className="font-mono text-[10px] text-zinc-500 bg-white/[0.04] px-2 py-1 rounded-full">
                  58 dB AMBIENT
                </span>
              </div>
              <h4 className="text-base font-medium text-white">Open Coworking Desks</h4>
              <p className="text-zinc-400 text-xs font-light leading-relaxed">
                Jump into unscheduled 1-on-1 calls right from your desk instead of waiting for an occupied phone booth.
              </p>
              <div className="text-[11px] font-mono text-emerald-400 pt-2">
                Instant Desk Privacy
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* 11. High-Impact Award-Level Call to Action */}
      <section className="py-32 sm:py-44 px-6 sm:px-8 border-t border-white/[0.06] text-center relative overflow-hidden">
        {/* Ambient Radial Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nw-gold/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nw-gold/10 border border-nw-gold/20 text-nw-gold text-[11px] font-mono uppercase tracking-widest">
            <Radio size={12} className="animate-pulse" />
            <span>Batch 01 Production Allocation Active</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-sans font-medium text-white tracking-tight leading-[1.1]">
            Experience the Future of Private Voice.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
            Reserve your place in Batch 01. Priority serial numbering, complimentary aromatherapy triad, and guaranteed early delivery.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/waitlist"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] flex items-center justify-center gap-2"
            >
              <span>Join the Waitlist</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/technology"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 text-xs uppercase tracking-wider transition-all"
            >
              <span>Learn the Physics</span>
            </Link>
          </div>

          <div className="pt-6 flex items-center justify-center gap-6 text-[11px] font-mono text-zinc-500">
            <span>LIMITED TO 2,000 FOUNDING UNITS</span>
            <span>•</span>
            <span>GLOBAL DISPATCH Q3</span>
          </div>
        </div>
      </section>
    </div>
  );
}
