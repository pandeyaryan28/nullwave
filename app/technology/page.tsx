import Link from "next/link";
import {
  ShieldCheck,
  Mic,
  Globe,
  ArrowRight,
  Check,
  Wind,
  Activity,
  Layers,
  Cpu,
  Radio,
  Sliders,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import HardwareBlueprint from "@/components/HardwareBlueprint";
import AcousticBenchmarks from "@/components/AcousticBenchmarks";
import MarqueeTicker from "@/components/MarqueeTicker";

export const metadata = {
  title: "Acoustic Engineering & Technology — NullWave",
  description:
    "The physics behind NullWave: Helmholtz acoustic containment, dissipative porous labyrinths, laminar Coandă airflow, and close-proximity MEMS beamforming.",
};

export default function TechnologyPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-32 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nw-gold" />
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest">
              Acoustic Physics & Fluid Dynamics
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-white tracking-tight leading-[1.08]">
            The Physics of <br />
            <span className="text-zinc-500 font-light">Sound Containment.</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Sound is a mechanical pressure wave. By mastering acoustic impedance, viscous dissipation, and aerodynamic boundary layers, NullWave creates an impermeable vocal sanctuary.
          </p>
        </div>
      </section>

      {/* 2. Technical Ticker */}
      <MarqueeTicker />

      {/* 3. Three Core Engineering Principles */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto space-y-16">
        <div className="max-w-2xl">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Three Physical Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            How Voice Kinetic Energy is Trapped
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard className="p-8 space-y-5 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-2xl bg-nw-gold/15 text-nw-gold flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Principle 01</div>
            <h3 className="text-xl font-sans font-medium text-white">
              Viscous Thermal Dissipation
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              When spoken air vibrates inside the acoustic labyrinth, micro-porous channels force air molecules to rub against the material walls. This friction transforms sound wave pressure into negligible heat, achieving a -38 dB reduction at source.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-5 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
              <Wind size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Principle 02</div>
            <h3 className="text-xl font-sans font-medium text-white">
              Coandă Effect Laminar Flow
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Airflow is gently guided along curved aerodynamic surfaces rather than chopped by fan blades. This creates continuous, whisper-quiet air exchange (&lt; 14 dBA) with zero turbulence across the internal microphones.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-5 border border-white/[0.08]">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <Mic size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Principle 03</div>
            <h3 className="text-xl font-sans font-medium text-white">
              Near-Field Acoustic Calibration
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Because the internal MEMS microphones are positioned millimeters from the lips, signal-to-noise ratio is maximized. The digital processor picks up warm vocal fundamentals while phase-cancelling any internal reflections.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* 4. Interactive Blueprint Architecture */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <HardwareBlueprint />
      </section>

      {/* 5. Empirical Lab Benchmarks & Frequency Spectrum */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <AcousticBenchmarks />
      </section>

      {/* 6. Why Voice Containment Is Crucial in the AI Era */}
      <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <SpotlightCard className="p-8 sm:p-14 border border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-nw-gold" />
                <span className="font-mono text-xs uppercase tracking-widest text-nw-gold">
                  The Voice-First AI Transformation
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight leading-tight">
                Voice is 3x faster than typing. <br />
                <span className="text-zinc-500 font-light">Privacy makes it viable in public.</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                As LLMs and voice-first AI agents become our primary cognitive partners, typing on keyboards is becoming a bottleneck. You can speak 150 words per minute, but only type 40.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                Until now, nobody could dictate to an AI agent in a café, train, or open office without looking eccentric or leaking sensitive project details. NullWave solves this barrier forever.
              </p>
            </div>

            <div className="md:col-span-5 p-6 rounded-2xl bg-nw-pitch/90 border border-white/[0.06] space-y-4 font-mono text-xs">
              <div className="text-white font-medium border-b border-white/[0.06] pb-3">
                Empirical Speed Benchmark
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Mobile Keyboard Typing</span>
                    <span className="text-zinc-500">38 WPM</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full">
                    <div className="w-[25%] h-full bg-zinc-600 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-400 mb-1">
                    <span>Laptop Physical Typing</span>
                    <span className="text-zinc-500">65 WPM</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full">
                    <div className="w-[45%] h-full bg-zinc-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-white font-medium mb-1">
                    <span className="text-nw-gold">NullWave Natural Speech</span>
                    <span className="text-nw-gold font-bold">160 WPM (4.2x Faster)</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-800 rounded-full">
                    <div className="w-[100%] h-full bg-nw-gold rounded-full shadow-[0_0_10px_rgba(197,168,128,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* 7. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto text-center">
        <SpotlightCard className="p-8 sm:p-12 border border-nw-gold/30 space-y-6">
          <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            Reserve Batch 01 Early Access.
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Experience the world&apos;s first voice containment wearable. Guaranteed dispatch in Batch 01.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider hover:bg-nw-gold-light transition-all shadow-[0_0_25px_rgba(197,168,128,0.3)]"
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={14} />
          </Link>
        </SpotlightCard>
      </section>
    </div>
  );
}
