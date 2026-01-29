import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Image from "next/image";
import Link from "next/link";
import { categories, projects } from "@/data/projects";

export default async function KategoriPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const slug = rawSlug?.toLowerCase();
  const category = categories[slug as keyof typeof categories];
  const filteredProjects = projects.filter((p) => p.categorySlug === slug);

  if (!category) {
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
            Kategori bulunamadı
          </h1>
          <p className="mt-4 text-white/60">
            Aradığınız kategoriye ait bir sayfa bulunamadı.
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

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background nebula effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
        <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
        <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-6xl">{category.emoji}</span>
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {category.name} Projeleri
          </h1>
          <p className="mt-4 text-white/60">
            {filteredProjects.length} proje bulundu
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/proje/${project.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative h-[320px] overflow-hidden rounded-[20px] border border-white/[0.15] bg-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:border-white/[0.25] hover:bg-white/[0.08] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/[0.12] via-transparent to-transparent" />
                
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-all duration-300" />
                
                <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {project.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[13px] text-white/70">
                      {project.shortDescription}
                    </p>
                    <p className="mt-2 text-[11px] text-white/50">
                      {project.stack} • {project.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projeler"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Tüm Projelere Dön
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}
