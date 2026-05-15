import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { fadeUp, Section, staggerContainer } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="I work across backend systems, healthcare platforms, robotics, and infrastructure."
      intro="I like engineering work where architecture, reliability, data, deployment, and real users all meet in the same room."
      className="relative"
    >
      <div className="relative mt-12">
        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-cyan-400 via-emerald-300 to-transparent md:block"
        />
        <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6">
          {experience.map((item) => (
            <motion.article
              key={`${item.organization}-${item.dates}`}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="group relative rounded-lg border border-slate-200/80 bg-white/[0.76] p-5 shadow-soft backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055] dark:shadow-soft-dark md:ml-12 sm:p-8"
            >
              <span className="absolute -left-[3.05rem] top-8 hidden h-5 w-5 rounded-full border-4 border-white bg-cyan-500 shadow-[0_0_0_8px_rgba(34,211,238,0.10)] dark:border-slate-950 md:block" />
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300 sm:text-sm sm:tracking-[0.2em]">
                    {item.dates}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                    {item.role}
                  </h3>
                  <p className="mt-2 break-words text-sm font-medium text-slate-700 dark:text-slate-200 sm:text-base">
                    {item.organization}
                    {item.location ? <span className="text-slate-400"> / {item.location}</span> : null}
                  </p>
                </div>
                {item.industry ? (
                  <span className="w-fit rounded-full border border-cyan-500/20 bg-cyan-500/[0.08] px-3 py-1.5 text-sm font-medium text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/[0.08] dark:text-cyan-100">
                    {item.industry}
                  </span>
                ) : null}
              </div>

              <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
                {item.summary}
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">I focus on</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.focus.map((focus) => (
                      <span
                        key={focus}
                        className="max-w-full break-words rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-600 transition group-hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300 sm:px-3 sm:text-sm"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                  {item.technologies ? (
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">I mainly work with</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="max-w-full break-words rounded-full bg-slate-950 px-2.5 py-1.5 text-xs text-white dark:bg-white dark:text-slate-950 sm:px-3 sm:text-sm"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <ul className="space-y-3">
                  {item.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500 dark:bg-emerald-300" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
