"use client";

import { useState } from "react";
import { useSiteData, type StatItem } from "@/context/SiteDataContext";

export default function AdminIstatistiklerPage() {
  const { data, updateStats } = useSiteData();
  const [stats, setStats] = useState<StatItem[]>([...data.stats]);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateStats(stats);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addStat = () => {
    setStats([...stats, { label: "Yeni İstatistik", value: "0" }]);
  };

  const updateStat = (index: number, field: "label" | "value", value: string) => {
    const updated = [...stats];
    updated[index] = { ...updated[index], [field]: value };
    setStats(updated);
  };

  const deleteStat = (index: number) => {
    setStats(stats.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">İstatistikler</h1>
          <p className="mt-1 text-sm text-white/40">Ana sayfadaki istatistik kartlarını düzenleyin ({stats.length} adet)</p>
        </div>
        <div className="flex gap-3">
          <button onClick={addStat} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 hover:bg-white/[0.08]">
            + Yeni Ekle
          </button>
          <button
            onClick={handleSave}
            className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              saved ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)]"
            }`}
          >
            {saved ? "✓ Kaydedildi" : "Kaydet"}
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
            <span className="w-8 text-center text-sm font-bold text-white/20">{i + 1}</span>
            <div className="flex-1 grid gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-[10px] text-white/30">Değer</label>
                <input
                  value={stat.value}
                  onChange={(e) => updateStat(i, "value", e.target.value)}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm font-bold text-white outline-none focus:border-pink-500/40"
                  placeholder="10+"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] text-white/30">Etiket</label>
                <input
                  value={stat.label}
                  onChange={(e) => updateStat(i, "label", e.target.value)}
                  className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40"
                  placeholder="Aktif Ekip Üyesi"
                />
              </div>
            </div>
            <button onClick={() => deleteStat(i)} className="rounded-lg p-2 text-red-400/40 hover:bg-red-500/10 hover:text-red-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
