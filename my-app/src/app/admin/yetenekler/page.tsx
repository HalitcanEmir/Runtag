"use client";

import { useState } from "react";
import { useSiteData, type Capability } from "@/context/SiteDataContext";

const accentColors = ["purple", "blue", "pink", "cyan", "red", "amber", "emerald", "orange"];

function CapabilityEditor({ cap, onChange, onDelete }: { cap: Capability; onChange: (c: Capability) => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
      {/* Header - always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-white/[0.02]"
      >
        <div className={`h-3 w-3 rounded-full bg-${cap.accentColor}-500`} />
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{cap.title}</p>
          <p className="text-xs text-white/30">{cap.subtitle}</p>
        </div>
        <svg className={`h-5 w-5 text-white/30 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Body */}
      {open && (
        <div className="border-t border-white/[0.06] p-4 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-white/40">Başlık</label>
              <input value={cap.title} onChange={(e) => onChange({ ...cap, title: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">Alt Başlık</label>
              <input value={cap.subtitle} onChange={(e) => onChange({ ...cap, subtitle: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Kısa Açıklama</label>
            <input value={cap.description} onChange={(e) => onChange({ ...cap, description: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Detaylı Açıklama</label>
            <textarea value={cap.expandedDescription} onChange={(e) => onChange({ ...cap, expandedDescription: e.target.value })} rows={3} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40 resize-none" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-white/40">Görsel URL</label>
              <input value={cap.image} onChange={(e) => onChange({ ...cap, image: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-white/40">Link</label>
              <input value={cap.link} onChange={(e) => onChange({ ...cap, link: e.target.value })} className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Renk</label>
            <div className="flex flex-wrap gap-2">
              {accentColors.map((c) => (
                <button
                  key={c}
                  onClick={() => onChange({ ...cap, accentColor: c })}
                  className={`rounded-lg px-3 py-1.5 text-xs capitalize transition-all ${
                    cap.accentColor === c
                      ? "bg-white/10 text-white border border-white/20"
                      : "text-white/40 border border-white/[0.06] hover:bg-white/[0.04]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Etiketler (virgülle ayırın)</label>
            <input
              value={cap.tags.join(", ")}
              onChange={(e) => onChange({ ...cap, tags: e.target.value.split(",").map((t) => t.trim()).filter(Boolean) })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-white/40">Faydalar (her satıra bir tane)</label>
            <textarea
              value={cap.benefits.join("\n")}
              onChange={(e) => onChange({ ...cap, benefits: e.target.value.split("\n").filter(Boolean) })}
              rows={4}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-pink-500/40 resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button onClick={onDelete} className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs text-red-400 hover:bg-red-500/20">
              Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminYeteneklerPage() {
  const { data, updateCapabilities } = useSiteData();
  const [caps, setCaps] = useState<Capability[]>([...data.capabilities]);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateCapabilities(caps);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addCapability = () => {
    setCaps([...caps, {
      id: `new-${Date.now()}`,
      title: "Yeni Yetenek",
      subtitle: "Subtitle",
      description: "Açıklama",
      expandedDescription: "Detaylı açıklama",
      tags: [],
      benefits: [],
      image: "/images/game-dev.png",
      accentColor: "purple",
      link: "/yetenekler/yeni",
    }]);
  };

  const updateCap = (index: number, cap: Capability) => {
    const updated = [...caps];
    updated[index] = cap;
    setCaps(updated);
  };

  const deleteCap = (index: number) => {
    setCaps(caps.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Yetenekler</h1>
          <p className="mt-1 text-sm text-white/40">Ana sayfadaki yetenek kartlarını düzenleyin ({caps.length} adet)</p>
        </div>
        <div className="flex gap-3">
          <button onClick={addCapability} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 hover:bg-white/[0.08]">
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
        {caps.map((cap, i) => (
          <CapabilityEditor key={cap.id} cap={cap} onChange={(c) => updateCap(i, c)} onDelete={() => deleteCap(i)} />
        ))}
      </div>
    </div>
  );
}
