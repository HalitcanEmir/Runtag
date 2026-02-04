"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Gerçek Projeler",
    description: "Teorik değil, gerçek kullanıcılara ulaşan projeler geliştir. Portföyünü güçlendir.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Mentorluk Desteği",
    description: "Deneyimli ekip arkadaşlarından öğren. Her seviyeye uygun rehberlik al.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Yarışma Deneyimi",
    description: "Teknofest, hackathonlar ve global yarışmalara ekip olarak katıl.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Esnek Çalışma",
    description: "Kendi hızında katkı sağla. Ders programına göre ayarlayabileceğin çalışma saatleri.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "CV&apos;ni Güçlendir",
    description: "Tamamlanan projeler referans olarak kullanılabilir. Gerçek iş deneyimi kazan.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Network Oluştur",
    description: "Farklı üniversitelerden öğrencilerle tanış. Kariyer fırsatlarına ulaş.",
  },
];

const teams = [
  {
    name: "Oyun Geliştirme",
    description: "Unity, Unreal Engine ve Godot ile 2D/3D oyunlar geliştiriyoruz. Game jam&apos;lere katılıyor, Teknofest oyun kategorisinde yarışıyoruz.",
    members: 12,
    openPositions: 3,
    color: "purple",
    gradient: "from-purple-500 to-violet-600",
    skills: ["Unity", "Unreal Engine", "Godot", "C#", "C++", "Pixel Art", "3D Modelleme"],
    projects: ["Indie RPG", "Mobile Puzzle", "VR Experience"],
  },
  {
    name: "Web & Mobil",
    description: "Next.js, React Native ve Node.js ile modern web ve mobil uygulamalar geliştiriyoruz. SaaS projeleri ve startup fikirleri üzerinde çalışıyoruz.",
    members: 15,
    openPositions: 4,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "UI/UX"],
    projects: ["E-ticaret Platform", "Sosyal Medya App", "Fintech Dashboard"],
  },
  {
    name: "AI & Veri Bilimi",
    description: "Machine Learning, Deep Learning ve yapay zeka projeleri geliştiriyoruz. Teknofest AI kategorilerinde ve global hackathonlarda yarışıyoruz.",
    members: 10,
    openPositions: 5,
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Data Analysis"],
    projects: ["Görüntü Sınıflandırma", "Chatbot", "Tahmin Modeli"],
  },
  {
    name: "IoT & Robotik",
    description: "Arduino, Raspberry Pi ve mikrodenetleyicilerle IoT sistemleri ve robotik projeler geliştiriyoruz. Otonom sistemler üzerinde çalışıyoruz.",
    members: 8,
    openPositions: 4,
    color: "cyan",
    gradient: "from-cyan-500 to-teal-500",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "ROS", "Sensörler", "PCB Tasarımı"],
    projects: ["Akıllı Sera", "Mini Drone", "Otonom Araç"],
  },
  {
    name: "Siber Güvenlik",
    description: "Etik hacking, penetrasyon testleri ve güvenlik analizleri yapıyoruz. CTF yarışmalarına katılıyor, güvenlik araştırmaları yürütüyoruz.",
    members: 6,
    openPositions: 3,
    color: "red",
    gradient: "from-red-500 to-orange-500",
    skills: ["Penetration Testing", "Network Security", "Cryptography", "Linux", "Python"],
    projects: ["Security Audit Tool", "CTF Challenges", "Vulnerability Scanner"],
  },
  {
    name: "Blockchain & Web3",
    description: "Akıllı kontratlar ve DApp&apos;ler geliştiriyoruz. Ethereum, Solana ve diğer blockchain platformlarında projeler üretiyoruz.",
    members: 5,
    openPositions: 2,
    color: "amber",
    gradient: "from-amber-500 to-yellow-500",
    skills: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DeFi", "NFT"],
    projects: ["NFT Marketplace", "DAO Platform", "DeFi Protocol"],
  },
];

