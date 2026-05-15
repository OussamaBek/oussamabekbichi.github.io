import { motion } from "framer-motion";
import { links } from "../data/links";
import { fadeUp, Section, staggerContainer } from "./Section";

const contactLinks = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedIn },
  { label: "Email", href: links.email },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect."
      intro="I am interested in backend engineering, AI/RAG systems, robotics, healthcare software, infrastructure, and intelligent platforms."
      className="pb-12"
    >
      <motion.div
        variants={staggerContainer}
        className="mt-8 overflow-hidden rounded-lg border border-slate-200/80 bg-slate-950 p-5 text-white shadow-soft-dark dark:border-white/10 sm:mt-10 sm:p-8"
      >
        <motion.div variants={fadeUp} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              I am open to thoughtful conversations around backend systems, local AI tools, scalable
              APIs, infrastructure, robotics, and healthcare software.
            </p>
            <a
              href={links.email}
              className="mt-5 inline-flex max-w-full break-all rounded-full text-base font-semibold text-cyan-200 outline-none transition hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:text-lg"
            >
              {links.emailLabel}
            </a>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] px-3 py-3 text-sm font-semibold text-white outline-none transition hover:border-cyan-300/50 hover:bg-white/[0.11] focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-5"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
