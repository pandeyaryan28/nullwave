import Link from "next/link";
import { Coffee, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-nw-pitch border-t border-white/[0.08] py-16 sm:py-20 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white font-medium tracking-wider text-sm">
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-nw-card">
                <span className="font-mono text-[10px] text-nw-gold font-bold">NW</span>
              </div>
              <span className="font-semibold tracking-[0.2em] text-xs uppercase">NULLWAVE</span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm font-light leading-relaxed">
              A private voice wearable that lets you take calls and talk freely in public without anyone around you hearing what you say.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Product
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Company & Support */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300">
              Get in Touch
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="text-nw-gold hover:text-nw-gold-light transition-colors font-medium">
                  Join the Waitlist
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://buymeacoffee.com/pandeyaryan28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  <Coffee size={13} className="text-nw-gold" />
                  <span>Support the Project</span>
                  <ArrowUpRight size={11} className="text-zinc-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} NullWave Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Designed for voice privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
