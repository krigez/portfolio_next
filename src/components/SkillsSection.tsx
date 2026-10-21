"use client";

import { motion } from "framer-motion";
import { fadeUp, smoothEase } from "./Section";

const skillGroups = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python"] },
  {
    title: "Front-End",
    items: ["React", "Next.js", "Redux", "Vue.js", "Nuxt.js", "Pinia", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis"],
  },
  {
    title: "Cloud & Tools",
    items: ["AWS", "Docker", "Git", "Linux", "Pega Platform (CSSA)"],
  },
  {
    title: "AI & Data",
    items: [
      "GitHub Copilot (agent mode)",
      "Prompt engineering",
      "MCP tools",
      "RAG",
      "Amazon Bedrock",
      "pandas",
      "PyTorch",
    ],
  },
  {
    title: "Quality & Security",
    items: [
      "Unit testing",
      "XSS prevention",
      "Authentication",
      "ADA / WCAG accessibility",
      "Root-cause analysis",
      "Performance tuning",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Mentoring",
      "Code reviews",
      "Agile Scrum",
      "Sprint planning",
      "Estimation",
      "Production support",
    ],
  },
];

const SkillsSection = () => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {skillGroups.map((group, index) => (
      <motion.div
        key={group.title}
        {...fadeUp}
        transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: smoothEase }}
        className="glass glass-hover p-5"
      >
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {group.title}
        </h3>
        <ul className="flex flex-wrap gap-2">
          {group.items.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>
);

export default SkillsSection;
