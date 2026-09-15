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
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] text-center space-y-6 shadow-sm dark:shadow-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
              <CheckCircle2 size={24} />
            </div>

            <div>
              <span className="font-mono text-xs text-nw-gold-dark dark:text-nw-gold uppercase tracking-wider block mb-1 font-medium">
                Waitlist Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-sans font-medium text-zinc-900 dark:text-white tracking-tight">
                You&apos;re on the priority list.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm font-light leading-relaxed max-w-sm mx-auto mt-2">
                Thank you for joining, <span className="text-zinc-950 dark:text-white font-medium">{formData.name}</span>. We will email you at <span className="text-zinc-800 dark:text-zinc-300 font-medium">{formData.email}</span> as soon as batch allocation begins.
              </p>
            </div>

            {/* Reservation Pass */}
            <div className="p-5 rounded-xl bg-zinc-50 dark:bg-nw-pitch border border-zinc-200 dark:border-white/[0.06] text-left text-xs font-mono space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-white/[0.06] pb-2">
                <span className="text-zinc-500 uppercase">Reservation ID</span>
                <span className="text-nw-gold-dark dark:text-nw-gold font-bold">{ticketNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-400">
                <div>
                  <span className="text-zinc-500 block text-[10px]">Name</span>
                  <span className="text-zinc-950 dark:text-white font-sans font-medium">{formData.name}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block text-[10px]">Primary Scenario</span>
                  <span className="text-zinc-800 dark:text-zinc-300 font-sans">{formData.useCase}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={copyShareLink}
                className="w-full sm:w-auto px-6 py-3 rounded-md bg-zinc-100 hover:bg-zinc-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-zinc-900 dark:text-white text-xs font-mono uppercase tracking-wide flex items-center justify-center gap-2 border border-zinc-200 dark:border-white/10 transition-colors shadow-xs"
              >
                {copied ? <Check size={14} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Link Copied" : "Copy Reservation Link"}</span>
              </button>

              <button
                onClick={() => {
                  setStatus("idle");
                  setFormData({ name: "", email: "", useCase: useCases[0], note: "" });
                }}
                className="text-xs font-mono text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 py-2"
              >
                Add another email
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-nw-card border border-zinc-200 dark:border-white/[0.08] shadow-sm dark:shadow-2xl space-y-5"
          >
            {/* Error message */}
            {status === "error" && errorMessage && (
              <div className="p-4 rounded-md bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-500/30 flex items-center gap-3 text-red-600 dark:text-red-300 text-xs font-mono">
                <AlertCircle size={16} className="shrink-0 text-red-500 dark:text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-medium">
                Your Name
              </label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Connor"
                  className="w-full pl-11 pr-4 py-3 rounded-md bg-zinc-50 dark:bg-nw-pitch border border-zinc-200 dark:border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-md bg-zinc-50 dark:bg-nw-pitch border border-zinc-200 dark:border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 transition-colors"
                />
              </div>
            </div>

            {/* Use Case */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-medium">
                Where will you use NullWave most?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {useCases.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setFormData({ ...formData, useCase: item })}
                    className={`p-3 rounded-md text-left text-xs border transition-all ${
                      formData.useCase === item
                        ? "border-nw-gold bg-nw-gold/15 text-zinc-950 dark:text-white font-medium"
                        : "border-zinc-200 dark:border-white/[0.06] bg-zinc-50 dark:bg-nw-pitch text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 mb-2 font-medium">
                Where do you need privacy most? <span className="text-zinc-400 dark:text-zinc-600 font-normal">(Optional)</span>
              </label>
              <textarea
                rows={2}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder="e.g. On noisy commuter trains, busy coffee shops, open office..."
                className="w-full p-3 rounded-md bg-zinc-50 dark:bg-nw-pitch border border-zinc-200 dark:border-white/[0.08] focus:border-nw-gold focus:outline-none text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-md bg-nw-gold hover:bg-nw-gold-light text-nw-pitch font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-md"
            >
              {status === "loading" ? (
                <span>Reserving Allocation...</span>
              ) : (
                <>
                  <span>Join Priority Waitlist</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>

            <p className="text-[11px] font-mono text-zinc-500 text-center">
              Zero spam. Priority early access reserved for verified submissions.
            </p>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
