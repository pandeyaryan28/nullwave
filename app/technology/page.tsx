import Link from "next/link";
import { ShieldCheck, Mic, Globe, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "How It Works — NullWave",
  description:
    "Discover how NullWave keeps your voice private using sound-absorbing materials and clear internal microphones.",
};

export default function TechnologyPage() {
  return (
    <div className="w-full bg-nw-pitch text-foreground pt-28 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20">
        <div className="max-w-2xl">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-3">
            How It Works
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-white tracking-tight leading-tight mb-6">
            Simple ideas. <br />
            <span className="text-zinc-500 font-light">Engineered for silence.</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Here is how NullWave keeps your voice private and delivers crystal-clear audio on your calls.
          </p>
        </div>
      </section>

      {/* 2. Three Simple Steps / Pillars */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
              <ShieldCheck size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Step 01</div>
            <h3 className="text-xl font-sans font-medium text-white">
              Sound Absorption
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              When you speak, sound waves travel through the air. NullWave is lined with acoustic materials that absorb those sound waves inside the mask, stopping them before they reach the room.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
              <Mic size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Step 02</div>
            <h3 className="text-xl font-sans font-medium text-white">
              Clear Microphones
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Internal microphones capture your voice right at your mouth. Outside background noise—like street traffic, cafe music, or airport chatter—is blocked from entering your call.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-4">
            <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-nw-gold">
              <Globe size={20} />
            </div>
            <div className="text-xs font-mono text-zinc-500 uppercase">Step 03</div>
            <h3 className="text-xl font-sans font-medium text-white">
              Live Translation
            </h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              NullWave can translate your words live as you speak. You hear translated speech directly in your headphones, making international travel and cross-border calls seamless.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Voice Privacy Matters in the AI Era */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto py-16 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block">
              The Need for Privacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-medium text-white tracking-tight leading-tight">
              Voice is the future of computing.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              Talking to AI and making calls is much faster than typing on a small keyboard. But in public, talking out loud feels awkward because everyone around you can hear what you say.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              NullWave gives you the privacy of a closed room wherever you go. Dictate messages, brainstorm with AI assistants, and take important client meetings from anywhere.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-nw-card border border-white/[0.06] space-y-4">
            <h3 className="text-lg font-medium text-white">What this means for you:</h3>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-400 font-light">
              <div className="flex items-center gap-3">
                <Check size={16} className="text-nw-gold shrink-0" />
                <span>Take confidential client calls without booking a private room</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-nw-gold shrink-0" />
                <span>Talk to voice AI tools freely while walking on the street</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={16} className="text-nw-gold shrink-0" />
                <span>Never worry about people listening in on your conversations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto mt-16 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-nw-dark border border-white/[0.08] space-y-6">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Reserve your early access.
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to be among the first to receive NullWave.
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
