import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-24 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-600 leading-relaxed">
        I am a Fullstack Developer focused on building scalable,
        high-performance web applications. I specialize in both
        frontend and backend development with clean code.
      </p>
    </motion.section>
  );
}