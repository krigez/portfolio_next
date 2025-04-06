// FadeInSection.tsx
"use client";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
};

const FadeInSection = forwardRef<HTMLDivElement, FadeInSectionProps>(
  ({ children }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={false} // 💥 Prevents double-render initial animation
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-screen"
      >
        {children}
      </motion.div>
    );
  }
);

// Required to make TypeScript happy
FadeInSection.displayName = "FadeInSection";

export default FadeInSection;
