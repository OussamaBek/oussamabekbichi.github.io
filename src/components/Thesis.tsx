import { motion } from "framer-motion";
import { fadeUp, Section, staggerContainer } from "./Section";

const focus = [
  "software modernization",
  "desktop application architecture",
  "legacy migration",
  "UI modernization",
  "Windows application engineering",
];

const technologies = ["C#", "WinForms", "WPF", "WinUI", ".NET", "Visual Studio"];

export function Thesis() {
  return (
    <Section
      id="thesis"
      eyebrow="Thesis"
      title="Migration strategies for complex Windows Forms C# programs into responsive WinUI applications"
      intro="For my bachelor thesis, I worked on strategies for migrating complex Windows Forms C# applications into modern responsive WinUI applications."
    >
      <motion.div
        variants={staggerContainer}
        className="mt-8 grid gap-5 rounded-lg border border-slate-200/80 bg-gradient-to-br from-white to-cyan-50/60 p-5 shadow-soft dark:border-white/10 dark:from-white/[0.075] dark:to-cyan-400/[0.035] dark:shadow-soft-dark sm:mt-10 sm:gap-6 sm:p-8 lg:grid-cols-2"
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">I focused on</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {focus.map((item) => (
              <span
                key={item}
                className="max-w-full break-words rounded-full border border-cyan-500/20 bg-cyan-500/[0.08] px-2.5 py-1.5 text-xs text-cyan-900 dark:border-cyan-300/20 dark:bg-cyan-300/[0.08] dark:text-cyan-100 sm:px-3 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">I used</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span
                key={item}
                className="max-w-full break-words rounded-full bg-slate-950 px-2.5 py-1.5 text-xs text-white dark:bg-white dark:text-slate-950 sm:px-3 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
