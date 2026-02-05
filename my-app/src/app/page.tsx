import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Capabilities from "@/components/home/Capabilities";
import Categories from "@/components/home/Categories";
import Projects from "@/components/home/Projects";
import Crews from "@/components/home/Crews";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">

      <Navbar />

      <Hero />

      <div className="relative z-10 overflow-hidden">
        {/* Cosmic Background for main content */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Deep space gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#050010] to-[#020008]" />
          
          {/* Star fields */}
          <div className="star-field opacity-60" />
          <div className="star-field-2 opacity-40" />
          
          {/* Cosmic orbs / Nebulas */}
          <div className="cosmic-orb cosmic-orb--purple absolute -left-20 top-[10%] h-[500px] w-[500px] opacity-50" style={{ animationDelay: '0s' }} />
          <div className="cosmic-orb cosmic-orb--pink absolute -right-32 top-[30%] h-[400px] w-[400px] opacity-40" style={{ animationDelay: '5s' }} />
          <div className="cosmic-orb cosmic-orb--cyan absolute left-[30%] top-[50%] h-[300px] w-[300px] opacity-30" style={{ animationDelay: '10s' }} />
          <div className="cosmic-orb cosmic-orb--purple absolute right-[10%] top-[70%] h-[350px] w-[350px] opacity-35" style={{ animationDelay: '3s' }} />
          <div className="cosmic-orb cosmic-orb--pink absolute -left-10 top-[85%] h-[400px] w-[400px] opacity-30" style={{ animationDelay: '7s' }} />
          
          {/* Alien Planets */}
          <div className="alien-planet absolute -right-16 top-[5%] h-32 w-32 opacity-50" />
          <div className="alien-planet absolute -left-12 top-[45%] h-20 w-20 opacity-40" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.8), rgba(6, 95, 124, 0.9) 50%, rgba(2, 20, 30, 1) 100%)' }} />
          <div className="alien-planet absolute right-[15%] top-[75%] h-16 w-16 opacity-35" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.7), rgba(157, 23, 77, 0.9) 50%, rgba(30, 5, 20, 1) 100%)' }} />
          
          {/* 3D Perspective Grid */}
          <div className="perspective-grid" />
        </div>

        <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <Capabilities />
          <Categories />
          <Projects limit={6} />
          <Crews />
          <Process />
          <Stats />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}
