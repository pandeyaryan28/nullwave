import Image from "next/image";
import Link from "next/link";
import { Wind, Sparkles, Sliders, Battery, ShieldCheck, ArrowRight, Mic, Check } from "lucide-react";

export const metadata = {
  title: "Product Overview — NullWave",
  description:
    "Learn about the NullWave mask: voice privacy, silent airflow, all-day comfort, and simple controls.",
};

const simpleSpecs = [
  { label: "Weight", value: "88 grams", desc: "Lightweight and balanced" },
  { label: "Battery Life", value: "Up to 18 Hours", desc: "For all-day calling" },
  { label: "Charging", value: "USB-C Fast Charge", desc: "15 min gives 5 hours talk time" },
  { label: "Connectivity", value: "Bluetooth 5.4", desc: "Connects to phone and laptop" },
  { label: "Water Resistance", value: "Sweat & Splash Resistant", desc: "For everyday commutes" },
  { label: "Materials", value: "Medical-Grade Silicone", desc: "Soft and hypoallergenic" },
];

const scents = [
  {
    name: "Cedar Wood",
    description: "A clean, woody aroma that helps you stay calm and focused during long work calls.",
  },
  {
    name: "Eucalyptus Mint",
    description: "A cool and crisp scent that keeps your airway feeling fresh on long flights.",
  },
  {
    name: "Fresh Clean Air",
    description: "A light, neutral scent that eliminates stale room odors and stuffiness.",
  },
];

export default function ProductPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-28 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-2xl">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-3">
            Product Overview
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-white tracking-tight leading-tight mb-6">
            Private voice. <br />
            <span className="text-zinc-500 font-light">Everyday comfort.</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            NullWave gives you the freedom to talk out loud without anyone around you hearing what you say.
          </p>
        </div>
      </section>

      {/* 2. Studio Image Hero */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-nw-card border border-white/[0.08] flex items-center justify-center p-8">
          <Image
            src="/images/mask-studio.png"
            alt="NullWave Mask Studio"
            fill
            className="object-contain p-6"
            priority
          />
        </div>
      </section>

      {/* 3. Core Features in Plain English */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24 space-y-16">
        {/* Feature 1: Sound Containment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
              <ShieldCheck size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
              Sound stays trapped inside.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              When you wear NullWave, your voice is captured inside the mask by sound-absorbing materials. You can speak naturally at your normal volume, and people sitting right next to you will not hear what you are saying.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-3">
            <div className="text-white font-medium text-sm">Key Benefits</div>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Keep business meetings and confidential calls private</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>No need to whisper or step out into the hallway</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Zero disturbance to people around you</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Silent Airflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 md:order-2">
            <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
              <Wind size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
              Quiet, cooling airflow.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              NullWave continuously circulates fresh, cool air inside the mask using a bladeless airflow design. It prevents heat and stuffiness without making any fan noise or blowing air across the microphone.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-3 md:order-1">
            <div className="text-white font-medium text-sm">Comfort Design</div>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Stays cool during long, back-to-back calls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Zero fan buzz or blade noise on your audio</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Easy and natural breathing at all times</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Easy Physical Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
              <Sliders size={18} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
              Easy physical buttons.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Simple, tactile buttons right on the side of the mask let you quickly mute your microphone, adjust volume, or talk to your voice assistant without reaching for your phone.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-3">
            <div className="text-white font-medium text-sm">Quick Controls</div>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>One-tap instant microphone mute button</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Volume up and volume down controls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-nw-gold" />
                <span>Dedicated voice assistant button</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Scent Pods Section */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-white/[0.06]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-2">
            Pleasant Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Interchangeable Scent Pods
          </h2>
          <p className="text-zinc-400 text-sm font-light mt-2">
            Easily snap in optional aroma pods for a fresh, clean scent while wearing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scents.map((scent) => (
            <div
              key={scent.name}
              className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-2"
            >
              <h3 className="text-base font-medium text-white">{scent.name}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                {scent.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Clean Specifications Table */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-white/[0.06]">
        <div className="max-w-2xl mb-10">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-2">
            Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Product Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {simpleSpecs.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-2xl bg-nw-card border border-white/[0.06] space-y-1"
            >
              <div className="text-xs text-zinc-500">{item.label}</div>
              <div className="text-lg font-medium text-white">{item.value}</div>
              <div className="text-xs text-zinc-400 font-light">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-nw-dark border border-white/[0.08] space-y-6">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Ready to experience private calls?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to receive priority access to the first batch.
          </p>
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider hover:bg-nw-gold-light transition-all"
          >
            <span>Join the Waitlist</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
