"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
  const { isDark, toggleTheme } = useTheme();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={`relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)] ${
            isDark
              ? "border-white/20 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-950/80 text-white backdrop-blur-2xl"
              : "border-black/20 bg-gradient-to-br from-slate-100/80 via-slate-100/70 to-slate-50/80 text-slate-900 backdrop-blur-2xl"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`sticky top-0 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md ${isDark ? "border-white/10 bg-slate-900/50" : "border-black/10 bg-slate-100/50"}`}>
            <h2 className="text-xl font-bold">Tema Ayarları</h2>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="space-y-6 px-6 py-6">
            {/* Tema Seçimi */}
            <div>
              <h3 className="mb-3 font-semibold">Görünüm Modu</h3>
              <div className="flex gap-3">
                <button
                  onClick={toggleTheme}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-all ${
                    !isDark
                      ? "bg-white/20 ring-2 ring-white/40"
                      : `${isDark ? "bg-white/10 hover:bg-white/15" : "bg-black/10 hover:bg-black/15"}`
                  }`}
                >
                  ☀️ Açık
                </button>
                <button
                  onClick={toggleTheme}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-all ${
                    isDark
                      ? "bg-white/20 ring-2 ring-white/40"
                      : `${!isDark ? "bg-black/10 hover:bg-black/15" : "bg-white/10 hover:bg-white/15"}`
                  }`}
                >
                  🌙 Koyu
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className={`border-t px-6 py-4 backdrop-blur-md ${isDark ? "border-white/10 bg-slate-900/50" : "border-black/10 bg-slate-100/50"}`}>
            <button
              onClick={onClose}
              className="w-full rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 px-4 py-2 font-medium text-white transition-all hover:shadow-lg shadow-[0_4px_12px_rgba(236,72,153,0.3)]"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
