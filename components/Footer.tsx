"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Coffee, ArrowUpRight, ShieldCheck, Radio } from "lucide-react";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-nw-pitch border-t border-white/[0.08] pt-20 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-white font-medium tracking-wider text-sm group"
            >
              <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-nw-card group-hover:border-nw-gold transition-colors">
                <span className="font-mono text-[9px] text-nw-gold font-bold">NW</span>
              </div>
              <span className="font-semibold tracking-[0.25em] text-xs uppercase">
                NULLWAVE INC.
              </span>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm font-light leading-relaxed">
              Engineering the future of private voice interaction. High-performance acoustic containment wearables for confidential communication, seamless AI workflows, and public sanctuary.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-nw-card border border-white/[0.06] text-[10px] font-mono text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SYSTEMS OPERATIONAL</span>
              </div>
              {currentTime && (
                <div className="px-3 py-1 rounded-full bg-nw-card border border-white/[0.06] text-[10px] font-mono text-zinc-500">
                  {currentTime}
                </div>
              )}
            </div>
          </div>

          {/* Links Column 1: Hardware & Tech */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
              Hardware
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  Acoustic Engineering
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  Real-World Scenarios
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Specs */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
              Specifications
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>-38 dB Containment</li>
              <li>&lt; 14 dB Turbine</li>
              <li>88g Total Mass</li>
              <li>18h Battery Run</li>
            </ul>
          </div>

          {/* Links Column 3: Company & Early Access */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
              Early Access
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Founders
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="text-nw-gold hover:text-nw-gold-light transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>Join Batch 01 Waitlist</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://buymeacoffee.com/pandeyaryan28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-zinc-300 hover:text-white border border-white/[0.08] text-[11px] transition-all"
                >
                  <Coffee size={13} className="text-nw-gold" />
                  <span>Support Independent Hardware</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} NULLWAVE INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>PATENTS PENDING</span>
            <span>•</span>
            <span>SHIPPING GLOBALLY Q3</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
