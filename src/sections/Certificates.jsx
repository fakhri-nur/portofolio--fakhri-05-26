import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Certificates() {
  const certificates = [
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "Jan 2025",
      category: "Web Developer",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      url: "/certificates/serti_dasar_js.pdf", 
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "Nov 2024",
      category: "Web Developer",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      url: "/certificates/serti_dasar_web.pdf",
    },
    {
      title: "IGDX Career Seminar 'Career Guidance For Aspiring Game Developer'",
      issuer: "Kementerian Komunikasi dan Informatika",
      date: "Des 2024",
      category: "Game Developer",
      img: "https://www.itworks.id/wp-content/uploads/2023/09/Indonesia-Game-Developer-Exchange-2023.jpg",
      url: "/certificates/serti_igdx.pdf",
    },
    {
      title: "E-Learning Keselamatan dan Kesehatan Kerja",
      issuer: "International Labour Organization (ILO)",
      date: "Agu 2024",
      category: "K3 Safety",
      img: "https://osccdn.medcom.id/images/content/2021/06/20/9c0def8a1512974f1afad14c52c638fb.jpg",
      url: "/certificates/sertifikat_k3.pdf",
    },
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Sertifikasi"
          title="Sertifikat Kompetensi"
          subtitle="Sertifikat resmi yang memvalidasi keahlian dan komitmen saya dalam pengembangan teknologi."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface overflow-hidden group hover:shadow-lg dark:hover:shadow-card-dark transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-slate-900/20" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur text-white border border-white/20">
                    <Award className="w-3.5 h-3.5" />
                    {cert.category}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-brand-600 dark:text-brand-400 mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 mb-5">
                  <Calendar className="w-4 h-4" />
                  <span>Diterbitkan {cert.date}</span>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-sm py-2.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  Lihat Sertifikat
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}