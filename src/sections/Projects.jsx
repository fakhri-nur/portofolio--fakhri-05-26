import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Calendar, Code2, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const FEATURED_COUNT = 3;

function ProjectCard({ project, index, animateOnView = false }) {
  const motionProps = animateOnView
    ? {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: index * 0.1 },
      }
    : {
        layout: true,
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -16, scale: 0.98 },
        transition: { duration: 0.4, delay: index * 0.08, ease: "easeOut" },
      };

  return (
    <motion.div
      {...motionProps}
      className="card-surface overflow-hidden group hover:shadow-lg dark:hover:shadow-card-dark transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="relative h-44 overflow-hidden">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-slate-900/20" />
          <div className="absolute bottom-3 left-4 right-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur text-white border border-white/20">
              <FolderGit2 className="w-3.5 h-3.5" />
              {project.category}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6 pb-2">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {project.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Project Tahun: {project.date}</span>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                <Code2 className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <div className={`grid gap-2 ${project.links.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {project.links.map((link, linkIdx) => (
            <a
              key={linkIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-xs py-2 px-3 justify-center"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "87 Mart (Fullstack POS)",
      description: "Aplikasi Point of Sale (Kasir) retail modern dengan arsitektur decoupled (pemisahan Frontend dan Backend).",
      date: "2026",
      category: "Fullstack Web",
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop",
      links: [
        { label: "Frontend Repo", url: "https://github.com/fakhri-nur/fe-87mart.git" },
        { label: "Backend Repo", url: "https://github.com/fakhri-nur/be-87mart.git" }
      ],
      tags: ["React/Next.js", "Laravel/Node.js", "REST API"]
    },
    {
      title: "Rumah Sakit Management System",
      description: "Sistem informasi manajemen rumah sakit untuk efisiensi data pasien, rekam medis, dan administrasi.",
      date: "2025",
      category: "Web Application",
      img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      links: [
        { label: "Repository", url: "https://github.com/fakhri-nur/rumah-sakit-project.git" }
      ],
      tags: ["PHP", "Laravel", "MySQL"]
    },
    {
      title: "TixID Clone",
      description: "Proyek replika aplikasi pemesanan tiket bioskop TixID yang dikembangkan sebagai instrumen pembelajaran.",
      date: "2024",
      category: "Frontend Web",
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
      links: [
        { label: "Repository", url: "https://github.com/fakhri-nur/Project-Tixid-kelas-XI.git" }
      ],
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Covid Tracker",
      description: "Aplikasi pemantauan visual data sebaran dan statistik kasus Covid-19 secara real-time.",
      date: "2024",
      category: "Web Application",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      links: [
        { label: "Repository", url: "https://github.com/fakhri-nur/covid-tracker.git" }
      ],
      tags: ["JavaScript", "API Integration", "Charts"]
    },
    {
      title: "Platzi Fake Store Integration",
      description: "E-commerce platform sederhana yang mengintegrasikan public REST API dari Platzi untuk katalog produk.",
      date: "2025",
      category: "Frontend Web",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      links: [
        { label: "Repository", url: "https://github.com/fakhri-nur/platzi-fake-store.git" }
      ],
      tags: ["React", "Tailwind CSS", "REST API"]
    },
  ];

  const featuredProjects = projects.slice(0, FEATURED_COUNT);
  const extraProjects = projects.slice(FEATURED_COUNT);
  const hasMoreProjects = extraProjects.length > 0;

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Portofolio"
          title="Proyek Pilihan"
          subtitle="Koleksi aplikasi dan sistem yang telah saya bangun untuk memecahkan masalah nyata dan mengasah keahlian teknis."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} animateOnView />
          ))}

          <AnimatePresence>
            {showAll &&
              extraProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
          </AnimatePresence>
        </div>

        {hasMoreProjects && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-outline gap-2"
              aria-expanded={showAll}
            >
              {showAll ? (
                <>
                  Sembunyikan
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Lihat Lebih Banyak
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