export default function KariyerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    department: "",
    year: "",
    team: "",
    experience: "",
    portfolio: "",
    message: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        setCvFile(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="nebula nebula--purple absolute -left-32 -top-40 h-80 w-80" />
        <div className="nebula nebula--blue absolute -right-40 top-40 h-96 w-96" />
        <div className="nebula nebula--purple absolute bottom-[-10rem] right-20 h-72 w-72 opacity-60" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20">
          {/* Animated particles */}
          <div className="pointer-events-none absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                  Aktif Başvuru Dönemi
                </span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Geleceği Birlikte{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  İnşa Edelim
                </span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Üniversite öğrencileri için tasarlanmış, gerçek projeler üreten bir teknoloji topluluğuna katıl. 
                Deneyim şart değil, öğrenme isteği yeterli.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#basvur"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.4)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(236,72,153,0.6)]"
                >
                  <span className="relative z-10">Hemen Başvur</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <a
                  href="#ekipler"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                >
                  Ekipleri İncele
                </a>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  { value: "47+", label: "Aktif Üye" },
                  { value: "6", label: "Farklı Ekip" },
                  { value: "21", label: "Açık Pozisyon" },
                  { value: "15+", label: "Tamamlanan Proje" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
                    <div className="mt-1 text-sm text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-3">
                Neden Biz?
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sana Ne Katacağız?
              </h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.06]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400">
                      {benefit.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section id="ekipler" className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-3">
                Ekiplerimiz
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Hangi Ekibe Katılmak İstersin?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/60">
                Her ekibin kendi projeleri, çalışma alanları ve hedefleri var. İlgi alanına göre bir veya birden fazla ekibe katılabilirsin.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-2">
              {teams.map((team, i) => (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent"
                >
                  {/* Header */}
                  <div className={`relative p-6 pb-4`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${team.gradient} opacity-5`} />
                    
                    <div className="relative flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white">{team.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/60">{team.description}</p>
                      </div>
                      {team.openPositions > 0 && (
                        <span className="shrink-0 ml-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {team.openPositions} Açık
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 pt-0">
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {team.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Projects */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Aktif Projeler</p>
                      <div className="flex flex-wrap gap-2">
                        {team.projects.map((project) => (
                          <span
                            key={project}
                            className={`rounded-lg bg-gradient-to-r ${team.gradient} bg-opacity-10 px-3 py-1.5 text-xs font-medium text-white/80`}
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[...Array(Math.min(4, team.members))].map((_, idx) => (
                            <div
                              key={idx}
                              className={`h-8 w-8 rounded-full border-2 border-black/50 bg-gradient-to-br ${team.gradient} shadow-lg`}
                            />
                          ))}
                          {team.members > 4 && (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black/50 bg-white/10 text-[10px] font-bold text-white/70 backdrop-blur-sm">
                              +{team.members - 4}
                            </div>
                          )}
                        </div>
                        <span className="text-sm text-white/50">{team.members} üye</span>
                      </div>
                      <a
                        href="#basvur"
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${team.gradient} px-4 py-2 text-xs font-semibold text-white opacity-80 transition-opacity hover:opacity-100`}
                      >
                        Başvur
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="basvur" className="relative py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-3">
                Başvuru
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Aramıza Katıl
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Formu doldur, CV&apos;ni yükle ve hangi ekibe katılmak istediğini seç. En kısa sürede seninle iletişime geçeceğiz.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-12 text-center"
              >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
                  <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Başvurun Alındı!</h3>
                <p className="text-white/60">En kısa sürede seninle iletişime geçeceğiz. Discord sunucumuza katılmayı unutma!</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#4752C4]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Discord&apos;a Katıl
                </a>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-10"
              >
                {/* Background glow */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-pink-500/10 blur-3xl" />

                <div className="relative grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                      placeholder="Adın Soyadın"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  {/* University */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Üniversite *</label>
                    <input
                      type="text"
                      name="university"
                      required
                      value={formData.university}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                      placeholder="Üniversite adı"
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Bölüm *</label>
                    <input
                      type="text"
                      name="department"
                      required
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                      placeholder="Bölüm adı"
                    />
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Sınıf *</label>
                    <select
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                    >
                      <option value="" className="bg-gray-900">Sınıf seç</option>
                      <option value="hazirlik" className="bg-gray-900">Hazırlık</option>
                      <option value="1" className="bg-gray-900">1. Sınıf</option>
                      <option value="2" className="bg-gray-900">2. Sınıf</option>
                      <option value="3" className="bg-gray-900">3. Sınıf</option>
                      <option value="4" className="bg-gray-900">4. Sınıf</option>
                      <option value="yukseklisans" className="bg-gray-900">Yüksek Lisans</option>
                      <option value="mezun" className="bg-gray-900">Mezun</option>
                    </select>
                  </div>

                  {/* Team */}
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">İlgilendiğin Ekip *</label>
                    <select
                      name="team"
                      required
                      value={formData.team}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                    >
                      <option value="" className="bg-gray-900">Ekip seç</option>
                      {teams.map((team) => (
                        <option key={team.name} value={team.name} className="bg-gray-900">
                          {team.name}
                        </option>
                      ))}
                      <option value="birden-fazla" className="bg-gray-900">Birden fazla ekip</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">Deneyim Seviyesi</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                    >
                      <option value="" className="bg-gray-900">Deneyim seviyesi seç</option>
                      <option value="baslangic" className="bg-gray-900">Başlangıç - Yeni öğreniyorum</option>
                      <option value="orta" className="bg-gray-900">Orta - Birkaç proje yaptım</option>
                      <option value="ileri" className="bg-gray-900">İleri - Ciddi projelerim var</option>
                    </select>
                  </div>

                  {/* Portfolio */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">Portfolio / GitHub / LinkedIn</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
                      placeholder="https://github.com/username"
                    />
                  </div>

                  {/* CV Upload */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">CV Yükle (PDF)</label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                      className={`relative cursor-pointer rounded-xl border-2 border-dashed transition-all ${
                        cvFile 
                          ? "border-emerald-500/50 bg-emerald-500/5" 
                          : "border-white/10 bg-white/[0.02] hover:border-pink-500/30 hover:bg-white/[0.04]"
                      } p-8 text-center`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      
                      {cvFile ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium text-white">{cvFile.name}</p>
                            <p className="text-xs text-white/50">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setCvFile(null);
                            }}
                            className="ml-auto rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-white/40">
                            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                          </div>
                          <p className="text-sm text-white/70">
                            <span className="font-semibold text-pink-400">Dosya seç</span> veya sürükle bırak
                          </p>
                          <p className="mt-1 text-xs text-white/40">PDF, maksimum 10MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white/70 mb-2">Kendinden Bahset</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-pink-500/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20 resize-none"
                      placeholder="Neden katılmak istiyorsun? Hangi projelerde çalıştın? Hedeflerin neler?"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            Başvuruyu Gönder
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-white/40">
                  Başvurunu göndererek{" "}
                  <a href="#" className="text-pink-400 hover:underline">Gizlilik Politikası</a>
                  &apos;nı kabul etmiş olursun.
                </p>
              </motion.form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
