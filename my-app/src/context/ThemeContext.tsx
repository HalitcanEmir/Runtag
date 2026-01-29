"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  buttonColor: string;
  setButtonColor: (color: string) => void;
  announcements: string[];
  setAnnouncements: (announcements: string[]) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [buttonColor, setButtonColor] = useState("pink");
  const [announcements, setAnnouncements] = useState<string[]>([
    "🚀 Yeni özellikler yakında gelecek!",
    "✨ Sitemizi ziyaret ettiğiniz için teşekkürler!",
  ]);
  const [mounted, setMounted] = useState(false);

  // Component mount olduğunu işaretle
  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  // Tema ayarlarını localStorage'den yükle
  useEffect(() => {
    if (!mounted) return;

    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("buttonColor");
    const savedAnnouncements = localStorage.getItem("announcements");

    if (savedTheme) setIsDark(savedTheme === "dark");
    if (savedColor) setButtonColor(savedColor);
    if (savedAnnouncements) {
      try {
        setAnnouncements(JSON.parse(savedAnnouncements));
      } catch (e) {
        console.error("Duyurular yüklenemedi:", e);
      }
    }
  }, [mounted]);

  // Tema değişikliklerini kaydet
  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [isDark, mounted]);

  // Buton rengi değişikliklerini kaydet
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("buttonColor", buttonColor);
  }, [buttonColor, mounted]);

  // Duyuruları kaydet
  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements, mounted]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        buttonColor,
        setButtonColor,
        announcements,
        setAnnouncements,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
