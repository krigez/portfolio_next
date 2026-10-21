"use client";

import { motion } from "framer-motion";
import { fadeUp, smoothEase } from "./Section";

interface Project {
  id: string;
  title: string;
  org: string;
  tech: string[];
  description: string;
  highlights: string[];
  link?: { label: string; href: string };
}

const projects: Project[] = [
  {
    id: "oncall",
    title: "Pega OnCall – Incident Management Platform",
    org: "Cognizant (Pegasystems)",
    tech: ["React", "Node.js", "REST APIs", "Charting libraries"],
    description:
      "A Jira-style internal app used by ~1,500 people across the organisation to log, triage and track incidents of every severity, integrated with Pega products.",
    highlights: [
      "Severity-based prioritisation so critical incidents surface first",
      "Leadership dashboard with real-time, interactive data visualisations",
      "Led front-end design and estimation; improved performance and test coverage",
    ],
  },
  {
    id: "react19",
    title: "React 19 Modernisation on Pega Constellation",
    org: "Cognizant (Pegasystems)",
    tech: ["React 19", "TypeScript", "Pega Constellation"],
    description:
      "Migrated legacy React UI to React 19 on the new Constellation engine and APIs, making the product faster and easier to maintain.",
    highlights: [
      "Moved legacy components to the new Constellation APIs",
      "Kept behaviour stable with unit tests and code reviews",
    ],
  },
  {
    id: "ai-workflow",
    title: "AI-Assisted Engineering Workflow",
    org: "Cognizant (Pegasystems)",
    tech: ["GitHub Copilot", "Agent instructions", "MCP tools"],
    description:
      "Configured GitHub Copilot with custom agent instructions and MCP integrations to speed up defect triage, code navigation, test scaffolding and documentation.",
    highlights: [
      "Used across front-end and server-side fixes",
      "All AI output peer-reviewed before merge",
    ],
  },
  {
    id: "jazeera",
    title: "Jazeera Paints – E-commerce, Admin Panel & Logistics",
    org: "Jazeera Technologies",
    tech: ["React", "Vue.js", "Node.js", "WebSockets"],
    description:
      "A responsive storefront and admin panel for jazeerapaints.com on Node.js APIs, with live order tracking over WebSockets.",
    highlights: [
      "Storefront, admin panel and logistics app",
      "Real-time order tracking",
    ],
    link: { label: "Visit jazeerapaints.com", href: "https://jazeerapaints.com/" },
  },
  {
    id: "jkcheese",
    title: "JK Cheese – E-commerce Platform",
    org: "Alakop Digital",
    tech: ["JavaScript", "Node.js", "Payment gateway"],
    description:
      "An e-commerce platform with quick sign-in, easy product management and a seamless payment-gateway checkout.",
    highlights: ["Customer sign-in and checkout", "Admin product management"],
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    org: "Personal",
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description:
      "The site you're on: a responsive, animated portfolio built with the Next.js App Router.",
    highlights: ["Scroll animations with reduced-motion support", "SEO and Open Graph metadata"],
  },
];

const ProjectsSection = () => (
  <div className="grid gap-6 md:grid-cols-2">
    {projects.map((p, idx) => (
      <motion.article
        key={p.id}
        {...fadeUp}
        transition={{ duration: 0.6, delay: (idx % 2) * 0.1, ease: smoothEase }}
        className="glass glass-hover group relative flex flex-col overflow-hidden p-6"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
          {p.org}
        </span>
        <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {h}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        {p.link && (
          <a
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-5 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200"
          >
            {p.link.label} ↗
          </a>
        )}
      </motion.article>
    ))}
  </div>
);

export default ProjectsSection;
