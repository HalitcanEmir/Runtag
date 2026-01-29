"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const columns = [
  {
    title: "Fikir Aşaması",
    color: "red",
    tasks: [
      {
        title: "Beyin Fırtınası",
        description: "Yeni proje fikirleri toplantılar ve Discord'da paylaşılıyor.",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80",
        members: 3,
        hasSubtask: true,
      },
      {
        title: "Ekip Oluşturma",
        description: "İlgilenen herkes projeye katılabilir, deneyim şart değil!",
        members: 2,
      },
    ],
  },
  {
    title: "Geliştirme",
    color: "yellow",
    tasks: [
      {
        title: "Birlikte Öğrenme",
        description: "Tecrübeli üyeler yeni başlayanlara mentorluk yapıyor.",
        members: 2,
      },
      {
        title: "Yarışma Ekipleri",
        description: "Teknofest, hackathon ve yarışmalar için özel ekipler kuruluyor.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        members: 4,
      },
    ],
  },
  {
    title: "Test & Demo",
    color: "blue",
    tasks: [
      {
        title: "Canlı Demolar",
        description: "Projeler gerçek kullanıcılara sunuluyor ve geri bildirim alınıyor.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80",
        members: 2,
      },
      {
        title: "Haftalık Sprintler",
        description: "Esnek çalışma saatleri, herkes kendi hızında katkı sağlıyor.",
        members: 3,
      },
    ],
  },
  {
    title: "Yayınlandı",
    color: "green",
    tasks: [
      {
        title: "Portfolyo & CV",
        description: "Tamamlanan projeler CV'ne eklenir, referans olarak kullanılır.",
        members: 4,
      },
      {
        title: "Sitede Listeleme",
        description: "Yaptığınız projeler sitemizde sergileniyor, herkes görebiliyor!",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=80",
        members: 5,
      },
    ],
  },
];

export default function Crews() {
  return (
    <section id="crews" className="relative py-20">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3 text-center lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
              Nasıl Çalışıyoruz
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Neden Bize Katılmalısın?
            </h2>
            <p className="mx-auto max-w-xl text-sm text-white/60 lg:mx-0">
              Deneyim seviyesi fark etmez! Öğrenci, yeni mezun veya profesyonel — herkes hoş geldin.
              Gerçek projeler üzerinde çalış, portfolyönü güçlendir ve yeni arkadaşlar edin.
            </p>
          </div>
          <a
            href="#join"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-pink-400 transition hover:text-pink-300"
          >
            Hemen Katıl →
          </a>
        </div>
      </div>

      {/* Kanban Board - Integrated Design */}
      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Subtle background glow - matching page theme */}
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 blur-2xl" />

          {/* Header Row */}
          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-semibold text-white/80">Proje Süreci</h3>
              <div className="flex gap-2">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-400">
                  Açık Pozisyonlar
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/50">
                  Herkes Katılabilir
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/40">Aktif Üyeler</span>
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-br from-pink-400 to-purple-500" />
                <div className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-br from-blue-400 to-cyan-500" />
                <div className="h-7 w-7 rounded-full border border-white/20 bg-gradient-to-br from-orange-400 to-red-500" />
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] text-white/60">
                  +12
                </div>
              </div>
            </div>
          </div>

          {/* Kanban Columns */}
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column, colIndex) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: colIndex * 0.1 }}
                className="flex flex-col gap-3"
              >
                {/* Column Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        column.color === "red"
                          ? "bg-red-400"
                          : column.color === "yellow"
                          ? "bg-yellow-400"
                          : column.color === "blue"
                          ? "bg-blue-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <span className="text-[13px] font-medium text-white/70">{column.title}</span>
                  </div>
                  <span className="text-[11px] text-white/30">{column.tasks.length}</span>
                </div>

                {/* Tasks */}
                <div className="flex flex-col gap-3">
                  {column.tasks.map((task) => (
                    <div
                      key={task.title}
                      className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                    >
                      {/* Task Image */}
                      {task.image && (
                        <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                          <Image
                            src={task.image}
                            alt={task.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      )}

                      {/* Task Content */}
                      <h4 className="text-[13px] font-medium text-white/90">{task.title}</h4>
                      <p className="mt-1 text-[11px] leading-relaxed text-white/40 line-clamp-2">{task.description}</p>

                      {/* Task Footer */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex -space-x-1.5">
                          {[...Array(Math.min(task.members, 3))].map((_, i) => (
                            <div
                              key={i}
                              className={`h-5 w-5 rounded-full border border-white/10 ${
                                i === 0 ? "bg-gradient-to-br from-pink-400 to-purple-500" :
                                i === 1 ? "bg-gradient-to-br from-blue-400 to-cyan-500" :
                                "bg-gradient-to-br from-orange-400 to-yellow-500"
                              }`}
                            />
                          ))}
                          {task.members > 3 && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[9px] text-white/50">
                              +{task.members - 3}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-white/25">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
