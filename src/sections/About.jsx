import { motion } from "framer-motion";
import { MapPin, GraduationCap, Download } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import poto from "../image/poto.png";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionHeading
          label="Tentang Saya"
          title="Siapa Saya?"
          subtitle="Passionate developer dengan fokus pada solusi digital yang efisien dan scalable."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto lg:mx-0"
          >
            {/* Edit di sini: ganti URL foto profil */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden card-surface">
              <img
                src={poto}
                alt="Foto profil Fakhri Nuryahya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-500/20 rounded-2xl -z-10 blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {/* Edit di sini: ganti bio lengkap */}
              Saya adalah Fullstack Developer dengan pengalaman membangun
              aplikasi web dari konsep hingga deployment. Saya menguasai React,
              Node.js, dan database relasional, serta selalu mengutamakan kode
              yang bersih dan arsitektur yang mudah dipelihara.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Saat ini saya aktif mengembangkan proyek-proyek personal dan
              berkolaborasi dengan rekan untuk menciptakan inovasi baru serta
              memberikan dampak positif bagi orang-orang di sekitar.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {/* Edit di sini: ganti lokasi dan pendidikan */}
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-brand-600" />
                <span>Bogor</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <GraduationCap className="w-4 h-4 text-brand-600" />
                <span>PPLG — Pengembangan Perangkat Lunak & Gim</span>
              </div>
            </div>

            <a
              href="/cv/cv-fakhri.pdf"
              download="cv-fakhri.pdf"
              className="btn-primary inline-flex items-center gap-2 mt-4"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
