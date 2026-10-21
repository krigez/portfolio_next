"use client";

import { motion } from "framer-motion";
import { fadeUp, smoothEase } from "./Section";

const pillars = [
  {
    title: "Full-stack delivery",
    text: "7+ years building web apps with JavaScript, TypeScript, React, Vue.js and Node.js on PostgreSQL, MongoDB and DynamoDB.",
  },
  {
    title: "Technical leadership",
    text: "4+ years leading a development team at Cognizant on Pegasystems' enterprise software: sprint planning, code reviews, mentoring and production support.",
  },
  {
    title: "Security & quality",
    text: "XSS and data-leak fixes, ADA / WCAG accessibility, P1/P2 incident resolution, and a legacy UI migrated to React 19.",
  },
  {
    title: "AI-assisted engineering",
    text: "GitHub Copilot with custom agent instructions and MCP tools every day, plus a Python foundation from scientific computing.",
  },
];

const personal = [
  {
    icon: "M3 3v18h18M7 15l4-4 3 3 5-6",
    title: "Data stories",
    text: "I like finding the story in a dataset and turning it into a clear chart that helps people decide, using Python, NumPy, pandas and Matplotlib.",
  },
  {
    icon: "M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a4 4 0 0 0 8 0v-1a3 3 0 0 0 2-5 3 3 0 0 0-2-5V6a4 4 0 0 0-4-4zM12 2v20",
    title: "Learning machine learning",
    text: "Building and training models in Python and PyTorch, and combining them with engineering to make products that feel smart and human.",
  },
  {
    icon: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z",
    title: "Off the keyboard",
    text: "Sketching ideas, reading about emerging tech, and thinking about how design and AI can make digital experiences more intuitive.",
  },
];

const AboutSection = () => (
  <>
  <div className="grid gap-10 md:grid-cols-5">
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, ease: smoothEase }}
      className="md:col-span-2 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed"
    >
      <p>
        I&apos;m a software engineer who enjoys the whole journey, from a
        business problem to a fast, secure feature running in production.
      </p>
      <p>
        My career started in scientific computing, writing Python and C
        simulation code for fluid dynamics. That taught me to care about
        performance and correctness, and I&apos;ve carried both into web
        engineering.
      </p>
      <p>
        Today I&apos;m extending that into generative AI and working toward
        the AWS Certified AI Practitioner exam.
      </p>
    </motion.div>
    <div className="md:col-span-3 grid gap-4 sm:grid-cols-2">
      {pillars.map((p, i) => (
        <motion.div
          key={p.title}
          {...fadeUp}
          transition={{ duration: 0.6, delay: i * 0.08, ease: smoothEase }}
          className="glass glass-hover p-5"
        >
          <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{p.text}</p>
        </motion.div>
      ))}
    </div>
  </div>

  <motion.h3
    {...fadeUp}
    transition={{ duration: 0.6, ease: smoothEase }}
    className="mt-16 mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400"
  >
    Beyond the code
  </motion.h3>
  <div className="grid gap-4 md:grid-cols-3">
    {personal.map((p, i) => (
      <motion.div
        key={p.title}
        {...fadeUp}
        transition={{ duration: 0.6, delay: i * 0.08, ease: smoothEase }}
        className="glass glass-hover p-6"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-600 dark:text-blue-400">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d={p.icon} />
          </svg>
        </span>
        <h4 className="mt-3 font-semibold text-slate-900 dark:text-white">{p.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{p.text}</p>
      </motion.div>
    ))}
  </div>
  </>
);

export default AboutSection;
