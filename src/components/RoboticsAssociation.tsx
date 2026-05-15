import { motion } from "framer-motion";
import { fadeUp, Section, staggerContainer } from "./Section";

const roboticsFocus = [
  "robotics learning",
  "embodied AI",
  "AI-powered simulation",
  "virtual robotics environments",
  "collaborative innovation",
  "intelligent robot development",
  "3D robotics spaces",
  "robotics experimentation",
];

export function RoboticsAssociation() {
  return (
    <Section
      id="robotics"
      eyebrow="Robotics Association"
      title="Open Robotic Metaverse Association"
      intro="I am involved in building a collaborative robotics platform focused on robotics learning, embodied AI, simulation, virtual robotics environments, and intelligent robot development."
    >
      <motion.div
        variants={staggerContainer}
        className="mt-8 grid gap-6 border-y border-slate-200/80 bg-slate-950 px-5 py-6 text-white shadow-soft-dark dark:border-white/10 sm:mt-10 sm:gap-8 sm:px-8 sm:py-8 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <motion.div variants={fadeUp}>
          <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            I connect this work with my robotics projects through simulation, intelligent interaction,
            experimentation, and shared learning environments.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {roboticsFocus.map((item) => (
              <span
                key={item}
                className="max-w-full break-words rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1.5 text-xs text-slate-200 sm:px-3 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="relative min-h-56 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] sm:min-h-64">
          <div className="robot-grid absolute inset-0" />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40"
            animate={{ scale: [1, 1.18, 1], opacity: [0.65, 0.28, 0.65] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_34px_rgba(103,232,249,0.65)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-1/2 h-px w-28 origin-left bg-gradient-to-r from-cyan-300 to-transparent" />
          </motion.div>
          {["learning", "simulation", "robotics", "AI"].map((label, index) => (
            <motion.span
              key={label}
              className="absolute rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-medium text-slate-200"
              style={{
                left: `${16 + index * 18}%`,
                top: `${22 + (index % 2) * 44}%`,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
