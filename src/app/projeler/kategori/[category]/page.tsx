"use client";

import { projects } from "@/components/home/Projects";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const categoryName = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  
  const filteredProjects = projects.filter(
    p => p.category.toLowerCase() === categorySlug
  );

  const categoryDescriptions: Record<string, string> = {
    oyun: "Oyun geliştirme projelerimiz, indie yapımlardan AAA kalitesine kadar çeşitlenmiştir.",
    web: "Web teknolojileriyle geliştirdiğimiz modern ve ölçeklenebilir uygulamalar.",
    ai: "Yapay zeka ve makine öğrenmesi teknolojileriyle geliştirdiğimiz akıllı çözümler.",
    mobil: "Mobil platformlar için geliştirdiğimiz kullanıcı dostu uygulamalar.",
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none">
        <div className="nebula nebula--purple -top-40 -left-32 h-80 w-80" />
        <div className="nebula nebula--blue top-40 -right-40 h-96 w-96" />
        <div className="nebula nebula--purple -bottom-40 right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        {/* Geri Butonu */}
        <Link href="/projeler" className="mb-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
          ← Tüm Projelere Dön
        </Link>

        {/* Page Header */}
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {categoryName} Projeleri
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            {categoryDescriptions[categorySlug] || "Kategorideki projelerimize göz atın."}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group cursor-pointer"
              >
                <Link href={`/projeler/${project.id}`}>
                  <div className="relative h-80 overflow-hidden rounded-[20px] border border-white/15 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:bg-white/8 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                    
                    <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-linear-to-b from-white/12 via-transparent to-transparent" />

                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20 transition-all duration-300" />

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

                    <div className="absolute left-4 top-4 z-10">
                      <span className="rounded-xl border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 z-10">
                      <span className="rounded-lg bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                        {project.stats}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 p-4">
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

                      <div className="flex gap-2 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        <button className="flex-1 rounded-xl border border-white/20 bg-white/10 py-2.5 text-center text-[12px] font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/30">
                          Detayları Gör
                        </button>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-[20px] border-2 border-white/0 transition-all duration-300 group-hover:border-white/10" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-white/70">Bu kategoride henüz proje bulunmamaktadır.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
