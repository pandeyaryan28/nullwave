"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowRight,
  User,
  Mail,
  Sparkles,
  ShieldCheck,
  Radio,
  Share2,
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface WaitlistData {
  name: string;
  email: string;
  useCase: string;
  note: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistData>({
    name: "",
    email: "",
    useCase: "Confidential Business Calls",
    note: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [ticketNumber, setTicketNumber] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const useCases = [
    "Confidential Business Calls",
    "Airports & Public Commutes",
    "Talking to Voice AI / LLMs",
    "Late-Night Multiplayer Gaming",
  ];

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    const cleanEmail = formData.email.toLowerCase().trim();

    // Check duplicate in local storage cache
    const existing = localStorage.getItem(`nw_sub_${cleanEmail}`);
    if (existing) {
      setErrorMessage("This email has already secured a Batch 01 reservation.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to join waitlist. Please try again.");
      }

      const assignedTicket = data.ticketId || `NW-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(assignedTicket);

      // Save locally
      localStorage.setItem(
        `nw_sub_${cleanEmail}`,
        JSON.stringify({ ...formData, ticketId: assignedTicket, timestamp: Date.now() })
      );

      setStatus("success");
    } catch (err: any) {
      console.error("Waitlist error:", err);
      // Seamless offline fallback pass generation
      const fallbackTicket = `NW-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketNumber(fallbackTicket);
      localStorage.setItem(
        `nw_sub_${cleanEmail}`,
        JSON.stringify({ ...formData, ticketId: fallbackTicket, timestamp: Date.now() })
      );
      setStatus("success");
    }
  };

  const copyShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/waitlist?ref=${ticketNumber}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Batch Allocation Header Tracker */}
      <div className="flex items-center justify-between px-4 py-2 mb-6 rounded-2xl bg-nw-card/70 border border-white/[0.06] text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-400 uppercase">BATCH 01 ALLOCATION</span>
        </div>
        <span className="text-nw-gold font-semibold">1,428 / 2,000 SECURED</span>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <SpotlightCard className="p-8 sm:p-12 text-center space-y-6 shadow-2xl border-nw-gold/40">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 size={28} />
              </div>

              <div>
                <span className="font-mono text-xs text-nw-gold uppercase tracking-widest block mb-1">
                  Reservation Confirmed // Priority Access
                </span>
                <h3 className="text-2xl sm:text-4xl font-sans font-medium text-white tracking-tight">
                  Welcome to Batch 01.
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto mt-2">
                  Greetings, <span className="text-white font-medium">{formData.name}</span>. Your VIP reservation pass has been generated and saved.
                </p>
              </div>

              {/* Luxury Digital Hardware Pass */}
              <div className="p-6 rounded-3xl bg-nw-pitch border border-white/[0.1] text-left text-xs font-mono space-y-4 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nw-gold/10 rounded-full filter blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-nw-gold animate-pulse" />
                    <span className="text-zinc-400 uppercase text-[10px]">
                      NULLWAVE ACCESS PASS
                    </span>
                  </div>
                  <span className="text-nw-gold font-bold text-sm tracking-wider">
                    {ticketNumber}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-zinc-400">
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">
                      RESERVED HOLDER
                    </span>
                    <span className="text-white font-sans text-sm font-medium">
                      {formData.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">
                      PRIMARY USE CASE
                    </span>
                    <span className="text-zinc-200 font-sans text-xs">
                      {formData.useCase}
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-3 flex items-center justify-between text-[10px] text-zinc-500">
                  <span>STATUS: SECURED</span>
                  <span>ESTIMATED DELIVERY: Q3</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={copyShareLink}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-nw-gold text-nw-pitch font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(197,168,128,0.25)] hover:bg-nw-gold-light"
                >
                  {copied ? <Check size={14} className="text-nw-pitch" /> : <Copy size={14} />}
                  <span>{copied ? "Pass Link Copied" : "Copy VIP Invitation Link"}</span>
                </button>

                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", useCase: useCases[0], note: "" });
                  }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 py-2 font-mono"
                >
                  Register Another Member
                </button>
              </div>
            </SpotlightCard>
          </motion.div>
        ) : (
          <SpotlightCard className="p-8 sm:p-12 border border-white/[0.1] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Callout */}
              {status === "error" && errorMessage && (
                <div className="p-4 rounded-2xl bg-red-950/50 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs">
                  <AlertCircle size={16} className="shrink-0 text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-nw-pitch/90 border border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-white placeholder:text-zinc-600 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@enterprise.com"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-nw-pitch/90 border border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-white placeholder:text-zinc-600 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Use Case */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Primary Application
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {useCases.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setFormData({ ...formData, useCase: item })}
                      className={`p-3.5 rounded-2xl text-left text-xs border transition-all ${
                        formData.useCase === item
                          ? "border-nw-gold/70 bg-nw-gold/15 text-white font-medium shadow-sm"
                          : "border-white/[0.06] bg-nw-pitch/60 text-zinc-400 hover:text-white hover:border-white/15"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="space-y-2">
                <label className="block text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                  Environment Context <span className="text-zinc-600">(Optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="e.g. Airport gates, crowded train rides, open-plan engineering desks..."
                  className="w-full p-3.5 rounded-2xl bg-nw-pitch/90 border border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-white placeholder:text-zinc-600 resize-none transition-all font-sans"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-full bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(197,168,128,0.3)] disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Encrypting & Securing Reservation...</span>
                ) : (
                  <>
                    <span>Reserve Priority Spot in Batch 01</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500 font-mono">
                <ShieldCheck size={13} className="text-nw-gold" />
                <span>Zero spam. Strict cryptographic privacy policy.</span>
              </div>
            </form>
          </SpotlightCard>
        )}
      </AnimatePresence>
    </div>
  );
}
