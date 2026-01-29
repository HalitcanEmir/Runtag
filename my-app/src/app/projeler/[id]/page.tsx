"use client";

import { projects } from "@/components/home/Projects";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none">
          <div className="nebula nebula--purple -top-40 -left-32 h-80 w-80" />
          <div className="nebula nebula--blue top-40 -right-40 h-96 w-96" />
          <div className="nebula nebula--purple -bottom-40 right-20 h-72 w-72 opacity-60" />
        </div>

        <Navbar />

        <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Proje Bulunamadı</h1>
            <Link href="/projeler" className="mt-4 inline-block text-pink-500 hover:text-pink-400">
              ← Tüm Projelere Dön
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Görsel */}
          <div className="relative overflow-hidden rounded-[20px] border border-white/15 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <Image
              src={project.image}
              alt={project.name}
              width={600}
              height={400}
              className="h-96 w-full object-cover"
            />
          </div>

          {/* Bilgiler */}
          <div className="space-y-6">
            {/* Kategori Badge */}
            <div>
              <span className="inline-block rounded-xl border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white">
                {project.category}
              </span>
            </div>

            {/* Başlık */}
            <div>
              <h1 className="text-4xl font-bold text-white lg:text-5xl">
                {project.name}
              </h1>
            </div>

            {/* Açıklama */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-white">Proje Hakkında</h2>
              <p className="text-white/70 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Stack */}
            <div>
              <h2 className="mb-3 text-lg font-semibold text-white">Kullanılan Teknolojiler</h2>
              <p className="text-white/70">
                {project.stack}
              </p>
            </div>

            {/* İstatistikler */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  Durum
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  {project.stats}
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50">
                  Tarih
                </p>
                <p className="mt-2 text-xl font-bold text-white">
                  {project.date}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/iletisim"
              className="inline-block rounded-full border border-pink-500/50 bg-pink-500/20 px-8 py-3 font-semibold text-white transition-all hover:bg-pink-500/30 hover:border-pink-500/70"
            >
              Bu Proje Hakkında Bilgi Al
            </Link>
          </div>
        </div>

        {/* İlgili Projeler */}
        <div className="mt-20 space-y-8">
          <h2 className="text-3xl font-bold text-white">
            Aynı Kategorideki Diğer Projeler
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter(p => p.category === project.category && p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <Link
                  key={relatedProject.id}
                  href={`/projeler/${relatedProject.id}`}
                  className="group cursor-pointer"
                >
                  <div className="relative h-96 overflow-hidden rounded-[20px] border border-white/15 bg-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="font-bold text-white">
                        {relatedProject.name}
                      </h3>
                      <p className="mt-1 text-[13px] text-white/70">
                        {relatedProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
