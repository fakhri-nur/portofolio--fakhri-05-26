import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200"></div>

      {/* blur circle */}
      <div className="absolute w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl top-20 left-20"></div>

      <div className="relative text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          Fakhri Nuryahya
        </motion.h1>

        <p className="text-gray-500 mb-6 text-lg">
          Fullstack Developer • Building modern web apps
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-black text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
