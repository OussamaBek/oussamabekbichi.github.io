import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 86)}%`,
  top: `${12 + ((index * 23) % 72)}%`,
  delay: index * 0.22,
  duration: 7 + (index % 5),
}));

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(74,222,128,0.11),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.58),rgba(248,250,252,0.9))] dark:bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(59,130,246,0.13),transparent_24%),linear-gradient(180deg,#05070a,#080c12_58%,#0b1118)]" />
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="noise-layer absolute inset-0 opacity-[0.055] dark:opacity-[0.075]" />
      <motion.div
        className="absolute left-[12%] top-[24%] h-64 w-64 rounded-full bg-cyan-300/[0.18] blur-3xl dark:bg-cyan-400/[0.12]"
        animate={{ x: [0, 18, -10, 0], y: [0, -16, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] right-[8%] h-72 w-72 rounded-full bg-emerald-300/[0.14] blur-3xl dark:bg-blue-500/[0.12]"
        animate={{ x: [0, -24, 12, 0], y: [0, 20, -12, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-500/50 shadow-[0_0_18px_rgba(34,211,238,0.35)] dark:bg-cyan-200/60"
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.16, 0.85, 0.18], y: [0, -18, 0] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
