"use client";

import { useState } from "react";
import { useSiteData, type HeroSettings } from "@/context/SiteDataContext";

export default function AdminHeroPage() {
  const { data, updateHero } = useSiteData();
  const [hero, setHero] = useState<HeroSettings>({ ...data.hero });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateHero(hero);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateTypewriterText = (index: number, value: string) => {
    const texts = [...hero.typewriterTexts];
    texts[index] = value;
    setHero({ ...hero, typewriterTexts: texts });
  };

  const addTypewriterText = () => {
    setHero({ ...hero, typewriterTexts: [...hero.typewriterTexts, ""] });
  };

  const removeTypewriterText = (index: number) => {
    setHero({ ...hero, typewriterTexts: hero.typewriterTexts.filter((_, i) => i !== index) });
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Hero & Genel Ayarlar</h1>
          <p className="mt-1 text-sm text-white/40">Ana sayfa hero bölümünü düzenleyin</p>
        </div>
        <button
          onClick={handleSave}
          className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
            saved
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
              : "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_28px_rgba(236,72,153,0.45)]"
          }`}
        >
          {saved ? "✓ Kaydedildi" : "Kaydet"}
        </button>
      </div>

      <div className="space-y-6">
        {/* Main Title */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h2 className="mb-4 text-sm font-semibold text-white/70">Ana Başlık</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Başlık</label>
              <input
                type="text"
                value={hero.title}
                onChange={(e) => setHero({ ...hero, title: e.target.value })}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none focus:border-pink-500/40"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Alt Başlık</label>
              <input
                type="text"
                value={hero.subtitle}
                onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none focus:border-pink-500/40"
              />
            </div>
          </div>
        </div>

        {/* Typewriter Texts */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white/70">Yazı Animasyonu Metinleri</h2>
            <button
              onClick={addTypewriterText}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60 hover:bg-white/[0.08]"
            >
              + Ekle
            </button>
          </div>
          <div className="space-y-3">
            {hero.typewriterTexts.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-6 text-center text-xs text-white/20">{i + 1}</span>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => updateTypewriterText(i, e.target.value)}
                  className="flex-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none focus:border-pink-500/40"
                />
                <button
                  onClick={() => removeTypewriterText(i)}
                  className="rounded-lg p-2 text-red-400/40 hover:bg-red-500/10 hover:text-red-400"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6">
          <h2 className="mb-4 text-sm font-semibold text-white/70">CTA Butonu</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Buton Metni</label>
              <input
                type="text"
                value={hero.ctaText}
                onChange={(e) => setHero({ ...hero, ctaText: e.target.value })}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none focus:border-pink-500/40"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Buton Linki</label>
              <input
                type="text"
                value={hero.ctaLink}
                onChange={(e) => setHero({ ...hero, ctaLink: e.target.value })}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none focus:border-pink-500/40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
