"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeModal from "./ThemeModal";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { label: "Ana Sayfa", href: "/", id: "top", slug: "/" },
  { label: "Hizmetler", href: "/hizmetler", id: "hizmetler", slug: "hizmetler" },
  { label: "Ekip", href: "/ekip", id: "ekip", slug: "ekip" },
  { label: "Hakkımızda", href: "/hakkimizda", id: "hakkimizda", slug: "hakkimizda" },
  { label: "İletişim", href: "/iletisim", id: "iletisim", slug: "iletisim" },
];

const buttonColorMap = {
  pink: "from-pink-500 to-pink-600 shadow-[0_2px_12px_rgba(236,72,153,0.35)] hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]",
  blue: "from-blue-500 to-blue-600 shadow-[0_2px_12px_rgba(59,130,246,0.35)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]",
  purple:
    "from-purple-500 to-purple-600 shadow-[0_2px_12px_rgba(168,85,247,0.35)] hover:shadow-[0_4px_20px_rgba(168,85,247,0.5)]",
  green: "from-green-500 to-green-600 shadow-[0_2px_12px_rgba(34,197,94,0.35)] hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)]",
  red: "from-red-500 to-red-600 shadow-[0_2px_12px_rgba(239,68,68,0.35)] hover:shadow-[0_4px_20px_rgba(239,68,68,0.5)]",
  orange:
    "from-orange-500 to-orange-600 shadow-[0_2px_12px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.5)]",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { buttonColor } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const glassStyle = scrolled
    ? "border border-white/10 bg-white/2 shadow-[0_2px_8px_rgba(0,0,0,0.1)] backdrop-blur-xl"
    : "border border-white/10 bg-white/2 shadow-[0_1px_4px_rgba(0,0,0,0.05)] backdrop-blur-xl";

  const buttonGradient =
    buttonColorMap[buttonColor as keyof typeof buttonColorMap] ||
    buttonColorMap.pink;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-4 sm:px-6 lg:px-8">
          
          {/* Logo + Brand Text - Solda */}
          <button
            onClick={() => setShowModal(true)}
            className="relative flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 hover:scale-105 cursor-pointer group border border-white/10 bg-white/2 shadow-[0_1px_4px_rgba(0,0,0,0.05)] backdrop-blur-xl hover:bg-white/4 flex-shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-white/2 blur-md group-hover:blur-lg transition-all" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-white/2 shadow-[0_2px_8px_rgba(236,72,153,0.1)] backdrop-blur-md border border-white/10">
              <Image
                src="/logo.png"
                alt="Runteg Logo"
                width={40}
                height={40}
                className="relative h-10 w-10 object-contain"
              />
            </div>
            <div className="relative hidden sm:flex flex-col">
              <span className="text-base font-bold tracking-tight text-white">
                Runteg
              </span>
              <span className="text-[10px] text-white/60">Tech Studio</span>
            </div>
          </button>

          {/* 2. Center Navigation Section */}
          <nav
            className={`relative hidden rounded-full px-2 py-1.5 transition-all duration-500 lg:block ${glassStyle}`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-b from-white/10 to-transparent" />
            <div className="relative flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                      {isActive ? (item.slug === "/" ? "Ana Sayfa" : item.slug) : item.label}
                    </span>
                    {/* Active state background - slides in from left */}
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.2)] translate-x-0"
                          : "bg-white/8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* 3. Right CTA Section */}
          <div
            className={`relative flex items-center gap-2 rounded-full px-2 py-1.5 transition-all duration-500 ${glassStyle} flex-shrink-0`}
          >
            <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-b from-white/10 to-transparent" />
            <Link
              href="/iletisim"
              className={`group relative overflow-hidden rounded-full bg-linear-to-r ${buttonGradient} px-6 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95`}
            >
              <span className="relative z-10">Başlayın</span>
              <span className="absolute inset-0 bg-linear-to-r from-pink-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </div>

        </div>
      </header>

      {/* Theme Modal */}
      <ThemeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

