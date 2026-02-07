"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSiteData } from "@/context/SiteDataContext";

export default function CapabilitiesTabs() {
  const { data } = useSiteData();
  const cards = data.capabilities;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cards.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  const activeCard = cards[activeIndex];

  return (
    <section id="capabilities" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Multi-color gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-950 via-transparent to-cyan-950 opacity-30" />

        {/* Animated gradient orbs */}
        <div
          className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />

        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Section Header */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Yetenekler
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Üniversite Öğrencileri İçin Teknoloji Platformu
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
            Teknofest, hackathonlar ve global yarışmalara hazırlanın. Indie oyunlardan blockchain&apos;e,
            web uygulamalarından AI projelerine kadar her alanda kendinizi geliştirin.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="relative z-10 mt-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-emerald-400/20 bg-slate-950/70 p-2 backdrop-blur-xl">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-xl px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500/20 text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {card.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active tab panel */}
      <div className="relative z-10 mt-6 px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-slate-950/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[320px]">
              <Image
                src={activeCard.image}
                alt={activeCard.title}
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-100">
                  {activeCard.subtitle}
                </span>
                <h3 className="mt-3 text-3xl font-bold text-white">{activeCard.title}</h3>
              </div>
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                  {activeCard.expandedDescription}
                </p>

                <div className="mt-5 space-y-2">
                  {activeCard.benefits.slice(0, 3).map((benefit) => (
                    <div key={benefit} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {activeCard.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={activeCard.link}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-100 transition-all duration-300 hover:bg-emerald-500/30"
                >
                  Detaylı İncele
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
