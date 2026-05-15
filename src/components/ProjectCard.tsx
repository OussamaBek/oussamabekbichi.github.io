import { motion } from "framer-motion";
import type { ProjectItem } from "../data/projects";
import { fadeUp } from "./Section";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-lg border border-slate-200/80 bg-white/[0.78] shadow-soft backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055] dark:shadow-soft-dark ${
        project.featured ? "p-6 sm:p-8 lg:col-span-2 lg:p-10" : "p-6 sm:p-7"
      }`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-300/[0.16] blur-3xl dark:bg-cyan-400/[0.12]" />
        <div className="absolute -bottom-24 left-1/4 h-48 w-48 rounded-full bg-emerald-300/[0.16] blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="relative">
        {project.type ? (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {project.type}
          </p>
        ) : null}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <h3
            className={`font-semibold tracking-tight text-slate-950 dark:text-white ${
              project.featured ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          {project.featured ? (
            <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-sm font-semibold text-emerald-800 dark:border-emerald-300/20 dark:bg-emerald-300/[0.08] dark:text-emerald-100">
              Flagship build
            </span>
          ) : null}
        </div>

        <p
          className={`mt-5 text-slate-600 dark:text-slate-300 ${
            project.featured ? "max-w-4xl text-base leading-8 sm:text-lg" : "text-sm leading-7"
          }`}
        >
          {project.summary}
        </p>

        <div className={`mt-7 grid gap-6 ${project.featured ? "lg:grid-cols-3" : ""}`}>
          {project.architecture ? (
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Architecture highlights</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.architecture.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.08] px-3 py-1.5 text-sm text-cyan-900 dark:border-cyan-300/20 dark:bg-cyan-300/[0.08] dark:text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {project.features ? (
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Main features</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.features.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Technical focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-sm font-semibold text-slate-950 dark:text-white">Technologies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-slate-950 px-3 py-1.5 text-sm text-white dark:bg-white dark:text-slate-950"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
