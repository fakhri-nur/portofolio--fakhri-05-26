import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern online store",
      tech: ["React", "Node", "MySQL"],
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      detail: "Full-featured e-commerce with payment system.",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio",
      tech: ["React", "Tailwind"],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      detail: "Clean and modern portfolio website.",
    },
    {
      title: "Admin Dashboard",
      desc: "Analytics dashboard UI",
      tech: ["React", "Chart.js"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      detail: "Dashboard with charts and analytics.",
    },
    {
      title: "Booking App",
      desc: "Online reservation system",
      tech: ["React", "Firebase"],
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
      detail: "Booking system with real-time data.",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            onClick={() => setSelected(p)}
            className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img src={p.img} className="h-52 w-full object-cover" />

            <div className="p-4">
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-gray-500 text-sm">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <motion.div
initial={{ scale: 0.8, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
className="bg-white p-6 rounded-xl max-w-md w-full relative"
        >
            
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <img src={selected.img} className="rounded mb-4" />

            <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
            <p className="text-gray-600 mb-4">{selected.detail}</p>

            <div className="flex gap-2 flex-wrap">
              {selected.tech.map((t, i) => (
                <span key={i} className="bg-gray-200 px-2 py-1 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}