"use client";

import { motion } from "framer-motion";
import { fadeUp, smoothEase } from "./Section";

const links = [
  { label: "Email", value: "chaitanyaarige@gmail.com", href: "mailto:chaitanyaarige@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chaitanyaarige",
    href: "https://www.linkedin.com/in/chaitanyaarige",
  },
  { label: "GitHub", value: "github.com/krigez", href: "https://github.com/krigez" },
];

const ContactSection = () => (
  <motion.div
    {...fadeUp}
    transition={{ duration: 0.7, ease: smoothEase }}
    className="glass relative mx-auto max-w-4xl overflow-hidden p-8 text-center md:p-12"
  >
    <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
    <p className="relative mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
      I&apos;m open to Senior Software Engineer and Technical Lead roles in
      full-stack JavaScript, React and Node.js, especially teams adopting AI in
      how they build.
    </p>
    <a
      href="mailto:chaitanyaarige@gmail.com"
      className="relative mt-8 inline-block rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.03]"
    >
      Say hello
    </a>
    <ul className="relative mt-10 grid gap-4 sm:grid-cols-3">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="block rounded-xl border border-slate-900/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 transition-colors hover:border-blue-400/50"
          >
            <span className="block text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">{l.label}</span>
            <span className="mt-1 block break-all text-sm text-slate-900 dark:text-white">{l.value}</span>
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ContactSection;
