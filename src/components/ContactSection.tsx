"use client";

import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <h2 className="text-2xl font-bold mb-4">My COntact</h2>
      <p> i am a front end dev contact me ...</p>
    </motion.div>
  );
};

export default ExperienceSection;
