"use client";

import { motion } from "framer-motion";

export default function JoinCTA() {
  return (
    <section id="join" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-transparent"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-pink-500/10 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          {/* Left side - Text */}
          <div className="max-w-lg">
            <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/30">
              Stüdyoya Katıl
            </p>
            <h2 className="mt-3 text-xl font-semibold text-white/90 sm:text-2xl">
              Bizimle Bir Şeyler İnşa Etmek İster misin?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Geliştiriciler, tasarımcılar, sanatçılar ve meraklı zihinler arıyoruz. 
              Bir ekibe katıl, bir proje geliştir, birlikte öğren.
            </p>
          </div>

          {/* Right side - CTAs */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              {/* Primary CTA */}
              <a
                href="#"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2.5 text-xs font-semibold text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(236,72,153,0.45)]"
              >
                <span className="relative z-10">Ekibe Başvur</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              
              {/* Secondary CTA */}
              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white/90"
              >
                Proje Öner
              </a>
            </div>
            
            <p className="text-[10px] text-white/25">
              GitHub, itch.io, Behance veya portfolyo linkinle başlayabilirsin.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
