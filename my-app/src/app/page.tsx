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

      {/* Main Content with Cinematic Background */}
      <div className="relative z-10 bg-[#05030a]">
        {/* Cinematic Background - starts after hero */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Scene A: Cosmic Space */}
          <div className="scene scene-space">
            <div className="stars-subtle" />
            <div className="cosmic-glow-soft" />
          </div>
          
          {/* Scene B: Atmosphere Entry */}
          <div className="scene scene-atmosphere">
            <div className="horizon-glow" />
            <div className="clouds-subtle" />
          </div>
          
          {/* Scene C: Sky to Earth */}
          <div className="scene scene-sky-earth">
            <div className="silhouette-mountains">
              <div className="mountain-layer-back" />
              <div className="mountain-layer-mid" />
              <div className="mountain-layer-front" />
            </div>
          </div>
          
          {/* Scene D: Water & Soil */}
          <div className="scene scene-water-soil">
            <div className="water-shimmer" />
            <div className="water-reflection" />
            <div className="soil-layer" />
          </div>
          
          {/* Scene E: Underground */}
          <div className="scene scene-underground">
            <div className="root-hints" />
            <div className="rock-layer" />
            <div className="underground-veins" />
          </div>
          
          {/* Vignette overlay */}
          <div className="bg-vignette" />
        </div>

        <main className="relative z-10 mx-auto flex max-w-6xl flex-col px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pt-16">
          <Capabilities />
          <Categories />
          <Projects limit={6} />
          <Crews />
          <Process />
          <Stats />
        </main>

        <Footer />
      </div>
      
      {/* Grain texture - prevents banding */}
      <div className="bg-grain" />
    </div>
  );
}
