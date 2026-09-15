"use client";

import React from "react";

interface MarqueeTickerProps {
  items?: string[];
  reverse?: boolean;
  className?: string;
}

const defaultItems = [
  "ACOUSTIC VOICE ISOLATION",
  "-38 dB ATTENUATION",
  "BLADELESS WHISPER TURBINE",
  "STUDIO MEMS BEAMFORMING",
  "88 GRAM ERGONOMIC CHASSIS",
  "MEDICAL-GRADE SILICONE",
  "18-HOUR TALK TIME",
  "BIDIRECTIONAL LIVE TRANSLATION",
  "ZERO AMBIENT LEAKAGE",
  "AROMATHERAPY CAPSULE SYSTEM",
];

export default function MarqueeTicker({
  items = defaultItems,
  reverse = false,
  className = "",
}: MarqueeTickerProps) {
  // Duplicate array for seamless infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-4 border-y border-white/[0.06] bg-nw-pitch/60 backdrop-blur-sm select-none ${className}`}
    >
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-colors">
              {item}
            </span>
            <span className="mx-6 w-1.5 h-1.5 rounded-full bg-nw-gold/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
