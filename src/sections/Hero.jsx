import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-brand-950" />
      <div className="absolute top-1/4 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-brand-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-violet-400/15 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)]" />

      <div className="relative section-container text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 dark:border-brand-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur text-sm text-brand-700 dark:text-brand-300 mb-8"
        >
          <Sparkles className="w-4 h-4" />
          {/* Edit di sini: ganti status/tagline singkat */}
          <span>Tersedia untuk proyek freelance & kolaborasi</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
        >
          {/* Edit di sini: ganti nama */}
          Halo, saya{" "}
          <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent">
            Fakhri Nuryahya
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          {/* Edit di sini: ganti deskripsi profesi */}
          Fullstack Developer yang membangun aplikasi web modern, responsif,
          dan berfokus pada pengalaman pengguna yang intuitif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            Lihat Proyek
          </a>
          <a href="#contact" className="btn-outline w-full sm:w-auto">
            Hubungi Saya
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex flex-col items-center gap-2 mt-16 text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          aria-label="Scroll ke bawah"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
