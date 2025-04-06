"use client";

import { motion } from "framer-motion";

type FallingTextProps = {
  techStack: string[];
  className?: string;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const wordVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function FallingText({
  techStack,
  className = "",
}: FallingTextProps) {
  return (
    <motion.div
      className={`flex justify-center gap-2 flex-wrap text-center ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techStack.map((word, index) => (
        <motion.span key={index} variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
