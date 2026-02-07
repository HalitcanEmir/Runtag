"use client";

import { useSiteData } from "@/context/SiteDataContext";
import Link from "next/link";

const quickLinks = [
  { label: "Hero & Ayarlar", href: "/admin/hero", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", color: "pink" },
  { label: "Yetenekler", href: "/admin/yetenekler", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "purple" },
  { label: "Projeler", href: "/admin/projeler", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "blue" },
  { label: "Ekip Süreci", href: "/admin/ekip", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", color: "cyan" },
  { label: "İstatistikler", href: "/admin/istatistikler", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "emerald" },
];

export default function AdminDashboard() {
  const { data } = useSiteData();

  const summaryCards = [
    { label: "Yetenekler", value: data.capabilities.length, color: "from-purple-500 to-violet-600" },
    { label: "Projeler", value: data.projects.length, color: "from-pink-500 to-rose-600" },
    { label: "Süreç Kolonları", value: data.crews.length, color: "from-blue-500 to-cyan-600" },
    { label: "İstatistikler", value: data.stats.length, color: "from-emerald-500 to-green-600" },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-sm text-white/40">Runteg Tech Studio site yönetim paneli</p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] p-5"
          >
            <div className={`pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${card.color} opacity-10 blur-2xl`} />
            <p className="text-3xl font-bold text-white">{card.value}</p>
            <p className="mt-1 text-xs text-white/40">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-white/80">Hızlı Erişim</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${link.color}-500/10 text-${link.color}-400`}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/80 group-hover:text-white">{link.label}</p>
                <p className="text-xs text-white/30">Düzenle</p>
              </div>
              <svg className="ml-auto h-4 w-4 text-white/20 transition-transform group-hover:translate-x-1 group-hover:text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
        <h3 className="text-sm font-semibold text-white/60">Bilgi</h3>
        <p className="mt-2 text-xs leading-relaxed text-white/30">
          Bu panelden sitenin tüm içeriklerini yönetebilirsiniz. Yaptığınız değişiklikler anında siteye yansır.
          Veriler tarayıcınızın yerel deposunda saklanır. Farklı bir tarayıcıdan yapılan değişiklikler diğer tarayıcılara yansımaz.
        </p>
      </div>
    </div>
  );
}
