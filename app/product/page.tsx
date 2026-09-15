import Image from "next/image";
import Link from "next/link";
import {
  Wind,
  Sparkles,
  Sliders,
  Battery,
  ShieldCheck,
  ArrowRight,
  Mic,
  Check,
  Layers,
  Cpu,
  Radio,
  Volume2,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import ScentCustomizer from "@/components/ScentCustomizer";
import MarqueeTicker from "@/components/MarqueeTicker";

export const metadata = {
  title: "Product Architecture — NullWave Wearable",
  description:
    "Explore the NullWave private voice wearable: acoustic labyrinth containment, bladeless Coandă airflow, studio MEMS audio, and surgical silicone ergonomics.",
};

const fullSpecs = [
  {
    category: "Acoustics & Sound Containment",
    specs: [
      { label: "Vocal Sound Attenuation", value: "-38 dB nominal reduction" },
      { label: "Containment Core", value: "Multi-chamber acoustic labyrinth" },
      { label: "Absorption Foam", value: "Micro-porous open-cell acoustic matrix" },
      { label: "Frequency Range", value: "100 Hz – 8,000 Hz flat absorption" },
      { label: "Speech Leakage at 1m", value: "< 0.6% sound wave escape" },
    ],
  },
  {
    category: "Microphones & Vocal Pickup",
    specs: [
      { label: "Internal Microphone Array", value: "Dual high-SNR beamforming MEMS" },
      { label: "Microphone Sampling", value: "24-bit / 48 kHz studio resolution" },
      { label: "Signal-to-Noise Ratio", value: "72 dB SNR" },
      { label: "External Ambient Rejection", value: "-45 dB passive noise floor" },
      { label: "Wind & Buffeting Shield", value: "Internal acoustic velocity diffuser" },
    ],
  },
  {
    category: "Thermal & Bladeless Airflow",
    specs: [
      { label: "Turbine Architecture", value: "Brushless micro-bladeless Coandă turbine" },
      { label: "Operating Noise Floor", value: "< 14 dBA (inaudible to wearer & call)" },
      { label: "Airflow Displacement", value: "1.2 Liters / second continuous" },
      { label: "Thermal Reduction", value: "-4.2°C internal breathing chamber delta" },
      { label: "Moisture Management", value: "Anti-condensation dual exit exhalation valves" },
    ],
  },
  {
    category: "Power, Connectivity & AI Edge DSP",
    specs: [
      { label: "Battery Chemistry", value: "Custom curved lithium-polymer cell" },
      { label: "Battery Runtime", value: "Up to 18 hours talk time" },
      { label: "Fast Charging", value: "USB-C PD: 15 min charge = 5 hours talk time" },
      { label: "Wireless Connectivity", value: "Bluetooth 5.4 LE Audio + Multipoint" },
      { label: "On-Device DSP", value: "Low-latency neural voice translation & transcription" },
    ],
  },
  {
    category: "Materials & Ergonomics",
    specs: [
      { label: "Total Chassis Mass", value: "88 grams featherweight balanced design" },
      { label: "Facial Seal", value: "Medical-grade liquid silicone (Shore 30A LSR)" },
      { label: "Headband Suspension", value: "Memory titanium core with woven magnetic strap" },
      { label: "Water Resistance", value: "IP54 sweat & commuter splash resistance" },
      { label: "Aroma Capsule Port", value: "Neodymium magnetic snap-fit port" },
    ],
  },
];

export default function ProductPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-32 pb-32">
      {/* 1. Page Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nw-gold" />
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest">
              Hardware Architecture // Model 01
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-white tracking-tight leading-[1.08]">
            Acoustic Sanctuary. <br />
            <span className="text-zinc-500 font-light">Wearable Precision.</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Every millimeter of NullWave is engineered to trap vocal energy, circulate whisper-quiet air, and provide zero-fatigue ergonomic comfort during all-day wear.
          </p>
        </div>
      </section>

      {/* 2. Studio Image Hero Showcase */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-28">
        <SpotlightCard className="p-8 sm:p-12 border border-white/[0.1] bg-nw-card/80 shadow-2xl">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden flex items-center justify-center">
            <Image
              src="/images/mask-studio.png"
              alt="NullWave Precision Hardware Studio View"
              fill
              className="object-contain p-6 filter contrast-[1.05]"
              priority
            />
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">TOTAL WEIGHT</span>
              <span className="text-white font-bold text-base">88g</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">CONTAINMENT</span>
              <span className="text-nw-gold font-bold text-base">-38 dB</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">AIRFLOW NOISE</span>
              <span className="text-cyan-400 font-bold text-base">&lt; 14 dBA</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[10px] uppercase">BATTERY RUNTIME</span>
              <span className="text-white font-bold text-base">18 Hours</span>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* 3. Deep Feature Breakdowns */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-28 space-y-12">
        <div className="max-w-2xl">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Pillars of Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            Designed for Silent Performance
          </h2>
        </div>

        {/* Feature 1: Sound Containment */}
        <SpotlightCard className="p-8 sm:p-12 border border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-nw-gold/15 text-nw-gold flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
                Acoustic Labyrinth Sound Trap
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                When you speak into NullWave, vocal sound pressure waves do not simply bounce off a flat wall. Instead, they are channeled into an intricate 3D acoustic maze lined with open-cell dissipative foam. The kinetic energy of your voice is converted into imperceptible thermal micro-energy, stopping sound from propagating into the room.
              </p>
              <div className="space-y-2 pt-2 text-xs text-zinc-300 font-light">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-nw-gold" />
                  <span>Speak at normal volume: bystander at 1 meter hears only ambient room silence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-nw-gold" />
                  <span>Eliminates the fatigue and vocal cord strain of constant whispering</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-nw-gold" />
                  <span>Complete confidentiality for financial, legal, and personal conversations</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 p-6 rounded-2xl bg-nw-pitch/90 border border-white/[0.06] font-mono text-xs space-y-3">
              <div className="text-zinc-500 uppercase text-[10px] border-b border-white/[0.06] pb-2">
                Acoustic Metric Spec
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Peak Attenuation</span>
                <span className="text-nw-gold font-bold">-38 dB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Harmonic Range</span>
                <span className="text-white">100Hz – 8,000Hz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Room Radiation</span>
                <span className="text-emerald-400">&lt; 0.6%</span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Feature 2: Silent Airflow */}
        <SpotlightCard className="p-8 sm:p-12 border border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                <Wind size={20} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
                Bladeless Coandă Airflow Circulation
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Conventional motorized masks sound like a mini vacuum cleaner on your microphone. NullWave utilizes a proprietary brushless micro-bladeless Coandă turbine that introduces a laminar curtain of fresh, cool air without air turbulence, buffeting, or motor whine.
              </p>
              <div className="space-y-2 pt-2 text-xs text-zinc-300 font-light">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-400" />
                  <span>Sub-14 dBA operational noise floor (inaudible to human ear)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-400" />
                  <span>Zero humidity buildup or stale air during multi-hour video conferences</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-400" />
                  <span>Dual one-way silicone exhalation valves for effortless, natural respiration</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 p-6 rounded-2xl bg-nw-pitch/90 border border-white/[0.06] font-mono text-xs space-y-3">
              <div className="text-zinc-500 uppercase text-[10px] border-b border-white/[0.06] pb-2">
                Fluid Dynamic Spec
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Flow Displacement</span>
                <span className="text-cyan-400 font-bold">1.2 L / sec</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Acoustic Motor Floor</span>
                <span className="text-white">&lt; 14 dBA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Thermal Delta</span>
                <span className="text-emerald-400">-4.2°C Cooler</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* 4. Scent Pod Customizer Component */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-28">
        <ScentCustomizer />
      </section>

      {/* 5. Complete Technical Specifications Architecture */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-28">
        <div className="max-w-2xl mb-12">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Telemetry & Data
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            Detailed Technical Specifications
          </h2>
        </div>

        <div className="space-y-6">
          {fullSpecs.map((section) => (
            <SpotlightCard key={section.category} className="p-6 sm:p-8 border border-white/[0.08]">
              <h3 className="text-lg font-medium text-white font-sans tracking-tight mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-nw-gold" />
                <span>{section.category}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                {section.specs.map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-nw-pitch/70 border border-white/[0.04] space-y-1"
                  >
                    <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white block">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 6. Reservation CTA Banner */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center">
        <SpotlightCard className="p-10 sm:p-16 border border-nw-gold/30 bg-nw-card/90 space-y-6">
          <span className="font-mono text-xs text-nw-gold uppercase tracking-widest block">
            Batch 01 Priority Production
          </span>
          <h3 className="text-3xl sm:text-5xl font-sans font-medium text-white tracking-tight">
            Reserve Your NullWave Hardware.
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Early backers receive priority serial numbering, complimentary aromatherapy triad, and lifetime firmware access.
          </p>
          <div className="pt-2">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider hover:bg-nw-gold-light transition-all shadow-[0_0_30px_rgba(197,168,128,0.3)]"
            >
              <span>Join Batch 01 Waitlist</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </SpotlightCard>
      </section>
    </div>
  );
}
