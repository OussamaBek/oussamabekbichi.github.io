import { motion } from "framer-motion";
import { links } from "../data/links";
import { AnimatedBackground } from "./AnimatedBackground";

const introWords = ["backend systems", "AI/RAG tools", "robotics projects", "intelligent platforms"];

const buttons = [
  { label: "View Projects", href: "#projects", variant: "primary" },
  { label: "Experience", href: "#experience", variant: "secondary" },
  { label: "GitHub", href: links.github, variant: "secondary", external: true },
  { label: "LinkedIn", href: links.linkedIn, variant: "secondary", external: true },
  { label: "Contact", href: "#contact", variant: "secondary" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate -mt-20 flex min-h-[92svh] items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-10"
    >
      <AnimatedBackground />
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_16px_rgba(34,211,238,0.55)]" />
            <span>Software Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
            className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Oussama Bekbichi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: "easeOut" }}
            className="mt-7 max-w-4xl text-balance text-2xl font-medium leading-tight text-slate-800 dark:text-slate-100 sm:text-3xl"
          >
            I build backend systems, AI tools, robotics projects, and intelligent software platforms.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg"
          >
            I design and build practical software systems across backend engineering, AI/RAG, robotics,
            healthcare software, and full-stack platforms - with a strong focus on clean architecture,
            scalability, infrastructure, and real-world usability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58, ease: "easeOut" }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {buttons.map((button) => (
              <motion.a
                key={button.label}
                href={button.href}
                target={button.external ? "_blank" : undefined}
                rel={button.external ? "noreferrer" : undefined}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-full px-5 py-3 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 ${
                  button.variant === "primary"
                    ? "bg-slate-950 text-white shadow-soft hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-50"
                    : "border border-slate-300/80 bg-white/70 text-slate-800 shadow-sm backdrop-blur-xl hover:border-cyan-400 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-cyan-300 dark:hover:text-white"
                }`}
              >
                {button.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
          className="mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {introWords.map((word, index) => (
            <div
              key={word}
              className="relative overflow-hidden rounded-lg border border-slate-200/70 bg-white/[0.55] px-4 py-3 text-sm font-medium text-slate-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300"
            >
              <span className="relative z-10">{word}</span>
              <motion.span
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
                animate={{ x: ["-120%", "240%"] }}
                transition={{ duration: 4.5, delay: index * 0.35, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
