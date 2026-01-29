"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const typewriterTexts = [
  "Ekibimize katıl, sen de bunun bir parçası ol.",
  "Sitenizin bakımı, yapımı... Hepsini yapalım.",
  "Indie oyunlarımıza bakmak ister misiniz?",
  "Hayalinizdeki projeyi birlikte geliştirelim.",
];

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typewriterTexts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
          }
        }
      },
      isDeleting ? 25 : 50
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <motion.span
      key={textIndex}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
    >
      {typewriterTexts[textIndex].slice(0, charIndex)}
      <span className="ml-1 inline-block h-6 w-[3px] animate-pulse rounded-full bg-gradient-to-b from-pink-400 to-purple-500 align-middle shadow-[0_0_12px_rgba(236,72,153,0.8)] sm:h-7" />
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center justify-center pt-24 pb-24 sm:pb-28"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src="/hero-bg.mov"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex w-full items-center justify-center px-4"
      >
        {/* Liquid Glass Card - ultra transparent */}
        <div className="relative inline-block rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-8 shadow-[0_8px_40px_rgba(0,0,0,0.15)] backdrop-blur-[2px] sm:px-12 sm:py-10">
          {/* Subtle glow behind card */}
          <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-b from-pink-500/10 via-transparent to-purple-500/10 opacity-50 blur-xl" />
          
          {/* Top edge highlight */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative space-y-4 text-center">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:text-4xl lg:text-5xl"
            >
              Runtagg Tech Studio
            </motion.h1>

            {/* Subtitle with animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/50"
            >
              Crew Based Tech Studio
            </motion.p>

            {/* Typewriter - bigger and more prominent */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="min-h-[36px] text-lg font-semibold sm:text-xl lg:text-2xl"
            >
              <Typewriter />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href="#join"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(236,72,153,0.5)] transition-all duration-300 hover:shadow-[0_6px_30px_rgba(236,72,153,0.6)] sm:px-7 sm:py-3"
              >
                <span className="relative z-10">Başlayalım</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.1] hover:text-white sm:px-6 sm:py-3"
              >
                Projelerimiz
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

