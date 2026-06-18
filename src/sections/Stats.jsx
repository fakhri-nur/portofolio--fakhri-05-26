import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Clock, Award } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  // Edit di sini: sesuaikan angka statistik
  const stats = [
    {
      icon: Briefcase,
      value: 15,
      suffix: "+",
      label: "Proyek Selesai",
      desc: "Aplikasi web & mobile",
    },
    {
      icon: Users,
      value: 10,
      suffix: "+",
      label: "Tech Stack",
      desc: "Dikuasai & digunakan",
    },
    {
      icon: Clock,
      value: 2,
      suffix: "+",
      label: "Tahun",
      desc: "Pengalaman praktik",
    },
    {
      icon: Award,
      value: 6,
      suffix: "+",
      label: "Sertifikat",
      desc: "Kompetensi terverifikasi",
    },
  ];

  return (
    <section className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-surface p-6 sm:p-8 text-center group hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
              >
                <div className="inline-flex p-3 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-semibold text-slate-800 dark:text-slate-200 mt-2">
                  {stat.label}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
