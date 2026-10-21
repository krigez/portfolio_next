"use client";

import { motion } from "framer-motion";
import { fadeUp, smoothEase } from "./Section";

const education = [
  {
    id: "mtech",
    title: "M.Tech – Computational Fluid Dynamics",
    college: "University of Petroleum and Energy Studies (UPES), Dehradun",
    timeframe: "2013 – 2015",
    detail: "82.8% · Numerical methods, simulation and scientific programming",
  },
  {
    id: "btech",
    title: "B.Tech – Aeronautical Engineering",
    college: "JNTU Hyderabad",
    timeframe: "2009 – 2013",
    detail: "80.3% · Aerodynamics, fluid mechanics and engineering mathematics",
  },
];

const certifications = [
  {
    title: "AWS Certified AI Practitioner (AIF-C01)",
    issuer: "Amazon Web Services",
    date: "Exam scheduled Oct 2026",
  },
  { title: "Machine Learning", issuer: "DeepLearning.AI", date: "May 2024" },
  {
    title: "Pega Certified Senior System Architect (CSSA)",
    issuer: "Pegasystems",
    date: "Dec 2022",
  },
];

const Card = ({ children, idx }: { children: React.ReactNode; idx: number }) => (
  <motion.li
    {...fadeUp}
    transition={{ duration: 0.6, delay: idx * 0.08, ease: smoothEase }}
    className="glass glass-hover p-5"
  >
    {children}
  </motion.li>
);

const EducationSection = () => (
  <div className="grid gap-10 md:grid-cols-2">
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Education</h3>
      <ul className="space-y-4">
        {education.map((e, idx) => (
          <Card key={e.id} idx={idx}>
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-semibold text-slate-900 dark:text-white">{e.title}</h4>
              <span className="whitespace-nowrap text-xs text-slate-500 dark:text-slate-400">{e.timeframe}</span>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{e.college}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{e.detail}</p>
          </Card>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Certifications</h3>
      <ul className="space-y-4">
        {certifications.map((c, idx) => (
          <Card key={c.title} idx={idx}>
            <h4 className="font-semibold text-slate-900 dark:text-white">{c.title}</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.issuer}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{c.date}</p>
          </Card>
        ))}
      </ul>
    </div>
  </div>
);

export default EducationSection;
