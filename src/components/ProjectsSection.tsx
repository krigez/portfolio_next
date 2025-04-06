"use client";

import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Redux",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Jest",
  "Cypress",
  "TailwindCSS",
  "Git",
  "REST APIs",
  "GraphQL",
];

const ProjectsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center font-semibold"
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
