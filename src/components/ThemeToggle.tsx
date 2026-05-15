import { motion } from "framer-motion";
import type { Theme } from "../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative inline-flex h-10 w-20 items-center rounded-full border border-slate-300/60 bg-white/80 p-1 text-slate-900 shadow-sm outline-none transition duration-300 hover:border-cyan-400/70 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:hover:border-cyan-300/60 dark:focus-visible:ring-offset-slate-950"
    >
      <span className="sr-only">Toggle theme</span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
        className={`absolute top-1 h-8 w-8 rounded-full shadow-sm ${
          isDark ? "left-[2.75rem] bg-slate-950" : "left-1 bg-white"
        }`}
      />
      <span
        aria-hidden="true"
        className={`relative z-10 grid h-8 w-8 place-items-center rounded-full transition ${
          isDark ? "text-slate-500" : "text-cyan-700"
        }`}
      >
        <span className="h-3.5 w-3.5 rounded-full border-2 border-current bg-current shadow-[0_0_0_4px_rgba(14,165,233,0.10)]" />
      </span>
      <span
        aria-hidden="true"
        className={`relative z-10 grid h-8 w-8 place-items-center rounded-full transition ${
          isDark ? "text-cyan-200" : "text-slate-400"
        }`}
      >
        <span className="h-4 w-4 rounded-full border border-current bg-transparent shadow-[-5px_0_0_0_current]" />
      </span>
    </button>
  );
}
