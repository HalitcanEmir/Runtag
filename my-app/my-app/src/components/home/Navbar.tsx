"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Ana Sayfa", href: "#top", id: "top" },
  { label: "Hizmetler", href: "#projects", id: "projects" },
  { label: "Ekip", href: "#crews", id: "crews" },
  { label: "Hakkımızda", href: "#process", id: "process" },
  { label: "İletişim", href: "#join", id: "join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Find active section based on scroll position
      const sections = navItems.map((item) => item.id);
      let currentSection = "top";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section top is within viewport upper half
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassStyle = scrolled
    ? "border border-white/[0.12] bg-black/50 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
    : "border border-white/[0.08] bg-white/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-4 sm:px-6 lg:px-8">
        
        {/* 1. Logo Section */}
        <a
          href="#top"
          className={`relative flex items-center gap-2 rounded-full px-2 py-1.5 transition-all duration-500 ${glassStyle}`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.1] to-transparent" />
          <Image
            src="/logo.png"
            alt="Runtagg Logo"
            width={36}
            height={36}
            className="relative h-9 w-9 object-contain"
          />
          <div className="relative hidden flex-col pr-1 sm:flex">
            <span className="text-sm font-semibold tracking-tight text-white">
              Runtagg
            </span>
            <span className="text-[10px] text-white/50">Tech Studio</span>
          </div>
        </a>

        {/* 2. Center Navigation Section */}
        <nav
          className={`relative hidden rounded-full px-2 py-1.5 transition-all duration-500 md:block ${glassStyle}`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.1] to-transparent" />
          <div className="relative flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Active state background - like the image */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.2)]"
                        : "bg-white/[0.08] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </nav>

        {/* 3. Right CTA Section */}
        <div
          className={`relative flex items-center gap-2 rounded-full px-2 py-1.5 transition-all duration-500 ${glassStyle}`}
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.1] to-transparent" />
          <a
            href="#join"
            className="relative hidden rounded-full px-4 py-2 text-[13px] font-medium text-white/80 transition-colors hover:text-white sm:inline-flex"
          >
            Giriş Yap
          </a>
          <a
            href="#join"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2 text-[13px] font-semibold text-white shadow-[0_2px_12px_rgba(236,72,153,0.35)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]"
          >
            <span className="relative z-10">Başlayın</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        </div>

      </div>
    </header>
  );
}

