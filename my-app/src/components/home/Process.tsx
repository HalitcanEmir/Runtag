"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const principles = [
  {
    title: "Tutku ile Çalışıyoruz",
    description: "Her projede en iyisini ortaya koymak için çabalıyoruz.",
  },
  {
    title: "Birlikte Öğreniyoruz",
    description: "Bilgiyi paylaşarak birlikte büyüyoruz.",
  },
  {
    title: "Kalite Önceliğimiz",
    description: "Yarım iş yapmıyoruz, her detaya önem veriyoruz.",
  },
  {
    title: "Sorumluluk Alıyoruz",
    description: "Projelerimizin arkasında duruyoruz.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-20"
      style={{ 
        marginLeft: 'calc(-50vw + 50%)', 
        marginRight: 'calc(-50vw + 50%)', 
        width: '100vw' 
      }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020308] via-[#030305] to-[#020308]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020308] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020308] to-transparent" />
      </div>

      {/* Atatürk - Very subtle background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[300px] w-[220px] opacity-[0.03] sm:h-[380px] sm:w-[280px] lg:h-[450px] lg:w-[340px]">
          <Image
            src="/atam3.png"
            alt=""
            fill
            className="object-contain"
            style={{ filter: 'invert(1) brightness(1.3)' }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/20">
            Neden & Nasıl
          </p>
        </motion.div>

        {/* Principles - Split layout */}
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-24">
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:w-[280px]">
            {principles.slice(0, 2).map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.02]">
                  <span className="absolute -right-1 -top-1 text-4xl font-black text-white/[0.02]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-white/90">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 lg:w-[280px]">
            {principles.slice(2, 4).map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.02]">
                  <span className="absolute -right-1 -top-1 text-4xl font-black text-white/[0.02]">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="text-sm font-semibold text-white/90">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/40">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Atatürk Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="mx-auto max-w-lg">
            <p className="text-base font-light italic leading-relaxed text-white/50">
              "Vatanını en çok seven, görevini en iyi yapandır."
            </p>
            <footer className="mt-3">
              <cite className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/20 not-italic">
                — Mustafa Kemal Atatürk
              </cite>
            </footer>
          </blockquote>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-br from-white/[0.02] to-transparent p-5 transition-all duration-300 hover:border-white/[0.08]">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-500/5 blur-2xl" />
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-purple-500/10 bg-purple-500/5 px-2.5 py-1">
                <span className="h-1 w-1 rounded-full bg-purple-400/60" />
                <span className="text-[9px] font-medium uppercase tracking-wider text-purple-400/80">Misyon</span>
              </div>
              <h3 className="text-base font-semibold text-white/90">
                Geleceği Birlikte İnşa Etmek
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/40">
                Genç yetenekleri bir araya getirerek, yenilikçi projeler üretmek ve Türkiye'nin teknoloji ekosistemini güçlendirmek.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-br from-white/[0.02] to-transparent p-5 transition-all duration-300 hover:border-white/[0.08]">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-pink-500/5 blur-2xl" />
            <div className="relative">
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-pink-500/10 bg-pink-500/5 px-2.5 py-1">
                <span className="h-1 w-1 rounded-full bg-pink-400/60" />
                <span className="text-[9px] font-medium uppercase tracking-wider text-pink-400/80">Vizyon</span>
              </div>
              <h3 className="text-base font-semibold text-white/90">
                Küresel Ölçekte Etki Yaratmak
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/40">
                Türkiye'den dünyaya açılan, uluslararası arenada rekabet eden projeler ve start-up'lar çıkarmak.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="/kariyer#basvur"
            className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 transition-colors duration-300 hover:text-white/60"
          >
            <span className="h-px w-6 bg-white/20" />
            Bize Katıl
            <span className="h-px w-6 bg-white/20" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
