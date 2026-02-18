"use client";

import { useState, useEffect } from "react";
import type { EmailConfig } from "@/lib/teklifler";

export default function EmailAyarlariPage() {
  const [config, setConfig] = useState<EmailConfig>({
    smtpHost: "",
    smtpPort: 587,
    smtpUser: "",
    smtpPass: "",
    fromEmail: "",
    fromName: "Runteg",
    notifyEmail: "",
  });
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string } | null>(null);

  useEffect(() => {
    fetch("/api/email-config")
      .then((r) => r.json())
      .then((data) => {
        if (data.config) setConfig(data.config);
      })
      .catch(() => {});
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/email-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch {}
    setSaving(false);
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);

    try {
      // First save the current config to server so send-reply can read it
      await fetch("/api/email-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ config }),
      });

      const res = await fetch("/api/send-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "runtegiletisim@gmail.com",
          subject: "🧪 Runteg E-posta Test",
          htmlBody: `
            <div style="font-family: 'Segoe UI', sans-serif; max-width: 500px; margin: 0 auto; background: #0a0a14; color: #e0e0e0; border-radius: 12px; overflow: hidden; border: 1px solid #1a1a2e;">
              <div style="background: linear-gradient(135deg, #ec4899, #a855f7); padding: 20px 28px;">
                <h1 style="margin: 0; font-size: 18px; color: #fff;">✅ Bağlantı Başarılı</h1>
              </div>
              <div style="padding: 20px 28px;">
                <p style="color: #e0e0e0; font-size: 14px;">Bu bir test e-postasıdır. E-posta yapılandırmanız çalışıyor!</p>
              </div>
            </div>
          `,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setTestResult({ ok: true, msg: "Test e-postası başarıyla gönderildi!" });
      } else {
        setTestResult({ ok: false, msg: data.error || "Gönderilemedi" });
      }
    } catch {
      setTestResult({ ok: false, msg: "Bağlantı hatası" });
    } finally {
      setTesting(false);
    }
  };

  const updateField = (key: keyof EmailConfig, value: string | number) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">E-posta Ayarları</h1>
        <p className="mt-1 text-sm text-white/40">
          Teklif bildirimleri ve yanıtlar için SMTP e-posta yapılandırması
        </p>
      </div>

      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 space-y-6">
        {/* SMTP Settings */}
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">SMTP Sunucu Ayarları</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs text-white/40">SMTP Sunucu (Host)</label>
              <input
                type="text"
                value={config.smtpHost}
                onChange={(e) => updateField("smtpHost", e.target.value)}
                placeholder="smtp.gmail.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/40">SMTP Port</label>
              <input
                type="number"
                value={config.smtpPort}
                onChange={(e) => updateField("smtpPort", parseInt(e.target.value) || 587)}
                placeholder="587"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Kullanıcı Adı (E-posta)</label>
              <input
                type="text"
                value={config.smtpUser}
                onChange={(e) => updateField("smtpUser", e.target.value)}
                placeholder="ornek@gmail.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Şifre / Uygulama Şifresi</label>
              <input
                type="password"
                value={config.smtpPass}
                onChange={(e) => updateField("smtpPass", e.target.value)}
                placeholder="••••••••••••"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
              />
            </div>
          </div>
        </div>

        {/* Sender Settings */}
        <div className="border-t border-white/5 pt-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Gönderici Bilgileri</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Gönderici Adı</label>
              <input
                type="text"
                value={config.fromName}
                onChange={(e) => updateField("fromName", e.target.value)}
                placeholder="Runteg"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-white/40">Gönderici E-posta</label>
              <input
                type="email"
                value={config.fromEmail}
                onChange={(e) => updateField("fromEmail", e.target.value)}
                placeholder="noreply@runteg.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
              />
              <p className="mt-1 text-[10px] text-white/20">Boş bırakılırsa SMTP kullanıcı adı kullanılır</p>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="border-t border-white/5 pt-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">Bildirim Ayarları</h2>
          <div>
            <label className="mb-1.5 block text-xs text-white/40">Bildirim E-posta Adresi</label>
            <input
              type="email"
              value={config.notifyEmail}
              onChange={(e) => updateField("notifyEmail", e.target.value)}
              placeholder="runtegiletisim@gmail.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/80 outline-none transition-colors focus:border-purple-500/30 placeholder:text-white/20"
            />
            <p className="mt-1 text-[10px] text-white/20">Yeni teklif geldiğinde bildirim gönderilecek adres</p>
          </div>
        </div>

        {/* Info box */}
        <div className="rounded-xl border border-purple-500/10 bg-purple-500/5 p-4">
          <h3 className="text-xs font-semibold text-purple-400">Gmail Kullanıcıları İçin</h3>
          <p className="mt-1 text-xs leading-relaxed text-white/40">
            Gmail ile kullanmak için: SMTP Host: <span className="text-white/60">smtp.gmail.com</span>, Port: <span className="text-white/60">587</span>. 
            Google hesabınızdan <span className="text-white/60">Uygulama Şifreleri</span> oluşturmanız gereklidir. 
            Google Hesabı → Güvenlik → 2 Adımlı Doğrulama → Uygulama Şifreleri yolunu takip edin.
          </p>
        </div>

        {/* Test result */}
        {testResult && (
          <div className={`rounded-lg border p-3 text-sm ${
            testResult.ok
              ? "border-green-500/20 bg-green-500/10 text-green-400"
              : "border-red-500/20 bg-red-500/10 text-red-400"
          }`}>
            {testResult.msg}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 border-t border-white/5 pt-6">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-pink-500/20"
          >
            {saved ? (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Kaydedildi!
              </>
            ) : (
              "Ayarları Kaydet"
            )}
          </button>
          <button
            onClick={handleTest}
            disabled={testing || !config.smtpHost || !config.smtpUser}
            className={`flex items-center gap-2 rounded-xl border px-6 py-2.5 text-sm font-medium transition-all ${
              testing || !config.smtpHost || !config.smtpUser
                ? "cursor-not-allowed border-white/5 text-white/20"
                : "border-white/10 text-white/60 hover:border-white/20 hover:bg-white/5 hover:text-white/80"
            }`}
          >
            {testing ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Test Ediliyor...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Test E-postası Gönder
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
