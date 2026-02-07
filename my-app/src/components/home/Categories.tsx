"use client";

import Link from "next/link";
import { useSiteData } from "@/context/SiteDataContext";

export default function Categories() {
  const { data } = useSiteData();
  const items = Object.entries(data.categories).map(([slug, info]) => {
    const count = data.projects.filter((project) => project.categorySlug === slug).length;
    return {
      slug,
      name: info.name,
      emoji: info.emoji,
      count,
    };
  });

  return (
    <section id="categories" className="relative py-16">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Kategoriler
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Proje Katalogları
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
          Tüm çalışmalarımızı kategoriye göre keşfedin.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/kategori/${item.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.05] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.08]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-white/50">{item.count} proje</p>
                </div>
              </div>
              <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
