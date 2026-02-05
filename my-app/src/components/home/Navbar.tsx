"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Ana Sayfa", href: "/", id: "home" },
  { label: "Yetenekler", href: "/yetenekler", id: "yetenekler" },
  { label: "Projeler", href: "/projeler", id: "projeler" },
  { label: "Ekip", href: "/ekip", id: "ekip" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 30);

      // Collapse navbar when scrolling down, expand when scrolling up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling down
          setCollapsed(true);
          setMenuOpen(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling up
          setCollapsed(false);
          setMenuOpen(false);
        }
      } else {
        setCollapsed(false);
        setMenuOpen(false);
      }

      lastScrollY.current = currentScrollY;
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
        
        <AnimatePresence mode="wait">
          {collapsed && !menuOpen ? (
            // Collapsed State - Hamburger Button on Right
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="ml-auto"
            >
              <button
                onClick={() => setMenuOpen(true)}
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/60 shadow-[0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:bg-black/70"
              >
                {/* Gradient glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                
                {/* Hamburger Icon */}
                <div className="relative flex h-5 w-5 flex-col justify-center gap-1">
                  <span className="h-0.5 w-full rounded-full bg-white" />
                  <span className="h-0.5 w-3/4 rounded-full bg-white/70" />
                  <span className="h-0.5 w-full rounded-full bg-white" />
                </div>
              </button>
            </motion.div>
          ) : (
            // Expanded State - Full Navbar
            <motion.div
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex w-full items-center justify-between"
            >
              {/* 1. Logo Section */}
              <Link
                href="/"
                className={`relative flex items-center gap-2 rounded-full px-2 py-1.5 transition-all duration-500 ${glassStyle}`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.1] to-transparent" />
                <Image
                  src="/logo.png"
                  alt="Runteg Logo"
                  width={36}
                  height={36}
                  className="relative h-9 w-9 object-contain"
                />
                <div className="relative hidden flex-col pr-1 sm:flex">
                  <span className="text-sm font-semibold tracking-tight text-white">
                    Runteg
                  </span>
                  <span className="text-[10px] text-white/50">Tech Studio</span>
                </div>
              </Link>

              {/* 2. Center Navigation Section */}
              <nav
                className={`relative hidden rounded-full px-2 py-1.5 transition-all duration-500 md:block ${glassStyle}`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.1] to-transparent" />
                <div className="relative flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`group relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <span
                          className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-white/[0.15] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.2)]"
                              : "bg-white/[0.08] opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* 3. Right CTA Section */}
              <div
                className={`relative flex items-center gap-2 rounded-full px-2 py-1.5 transition-all duration-500 ${glassStyle}`}
              >
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.1] to-transparent" />
                <Link
                  href="/kariyer"
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                    pathname === "/kariyer"
                      ? "text-white bg-white/[0.15]"
                      : "text-white/70 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  Kariyer
                </Link>
                <Link
                  href="/teklif"
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2 text-[13px] font-semibold text-white shadow-[0_2px_12px_rgba(236,72,153,0.35)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(236,72,153,0.5)]"
                >
                  <span className="relative z-10">Teklif Al</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
