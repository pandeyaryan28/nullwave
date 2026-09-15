"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
            ? "py-3.5 bg-white/85 dark:bg-nw-pitch/90 backdrop-blur-xl border-b border-zinc-200 dark:border-white/[0.08] shadow-sm dark:shadow-none"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-zinc-900 dark:text-white tracking-widest font-sans font-medium text-xs hover:opacity-85 transition-opacity"
          >
            <div className="w-7 h-7 rounded-sm border border-zinc-300 dark:border-white/20 flex items-center justify-center bg-zinc-100 dark:bg-nw-card shadow-sm">
              <span className="font-mono text-[10px] text-nw-gold-dark dark:text-nw-gold font-bold">NW</span>
            </div>
            <span className="font-semibold tracking-[0.22em] text-xs uppercase text-zinc-900 dark:text-white">
              NULLWAVE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 dark:bg-nw-card/70 px-2 py-1 rounded-md border border-zinc-200 dark:border-white/[0.08] backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-sm transition-all ${
                    isActive
                      ? "text-zinc-950 dark:text-white bg-white dark:bg-white/[0.12] font-semibold shadow-xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Waitlist CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/waitlist"
              className="px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-md bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold transition-colors shadow-sm"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white rounded-md border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/[0.04]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
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
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 dark:bg-nw-pitch/95 backdrop-blur-2xl border-b border-zinc-200 dark:border-white/10 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-2.5 border-b border-zinc-200/70 dark:border-white/[0.05]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={14} className="text-zinc-400 dark:text-zinc-500" />
                </Link>
              ))}
              <Link
                href="/waitlist"
                className="mt-3 w-full py-3 text-center text-xs font-semibold uppercase tracking-wider bg-nw-gold text-nw-pitch rounded-md transition-colors shadow-md"
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
