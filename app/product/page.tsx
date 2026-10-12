import Image from "next/image";
import Link from "next/link";
import { Wind, Sliders, Battery, ShieldCheck, ArrowRight, Check } from "lucide-react";
import HardwareBlueprint from "@/components/HardwareBlueprint";

export const metadata = {
  title: "Product & Specifications — NullWave",
  description:
    "Explore the NullWave private voice containment wearable: liquid silicone seal, internal acoustic chamber, silent airflow, and full hardware specifications.",
};

const simpleSpecs = [
  { label: "Total Weight", value: "88 grams", desc: "Balanced weight with zero ear or nose cartilage drag" },
  { label: "Battery Life", value: "Up to 18 Hours", desc: "All-day talk time and active airflow on a single charge" },
  { label: "Fast Charging", value: "USB-C Rapid Charge", desc: "15 minutes of charging gives 5 hours of continuous speech" },
  { label: "Connectivity", value: "Bluetooth 5.4 LE", desc: "Low latency multipoint pairing to both your phone and laptop" },
  { label: "Water Resistance", value: "IPX4 Splash Proof", desc: "Acoustically sealed for all-weather commuting" },
  { label: "Skin Contact", value: "Medical-Grade Silicone", desc: "Soft, hypoallergenic liquid silicone for sensitive skin" },
];

const scents = [
  {
    name: "Japanese Hinoki Cedar",
    description: "A calming cypress wood aroma that promotes steady breathing during long calls.",
  },
  {
    name: "Alpine Eucalyptus & Mint",
    description: "Crisp and cooling botanical mist to keep airways fresh on long flights and trains.",
  },
  {
    name: "Arctic Clean Air",
    description: "Fragrance-free ceramic filtration that neutralizes stale odors and coffee breath.",
  },
];

export default function ProductPage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground pt-28 pb-32 transition-colors">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
            Hardware & Design
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
            Private voice. <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">Everyday comfort.</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            NullWave gives you the freedom to talk naturally without anyone around you hearing what you say.
          </p>
        </div>
      </section>

      {/* 2. Studio Image Hero */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] flex items-center justify-center p-8 shadow-sm dark:shadow-2xl">
          <Image
            src="/images/mask-studio.png"
            alt="NullWave Mask Studio Profile"
            fill
            className="object-contain p-6"
            priority
          />
        </div>
      </section>

      {/* 3. Interactive Hardware Blueprint (Dedicated Anatomy Explorer) */}
      <section className="mb-20">
        <HardwareBlueprint />
      </section>

      {/* 4. Core Features */}
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
              When you speak, your voice is absorbed by a soft acoustic foam labyrinth inside the mask. You can talk at your normal volume while people sitting right next to you hear nothing.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
            <div className="text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider font-medium">What this means for you</div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Keep client calls and personal conversations confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>No need to whisper, cover your mouth, or search for an empty room</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Converse in quiet commuter trains without bothering anyone</span>
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
              A silent, bladeless micro-impeller circulates fresh air into the breathing chamber. It stops heat and moisture from building up, with zero motor noise or mic buffeting.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 md:order-1 shadow-sm dark:shadow-xl">
            <div className="text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider font-medium">Breathe with ease</div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Stays cool during back-to-back conferences</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Zero fan buzz on your outgoing voice audio</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Smooth, effortless breathing for hours</span>
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
              Physical controls on the mask.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
              Tactile hardware buttons on the side let you instantly mute your mic, adjust volume, or talk to your AI assistant without taking out your phone.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-3 shadow-sm dark:shadow-xl">
            <div className="text-zinc-900 dark:text-white font-mono text-xs uppercase tracking-wider font-medium">Quick Access</div>
            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Instant hardware microphone mute switch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Volume rocker with tactile click indexing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold" />
                <span>Push-to-talk button for voice AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clean Specifications Table */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-zinc-200 dark:border-white/[0.06]">
        <div className="max-w-2xl mb-10">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2">
            Technical Details
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Complete Specifications
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
            Join the waitlist to receive priority access to the first production units.
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
