"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <h2 className="text-2xl font-bold mb-4 gray-200">About Me</h2>
      <div className="text-gray-300 leading-relaxed whitespace-pre-line">
        I&apos;m a full-stack software engineer passionate about building
        scalable systems and polished user interfaces. I work primarily with
        <b>React, Next.js, Node.js, and TypeScript </b> — designing clean
        architectures, implementing secure auth flows (JWT, RBAC), and crafting
        maintainable UI libraries with Storybook. I enjoy turning complex
        problems into elegant, reliable products with a focus on thoughtful
        design and performance.
        <br />
        <br />
        Beyond the web, I&apos;m deeply interested in{" "}
        <b>data visualization and analytics</b>, exploring insights with{" "}
        <b>Python, NumPy, Pandas, and Matplotlib</b>. I love uncovering stories
        in data and turning them into clear visual narratives that guide better
        decisions.
        <br />
        <br />
        Lately, I have been diving into machine learning, learning to build,
        train, and deploy models using <b>Python, TensorFlow, and PyTorch</b>.
        By combining my software engineering background with data-driven
        thinking, I aim to create intelligent, human-centered products.
        <br />
        <br />
        When I&apos; m not coding, you&apos;ll probably find me sketching ideas,
        reading about emerging tech, or exploring how design and AI can come
        together to make digital experiences smarter and more intuitive.
      </div>
    </motion.div>
  );
};

export default AboutSection;
