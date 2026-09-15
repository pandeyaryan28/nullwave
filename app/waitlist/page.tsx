import WaitlistForm from "@/components/WaitlistForm";
import { Check, HelpCircle, Package } from "lucide-react";

export const metadata = {
  title: "Join the Waitlist — NullWave",
  description:
    "Join the NullWave waitlist for priority reservation access to the first production batch of our private voice wearable.",
};

const perks = [
  "Priority allocation for Batch 01 production units",
  "Complimentary ballistic-nylon magnetic travel pouch",
  "Complete set of 3 botanical aroma capsules (Cedar, Mint, Clean Air)",
  "Lifetime access to firmware enhancements and neural translation models",
];

const faqs = [
  {
    q: "How does NullWave stop surrounding people from hearing my voice?",
    a: "NullWave utilizes an internal acoustic labyrinth lined with reticulated cellular foam. When you speak, spoken longitudinal sound pressure waves are trapped and dissipated within microscopic acoustic chambers, dropping outward speech volume by -38 dB SPL. To a person standing right beside you, speech is reduced below the ambient room noise floor.",
  },
  {
    q: "Will my voice sound muffled or hollow on phone calls?",
    a: "No. Knowles studio-grade MEMS microphones are positioned directly at mouth aperture (12mm distance) with mechanical shock isolation. Your voice is captured with intimate proximity and full dynamic range, while exterior background noise from traffic, cafes, or airports is physically barred from reaching the capsules.",
  },
  {
    q: "Does the mask cause heat or humidity buildup during long calls?",
    a: "No. An ultra-quiet micro-impeller generates continuous laminar fresh airflow (1.8 CFM) through the breathing chamber with an inaudible acoustic floor of < 14 dB. You breathe naturally with zero stuffiness, zero lens fogging, and zero microphone turbulence.",
  },
  {
    q: "Is it comfortable for multiple hours of consecutive wear?",
    a: "Yes. NullWave weighs just 88 grams, utilizing medical-grade liquid silicone rubber (22 Shore A) with ergonomic facial contouring and flexible ear loops that distribute mass evenly without cartilage pressure.",
  },
];

export default function WaitlistPage() {
  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground pt-28 pb-32 transition-colors">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center mb-14">
        <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3 font-medium">
          Priority Allocation
        </span>
        <h1 className="text-4xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
          Join the waitlist.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-md mx-auto">
          Be first to experience NullWave when initial production batch allocation commences.
        </p>
      </section>

      {/* 2. Waitlist Form */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto mb-20">
        <WaitlistForm />
      </section>

      {/* 3. Perks */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mb-20">
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-6 shadow-sm dark:shadow-2xl">
          <div className="flex items-center gap-2 text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-wider font-medium">
            <Package size={16} />
            <span>Early Supporter Privileges</span>
          </div>

          <h3 className="text-xl font-medium text-zinc-900 dark:text-white">
            What early supporters receive:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-nw-pitch border border-zinc-200 dark:border-white/[0.04] text-xs text-zinc-700 dark:text-zinc-300 font-light"
              >
                <Check size={14} className="text-nw-gold-dark dark:text-nw-gold shrink-0 mt-0.5" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-2 font-medium">
            Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.06] space-y-2 shadow-xs dark:shadow-xl"
            >
              <h4 className="text-base font-medium text-zinc-900 dark:text-white flex items-center gap-2.5">
                <HelpCircle size={16} className="text-nw-gold-dark dark:text-nw-gold shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
