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
} from "lucide-react";

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
    useCase: "Work & Business Calls",
    note: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [ticketNumber, setTicketNumber] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const useCases = [
    "Work & Business Calls",
    "Travel & Public Commutes",
    "Late-Night Gaming",
    "Talking to Voice AI",
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
      setErrorMessage("This email is already on the waitlist.");
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
      // Fallback ticket generation if network offline
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
    navigator.clipboard.writeText(`https://nullwave.io/waitlist?ref=${ticketNumber}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-3xl bg-nw-card border border-white/[0.08] text-center space-y-6 shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <span className="font-mono text-xs text-nw-gold uppercase tracking-wider block mb-1">
                Waitlist Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-medium text-white tracking-tight">
                You&apos;re on the list!
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm mx-auto mt-2">
                Thank you for joining, <span className="text-white font-medium">{formData.name}</span>. We will email you at <span className="text-zinc-300">{formData.email}</span> when the first batch is ready.
              </p>
            </div>

            {/* Simple Reservation Pass */}
            <div className="p-5 rounded-2xl bg-nw-pitch border border-white/[0.06] text-left text-xs font-mono space-y-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                <span className="text-zinc-500 uppercase">Reservation Pass</span>
                <span className="text-nw-gold font-bold">{ticketNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-zinc-400">
                <div>
                  <span className="text-zinc-500 block text-[10px]">Name</span>
                  <span className="text-white font-sans">{formData.name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">Primary Use</span>
                  <span className="text-zinc-300 font-sans">{formData.useCase}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={copyShareLink}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Link Copied" : "Copy Waitlist Link"}</span>
              </button>

              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", useCase: useCases[0], note: "" });
                }}
                className="text-xs text-zinc-500 hover:text-zinc-300 py-2"
              >
                Add another email
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-nw-card border border-white/[0.08] shadow-2xl space-y-5"
          >
            {/* Error message */}
            {status === "error" && errorMessage && (
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs">
                <AlertCircle size={16} className="shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Connor"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-nw-pitch border border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-white placeholder:text-zinc-600 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-nw-pitch border border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-white placeholder:text-zinc-600 transition-all"
                />
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                How will you use NullWave most?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {useCases.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setFormData({ ...formData, useCase: item })}
                    className={`p-3 rounded-xl text-left text-xs border transition-all ${
                      formData.useCase === item
                        ? "border-nw-gold bg-nw-gold/10 text-white font-medium"
                        : "border-white/[0.06] bg-nw-pitch text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Where do you need privacy most? <span className="text-zinc-600">(Optional)</span>
              </label>
              <textarea
                rows={2}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="e.g. On noisy trains, busy coffee shops, open office..."
                className="w-full p-3 rounded-xl bg-nw-pitch border border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-white placeholder:text-zinc-600 resize-none transition-all"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-full bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
            >
              {status === "loading" ? (
                <span>Adding you to the list...</span>
              ) : (
                <>
                  <span>Join the Waitlist</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>

            <p className="text-[11px] text-zinc-500 text-center font-light">
              No spam. We will only email you with important release updates.
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
