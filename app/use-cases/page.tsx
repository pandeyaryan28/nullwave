"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Train, Coffee, Building2, Gamepad2, ArrowRight, Check } from "lucide-react";

export default function UseCasesPage() {
  const [selectedCase, setSelectedCase] = useState(0);

  const useCases = [
    {
      id: "cafe",
      title: "Cafés & Coffee Shops",
      subtitle: "Work from Anywhere",
      icon: Coffee,
      description:
        "Busy coffee shops are great places to work, but taking private calls is tricky with people sitting close by. NullWave keeps your conversations private so you can take important work calls without stepping outside.",
      benefits: [
        "Take sensitive business calls with complete peace of mind",
        "Coffee machine and blender noise won't get picked up by your mic",
        "No need to pack up your laptop to step outside for a quick call",
      ],
    },
    {
      id: "airport",
      title: "Airports & Travel",
      subtitle: "On the Move",
      icon: Plane,
      description:
        "Whether you are waiting at a busy departure gate or sitting in a transit lounge, NullWave lets you coordinate travel plans and join meetings without broadcasting your details to fellow passengers.",
      benefits: [
        "Take calls comfortably in crowded gate areas and airline lounges",
        "Use real-time translation to speak foreign languages smoothly",
        "Soft silicone ear loops stay secure and comfortable while walking",
      ],
    },
    {
      id: "train",
      title: "Trains & Public Commutes",
      subtitle: "Quiet Transit",
      icon: Train,
      description:
        "Speaking aloud on quiet commuter trains or buses can disturb people around you. NullWave traps your voice so you can talk at your normal volume without annoying anyone nearby.",
      benefits: [
        "Speak at a natural volume without raising your voice",
        "Zero sound leakage to passengers sitting right next to you",
        "Catch up on voice notes and calls during your daily commute",
      ],
    },
    {
      id: "office",
      title: "Open Offices & Coworking",
      subtitle: "Desk-Side Privacy",
      icon: Building2,
      description:
        "Meeting rooms and phone booths are often occupied when you need them. With NullWave, you can jump onto quick one-on-one calls and client demos right from your open desk.",
      benefits: [
        "Instant privacy without needing to book a phone booth",
        "Keep your colleagues focused by eliminating desk chatter",
        "Quick physical mute button right on the side of the mask",
      ],
    },
    {
      id: "gaming",
      title: "Late-Night Gaming & Voice Comms",
      subtitle: "Night-Time Freedom",
      icon: Gamepad2,
      description:
        "Playing multiplayer games or talking to friends late at night can easily wake up your family or roommates. NullWave lets you talk freely without disturbing anyone sleeping in the next room.",
      benefits: [
        "Talk with full energy without keeping the house awake",
        "Quiet airflow keeps your face cool during long gaming sessions",
        "Clear voice pickup for crisp Discord and team communication",
      ],
    },
  ];

  const current = useCases[selectedCase];

  return (
    <div className="w-full bg-nw-pitch text-foreground pt-28 pb-32">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-2xl">
          <span className="text-nw-gold font-mono text-xs uppercase tracking-wider block mb-3">
            Real-Life Use Cases
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-white tracking-tight leading-tight mb-6">
            Privacy wherever <br />
            <span className="text-zinc-500 font-light">you need to speak.</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            From crowded cafes to quiet trains, see how NullWave fits into your daily routine.
          </p>
        </div>
      </section>

      {/* 2. Interactive Scenario Switcher */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20">
        {/* Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-white/[0.06] pb-6">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedCase === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(index)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isSelected
                    ? "bg-nw-gold text-nw-pitch font-semibold shadow-md"
                    : "bg-nw-card text-zinc-400 border border-white/[0.06] hover:text-white hover:border-white/15"
                }`}
              >
                <Icon size={14} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-nw-card border border-white/[0.08]">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-nw-gold font-mono text-xs uppercase tracking-wider">
              <current.icon size={16} />
              <span>{current.subtitle}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
              {current.title}
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              {current.description}
            </p>

            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Why it helps:
              </div>
              <div className="space-y-2.5">
                {current.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300 font-light">
                    <Check size={16} className="text-nw-gold shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="px-6 sm:px-8 max-w-3xl mx-auto text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-nw-dark border border-white/[0.08] space-y-6">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
            Ready to talk freely in public?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to receive priority access to the first batch of NullWave.
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
