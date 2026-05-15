import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data/links";
import { useTheme } from "../hooks/useTheme";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-slate-200/70 bg-white/[0.78] shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/70"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          aria-label="Go to top"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-sm font-semibold tracking-wide text-slate-950 shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:border-cyan-400 dark:border-white/10 dark:bg-white/[0.08] dark:text-white">
            OB
          </span>
          <span className="hidden text-sm font-medium text-slate-700 transition group-hover:text-slate-950 dark:text-slate-300 dark:group-hover:text-white sm:block">
            Oussama Bekbichi
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 outline-none transition hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-emerald-300 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-300/70 bg-white/80 text-slate-950 outline-none transition hover:border-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/[0.08] dark:text-white dark:focus-visible:ring-offset-slate-950 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-5 bg-current transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-5 bg-current transition ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden border-slate-200/70 bg-white/[0.92] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/[0.92] lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-5 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-400 dark:text-slate-200 dark:hover:bg-white/[0.08] dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
