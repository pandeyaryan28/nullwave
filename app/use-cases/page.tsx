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
      subtitle: "Mobile Workspaces",
      icon: Coffee,
      description:
        "Busy coffee shops are great places to work, but taking confidential calls is stressful when strangers sit 3 feet away. NullWave absorbs your speech at the mouth so you can participate in high-stakes meetings without leaving your seat.",
      benefits: [
        "Take sensitive business calls with complete peace of mind",
        "Coffee grinder, espresso steam, and cafe background chatter are blocked from your mic",
        "No need to pack up your laptop to step outside into traffic for a quick sync",
      ],
    },
    {
      id: "airport",
      title: "Airports & International Travel",
      subtitle: "High-Density Transit",
      icon: Plane,
      description:
        "Whether you are waiting at a crowded departure gate or sitting in a transit lounge, NullWave lets you coordinate logistics and join executive briefings without broadcasting your itinerary or corporate data to fellow passengers.",
      benefits: [
        "Take calls comfortably in crowded gate areas and airline lounges",
        "Use on-device real-time neural translation to speak foreign languages smoothly",
        "Hypoallergenic liquid silicone ear loops stay secure and comfortable while walking",
      ],
    },
    {
      id: "train",
      title: "Trains & Daily Commutes",
      subtitle: "Quiet Transit Cars",
      icon: Train,
      description:
        "Speaking aloud on quiet commuter trains or transit coaches causes acoustic friction and irritates fellow commuters. NullWave traps your voice so you can talk at your normal volume without leaking sound to adjacent seats.",
      benefits: [
        "Speak at a natural conversational volume without raising or muffling your voice",
        "Zero sound leakage to passengers sitting directly beside or behind you",
        "Catch up on voice notes, voice AI workflows, and calls during your daily commute",
      ],
    },
    {
      id: "office",
      title: "Open Offices & Coworking",
      subtitle: "Desk-Side Voice Privacy",
      icon: Building2,
      description:
        "Meeting rooms and phone booths are constantly booked when you need them urgently. With NullWave, you can jump onto impromptu client demos and 1-on-1 team standups directly from your open desk.",
      benefits: [
        "Instant acoustic privacy without needing to reserve a soundproof phone booth",
        "Keep your team focused by eliminating ambient desk chatter from the room",
        "Quick physical mute button right on the side of the chassis",
      ],
    },
    {
      id: "gaming",
      title: "Late-Night Gaming & Discord",
      subtitle: "Night-Time Voice Comms",
      icon: Gamepad2,
      description:
        "Playing multiplayer games or strategizing with friends late at night easily wakes up family members or roommates. NullWave lets you communicate with full energy and natural excitement without sound leaking into neighboring bedrooms.",
      benefits: [
        "Communicate with full vocal energy without keeping the household awake",
        "Continuous bladeless airflow keeps your face cool during intense gaming sessions",
        "Studio MEMS pickup delivers crisp, low-latency Discord and team communication",
      ],
    },
  ];

  const current = useCases[selectedCase];

  return (
    <div className="w-full bg-background dark:bg-nw-pitch text-foreground pt-28 pb-32 transition-colors">
      {/* 1. Header */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-16">
        <div className="max-w-2xl">
          <span className="text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-widest block mb-3">
            Real-World Deployments
          </span>
          <h1 className="text-4xl sm:text-6xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight leading-tight mb-6">
            Privacy wherever <br />
            <span className="text-zinc-500 dark:text-zinc-400 font-light">you need to speak.</span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
            From crowded cafes to quiet trains, see how NullWave eliminates acoustic friction from your daily voice interactions.
          </p>
        </div>
      </section>

      {/* 2. Interactive Scenario Switcher (Clean Rectangular Tabs) */}
      <section className="px-6 sm:px-8 max-w-6xl mx-auto mb-20">
        <div className="flex flex-wrap gap-2 mb-8 border-b border-zinc-200 dark:border-white/[0.06] pb-6">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            const isSelected = selectedCase === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCase(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-mono uppercase tracking-wide transition-all ${
                  isSelected
                    ? "bg-nw-gold text-nw-pitch font-semibold shadow-md"
                    : "bg-white dark:bg-nw-card text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/[0.06] hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-white/15 shadow-xs"
                }`}
              >
                <Icon size={14} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] shadow-sm dark:shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-nw-gold-dark dark:text-nw-gold font-mono text-xs uppercase tracking-wider font-medium">
              <current.icon size={16} />
              <span>{current.subtitle}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
              {current.title}
            </h2>

            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg font-light leading-relaxed">
              {current.description}
            </p>

            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 font-medium">
                Key Operational Advantages:
              </div>
              <div className="space-y-2.5">
                {current.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-light">
                    <Check size={16} className="text-nw-gold-dark dark:text-nw-gold shrink-0" />
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
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] space-y-6 shadow-sm dark:shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
            Ready to speak freely in public?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Join the waitlist to receive priority access to the first production batch of NullWave.
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
