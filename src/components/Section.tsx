import type { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {intro}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}
