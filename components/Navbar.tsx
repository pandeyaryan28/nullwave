"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-nw-pitch/85 backdrop-blur-xl border-b border-white/[0.06]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-white tracking-widest font-sans font-medium text-xs hover:opacity-85 transition-opacity"
          >
            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-nw-card">
              <span className="font-mono text-[9px] text-nw-gold font-bold">NW</span>
            </div>
            <span className="font-semibold tracking-[0.2em] uppercase">NULLWAVE</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs tracking-wide rounded-full transition-all ${
                    isActive
                      ? "text-white bg-white/[0.1] font-medium"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Waitlist CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/waitlist"
              className="px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-full bg-white/[0.08] text-white border border-white/15 hover:border-nw-gold hover:bg-white/[0.12] transition-all"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-nw-pitch/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-sm font-medium text-zinc-300 hover:text-white py-2.5 border-b border-white/[0.05]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="text-zinc-500" />
                </Link>
              ))}
              <Link
                href="/waitlist"
                className="mt-3 w-full py-3 text-center text-xs font-semibold uppercase tracking-wider bg-nw-gold text-nw-pitch rounded-full transition-all"
              >
                Join Waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
