"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Yetenekler", href: "#capabilities" },
  { label: "Projeler", href: "#projects" },
  { label: "Ekip", href: "#crews" },
  { label: "Katıl", href: "#join" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/HalitcanEmir",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
      </svg>
    ),
  },
];

const announcements = [
  "Yeni dönem kayıtları başladı — ekibe katılın!",
  "Oyun kategorisinde 3 yeni proje yayında.",
  "Tasarım ekibi için UI/UX workshopu bu hafta sonu.",
  "Elektrik projelerinde yeni prototip testleri tamamlandı.",
  "AI ekibi Teknofest için başvuruları açtı.",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#010205]">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-pink-500/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="#top" className="inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-sm" />
                <Image
                  src="/logo.png"
                  alt="Runteg Logo"
                  width={40}
                  height={40}
                  className="relative h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Runteg</h3>
              </div>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Genç yetenekleri bir araya getiren, yenilikçi projeler üreten ekip bazlı teknoloji stüdyosu.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05] hover:text-white/80"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:justify-self-center">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Sayfalar
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-200 hover:text-white/80"
                >
                  <span className="h-px w-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact / CTA Section */}
          <div className="lg:justify-self-end">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              İletişim
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@runteg.com"
                className="block text-sm text-white/40 transition-colors duration-200 hover:text-white/80"
              >
                hello@runteg.com
              </a>
              <a
                href="#join"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/5 hover:text-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ekibe Katıl
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/[0.04] pt-8">
          <div className="mb-6 overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-2">
            <div className="whitespace-nowrap text-sm text-white/70">
              <div className="inline-flex animate-[marquee_22s_linear_infinite] items-center gap-8 pr-8">
                {announcements.map((item, index) => (
                  <span key={`a-${index}`} className="inline-flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-pink-400/80 shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="inline-flex animate-[marquee_22s_linear_infinite] items-center gap-8 pr-8">
                {announcements.map((item, index) => (
                  <span key={`b-${index}`} className="inline-flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-pink-400/80 shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/25">
              © 2026 Runteg. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/25">
              <a href="#" className="transition-colors duration-200 hover:text-white/50">
                Gizlilik Politikası
              </a>
              <a href="#" className="transition-colors duration-200 hover:text-white/50">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
