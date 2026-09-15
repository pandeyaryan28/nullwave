"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  Train,
  Coffee,
  Building2,
  Gamepad2,
  ArrowRight,
  Check,
  ShieldCheck,
  Mic,
  Volume2,
  Sparkles,
} from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import AcousticSimulator from "@/components/AcousticSimulator";
import MarqueeTicker from "@/components/MarqueeTicker";

export default function UseCasesPage() {
  const [selectedCase, setSelectedCase] = useState(0);

  const useCases = [
    {
      id: "cafe",
      title: "Cafés & Coffee Shops",
      subtitle: "Mobile Work & Client Calls",
      icon: Coffee,
      ambientNoise: "72 dB (Espresso & Chatter)",
      containedNoise: "21 dB (Whisper Silent)",
      persona: "Remote Consultants & Founders",
      description:
        "Busy third-wave coffee shops are inspiring places to work, but taking private client calls or team standups is fraught with friction. With NullWave, your voice never escapes into the café, and noisy blenders or adjacent table chatter are completely filtered out of your microphone.",
      benefits: [
        "Take sensitive investor calls and client demos with complete peace of mind",
        "Coffee machine steam and café music are rejected by the beamforming mics",
        "No need to pack up your laptop and flee into the street for every incoming ring",
        "Bystanders sitting 1 foot away hear zero decipherable words",
      ],
    },
    {
      id: "airport",
      title: "Airports & Travel Lounges",
      subtitle: "International Transit Sanctuary",
      icon: Plane,
      ambientNoise: "78 dB (Gate Paging & Jet Engines)",
      containedNoise: "23 dB (Zero Leakage)",
      persona: "Traveling Executives & Nomads",
      description:
        "Whether you are waiting at a crowded departure gate or sitting in a packed airline lounge, NullWave lets you coordinate travel plans and conduct confidential negotiations without broadcasting your itinerary or company secrets to fellow travelers.",
      benefits: [
        "Bidirectional real-time translation makes ordering and transit in foreign languages effortless",
        "Maintain absolute privacy while reviewing legal terms or quarterly earnings",
        "Medical-grade silicone seal remains soft and irritation-free across multi-leg flights",
        "Aromatherapy eucalyptus pod keeps breathing crisp and hydrated in dry cabin air",
      ],
    },
    {
      id: "train",
      title: "High-Speed Rail & Public Transit",
      subtitle: "Silent Commuter Etiquette",
      icon: Train,
      ambientNoise: "68 dB (Track Rumble & Wind)",
      containedNoise: "20 dB (Imperceptible)",
      persona: "Daily Urban Commuters",
      description:
        "Talking aloud on quiet commuter trains or buses is a universal social taboo. NullWave absorbs your vocal sound waves at source, allowing you to catch up on voice notes, meetings, and AI dictation at your natural volume without irritating anyone nearby.",
      benefits: [
        "Speak at your natural conversational cadence without having to strain or whisper",
        "Zero sound leakage to passengers sitting directly shoulder-to-shoulder with you",
        "Transform transit downtime into productive speech dictation sessions",
        "Quick physical mute button right on the side of the chassis",
      ],
    },
    {
      id: "office",
      title: "Open-Plan Offices & Coworking",
      subtitle: "Desk-Side Acoustic Phone Booth",
      icon: Building2,
      ambientNoise: "58 dB (Keyboard Clatter & Ambient Murmur)",
      containedNoise: "21 dB (Zero Distraction)",
      persona: "Software Engineers & Account Execs",
      description:
        "Phone booths and private meeting pods are almost always occupied when you need them. With NullWave, your desk becomes an instant acoustic sanctuary. Take spontaneous 1-on-1 calls, customer interviews, and voice memos right from your seat.",
      benefits: [
        "Eliminate the 15-minute search for an empty phone booth in your office",
        "Respect your colleagues' deep focus by stopping desk chatter before it travels",
        "Crisp 24-bit studio audio for Zoom, Teams, and Google Meet",
        "Bladeless cooling prevents face humidity during back-to-back 4-hour meeting blocks",
      ],
    },
    {
      id: "gaming",
      title: "Late-Night Gaming & Discord Comms",
      subtitle: "Midnight Vocal Freedom",
      icon: Gamepad2,
      ambientNoise: "32 dB (Quiet Night Room)",
      containedNoise: "20 dB (Sleep Safe)",
      persona: "Competitive Gamers & Streamers",
      description:
        "Intense multiplayer gaming calls for rapid, high-energy callouts and celebratory cheers. In shared apartments or family homes, late-night voice comms easily wake others. NullWave lets you play with full passion without disturbing a soul sleeping in the next room.",
      benefits: [
        "Deliver clear, high-energy team callouts on Discord at 2:00 AM",
        "Zero family or roommate complaints about late-night voice noise",
        "Ultra-low-latency Bluetooth 5.4 connection with zero audible lag",
        "Sub-14 dBA airflow prevents facial sweating during intense competitive matches",
      ],
    },
  ];

  const current = useCases[selectedCase];

  return (
    <div className="w-full bg-nw-pitch text-foreground pt-32 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nw-gold" />
            <span className="text-nw-gold font-mono text-xs uppercase tracking-widest">
              Deployment Contexts // Real-World Scenarios
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-medium text-white tracking-tight leading-[1.08]">
            Your Voice. <br />
            <span className="text-zinc-500 font-light">Every Environment.</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            From crowded transit hubs to late-night gaming rooms, discover how NullWave redefines personal communication across modern life.
          </p>
        </div>
      </section>

      {/* 2. Ticker */}
      <MarqueeTicker />

      {/* 3. Interactive Scenario Switcher */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto space-y-8">
        {/* Scenario Buttons */}
        <div className="flex flex-wrap gap-2.5 pb-2">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedCase === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(index)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-mono tracking-wider transition-all ${
                  isSelected
                    ? "bg-nw-gold text-nw-pitch font-semibold shadow-[0_0_20px_rgba(197,168,128,0.3)] scale-105"
                    : "bg-nw-card/70 text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/15"
                }`}
              >
                <Icon size={15} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Detailed Card */}
        <SpotlightCard className="p-8 sm:p-12 border border-white/[0.1] bg-nw-card/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-nw-gold font-mono text-xs uppercase tracking-widest">
                <current.icon size={16} />
                <span>{current.subtitle}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight leading-tight">
                {current.title}
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Key Operational Advantages:
                </div>
                <div className="space-y-2.5">
                  {current.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 font-light"
                    >
                      <Check size={16} className="text-nw-gold shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Telemetry & Persona Widget */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-nw-pitch/90 border border-white/[0.08] space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-zinc-500 uppercase text-[10px]">
                  <span>Acoustic Profile</span>
                  <span className="text-nw-gold">Empirical Test</span>
                </div>

                <div>
                  <span className="text-zinc-500 text-[10px] uppercase block mb-0.5">
                    Target Persona
                  </span>
                  <span className="text-white font-sans text-sm font-medium">
                    {current.persona}
                  </span>
                </div>

                <div>
                  <span className="text-zinc-500 text-[10px] uppercase block mb-0.5">
                    Ambient Noise Level
                  </span>
                  <span className="text-amber-400 font-bold">{current.ambientNoise}</span>
                </div>

                <div>
                  <span className="text-zinc-500 text-[10px] uppercase block mb-0.5">
                    NullWave Escape Volume
                  </span>
                  <span className="text-emerald-400 font-bold">{current.containedNoise}</span>
                </div>

                <div className="pt-2 border-t border-white/[0.06] text-[10px] text-zinc-500">
                  <span>RESULT: 100% SPEECH INAUDIBLE AT 1 METER</span>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* 4. Live Acoustic Simulator Test Bench */}
      <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto border-t border-white/[0.06]">
        <AcousticSimulator />
      </section>

      {/* 5. Bottom Reservation CTA */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto text-center">
        <SpotlightCard className="p-8 sm:p-14 border border-nw-gold/30 space-y-6">
          <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
            Ready for Effortless Voice Privacy?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to secure priority allocation in Batch 01.
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
