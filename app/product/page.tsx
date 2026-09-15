import Image from "next/image";
import Link from "next/link";
import { Wind, Sliders, Battery, ShieldCheck, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Product Specifications — NullWave",
  description:
    "Comprehensive engineering specifications of the NullWave private voice containment wearable: acoustic materials, silent airflow, and mechanical specs.",
};

const simpleSpecs = [
  { label: "Total Mass", value: "88 grams", desc: "Balanced weight distribution with zero ear-cartilage drag" },
  { label: "Battery Life", value: "Up to 18 Hours", desc: "Continuous speech and neural translation on a single charge" },
  { label: "Fast Charging", value: "USB-C Rapid Charge", desc: "15 minutes provides 5 hours continuous voice talk time" },
  { label: "Wireless Protocol", value: "Bluetooth 5.4 LE", desc: "Ultra-low latency multipoint pairing to laptop and phone" },
  { label: "Ingress Protection", value: "IPX4 Sweat & Splash", desc: "Sealed acoustic membranes for all-weather urban commutes" },
  { label: "Contact Surface", value: "Medical-Grade Silicone", desc: "Biocompatible, hypoallergenic liquid silicone rubber (22 Shore A)" },
];

const scents = [
  {
    name: "Japanese Hinoki Cedar",
    description: "A calming, dry cedar note distilled from cypress wood to sharpen executive focus during back-to-back calls.",
  },
  {
    name: "Alpine Eucalyptus Mint",
    description: "An invigorating botanical mist that opens airways and prevents stuffiness on long international flights.",
  },
  {
    name: "Arctic Clean Air",
    description: "Ceramic microporous filtration that neutralizes ambient odor and keeps your breathing air crisp and pure.",
  },
];

export default function ProductPage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground pt-28 pb-32 transition-colors">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
            Hardware Specifications
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
            Private voice. <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">Everyday ergonomics.</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            NullWave gives you the freedom to talk out loud without anyone around you hearing what you say.
          </p>
        </div>
      </section>

      {/* 2. Studio Image Hero */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center p-8 shadow-sm dark:shadow-2xl">
          <Image
            src="/images/mask-studio.png"
            alt="NullWave Mask Studio"
            fill
            className="object-contain p-6"
            priority
          />
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24 space-y-16">
        {/* Feature 1: Sound Containment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
              <ShieldCheck size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
              Sound stays trapped inside.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              When you speak while wearing NullWave, your voice sound waves are absorbed by high-density reticulated foam labyrinths. You converse at natural volume while people beside you hear nothing.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
            <div className="text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider font-medium">Acoustic Containment</div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Keep business meetings and confidential negotiations private</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>No need to whisper, cover your mouth, or leave your seat</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Zero outward acoustic disturbance to quiet public environments</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Silent Airflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 md:order-2">
            <div className="w-9 h-9 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
              <Wind size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
              Quiet, cooling airflow.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              NullWave continuously circulates fresh, cool air inside the mask using a bladeless impeller design. It prevents heat and stuffiness without making any motor noise or blowing air across the internal microphones.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 md:order-1 shadow-sm dark:shadow-xl">
            <div className="text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider font-medium">Thermal Architecture</div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Stays cool during long, back-to-back conference calls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Zero fan buzz or blade turbulence on your voice transmission</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Effortless, natural breathing at all times</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Physical Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="w-9 h-9 rounded-md bg-zinc-100 dark:bg-white/[0.05] border border-zinc-200 dark:border-white/10 flex items-center justify-center text-nw-gold-dark dark:text-nw-gold">
              <Sliders size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
              Tactile hardware controls.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              Precision anodized buttons right on the side of the chassis let you instantly mute your microphone, adjust monitoring volume, or activate your voice AI assistant without touching your screen.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
            <div className="text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider font-medium">Quick Controls</div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>One-tap instant microphone hardware mute toggle</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Volume rocker with tactile click indexing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Push-to-talk key for rapid voice AI interaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Scent Pods Section */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Aromatherapy Module
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Interchangeable Botanical Scent Pods
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light mt-2">
            Easily snap in optional aroma pods for clean, refreshing air while speaking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scents.map((scent) => (
            <div
              key={scent.name}
              className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-2 shadow-sm dark:shadow-xl"
            >
              <h3 className="text-base font-medium text-zinc-900 dark:text-white">{scent.name}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                {scent.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Clean Specifications Table */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="max-w-2xl mb-10">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Mechanical Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Engineering Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {simpleSpecs.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-1 shadow-sm dark:shadow-xl"
            >
              <div className="text-xs font-mono text-zinc-500 uppercase">{item.label}</div>
              <div className="text-lg font-medium text-zinc-900 dark:text-white">{item.value}</div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 font-light">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-6 shadow-sm dark:shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Ready to experience private calls?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to receive priority access to the first production batch.
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
