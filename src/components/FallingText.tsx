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
      staggerChildren: 0.35,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function FallingText({
  techStack,
  className = "",
}: FallingTextProps) {
  return (
    <motion.div
      className={`flex flex-wrap gap-2 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techStack.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          transition={{ type: "spring", stiffness: 420, damping: 14 }}
          className={word === "|" ? "text-blue-500/70 dark:text-blue-400/70 not-italic" : undefined}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
