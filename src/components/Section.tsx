"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="relative py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export const smoothEase = [0.22, 1, 0.36, 1] as const;
