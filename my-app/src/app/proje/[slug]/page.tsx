"use client";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSiteData } from "@/context/SiteDataContext";

const PROTECTED_SLUGS = ["madeinyouu", "restaurant-ai", "madeinyou-tarim"];

export default function ProjePage() {
  const params = useParams();
  const slug = (params.slug as string)?.toLowerCase();
  const { data } = useSiteData();
  const project = data.projects.find((item) => item.slug === slug);
  const isProtected = project && PROTECTED_SLUGS.includes(slug ?? "");

  if (!project) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
          <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
          <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
        </div>

        <Navbar />

        <main className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 pb-16 pt-32 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Proje bulunamadı
          </h1>
          <p className="mt-4 text-white/60">
            Aradığınız proje bulunamadı veya henüz yayınlanmamış olabilir.
          </p>
          <Link
            href="/projeler"
            className="mt-8 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
          >
            Tüm Projelere Dön
          </Link>
        </main>

        <Footer />
      </div>
    );
  }

  if (isProtected) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
          <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
          <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
        </div>
        <Navbar />
        <main className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-4 pb-16 pt-32 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10 text-4xl">
            ✨
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{project.name}</h1>
          <p className="mt-6 rounded-2xl border border-white/20 bg-white/[0.08] px-8 py-6 text-lg font-medium text-white backdrop-blur-xl">
            Çok yakında sizlerle!
          </p>
          <p className="mt-4 text-sm text-white/50">
            Detaylar yakında paylaşılacak.
          </p>
          <Link
            href="/projeler"
            className="mt-8 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
          >
            Projelere Dön
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background nebula effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
        <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
        <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto max-w-5xl px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projeler"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Projelere Dön
        </Link>

        {/* Hero Image */}
        <div className="relative mb-8 h-[400px] overflow-hidden rounded-3xl border border-white/[0.15] bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute left-6 top-6">
            <span className="rounded-xl border border-white/20 bg-black/40 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
              {project.category}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute inset-x-0 bottom-0 p-8">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-2 text-white/80">{project.shortDescription}</p>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
              <span>{project.stats}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>
          </div>
        </div>

        {/* Site URL Card - for web projects */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-8 flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-pink-500/30 bg-pink-500/10 p-5 backdrop-blur-xl transition-all hover:border-pink-500/60 hover:bg-pink-500/20"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-pink-500/20">
              <svg className="h-7 w-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-pink-400">Canlı Site — Tıklayarak Ziyaret Et</p>
              <p className="mt-0.5 truncate font-mono text-sm font-medium text-white sm:text-base">{project.url}</p>
            </div>
            <span className="shrink-0 rounded-full bg-pink-500/30 px-4 py-2 text-sm font-semibold text-white transition-all group-hover:bg-pink-500/50">Git →</span>
          </a>
        )}

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Kısa Özet */}
          <section className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-3 text-xl font-bold text-white">📋 Kısa Özet</h2>
            <p className="leading-relaxed text-white/70">
              {project.shortDescription}
            </p>
          </section>

          {/* Uzun Açıklama */}
          <section className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-3 text-xl font-bold text-white">📖 Detaylı Açıklama</h2>
            <p className="leading-relaxed text-white/70">
              {project.longDescription}
            </p>
          </section>

          {/* Amaç */}
          <section className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-3 text-xl font-bold text-white">🎯 Proje Amacı</h2>
            <p className="leading-relaxed text-white/70">
              {project.aim}
            </p>
          </section>

          {/* Teknolojiler */}
          <section className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-xl font-bold text-white">🛠️ Kullanılan Teknolojiler</h2>
            <div className="space-y-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4"
                >
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{tech.purpose}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ekip */}
          <section className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-4 text-xl font-bold text-white">👥 Ekip Üyeleri</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {project.team.map((member) => {
                const CardContent = (
                  <>
                    <div className="mb-2 flex justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-2xl">
                        👤
                      </div>
                    </div>
                    <h3 className="font-semibold text-white">{member.name}</h3>
                    <p className="mt-1 text-xs text-white/60">{member.role}</p>
                    {member.linkedin && (
                      <div className="mt-3 flex justify-center">
                        <svg className="h-5 w-5 text-white/50 group-hover:text-[#0A66C2] transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    )}
                  </>
                );
                return member.linkedin ? (
                  <a
                    key={member.name}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center transition-all hover:border-pink-500/30 hover:bg-white/[0.04] cursor-pointer"
                  >
                    {CardContent}
                  </a>
                ) : (
                  <div key={member.name} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
                    {CardContent}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Tech Stack Summary */}
          <section className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 backdrop-blur-xl">
            <h2 className="mb-3 text-xl font-bold text-white">⚙️ Teknoloji Stack</h2>
            <p className="font-mono text-sm text-white/70">{project.stack}</p>
          </section>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/kategori/${project.categorySlug}`}
              className="flex-1 rounded-xl border border-white/20 bg-white/[0.08] py-3 text-center text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
            >
              {project.category} Kategorisine Git
            </Link>
            <Link
              href="/projeler"
              className="flex-1 rounded-xl border border-pink-500/50 bg-pink-500/20 py-3 text-center text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-pink-500/30"
            >
              Tüm Projelere Dön
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
