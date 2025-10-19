"use client";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="contact"
      className="max-w-4xl mx-auto py-16 px-4 scroll-mt-24"
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>I build scalable web experiences with React & Node</p>
      <p>Email: chaitanya.arige@gmail.com</p>
    </motion.div>
  );
};

export default ContactSection;
