import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nw: {
          pitch: "#030304",
          black: "#070709",
          dark: "#0c0c10",
          card: "#121217",
          cardHover: "#181820",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.16)",
          gold: {
            DEFAULT: "#C5A880",
            light: "#E3CAA5",
            dark: "#9D7D54",
            subtle: "rgba(197, 168, 128, 0.12)",
          },
          muted: "#8A8A93",
          dim: "#52525A",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Geist"',
          '"Inter"',
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          '"Geist Mono"',
          '"JetBrains Mono"',
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "wave-pulse": "wavePulse 2s ease-in-out infinite",
      },
      keyframes: {
        wavePulse: {
          "0%, 100%": { transform: "scaleY(0.3)", opacity: "0.4" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
