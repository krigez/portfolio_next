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

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="text-black py-16 px-4 bg-gray-100 bg-blue-100"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="text-center ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="dark:bg-gray-900 p-6 rounded-xl shadow-md text-center font-semibold"
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="">{skill}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
