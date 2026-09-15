import Link from "next/link";
import { ShieldCheck, Mic, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Acoustic Science & Technology — NullWave",
  description:
    "Discover how NullWave isolates spoken voice using acoustic absorption materials, internal beamforming microphones, and bladeless airflow mechanics.",
};

export default function TechnologyPage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground pt-28 pb-32 transition-colors">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20">
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
            Acoustic Engineering
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
            Acoustic physics. <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">Engineered for absolute silence.</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            Here is the engineering breakdown of how NullWave traps spoken voice waves and preserves crystal-clear speech fidelity.
          </p>
        </div>
      </section>

      {/* 2. Three Scientific Pillars */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-xl">
            <div className="w-10 h-10 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
              <ShieldCheck size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Acoustic Principle 01</div>
            <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
              Sound Absorption & Dissipation
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
              When you speak, vocal cords create longitudinal pressure waves in the air. NullWave lines the internal cavity with reticulated cellular foam that traps sound waves and converts pressure energy into trace heat, eliminating sound leakage to the room.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-xl">
            <div className="w-10 h-10 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
              <Mic size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Acoustic Principle 02</div>
            <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
              Near-Field Acoustic Coupling
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
              Internal digital MEMS microphones are coupled directly to your lips at a distance of 12mm. By capturing sound at the immediate acoustic point-source, signal-to-noise ratio is maximized while ambient noise from the cafe or airport is physically barred.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-4 shadow-sm dark:shadow-xl">
            <div className="w-10 h-10 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
              <Globe size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Acoustic Principle 03</div>
            <h3 className="text-xl font-sans font-medium text-zinc-900 dark:text-white">
              On-Device Neural Translation
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed">
              NullWave runs low-latency speech recognition and translation models directly on its ultra-low-power DSP. You speak in your native language; translated voice audio is routed seamlessly to your listener or your personal earpieces.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: The Sound Wave Isolation Curve */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block">
              Acoustic Attenuation
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight">
              Why voice privacy is crucial <br />
              <span className="text-zinc-500 dark:text-zinc-400 font-light">for the future of computing.</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              Speaking is over 3× faster than typing on a touchscreen keyboard. As conversational AI agents and voice-first workflows become primary interfaces, public adoption has stalled because talking aloud in public leaves your thoughts and secrets exposed.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              NullWave provides the acoustic equivalent of an insulated sound booth in an 88-gram wearable. Conduct negotiations, brainstorm with LLMs, and dictate confidential documents without acoustic friction.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-5 shadow-sm dark:shadow-2xl">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Acoustic Specifications</h3>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.04]">
                <span className="text-zinc-500 dark:text-zinc-400">Peak Sound Attenuation</span>
                <span className="font-mono text-nw-gold-dark dark:text-nw-gold font-medium">-38 dB SPL</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.04]">
                <span className="text-zinc-500 dark:text-zinc-400">Target Frequency Absorption</span>
                <span className="font-mono text-zinc-900 dark:text-white font-medium">100 Hz – 8,000 Hz</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.04]">
                <span className="text-zinc-500 dark:text-zinc-400">Airflow Acoustic Noise Floor</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">&lt; 14 dB (Inaudible)</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-nw-pitch/70 border border-zinc-200 dark:border-white/[0.04]">
                <span className="text-zinc-500 dark:text-zinc-400">Microphone Signal-to-Noise Ratio</span>
                <span className="font-mono text-zinc-900 dark:text-white font-medium">68 dB SNR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mt-16 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-6 shadow-sm dark:shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Reserve priority allocation.
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to be among the first verified recipients of NullWave.
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
