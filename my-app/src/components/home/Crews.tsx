"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSiteData } from "@/context/SiteDataContext";

export default function Crews() {
  const { data } = useSiteData();
  const columns = data.crews;
  return (
    <section id="crews" className="relative overflow-hidden py-20">
      {/* Ambient Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[120px]" />
      </div>

      {/* Section Header */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                Aktif Olarak Büyüyoruz
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Neden Bize{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Katılmalısın?
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60 lg:mx-0">
              Deneyim seviyesi fark etmez! Öğrenci, yeni mezun veya profesyonel — herkes hoş geldin.
              Gerçek projeler üzerinde çalış, portfolyönü güçlendir ve yeni arkadaşlar edin.
            </p>
          </div>
          <motion.a
            href="#join"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-shadow hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
          >
            <span className="relative z-10">Hemen Katıl</span>
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>
        </motion.div>
      </div>

      {/* Kanban Board */}
      <div className="relative mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8"
        >
          {/* Main Container with Premium Glass Effect */}
          <div className="relative overflow-hidden rounded-[48px] border border-white/[0.08] bg-black/40 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
            {/* Animated gradient border */}
            <div className="pointer-events-none absolute inset-0 rounded-[48px] p-px">
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ backgroundSize: '200% 100%', animation: 'shimmer 8s ease-in-out infinite' }} />
            </div>
            
            {/* Inner container */}
            <div className="relative rounded-[44px] bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8 lg:p-12">
              {/* Top highlight */}
              <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              {/* Header Row */}
              <div className="relative mb-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 shadow-inner">
                      <svg className="h-5 w-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Proje Süreci</h3>
                  </div>
                  <div className="h-6 w-px bg-white/10" />
                  <div className="flex gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      8 Açık Pozisyon
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="hidden items-center gap-3 sm:flex">
                    <span className="text-sm text-white/40">Toplam Üye</span>
                    <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5">
                      <svg className="h-4 w-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-semibold text-white/70">47</span>
                    </div>
                  </div>
                  <div className="flex -space-x-3">
                    {[
                      "from-pink-400 to-rose-500",
                      "from-violet-400 to-purple-500",
                      "from-blue-400 to-cyan-500",
                      "from-amber-400 to-orange-500",
                    ].map((gradient, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className={`h-10 w-10 rounded-full border-2 border-black/50 bg-gradient-to-br ${gradient} shadow-lg ring-2 ring-black/20`}
                      />
                    ))}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black/50 bg-white/10 text-sm font-bold text-white shadow-lg ring-2 ring-black/20 backdrop-blur-sm"
                    >
                      +43
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative mb-10">
                <div className="flex items-center justify-between text-xs text-white/40 mb-3">
                  <span>Fikir → Yayın</span>
                  <span>Ortalama Süre: 4-6 Hafta</span>
                </div>
                <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-emerald-500"
                  />
                  {/* Progress dots */}
                  {[0, 33, 66, 100].map((pos, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (pos / 100) * 2, duration: 0.3 }}
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{ left: `${pos}%`, marginLeft: pos === 100 ? "-8px" : pos === 0 ? "0" : "-4px" }}
                    >
                      <div className={`h-2 w-2 rounded-full ${
                        i === 0 ? "bg-red-400" : i === 1 ? "bg-yellow-400" : i === 2 ? "bg-blue-400" : "bg-emerald-400"
                      } shadow-[0_0_10px_currentColor]`} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Kanban Columns */}
              <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {columns.map((column, colIndex) => (
                  <motion.div
                    key={column.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                    className="group/column flex flex-col"
                  >
                    {/* Column Header - Premium Design */}
                    <div className="mb-4">
                      <div className={`relative overflow-hidden rounded-2xl border ${
                        column.color === "red" ? "border-red-500/20 bg-red-500/5" :
                        column.color === "yellow" ? "border-yellow-500/20 bg-yellow-500/5" :
                        column.color === "blue" ? "border-blue-500/20 bg-blue-500/5" :
                        "border-emerald-500/20 bg-emerald-500/5"
                      } px-4 py-3`}>
                        {/* Subtle glow */}
                        <div className={`pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full ${column.bgGlow} blur-2xl opacity-40`} />
                        
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {/* Icon */}
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${column.gradient} shadow-lg`}>
                              {colIndex === 0 && (
                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                              )}
                              {colIndex === 1 && (
                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                              )}
                              {colIndex === 2 && (
                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {colIndex === 3 && (
                                <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                              )}
                            </div>
                            {/* Title & Count */}
                            <div>
                              <h4 className="text-sm font-semibold text-white">{column.title}</h4>
                              <p className="text-[11px] text-white/40">{column.tasks.length} aktif görev</p>
                            </div>
                          </div>
                          {/* More button */}
                          <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/60">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Tasks Container */}
                    <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] p-3 transition-colors group-hover/column:border-white/[0.08] group-hover/column:bg-white/[0.02]">
                      {column.tasks.map((task, taskIndex) => (
                        <motion.div
                          key={task.title}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: colIndex * 0.1 + taskIndex * 0.1 }}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                        >
                          {/* Card glow on hover */}
                          <div className={`pointer-events-none absolute inset-0 ${column.bgGlow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`} />
                          
                          {/* Priority indicator */}
                          <div className={`absolute right-3 top-3 h-2 w-2 rounded-full ${
                            task.priority === "high" ? "bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.8)]" :
                            task.priority === "medium" ? "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" :
                            "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                          }`} />

                          {/* Task Image */}
                          {task.image && (
                            <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg">
                              <Image
                                src={task.image}
                                alt={task.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                              {/* Play button overlay for visual interest */}
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Task Content */}
                          <div className="relative">
                            <h4 className="text-[15px] font-semibold text-white">{task.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-white/50">{task.description}</p>
                          </div>

                          {/* Task Footer */}
                          <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.04] pt-4">
                            <div className="flex -space-x-2">
                              {[...Array(Math.min(task.members, 3))].map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-7 w-7 rounded-full border-2 border-black/40 shadow-md ${
                                    i === 0 ? "bg-gradient-to-br from-pink-400 to-purple-500" :
                                    i === 1 ? "bg-gradient-to-br from-blue-400 to-cyan-500" :
                                    "bg-gradient-to-br from-amber-400 to-orange-500"
                                  }`}
                                />
                              ))}
                              {task.members > 3 && (
                                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black/40 bg-white/10 text-[10px] font-bold text-white/70 shadow-md backdrop-blur-sm">
                                  +{task.members - 3}
                                </div>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-white/30">
                              <button className="transition-colors hover:text-white/60">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                              </button>
                              <button className="transition-colors hover:text-white/60">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
