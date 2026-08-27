import WaitlistForm from "@/components/WaitlistForm";
import { Check, HelpCircle, Package } from "lucide-react";

export const metadata = {
  title: "Join the Waitlist — NullWave",
  description:
    "Join the NullWave waitlist for early access to the first release of our private voice wearable.",
};

const perks = [
  "Priority access to the first production batch",
  "Complimentary protective travel pouch",
  "Set of 3 fresh scent pods (Cedar, Mint, Clean Air)",
  "Lifetime free firmware and language translation updates",
];

const faqs = [
  {
    q: "How does NullWave stop people from hearing my voice?",
    a: "NullWave has special sound-absorbing acoustic materials inside the mask. When you speak, the sound waves are trapped inside rather than spreading into the room, so people sitting right next to you cannot hear what you are saying.",
  },
  {
    q: "Will my voice sound muffled on phone calls?",
    a: "No. High-quality microphones inside the mask are positioned directly near your mouth to capture your voice in crystal-clear quality, while outside sensors block background noise from your call.",
  },
  {
    q: "Does the mask get hot or stuffy while wearing?",
    a: "No. A quiet, bladeless airflow system continuously brings in fresh, cool air to keep you comfortable without making any noise on your microphone.",
  },
  {
    q: "Is it comfortable for long calls?",
    a: "Yes. NullWave is made with soft, medical-grade silicone and flexible ear loops, weighing just 88 grams for zero-pressure, all-day comfort.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-28 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center mb-14">
        <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-3">
          Early Access
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-medium text-white tracking-tight leading-tight mb-4">
          Join the waitlist.
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-md mx-auto">
          Be the first to know when NullWave launches and secure priority access.
        </p>
      </section>

      {/* 2. Waitlist Form */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <WaitlistForm />
      </section>

      {/* 3. Perks */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-nw-card border border-white/[0.08] space-y-6">
          <div className="flex items-center gap-2 text-nw-gold font-mono text-xs uppercase tracking-wider">
            <Package size={16} />
            <span>Early Access Perks</span>
          </div>

          <h3 className="text-xl font-medium text-white">
            What early supporters receive:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-nw-pitch border border-white/[0.04] text-xs text-zinc-300 font-light"
              >
                <Check size={14} className="text-nw-gold shrink-0 mt-0.5" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Simple FAQs */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-2">
            Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-nw-card border border-white/[0.06] space-y-2"
            >
              <h4 className="text-base font-medium text-white flex items-center gap-2.5">
                <HelpCircle size={16} className="text-nw-gold shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
