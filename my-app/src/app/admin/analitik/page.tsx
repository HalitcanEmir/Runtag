"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getTodayVisits,
  getTotalVisits,
  getActiveSessionCount,
  getRegisteredUserCount,
  setRegisteredUserCount,
  getLast30DaysVisits,
  getDailyVisits,
  type DailyVisit,
} from "@/lib/analytics";

export default function AdminAnalitikPage() {
  const [todayCount, setTodayCount] = useState(() => typeof window !== "undefined" ? getTodayVisits() : 0);
  const [totalCount, setTotalCount] = useState(() => typeof window !== "undefined" ? getTotalVisits() : 0);
  const [activeCount, setActiveCount] = useState(() => typeof window !== "undefined" ? getActiveSessionCount() : 0);
  const [registeredCount, setRegisteredCount] = useState(() => typeof window !== "undefined" ? getRegisteredUserCount() : 0);
  const [last30, setLast30] = useState<DailyVisit[]>(() => getLast30DaysVisits());
  const [allVisits, setAllVisits] = useState<DailyVisit[]>(() => getDailyVisits().slice(-30).reverse());
  const [editingUsers, setEditingUsers] = useState(false);
  const [userInput, setUserInput] = useState("");

  const refresh = useCallback(() => {
    setTodayCount(getTodayVisits());
    setTotalCount(getTotalVisits());
    setActiveCount(getActiveSessionCount());
    setRegisteredCount(getRegisteredUserCount());
    setLast30(getLast30DaysVisits());
    setAllVisits(getDailyVisits().slice(-30).reverse());
  }, []);

  useEffect(() => {
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  const maxCount = Math.max(...last30.map((d) => d.count), 1);

  const saveUserCount = () => {
    const val = parseInt(userInput, 10);
    if (!isNaN(val) && val >= 0) {
      setRegisteredUserCount(val);
      setRegisteredCount(val);
    }
    setEditingUsers(false);
  };

  function formatDate(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
  }

  function formatDateFull(dateStr: string) {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Analitik & Ziyaretçi</h1>
          <p className="mt-1 text-sm text-white/40">Ziyaretçi istatistikleri ve kullanıcı verileri</p>
        </div>
        <button
          onClick={refresh}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/60 transition-all hover:bg-white/[0.08]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Yenile
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Active Users */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-emerald-500/10 blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-400/70">Anlık Aktif</span>
            </div>
            <p className="text-4xl font-bold text-emerald-300">{activeCount}</p>
            <p className="mt-1 text-xs text-white/30">Şu anda sitede</p>
          </div>
        </div>

        {/* Today Visits */}
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-5">
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-blue-500/10 blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <svg className="h-4 w-4 text-blue-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wider text-blue-400/70">Bugünkü Giriş</span>
            </div>
            <p className="text-4xl font-bold text-blue-300">{todayCount}</p>
            <p className="mt-1 text-xs text-white/30">Sayfa görüntüleme</p>
          </div>
        </div>

        {/* Total Visits */}
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] p-5">
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex items-center gap-2">
              <svg className="h-4 w-4 text-purple-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wider text-purple-400/70">Toplam Ziyaret</span>
            </div>
            <p className="text-4xl font-bold text-purple-300">{totalCount.toLocaleString("tr-TR")}</p>
            <p className="mt-1 text-xs text-white/30">Tüm zamanlar</p>
          </div>
        </div>

        {/* Registered Users */}
        <div className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-pink-500/[0.04] p-5">
          <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-pink-500/10 blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-pink-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-xs font-medium uppercase tracking-wider text-pink-400/70">Kayıtlı Kullanıcı</span>
              </div>
              <button
                onClick={() => { setEditingUsers(true); setUserInput(String(registeredCount)); }}
                className="rounded-md p-1 text-white/20 transition-colors hover:bg-white/[0.06] hover:text-white/50"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            {editingUsers ? (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveUserCount()}
                  className="w-24 rounded-lg border border-pink-500/30 bg-white/[0.05] px-2 py-1 text-2xl font-bold text-pink-300 outline-none"
                  autoFocus
                />
                <button onClick={saveUserCount} className="rounded-lg bg-pink-500/20 px-2 py-1 text-xs text-pink-300 hover:bg-pink-500/30">✓</button>
                <button onClick={() => setEditingUsers(false)} className="rounded-lg bg-white/5 px-2 py-1 text-xs text-white/40 hover:bg-white/10">✕</button>
              </div>
            ) : (
              <p className="text-4xl font-bold text-pink-300">{registeredCount}</p>
            )}
            <p className="mt-1 text-xs text-white/30">Toplam üye</p>
          </div>
        </div>
      </div>

      {/* Chart - Last 30 Days */}
      <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Günlük Ziyaret Grafiği</h2>
            <p className="text-xs text-white/30">Son 30 gün</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-sm bg-gradient-to-t from-pink-500 to-purple-500" />
              Ziyaret
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end gap-[3px] sm:gap-1" style={{ height: 220 }}>
          {last30.map((day, i) => {
            const height = maxCount > 0 ? (day.count / maxCount) * 100 : 0;
            const isToday = i === last30.length - 1;
            return (
              <div
                key={day.date}
                className="group relative flex flex-1 flex-col items-center"
                style={{ height: "100%" }}
              >
                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-10 z-20 hidden rounded-lg border border-white/10 bg-[#0a0812] px-2.5 py-1.5 text-[10px] shadow-xl group-hover:block whitespace-nowrap">
                  <span className="font-semibold text-white">{day.count}</span>
                  <span className="text-white/40"> ziyaret</span>
                  <br />
                  <span className="text-white/30">{formatDate(day.date)}</span>
                </div>
                {/* Bar */}
                <div className="mt-auto w-full">
                  <div
                    className={`w-full rounded-t-sm transition-all duration-300 ${
                      isToday
                        ? "bg-gradient-to-t from-pink-500 to-purple-500 shadow-[0_0_12px_rgba(236,72,153,0.4)]"
                        : "bg-gradient-to-t from-pink-500/40 to-purple-500/40 group-hover:from-pink-500/70 group-hover:to-purple-500/70"
                    }`}
                    style={{ height: `${Math.max(height, 2)}%`, minHeight: day.count > 0 ? 4 : 2 }}
                  />
                </div>
                {/* Date label - show every 5th */}
                {(i % 5 === 0 || isToday) && (
                  <span className="mt-2 text-[9px] text-white/20">{formatDate(day.date)}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Table - Daily Visit Log */}
      <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-white">Günlük Giriş Tablosu</h2>
          <p className="text-xs text-white/30">Son 30 günlük detaylı kayıt</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="pb-3 text-left text-[11px] font-semibold uppercase tracking-wider text-white/30">Tarih</th>
                <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-white/30">Ziyaret Sayısı</th>
                <th className="pb-3 text-right text-[11px] font-semibold uppercase tracking-wider text-white/30">Grafik</th>
              </tr>
            </thead>
            <tbody>
              {allVisits.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-sm text-white/20">Henüz ziyaret verisi yok</td>
                </tr>
              ) : (
                allVisits.map((visit) => {
                  const barWidth = maxCount > 0 ? (visit.count / maxCount) * 100 : 0;
                  const isToday = visit.date === new Date().toISOString().split("T")[0];
                  return (
                    <tr key={visit.date} className={`border-b border-white/[0.03] ${isToday ? "bg-pink-500/[0.03]" : ""}`}>
                      <td className="py-3 text-sm text-white/70">
                        <div className="flex items-center gap-2">
                          {isToday && (
                            <span className="rounded-full bg-pink-500/20 px-2 py-0.5 text-[10px] font-semibold text-pink-400">Bugün</span>
                          )}
                          {formatDateFull(visit.date)}
                        </div>
                      </td>
                      <td className="py-3 text-right text-sm font-semibold text-white/80">{visit.count}</td>
                      <td className="py-3 pl-4 text-right">
                        <div className="ml-auto flex h-4 w-32 items-center overflow-hidden rounded-full bg-white/[0.04]">
                          <div
                            className={`h-full rounded-full ${isToday ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gradient-to-r from-pink-500/50 to-purple-500/50"}`}
                            style={{ width: `${Math.max(barWidth, 2)}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
