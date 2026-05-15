import { motion } from "framer-motion";
import { fadeUp, Section, staggerContainer } from "./Section";

const qualities = ["scalable", "modular", "maintainable", "technically clean", "production-oriented"];

const interests = [
  "intelligent systems",
  "local AI tooling",
  "retrieval-augmented generation",
  "scalable APIs",
  "robotics",
  "backend infrastructure",
  "deployment systems",
  "software architecture",
  "Dockerized platforms",
  "AI-powered applications",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I build practical systems with clean engineering underneath."
      intro="I am a software developer with a background in applied mathematics and computer science. My work combines backend engineering, AI/RAG systems, healthcare software, robotics, deployment infrastructure, and full-stack platform development."
    >
      <motion.div
        variants={staggerContainer}
        className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <motion.div
          variants={fadeUp}
          className="rounded-lg border border-slate-200/80 bg-white/[0.72] p-6 shadow-soft backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055] dark:shadow-soft-dark sm:p-8"
        >
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
            I enjoy building systems that are scalable, modular, maintainable, technically clean, and
            production-oriented. I care about architecture that stays understandable after the first
            version ships, and I like turning complex workflows into software that feels steady in
            real use.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            I am currently pursuing a Master of Science in Data Science at FernUniversität in Hagen,
            where I am expanding my work around AI, machine learning, intelligent systems, and
            data-driven software engineering.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {qualities.map((quality) => (
              <span
                key={quality}
                className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-sm font-medium text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-300/[0.08] dark:text-emerald-100"
              >
                {quality}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-lg border border-slate-200/80 bg-slate-950 p-6 text-white shadow-soft-dark dark:border-white/10 dark:bg-white/[0.06] sm:p-8"
        >
          <h3 className="text-lg font-semibold">I am especially interested in</h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-sm text-slate-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
