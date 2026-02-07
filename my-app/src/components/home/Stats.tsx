"use client";

import { motion } from "framer-motion";
import { useSiteData } from "@/context/SiteDataContext";

const statIcons = [
  <svg key="0" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="1" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="2" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  <svg key="3" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

export default function Stats() {
  const { data } = useSiteData();
  const stats = data.stats;
  return (
    <section id="stats" className="relative py-16">
      {/* Subtle cyan/teal accent background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-cyan-500/[0.03] blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-teal-500/[0.03] blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-cyan-400/40">
          Rakamlar
        </p>
        <h2 className="mt-3 text-xl font-semibold text-white/90 sm:text-2xl">
          Gerçek Sonuçlar
        </h2>
        <p className="mx-auto mt-2 max-w-md text-xs text-white/40">
          Şişirilmiş metrikler değil — ekiplerimizin aktif olduğunu, 
          ürettiğini ve öğrendiğini gösteren basit sinyaller.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-cyan-500/[0.08] bg-cyan-500/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/[0.15] hover:bg-cyan-500/[0.04]"
          >
            {/* Subtle glow on hover */}
            <div className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-cyan-400/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative flex items-start justify-between">
              <div>
                <span className="text-2xl font-bold text-cyan-50">
                  {stat.value}
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cyan-200/40">
                  {stat.label}
                </p>
              </div>
              <div className="rounded-lg border border-cyan-400/[0.1] bg-cyan-500/[0.05] p-2 text-cyan-300/40">
                {statIcons[index % statIcons.length]}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
