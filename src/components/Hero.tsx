"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "9.5+", label: "Years in software" },
  { value: "4+", label: "Years as Technical Lead" },
  { value: "300+", label: "Production defects resolved" },
  { value: "~1,500", label: "Users on an app I built" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center pt-10">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 dark:border-white/10 bg-slate-900/[0.04] dark:bg-white/5 px-4 py-1.5 text-xs text-slate-600 dark:text-slate-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          Open to Senior Engineer &amp; Technical Lead roles · Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 dark:text-white"
        >
          Krishna Chaitanya <span className="gradient-text">Arige</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-5 max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300"
        >
          Senior Software Engineer &amp; Technical Lead. I build full-stack web
          products with <b className="text-slate-900 dark:text-white">React, Node.js and TypeScript</b>, and
          ship faster with <b className="text-slate-900 dark:text-white">AI-assisted development</b>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.03]"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-900/15 dark:border-white/15 bg-slate-900/[0.04] dark:bg-white/5 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white transition-colors hover:border-slate-900/30 dark:hover:border-white/40"
          >
            Get in touch
          </a>
        </motion.div>

        <dl className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.08, ease }}
              className="glass p-5"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold gradient-text">{s.value}</dd>
              <dd className="mt-1 text-xs md:text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
