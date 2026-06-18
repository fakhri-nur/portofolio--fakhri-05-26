import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Edit di sini: ganti nama dan tagline */}
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-lg">Fakhri Nuryahya</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Fullstack Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Edit di sini: ganti link sosial media */}
          <a
            href="https://github.com/fakhri-nur"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand-600 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/fakhri-nuryahya-2067b6405/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand-600 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fakhrinuryahya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand-600 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} Fakhri Nuryahya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
