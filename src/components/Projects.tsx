import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Section, staggerContainer } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="I build systems where AI, infrastructure, backend engineering, and usability meet."
      intro="My project work leans toward practical platforms, intelligent tools, robotics, privacy tooling, and machine learning applications."
    >
      <motion.div variants={staggerContainer} className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
