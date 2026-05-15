import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.10)",
        "soft-dark": "0 24px 90px rgba(0, 0, 0, 0.34)",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(18px, -16px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.42" },
          "50%": { opacity: "0.18" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        "grid-pulse": "gridPulse 8s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
