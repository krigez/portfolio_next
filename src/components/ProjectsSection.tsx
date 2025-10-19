"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "proj-1",
    title: "Portfolio Website",
    timeframe: "2024",
    tech: "Next.js · Tailwind · TypeScript",
    description:
      "A personal portfolio showcasing projects, blog posts and a resume. Includes smooth scroll, responsive layout and dark mode.",
  },
  {
    id: "proj-2",
    title: "Realtime Chat App",
    timeframe: "2023",
    tech: "React · Node.js · WebSocket",
    description:
      "A lightweight realtime chat with rooms, typing indicators and presence. Focused on performance and low-latency UX.",
  },
  {
    id: "proj-3",
    title: "E‑commerce POC",
    timeframe: "2022",
    tech: "React · Redux · Stripe",
    description:
      "Proof-of-concept checkout flow with product catalog, cart, and Stripe integration for payments.",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative text-black py-16 px-4 pb-24 bg-gray-50 scroll-mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

      <div className="max-w-4xl mx-auto">
        <ul className="border-l-2 border-gray-200 dark:border-gray-700">
          {projects.map((p, idx) => (
            <li key={p.id} className="mb-8 ml-6 relative">
              <span className="absolute -left-3 top-0 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-8 ring-white dark:ring-gray-900 text-white text-xs">
                {idx + 1}
              </span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-sm text-gray-500">{p.timeframe}</span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  {p.description}
                </p>

                <div className="mt-3 text-xs text-gray-500">{p.tech}</div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
