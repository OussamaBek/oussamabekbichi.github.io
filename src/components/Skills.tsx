import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { fadeUp, Section, staggerContainer } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="My toolkit spans backend engineering, AI, infrastructure, robotics, and full-stack work."
      intro="I like tools that help me build reliable systems, reason clearly about architecture, and move practical software into production."
    >
      <motion.div variants={staggerContainer} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <motion.article
            key={group.name}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-lg border border-slate-200/80 bg-white/[0.76] p-6 shadow-soft backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055] dark:shadow-soft-dark"
          >
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.name}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={`${group.name}-${skill}`}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
