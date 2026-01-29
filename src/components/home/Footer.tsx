"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { announcements } = useTheme();

  return (
    <footer className="border-t border-white/10 bg-black/40 text-slate-400 backdrop-blur-xl">
      {/* Duyurular Bölümü */}
      {announcements.length > 0 && (
        <div className="border-b border-white/10 bg-gradient-to-r from-slate-900/20 to-slate-800/20 px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h3 className="mb-3 text-sm font-semibold text-slate-300">📢 Duyurularımız</h3>
            <div className="flex flex-wrap gap-2">
              {announcements.map((announcement, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[13px] text-slate-300 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span>{announcement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm sm:px-6 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/90 shadow-[0_18px_60px_rgba(0,0,0,0.85)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(148,163,253,0.55),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.55),transparent_55%)] mix-blend-screen opacity-70" />
            <span className="relative text-sm font-semibold tracking-[0.22em] text-slate-100">
              R
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
              Liquid Glass
            </p>
            <p className="text-[11px] text-slate-400">
              Liquid-glass tech studio. Built by crews.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap items-center justify-start gap-6 text-[11px] uppercase tracking-[0.26em] text-slate-400 lg:justify-center">
          <a href="#top" className="hover:text-slate-100">
            Home
          </a>
          <a href="#projects" className="hover:text-slate-100">
            Projects
          </a>
          <a href="#crews" className="hover:text-slate-100">
            Crews
          </a>
          <a href="#join" className="hover:text-slate-100">
            Join
          </a>
          <a href="#process" className="hover:text-slate-100">
            Contact
          </a>
        </div>

        <div className="flex flex-col items-start gap-2 text-[11px] text-slate-400 lg:items-end">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-100">
              GitHub
            </a>
            <a href="#" className="hover:text-slate-100">
              LinkedIn
            </a>
            <a href="#" className="hover:text-slate-100">
              itch.io
            </a>
          </div>
          <p className="text-[10px] text-slate-500">
            © 2026 Liquid Glass Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

