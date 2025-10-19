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
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p>
        Im a full-stack software engineer passionate about building scalable
        systems and polished user interfaces. I work primarily with React,
        Next.js, Node.js, and TypeScript — designing clean architectures,
        implementing secure auth flows (JWT, RBAC), and crafting maintainable UI
        libraries with Storybook. I enjoy turning complex problems into elegant,
        reliable products with a focus on thoughtful design and performance.
        Beyond the web, Im deeply interested in data visualization and
        analytics, exploring insights with Python, NumPy, Pandas, and
        Matplotlib. I love uncovering stories in data and turning them into
        clear visual narratives that guide better decisions. Lately, I have been
        diving into machine learning, learning to build, train, and deploy
        models using Python, TensorFlow, and PyTorch. By combining my software
        engineering background with data-driven thinking, I aim to create
        intelligent, human-centered products. When Im not coding, you wll
        probably find me sketching ideas, reading about emerging tech, or
        exploring how design and AI can come together to make digital
        experiences smarter and more intuitive.
      </p>
    </motion.div>
  );
};

export default AboutSection;
