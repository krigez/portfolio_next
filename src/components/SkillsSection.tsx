"use client";

import { motion } from "framer-motion";

const fskills = [
  "JavaScript",
  "HTML5/CSS3",
  "React",
  "Vue.js",
  "Next.js",
  "Redux",
  "TypeScript",
  "Jest",
];

const bskills = [
  "Git",
  "Node.js",
  "Python",
  "Express.js",
  "PostgreSQL",
  "REST APIs",
  "MongoDB",
  "GraphQL",
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="text-black py-16 px-4 bg-gray-100 bg-blue-100"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Tech Skills</h2>
      {/* <h3 className="text-xl text-left font-bold m-8">Frontend Skills:</h3> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {fskills.map((skill, index) => (
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

      {/* <h3 className="text-xl text-left font-bold m-8">Backend Skills:</h3> */}
      <br />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bskills.map((skill, index) => (
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
    </section>
  );
};

export default SkillsSection;
