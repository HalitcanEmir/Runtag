"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getTeklifler,
  updateTeklifStatus,
  updateTeklifNote,
  markTeklifReplied,
  deleteTeklif,
  type Teklif,
  type TeklifStatus,
} from "@/lib/teklifler";

const statusMap: Record<TeklifStatus, { label: string; color: string; bg: string }> = {
  yeni: { label: "Yeni", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  inceleniyor: { label: "İnceleniyor", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  cevaplandi: { label: "Cevaplandı", color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
  reddedildi: { label: "Reddedildi", color: "text-red-400", bg: "bg-red-500/10 border-red-500/20" },
};

export default function AdminTekliflerPage() {
  const [teklifler, setTeklifler] = useState<Teklif[]>([]);
  const [selected, setSelected] = useState<Teklif | null>(null);
  const [filterStatus, setFilterStatus] = useState<TeklifStatus | "all">("all");
  const [replyOpen, setReplyOpen] = useState(false);
  const [replySubject, setReplySubject] = useState("");
  const [replyBody, setReplyBody] = useState("");
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [adminNote, setAdminNote] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const refresh = useCallback(() => {
    const data = getTeklifler();
    setTeklifler(data);
  }, []);

  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  const filtered = filterStatus === "all" ? teklifler : teklifler.filter((t) => t.status === filterStatus);

  const handleSelect = (t: Teklif) => {
    setSelected(t);
    setAdminNote(t.adminNote || "");
    setReplyOpen(false);
    setSendResult(null);
    // Auto mark as reviewing if new
    if (t.status === "yeni") {
      updateTeklifStatus(t.id, "inceleniyor");
      refresh();
    }
  };

  const handleStatusChange = (id: string, status: TeklifStatus) => {
    updateTeklifStatus(id, status);
    refresh();
    if (selected?.id === id) {
      setSelected({ ...selected, status });
    }
  };

  const handleSaveNote = () => {
    if (selected) {
      updateTeklifNote(selected.id, adminNote);
      refresh();
    }
  };

  const handleDelete = (id: string) => {
    deleteTeklif(id);
    if (selected?.id === id) setSelected(null);
    setDeleteConfirm(null);
    refresh();
  };

  const openReply = () => {
    if (!selected) return;
    setReplySubject(`Re: Teklif Talebi - ${selected.name}`);
    setReplyBody(`Sayın ${selected.name},\n\nTeklif talebiniz için teşekkür ederiz.\n\n`);
    setReplyOpen(true);
    setSendResult(null);
  };

  const handleSendReply = async () => {
    if (!selected) return;

    setSending(true);
    setSendResult(null);

    // Build HTML email
    const htmlBody = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a14; color: #e0e0e0; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a2e;">
        <div style="background: linear-gradient(135deg, #ec4899, #a855f7); padding: 24px 32px;">
          <h1 style="margin: 0; font-size: 20px; color: #fff;">Runteg</h1>
        </div>
        <div style="padding: 24px 32px;">
          <div style="white-space: pre-wrap; color: #e0e0e0; font-size: 14px; line-height: 1.7;">${replyBody.replace(/\n/g, "<br/>")}</div>
          <hr style="border: none; border-top: 1px solid #1a1a2e; margin: 24px 0;" />
          <p style="color: #666; font-size: 12px; margin: 0;">Bu e-posta Runteg ekibi tarafından gönderilmiştir.</p>
        </div>
      </div>
    `;

    try {
      const res = await fetch("/api/send-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: selected.email,
          subject: replySubject,
          htmlBody,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        markTeklifReplied(selected.id);
        refresh();
        setSelected({ ...selected, status: "cevaplandi", repliedAt: new Date().toISOString() });
        setSendResult({ ok: true, msg: "E-posta başarıyla gönderildi!" });
        setReplyOpen(false);
      } else {
        setSendResult({ ok: false, msg: data.error || "Gönderilemedi" });
      }
    } catch {
      setSendResult({ ok: false, msg: "Bağlantı hatası" });
    } finally {
      setSending(false);
    }
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const newCount = teklifler.filter((t) => t.status === "yeni").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Teklifler</h1>
          <p className="mt-1 text-sm text-white/40">
            Gelen teklif taleplerini inceleyin ve yanıtlayın
          </p>
        </div>
        {newCount > 0 && (
          <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <span className="text-sm font-medium text-blue-400">{newCount} yeni teklif</span>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { key: "all" as const, label: "Tümü", count: teklifler.length },
          { key: "yeni" as const, label: "Yeni", count: teklifler.filter((t) => t.status === "yeni").length },
          { key: "inceleniyor" as const, label: "İnceleniyor", count: teklifler.filter((t) => t.status === "inceleniyor").length },
          { key: "cevaplandi" as const, label: "Cevaplandı", count: teklifler.filter((t) => t.status === "cevaplandi").length },
          { key: "reddedildi" as const, label: "Reddedildi", count: teklifler.filter((t) => t.status === "reddedildi").length },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilterStatus(tab.key)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filterStatus === tab.key
                ? "bg-white/10 text-white"
                : "text-white/40 hover:bg-white/5 hover:text-white/60"
            }`}
          >
            {tab.label}
            <span className={`rounded-full px-2 py-0.5 text-xs ${
              filterStatus === tab.key ? "bg-white/10" : "bg-white/5"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* List */}
        <div className="space-y-3 lg:col-span-2">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
              <svg className="mx-auto h-12 w-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="mt-3 text-sm text-white/30">Henüz teklif yok</p>
            </div>
          ) : (
            filtered.map((t) => {
              const st = statusMap[t.status];
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t)}
                  className={`w-full rounded-xl border p-4 text-left transition-all duration-200 ${
                    selected?.id === t.id
                      ? "border-pink-500/30 bg-pink-500/5"
                      : "border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        {t.status === "yeni" && (
                          <div className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-400 animate-pulse" />
                        )}
                        <h3 className="truncate text-sm font-semibold text-white">{t.name}</h3>
                      </div>
                      <p className="mt-0.5 truncate text-xs text-white/40">{t.email}</p>
                    </div>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${st.bg} ${st.color}`}>
                      {st.label}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {t.selectedTypes.slice(0, 3).map((type) => (
                      <span key={type} className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/50">
                        {type}
                      </span>
                    ))}
                    {t.selectedTypes.length > 3 && (
                      <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/50">
                        +{t.selectedTypes.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-white/30">{formatDate(t.createdAt)}</span>
                    <span className="text-[10px] text-white/30">{t.budget}</span>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-3">
          {selected ? (
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              {/* Detail Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">{selected.name}</h2>
                  <p className="text-sm text-white/50">{selected.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={selected.status}
                    onChange={(e) => handleStatusChange(selected.id, e.target.value as TeklifStatus)}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 outline-none"
                  >
                    <option value="yeni">Yeni</option>
                    <option value="inceleniyor">İnceleniyor</option>
                    <option value="cevaplandi">Cevaplandı</option>
                    <option value="reddedildi">Reddedildi</option>
                  </select>
                  <button
                    onClick={() => setDeleteConfirm(selected.id)}
                    className="rounded-lg border border-red-500/20 bg-red-500/10 p-1.5 text-red-400 transition-colors hover:bg-red-500/20"
                    title="Sil"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Delete confirmation */}
              {deleteConfirm === selected.id && (
                <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-3">
                  <p className="flex-1 text-sm text-red-300">Bu teklifi silmek istediğinize emin misiniz?</p>
                  <button onClick={() => handleDelete(selected.id)} className="rounded-lg bg-red-500 px-3 py-1 text-xs font-medium text-white hover:bg-red-600">Sil</button>
                  <button onClick={() => setDeleteConfirm(null)} className="rounded-lg border border-white/10 px-3 py-1 text-xs text-white/60 hover:bg-white/5">İptal</button>
                </div>
              )}

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Telefon", value: selected.phone || "-" },
                  { label: "Şirket", value: selected.company || "-" },
                  { label: "Bütçe", value: selected.budget },
                  { label: "Zaman Çizelgesi", value: selected.timeline },
                  { label: "Tarih", value: formatDate(selected.createdAt) },
                  { label: "Yanıt Tarihi", value: selected.repliedAt ? formatDate(selected.repliedAt) : "-" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <p className="text-[10px] uppercase tracking-wider text-white/30">{item.label}</p>
                    <p className="mt-1 text-sm font-medium text-white/80">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Project types */}
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-white/30">Proje Türleri</p>
                <div className="flex flex-wrap gap-2">
                  {selected.selectedTypes.map((type) => (
                    <span key={type} className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-400">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-white/30">Proje Açıklaması</p>
                <p className="rounded-lg border border-white/5 bg-white/[0.02] p-4 text-sm leading-relaxed text-white/70">
                  {selected.description || "Belirtilmemiş"}
                </p>
              </div>

              {/* Admin note */}
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-white/30">Admin Notu</p>
                <div className="flex gap-2">
                  <textarea
                    value={adminNote}
                    onChange={(e) => setAdminNote(e.target.value)}
                    placeholder="İç not ekleyin..."
                    rows={2}
                    className="flex-1 resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
                  />
                  <button
                    onClick={handleSaveNote}
                    className="self-end rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/60 transition-all hover:bg-white/10 hover:text-white"
                  >
                    Kaydet
                  </button>
                </div>
              </div>

              {/* Reply section */}
              <div className="border-t border-white/5 pt-4">
                {sendResult && (
                  <div className={`mb-4 rounded-lg border p-3 text-sm ${
                    sendResult.ok
                      ? "border-green-500/20 bg-green-500/10 text-green-400"
                      : "border-red-500/20 bg-red-500/10 text-red-400"
                  }`}>
                    {sendResult.msg}
                  </div>
                )}

                {!replyOpen ? (
                  <button
                    onClick={openReply}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-pink-500/20"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    E-posta ile Yanıtla
                  </button>
                ) : (
                  <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white">E-posta Yanıtı</h3>
                      <button onClick={() => setReplyOpen(false)} className="text-white/30 hover:text-white/60">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-white/30">Alıcı</label>
                      <input
                        type="text"
                        readOnly
                        value={selected.email}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/50 outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-white/30">Konu</label>
                      <input
                        type="text"
                        value={replySubject}
                        onChange={(e) => setReplySubject(e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs text-white/30">İçerik</label>
                      <textarea
                        value={replyBody}
                        onChange={(e) => setReplyBody(e.target.value)}
                        rows={8}
                        className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
                        placeholder="E-posta içeriğini yazın..."
                      />
                    </div>

                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setReplyOpen(false)}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/50 transition-colors hover:bg-white/5 hover:text-white/70"
                      >
                        İptal
                      </button>
                      <button
                        onClick={handleSendReply}
                        disabled={sending || !replyBody.trim()}
                        className={`flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                          sending || !replyBody.trim()
                            ? "cursor-not-allowed bg-white/5 text-white/30"
                            : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:shadow-pink-500/20"
                        }`}
                      >
                        {sending ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Gönder
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02]">
              <svg className="h-16 w-16 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <p className="mt-3 text-sm text-white/30">Detayları görüntülemek için bir teklif seçin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
