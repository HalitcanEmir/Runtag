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
      className="relative min-h-screen overflow-hidden py-32"
      style={{ 
        marginLeft: 'calc(-50vw + 50%)', 
        marginRight: 'calc(-50vw + 50%)', 
        width: '100vw' 
      }}
    >
      {/* Background - Smooth gradient from page color to dark */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main gradient - smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020308] via-[#010204] via-[#000000] via-[#010204] to-[#020308]" />
        {/* Extra smooth top transition */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#020308] via-[#01020a] to-transparent" />
        {/* Extra smooth bottom transition */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020308] via-[#01020a] to-transparent" />
      </div>

      {/* Atatürk - Background with 3D effect */}
      <div 
        className="pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-start justify-center pt-24"
        style={{ perspective: '1000px' }}
      >
        <div 
          className="relative h-[350px] w-[260px] opacity-[0.12] sm:h-[420px] sm:w-[320px] lg:h-[500px] lg:w-[380px]"
          style={{ 
            transform: 'rotateY(-5deg) rotateX(2deg) translateZ(50px)',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Shadow/depth layer */}
          <div 
            className="absolute inset-0 blur-xl opacity-30"
            style={{ transform: 'translateZ(-30px) scale(1.05)' }}
          >
            <Image
              src="/atam3.png"
              alt=""
              fill
              className="object-contain"
              style={{ filter: 'invert(1) brightness(0.5)' }}
            />
          </div>
          {/* Main image */}
          <Image
            src="/atam3.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
            style={{ filter: 'invert(1) brightness(1.1) contrast(1.1)' }}
            priority
            quality={90}
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
          />
        </div>
      </div>

      {/* Content - Wider layout */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-24 xl:px-32">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="-mt-16 mb-16 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/30">
            Neden & Nasıl
          </p>
        </motion.div>

        {/* Principles - Split layout, left and right sides */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-48"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-6 lg:w-[320px]">
            {principles.slice(0, 2).map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                  <span className="absolute right-4 top-4 text-5xl font-bold text-white/[0.03]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 lg:w-[320px]">
            {principles.slice(2, 4).map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                  <span className="absolute right-4 top-4 text-5xl font-bold text-white/[0.03]">
                    {String(index + 3).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-white">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Atatürk Quote - Below image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-40 text-center"
        >
          <blockquote className="mx-auto max-w-2xl">
            <p className="text-lg font-light italic leading-relaxed text-white/70 sm:text-xl">
              "Vatanını en çok seven, görevini en iyi yapandır."
            </p>
            <footer className="mt-4">
              <cite className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 not-italic">
                — Mustafa Kemal Atatürk
              </cite>
            </footer>
          </blockquote>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid gap-8 sm:grid-cols-2"
        >
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-purple-400">Misyon</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Geleceği Birlikte İnşa Etmek
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Genç yetenekleri bir araya getirerek, yenilikçi projeler üretmek ve Türkiye'nin teknoloji ekosistemini güçlendirmek. Her bireyin potansiyelini keşfetmesine ve gerçek dünya deneyimi kazanmasına olanak tanıyoruz.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/10">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-pink-500/10 blur-3xl transition-all duration-500 group-hover:bg-pink-500/20" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-pink-400">Vizyon</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Küresel Ölçekte Etki Yaratmak
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Türkiye'den dünyaya açılan, uluslararası arenada rekabet eden projeler ve start-up'lar çıkarmak. Topluluk ruhuyla çalışarak, teknoloji alanında ilham veren bir ekosistem olmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#join"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            Bize Katıl
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
