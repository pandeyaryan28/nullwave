"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, Radio } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Product", href: "/product" },
    { name: "How It Works", href: "/technology" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-nw-pitch/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white tracking-widest font-sans font-medium text-xs hover:opacity-90 transition-opacity group"
          >
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center bg-nw-card group-hover:border-nw-gold transition-colors shadow-inner">
              <span className="font-mono text-[9px] text-nw-gold font-bold">NW</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.25em] text-[11px] uppercase">
                NULLWAVE
              </span>
              <span className="font-mono text-[8px] tracking-wider text-zinc-500 hidden sm:block uppercase">
                Acoustic Hardware
              </span>
            </div>
          </Link>

          {/* Nav Links (Centered Capsule) */}
          <nav className="hidden md:flex items-center gap-1 bg-nw-card/70 px-3.5 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-xl shadow-lg">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/[0.12] font-medium shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Batch Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>BATCH 01 OPEN</span>
            </div>

            {/* CTA Button */}
            <Link
              href="/waitlist"
              className="px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center gap-1.5"
            >
              <span>Join Waitlist</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-white/[0.08] bg-nw-card/80"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[64px] z-40 bg-nw-pitch/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-nw-gold/10 border border-nw-gold/20 text-[10px] font-mono text-nw-gold w-max mb-1">
                <Radio size={11} className="animate-pulse" />
                <span>BATCH 01 RESERVATIONS ACTIVE</span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-sm font-medium text-zinc-300 hover:text-white py-3 border-b border-white/[0.06]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="text-zinc-500" />
                </Link>
              ))}

              <Link
                href="/waitlist"
                className="mt-4 w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider bg-nw-gold text-nw-pitch rounded-full transition-all shadow-[0_0_20px_rgba(197,168,128,0.3)] flex items-center justify-center gap-2"
              >
                <span>Reserve Priority Spot</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
