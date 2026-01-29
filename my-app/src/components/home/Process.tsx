"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const principles = [
  {
    title: "Tutku ile Çalışıyoruz",
    description: "Her projede en iyisini ortaya koymak için çabalıyoruz.",
  },
  {
    title: "Birlikte Öğreniyoruz",
    description: "Bilgiyi paylaşarak birlikte büyüyoruz.",
  },
  {
    title: "Kalite Önceliğimiz",
    description: "Yarım iş yapmıyoruz, her detaya önem veriyoruz.",
  },
  {
    title: "Sorumluluk Alıyoruz",
    description: "Projelerimizin arkasında duruyoruz.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.07, 0.07, 0]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen overflow-hidden py-32"
      style={{ 
        marginLeft: 'calc(-50vw + 50%)', 
        marginRight: 'calc(-50vw + 50%)', 
        width: '100vw' 
      }}
    >
      {/* Background - Smooth gradient from page color to dark */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main gradient - smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020308] via-[#010204] via-[#000000] via-[#010204] to-[#020308]" />
        {/* Extra smooth top transition */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#020308] via-[#01020a] to-transparent" />
        {/* Extra smooth bottom transition */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#020308] via-[#01020a] to-transparent" />
      </div>

      {/* Atatürk - Background, subtle but present */}
      <motion.div
        style={{ y: imageY, opacity: imageOpacity }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="relative h-[700px] w-[500px] sm:h-[800px] sm:w-[600px] lg:h-[900px] lg:w-[700px]">
          <Image
            src="/atam3.png"
            alt=""
            fill
            className="object-contain"
            style={{ filter: 'invert(1) brightness(1.2)' }}
            priority
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/30">
            Neden & Nasıl
          </p>
          
          {/* Atatürk Quote */}
          <blockquote className="mx-auto mt-8 max-w-3xl">
            <p className="text-2xl font-light italic leading-relaxed text-white/90 sm:text-3xl lg:text-4xl">
              "Vatanını en çok seven,
              <br />
              <span className="text-white">görevini en iyi yapandır."</span>
            </p>
            <footer className="mt-6">
              <cite className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 not-italic">
                — Mustafa Kemal Atatürk
              </cite>
            </footer>
          </blockquote>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
                {/* Number */}
                <span className="absolute right-4 top-4 text-5xl font-bold text-white/[0.03]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-white/30">
            Bu ilkelerle her projede en iyisini ortaya koymayı hedefliyoruz.
          </p>
          
          <a
            href="#join"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
          >
            Bize Katıl
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
