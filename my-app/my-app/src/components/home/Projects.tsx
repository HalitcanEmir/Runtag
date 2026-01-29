"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    category: "Oyun",
    name: "Nebula Drift",
    description: "Arcade tarzı uzay oyunu prototipi",
    stack: "Unity · C# · FMOD",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    icon: "🎮",
    stats: "2.4K indirme",
    date: "2 hafta önce",
  },
  {
    category: "Web",
    name: "Crewboard Dashboard",
    description: "Ekip yönetim ve sprint takip paneli",
    stack: "Next.js · PostgreSQL",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    icon: "📊",
    stats: "1.8K kullanıcı",
    date: "1 ay önce",
  },
  {
    category: "AI",
    name: "Teknofest Control Hub",
    description: "Yarışma telemetri ve kontrol merkezi",
    stack: "Python · FastAPI · React",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    icon: "🤖",
    stats: "Finalist",
    date: "3 ay önce",
  },
  {
    category: "Mobil",
    name: "FitTrack Pro",
    description: "Kişisel fitness ve beslenme takip uygulaması",
    stack: "React Native · Firebase",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    icon: "📱",
    stats: "5.2K indirme",
    date: "1 hafta önce",
  },
  {
    category: "Web",
    name: "E-Commerce Platform",
    description: "Modern e-ticaret altyapısı ve yönetim paneli",
    stack: "Next.js · Stripe · Prisma",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    icon: "🛒",
    stats: "12K satış",
    date: "2 ay önce",
  },
  {
    category: "Oyun",
    name: "Pixel Quest",
    description: "Retro tarzı platform macera oyunu",
    stack: "Godot · GDScript",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    icon: "👾",
    stats: "890 indirme",
    date: "5 gün önce",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      {/* Section Header */}
      <div className="mx-auto max-w-7xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Projeler
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Projelerimiz
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
          Öğrenci projelerinden prodüksiyon seviyesine, işte bazı çalışmalarımız.
        </p>
      </div>

      {/* Project Grid */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              {/* Main Card - Fixed Height for Equal Size */}
              <div className="relative h-[320px] overflow-hidden rounded-[20px] border border-white/[0.15] bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:border-white/[0.25] hover:bg-white/[0.08] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                
                {/* Inner glow effect */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/[0.12] via-transparent to-transparent" />

                {/* Background Image - Full card */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-all duration-300" />

                {/* Light reflection */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

                {/* Category badge - top left */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="rounded-xl border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                    {project.category}
                  </span>
                </div>

                {/* Stats badge - top right */}
                <div className="absolute right-4 top-4 z-10">
                  <span className="rounded-lg bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {project.stats}
                  </span>
                </div>

                {/* Content - Bottom */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  {/* Project Info */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[13px] text-white/70">
                      {project.description}
                    </p>
                    <p className="mt-2 text-[11px] text-white/50">
                      {project.stack} • {project.date}
                    </p>
                  </div>

                  {/* Hover Buttons - Appear on hover */}
                  <div className="flex gap-2 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <a
                      href="#"
                      className="flex-1 rounded-xl border border-white/20 bg-white/10 py-2.5 text-center text-[12px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/30"
                    >
                      Kategoriyi Gör
                    </a>
                    <a
                      href="#"
                      className="flex-1 rounded-xl border border-pink-500/50 bg-pink-500/20 py-2.5 text-center text-[12px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-pink-500/30 hover:border-pink-500/70"
                    >
                      Detayları Gör
                    </a>
                  </div>
                </div>

                {/* Glass border highlight on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-white/0 transition-all duration-300 group-hover:border-white/10" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="group relative overflow-hidden rounded-full border border-white/20 bg-white/[0.08] px-8 py-3.5 text-sm font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Tüm Projeleri Gör
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
