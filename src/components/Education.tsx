import { motion } from "framer-motion";
import { education } from "../data/education";
import { fadeUp, Section, staggerContainer } from "./Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="My academic path connects mathematics, software engineering, and data science."
      intro="I keep building on a foundation that mixes applied mathematics, computer science, machine learning, and practical software development."
    >
      <motion.div variants={staggerContainer} className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
        {education.map((item) => (
          <motion.article
            key={`${item.degree}-${item.university}`}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-lg border border-slate-200/80 bg-white/[0.76] p-5 shadow-soft backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055] dark:shadow-soft-dark sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 sm:text-sm sm:tracking-[0.2em]">
              {item.dates ?? "Computer Science"}
            </p>
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {item.degree}
            </h3>
            <p className="mt-3 font-medium text-slate-700 dark:text-slate-200">{item.university}</p>
            {item.grade ? (
              <p className="mt-4 w-fit rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:bg-emerald-300/10 dark:text-emerald-100">
                {item.grade}
              </p>
            ) : null}
            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            {item.topics ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                  className="max-w-full break-words rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300 sm:px-3"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
