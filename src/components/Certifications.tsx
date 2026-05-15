import { motion } from "framer-motion";
import { certifications } from "../data/certifications";
import { fadeUp, Section, staggerContainer } from "./Section";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="I keep information security close to my engineering work."
      intro="I care about production software, healthcare platforms, infrastructure, and secure operational habits."
    >
      <motion.div variants={staggerContainer} className="mt-10 grid gap-5 lg:grid-cols-2">
        {certifications.map((certification) => (
          <motion.article
            key={certification.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-lg border border-slate-200/80 bg-white/[0.76] p-6 shadow-soft backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055] dark:shadow-soft-dark sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              {certification.organization}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {certification.title}
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              {certification.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
