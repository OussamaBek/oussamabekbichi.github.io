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
      className={`scroll-mt-24 px-4 py-14 sm:px-8 sm:py-20 lg:px-10 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeUp} className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300 sm:mb-4 sm:text-xs sm:tracking-[0.28em]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-[0.95rem] leading-7 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
              {intro}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}
