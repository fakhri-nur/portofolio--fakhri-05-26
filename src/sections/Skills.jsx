import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  GitBranch,
  Layout,
  Smartphone,
  Cloud,
  Palette,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  // Edit di sini: sesuaikan kategori dan daftar skill
  const categories = [
    {
      title: "Frontend",
      icon: Layout,
      color: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950",
      skills: ["Node.js", "Express", "REST API", "PHP", "Laravel"],
    },
    {
      title: "Database",
      icon: Database,
      color: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      title: "Tools & Lainnya",
      icon: GitBranch,
      color: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950",
      skills: ["Git", "GitHub", "Figma", "Vite", "Docker"],
    },
  ];

  const highlights = [
    { icon: Code2, label: "Clean Code" },
    { icon: Smartphone, label: "Responsive UI" },
    { icon: Cloud, label: "Cloud Deploy" },
    { icon: Palette, label: "UI/UX Aware" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Keahlian"
          title="Skills & Tech Stack"
          subtitle="Teknologi dan tools yang saya gunakan untuk mewujudkan ide menjadi produk digital."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full card-surface text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                <Icon className="w-4 h-4 text-brand-600" />
                {item.label}
              </motion.div>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-surface p-6 sm:p-8 hover:shadow-lg dark:hover:shadow-card-dark transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
