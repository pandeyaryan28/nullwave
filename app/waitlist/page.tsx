import WaitlistForm from "@/components/WaitlistForm";
import SpotlightCard from "@/components/SpotlightCard";
import MarqueeTicker from "@/components/MarqueeTicker";
import { Check, HelpCircle, Package, ShieldCheck, Sparkles, Radio } from "lucide-react";

export const metadata = {
  title: "Batch 01 Priority Reservation — NullWave",
  description:
    "Secure your place in the first production batch of NullWave. Priority serial numbers, complimentary aroma capsule triad, and guaranteed Q3 dispatch.",
};

const perks = [
  {
    title: "Priority Serial Allocation",
    desc: "Guaranteed unit reserved in the initial 1,000-unit founding production run.",
  },
  {
    title: "Aromatherapy Triad Pack",
    desc: "Complimentary Nordic Cedar, Glacier Mint, and Pure Oxygen capsules included in box.",
  },
  {
    title: "Magnetic Hard Shell Travel Case",
    desc: "Custom molded anodized ballistic nylon travel case with built-in USB-C pass-through charging.",
  },
  {
    title: "Lifetime Neural AI Firmware",
    desc: "Free lifetime updates for on-device live translation and automated meeting transcription.",
  },
];

const faqs = [
  {
    q: "How does NullWave prevent people from hearing my conversation?",
    a: "NullWave utilizes an internal 3D acoustic labyrinth lined with micro-porous dissipative acoustic foam. When you speak, vocal sound pressure waves are trapped within the tortuous internal channels and dissipated into imperceptible thermal micro-energy, resulting in a nominal -38 dB reduction. To anyone standing 1 foot away, your speech is indistinguishable from quiet ambient room floor.",
  },
  {
    q: "Will my voice sound muffled or hollow to listeners on my call?",
    a: "No. In fact, call clarity is significantly enhanced. Close-proximity dual MEMS beamforming microphones sit millimeters from your lips inside the acoustically isolated chamber, capturing rich vocal warmth without any room echo, café clatter, or wind noise.",
  },
  {
    q: "How does the bladeless cooling system prevent heat and humidity?",
    a: "NullWave integrates a proprietary brushless micro-bladeless Coandă turbine. It delivers a continuous, laminar 1.2 L/sec curtain of cool air across the internal breathing zone. Dual one-way medical silicone exhalation valves immediately exhaust warm exhaled moisture, keeping the interior dry and -4.2°C cooler.",
  },
  {
    q: "Is it comfortable to wear for back-to-back 4-hour meeting marathons?",
    a: "Yes. Weighing just 88 grams, the chassis distributes its featherweight mass across a surgical-grade liquid silicone rubber (Shore 30A LSR) facial seal and memory titanium headband. It produces zero zygomatic pressure points or ear cartilage fatigue.",
  },
  {
    q: "When will Batch 01 hardware be dispatched?",
    a: "Batch 01 production tooling is finalized. Units are scheduled for worldwide dispatch in Q3. Waitlist members will receive a direct invitation to customize finish color and confirm delivery addresses ahead of public release.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-32 pb-32">
      {/* 1. Page Header */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nw-gold/10 border border-nw-gold/20 text-nw-gold text-[11px] font-mono uppercase tracking-widest">
          <Radio size={12} className="animate-pulse" />
          <span>Batch 01 Reservations Open</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-white tracking-tight leading-[1.08]">
          Reserve Your Place <br />
          <span className="text-zinc-500 font-light">in Batch 01.</span>
        </h1>
        <p className="text-zinc-400 text-sm sm:text-lg font-light leading-relaxed max-w-lg mx-auto">
          Be among the first 1,000 founding members to experience voice containment. Secure priority serial numbering and exclusive founder perks.
        </p>
      </section>

      {/* 2. Waitlist Form */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-24">
        <WaitlistForm />
      </section>

      {/* 3. Infinite Technical Ticker */}
      <MarqueeTicker className="mb-24" />

      {/* 4. Founding Perks Grid */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-24 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
            Founding Member Privileges
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            What Batch 01 Supporters Receive
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perks.map((perk, idx) => (
            <SpotlightCard key={idx} className="p-6 sm:p-7 border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-nw-gold font-mono text-xs uppercase">
                <Check size={14} className="text-nw-gold" />
                <span>Founding Benefit 0{idx + 1}</span>
              </div>
              <h3 className="text-base font-medium text-white tracking-tight">
                {perk.title}
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {perk.desc}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 5. Comprehensive Technical FAQs */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-widest block">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <SpotlightCard
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] space-y-3"
            >
              <h3 className="text-base font-medium text-white flex items-start gap-3">
                <span className="font-mono text-xs text-nw-gold shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-7">
                {faq.a}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
}
