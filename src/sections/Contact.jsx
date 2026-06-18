import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const formData = new FormData();
    formData.append("access_key", "6aefbbcc-d015-4f27-8c32-0a6dc2cc61d8"); 
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("subject", `Portofolio: Pesan Baru dari ${form.name}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Pesan berhasil dikirim langsung ke email Fakhri!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Gagal mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      setStatusMessage("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(""), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <div className="section-container">
        <SectionHeading
          label="Kontak"
          title="Mari Terhubung"
          subtitle="Punya proyek menarik atau ingin berkolaborasi? Kirim pesan dan saya akan segera merespons."
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-surface p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email Saya</p>
                  <a
                    href="mailto:fakhrinuryahya@gmail.com"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 transition-colors"
                  >
                    fakhrinuryahya@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card-surface p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Lokasi</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 card-surface p-6 sm:p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Nama Anda
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Nama lengkap Anda"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Anda (Pengirim)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email-anda@domain.com"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Ceritakan tentang proyek atau ide Anda..."
                value={form.message}
                onChange={handleChange}
                className="w-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl p-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="btn-primary w-full sm:w-auto disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
            </button>

            {statusMessage && (
              <p className={`text-sm font-medium ${statusMessage.includes("berhasil") ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600"}`}>
                {statusMessage}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}