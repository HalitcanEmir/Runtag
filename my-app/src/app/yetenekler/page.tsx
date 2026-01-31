import Navbar from "@/components/home/Navbar";
import CapabilitiesTabs from "@/components/home/CapabilitiesTabs";
import Footer from "@/components/home/Footer";

export default function YeteneklerPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950">
      {/* ASELSAN-inspired tactical backdrop */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-950 via-slate-950 to-black" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-emerald-900/40" />

        {/* Soft radar glows */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

        {/* Grid + scanline overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(16,185,129,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.25)_1px,transparent_1px)] bg-[size:36px_36px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(16,185,129,0.12)_50%,transparent_100%)] opacity-40" />
      </div>

      <Navbar />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-400/20 bg-slate-950/70 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-emerald-400/15 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/70">
              YETENEKLER KONSOLE
            </div>
            <div className="h-3 w-3" />
          </div>

          {/* Window body */}
          <div className="px-2 pb-2">
            <CapabilitiesTabs />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
