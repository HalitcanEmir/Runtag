"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { addTeklif } from "@/lib/teklifler";

const projectTypes = [
  {
    id: "web",
    label: "Web Sitesi",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: "mobil",
    label: "Mobil Uygulama",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "oyun",
    label: "Oyun Geliştirme",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "AI / Veri Bilimi",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "tasarim",
    label: "UI/UX Tasarım",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: "diger",
    label: "Diğer",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

const budgetRanges = [
  { id: "small", label: "₺5.000 - ₺15.000", description: "Küçük proje" },
  { id: "medium", label: "₺15.000 - ₺50.000", description: "Orta ölçekli" },
  { id: "large", label: "₺50.000 - ₺150.000", description: "Büyük proje" },
  { id: "enterprise", label: "₺150.000+", description: "Kurumsal" },
  { id: "unknown", label: "Henüz Bilmiyorum", description: "Danışmak istiyorum" },
];

const timelineOptions = [
  { id: "urgent", label: "1-2 Hafta", emoji: "⚡" },
  { id: "normal", label: "1-2 Ay", emoji: "📅" },
  { id: "relaxed", label: "3-6 Ay", emoji: "🗓️" },
  { id: "flexible", label: "Esnek", emoji: "🔄" },
];

export default function TeklifPage() {
  const [step, setStep] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = 4;

  const toggleType = (id: string) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedTypes.length > 0;
      case 2:
        return budget !== "";
      case 3:
        return timeline !== "";
      case 4:
        return formData.name && formData.email && formData.description;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);

    // Get readable labels
    const typeLabels = selectedTypes.map(
      (id) => projectTypes.find((t) => t.id === id)?.label || id
    );
    const budgetLabel =
      budgetRanges.find((b) => b.id === budget)?.label || budget;
    const timelineLabel =
      timelineOptions.find((t) => t.id === timeline)?.label || timeline;

    // Save to localStorage store
    const teklif = addTeklif({
      selectedTypes: typeLabels,
      budget: budgetLabel,
      timeline: timelineLabel,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      description: formData.description,
    });

    // Try sending email notification (non-blocking, config is read server-side)
    try {
      await fetch("/api/send-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teklif }),
      });
    } catch {
      // Email sending is non-blocking, teklif is already saved
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background nebula effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
        <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
        <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-4xl flex-col px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {submitted ? (
            /* Success State */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-500/10" />
                <svg className="relative h-12 w-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">Teklifiniz Alındı!</h2>
              <p className="mt-4 max-w-md text-white/50">
                En kısa sürede sizinle iletişime geçeceğiz. Genelde 24 saat içinde dönüş sağlıyoruz.
              </p>
              <a
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Ana Sayfaya Dön
              </a>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-10 text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/30"
                >
                  Teklif Al
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-3xl font-bold text-white sm:text-4xl"
                >
                  Projenizi Hayata Geçirelim
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 text-sm text-white/40"
                >
                  Birkaç basit adımda bize projenizi anlatın, size özel teklif hazırlayalım.
                </motion.p>
              </div>

              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <button
                        onClick={() => s < step && setStep(s)}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 ${
                          s === step
                            ? "border-pink-500/50 bg-pink-500/20 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)]"
                            : s < step
                              ? "border-pink-500/30 bg-pink-500/10 text-pink-400 cursor-pointer hover:bg-pink-500/20"
                              : "border-white/10 bg-white/[0.03] text-white/30"
                        }`}
                      >
                        {s < step ? (
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          s
                        )}
                      </button>
                      <span className={`hidden text-xs sm:block ${s === step ? "text-white/70" : "text-white/30"}`}>
                        {s === 1 && "Proje Tipi"}
                        {s === 2 && "Bütçe"}
                        {s === 3 && "Zaman"}
                        {s === 4 && "Detaylar"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / totalSteps) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm sm:p-8">
                {/* Glow effects */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <AnimatePresence mode="wait">
                  {/* Step 1: Project Type */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <h2 className="mb-2 text-lg font-semibold text-white">Ne tür bir proje düşünüyorsunuz?</h2>
                      <p className="mb-6 text-sm text-white/40">Birden fazla seçebilirsiniz.</p>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {projectTypes.map((type) => {
                          const isSelected = selectedTypes.includes(type.id);
                          return (
                            <button
                              key={type.id}
                              onClick={() => toggleType(type.id)}
                              className={`group relative flex flex-col items-center gap-3 rounded-xl border p-5 transition-all duration-300 ${
                                isSelected
                                  ? "border-pink-500/40 bg-pink-500/10 shadow-[0_0_25px_rgba(236,72,153,0.15)]"
                                  : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                              }`}
                            >
                              <div
                                className={`transition-colors duration-300 ${
                                  isSelected ? "text-pink-400" : "text-white/40 group-hover:text-white/60"
                                }`}
                              >
                                {type.icon}
                              </div>
                              <span
                                className={`text-xs font-medium transition-colors duration-300 ${
                                  isSelected ? "text-white" : "text-white/60 group-hover:text-white/80"
                                }`}
                              >
                                {type.label}
                              </span>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500"
                                >
                                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </motion.div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Budget */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <h2 className="mb-2 text-lg font-semibold text-white">Tahmini bütçeniz nedir?</h2>
                      <p className="mb-6 text-sm text-white/40">Projenize en uygun aralığı seçin.</p>
                      <div className="flex flex-col gap-3">
                        {budgetRanges.map((range) => (
                          <button
                            key={range.id}
                            onClick={() => setBudget(range.id)}
                            className={`group flex items-center justify-between rounded-xl border p-4 transition-all duration-300 ${
                              budget === range.id
                                ? "border-pink-500/40 bg-pink-500/10 shadow-[0_0_25px_rgba(236,72,153,0.15)]"
                                : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                            }`}
                          >
                            <div className="flex flex-col items-start gap-0.5">
                              <span className={`text-sm font-semibold transition-colors ${budget === range.id ? "text-white" : "text-white/70"}`}>
                                {range.label}
                              </span>
                              <span className={`text-xs transition-colors ${budget === range.id ? "text-white/50" : "text-white/30"}`}>
                                {range.description}
                              </span>
                            </div>
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                                budget === range.id
                                  ? "border-pink-500 bg-pink-500"
                                  : "border-white/20 bg-transparent"
                              }`}
                            >
                              {budget === range.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="h-2 w-2 rounded-full bg-white"
                                />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Timeline */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <h2 className="mb-2 text-lg font-semibold text-white">Projeniz ne zaman hazır olmalı?</h2>
                      <p className="mb-6 text-sm text-white/40">Tahmini bir zaman çizelgesi seçin.</p>
                      <div className="grid grid-cols-2 gap-3">
                        {timelineOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setTimeline(option.id)}
                            className={`group flex flex-col items-center gap-2 rounded-xl border p-6 transition-all duration-300 ${
                              timeline === option.id
                                ? "border-pink-500/40 bg-pink-500/10 shadow-[0_0_25px_rgba(236,72,153,0.15)]"
                                : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                            }`}
                          >
                            <span className="text-2xl">{option.emoji}</span>
                            <span className={`text-sm font-semibold transition-colors ${timeline === option.id ? "text-white" : "text-white/70"}`}>
                              {option.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Contact Details */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <h2 className="mb-2 text-lg font-semibold text-white">İletişim Bilgileriniz</h2>
                      <p className="mb-6 text-sm text-white/40">Size ulaşabilmemiz için bilgilerinizi doldurun.</p>
                      <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-white/50">
                              Ad Soyad <span className="text-pink-400">*</span>
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Ahmet Yılmaz"
                              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-pink-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-white/50">
                              E-posta <span className="text-pink-400">*</span>
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="ahmet@sirket.com"
                              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-pink-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-white/50">Şirket / Marka</label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Şirket adı (opsiyonel)"
                              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-pink-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                            />
                          </div>
                          <div>
                            <label className="mb-1.5 block text-xs font-medium text-white/50">Telefon</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="05XX XXX XX XX"
                              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-pink-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-1.5 block text-xs font-medium text-white/50">
                            Proje Detayları <span className="text-pink-400">*</span>
                          </label>
                          <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows={5}
                            placeholder="Projenizle ilgili detayları buraya yazabilirsiniz. Ne tür özellikler istiyorsunuz? Referans aldığınız bir site/uygulama var mı?"
                            className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-pink-500/40 focus:bg-white/[0.05] focus:shadow-[0_0_20px_rgba(236,72,153,0.1)]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                    className={`flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white/80 ${
                      step === 1 ? "invisible" : ""
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Geri
                  </button>

                  {step < totalSteps ? (
                    <button
                      onClick={() => canProceed() && setStep((s) => s + 1)}
                      disabled={!canProceed()}
                      className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        canProceed()
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_28px_rgba(236,72,153,0.45)]"
                          : "cursor-not-allowed bg-white/[0.06] text-white/30"
                      }`}
                    >
                      <span className="relative z-10">Devam</span>
                      <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {canProceed() && (
                        <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={() => canProceed() && !submitting && handleSubmit()}
                      disabled={!canProceed() || submitting}
                      className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-8 py-2.5 text-sm font-semibold transition-all duration-300 ${
                        canProceed() && !submitting
                          ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_4px_20px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_28px_rgba(236,72,153,0.45)]"
                          : "cursor-not-allowed bg-white/[0.06] text-white/30"
                      }`}
                    >
                      <span className="relative z-10">{submitting ? "Gönderiliyor..." : "Teklif Gönder"}</span>
                      {submitting ? (
                        <svg className="relative z-10 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      ) : (
                        <svg className="relative z-10 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                      {canProceed() && !submitting && (
                        <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-6 text-center"
              >
                <div className="flex items-center gap-2 text-white/25">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs">Bilgileriniz güvende</span>
                </div>
                <div className="flex items-center gap-2 text-white/25">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs">24 saat içinde dönüş</span>
                </div>
                <div className="flex items-center gap-2 text-white/25">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs">Ücretsiz ön görüşme</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
