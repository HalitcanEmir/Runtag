"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Link from "next/link";
import Image from "next/image";

export default function OyunGelistirmePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [portalActive, setPortalActive] = useState(false);

  useEffect(() => {
    setPortalActive(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  }, []);

  const indieGames = [
    {
      name: "Stardew Valley",
      developer: "ConcernedApe",
      description: "Tek kişilik indie başarı hikayesi",
      impact: "$300M+ gelir"
    },
    {
      name: "Hollow Knight",
      developer: "Team Cherry",
      description: "3 kişilik ekip başyapıtı",
      impact: "2.8M+ satış"
    },
    {
      name: "Undertale",
      developer: "Toby Fox",
      description: "Solo geliştirici projesi",
      impact: "1M+ satış ilk ayda"
    },
    {
      name: "Celeste",
      developer: "Maddy Makes Games",
      description: "Game jam'den AAA'ya",
      impact: "1M+ oyuncu"
    }
  ];

  const competitions = [
    {
      name: "Teknofest Oyun Geliştirme",
      prize: "500.000 TL",
      categories: ["2D Oyun", "3D Oyun", "Mobil Oyun"],
      deadline: "Her yıl Mayıs"
    },
    {
      name: "Global Game Jam",
      prize: "Networking",
      categories: ["48 saat", "Tüm dünya"],
      deadline: "Her yıl Ocak"
    },
    {
      name: "Ludum Dare",
      prize: "Community",
      categories: ["Solo/Team", "72 saat"],
      deadline: "Yılda 3 kez"
    },
    {
      name: "İTÜ Game Jam",
      prize: "50.000 TL",
      categories: ["Üniversite öğrencileri"],
      deadline: "Her yıl Nisan"
    }
  ];

  const skills = [
    { name: "Unity C#", level: 90, color: "purple" },
    { name: "Unreal C++", level: 85, color: "blue" },
    { name: "Godot GDScript", level: 80, color: "cyan" },
    { name: "Game Design", level: 95, color: "pink" },
    { name: "2D/3D Art", level: 75, color: "amber" },
    { name: "Sound Design", level: 70, color: "red" }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Portal Entry Effect */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ${
          portalActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-r from-purple-900 via-pink-900 to-blue-900 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-96 w-96 rounded-full border-4 border-white/30 animate-ping" />
          <div className="absolute h-64 w-64 rounded-full border-4 border-purple-400/50 animate-spin" />
        </div>
      </div>

      {/* Animated Game Background - Falling Platforms */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Starry space background */}
        <div className="absolute inset-0 bg-linear-to-b from-purple-950 via-blue-950 to-black">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random()
              }}
            />
          ))}
        </div>

        {/* Falling platforms animation */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-4 bg-linear-to-r from-purple-500/40 to-pink-500/40 rounded-full shadow-lg shadow-purple-500/50"
            style={{
              left: `${(i * 15) % 100}%`,
              animation: `fall ${15 + i * 2}s linear infinite`,
              animationDelay: `${i * -3}s`,
              transform: `rotate(${-15 + i * 5}deg)`
            }}
          />
        ))}

        {/* Game character silhouettes */}
        <div className="absolute bottom-20 left-10 opacity-20">
          <div className="relative w-24 h-32 bg-linear-to-b from-purple-400 to-purple-600 rounded-t-full animate-bounce" 
               style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute top-40 right-20 opacity-15">
          <div className="relative w-20 h-28 bg-linear-to-b from-blue-400 to-blue-600 rounded-full animate-bounce" 
               style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        </div>
      </div>

      <Navbar />

      <main className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-purple-400/30 bg-purple-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-purple-200 uppercase tracking-wider">
                🎮 Indie Games Development
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Oyun Geliştirme
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Hayal ettiğin oyunu yarat. Teknofest'ten Global Game Jam'e kadar tüm yarışmalarda öne çık.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white/90 font-semibold">Unity & Unreal Engine</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white/90 font-semibold">2D & 3D Games</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="text-white/90 font-semibold">Game Jams</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "500K TL", label: "Teknofest Ödül" },
                { value: "48 Saat", label: "Game Jam Süresi" },
                { value: "100+", label: "Indie Başarı Hikayesi" },
                { value: "∞", label: "Yaratıcılık Sınırı" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Öğrenecekleriniz
            </h2>
            
            <div className="grid gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-linear-to-r ${
                        skill.color === 'purple' ? 'from-purple-500 to-purple-700' :
                        skill.color === 'blue' ? 'from-blue-500 to-blue-700' :
                        skill.color === 'cyan' ? 'from-cyan-500 to-cyan-700' :
                        skill.color === 'pink' ? 'from-pink-500 to-pink-700' :
                        skill.color === 'amber' ? 'from-amber-500 to-amber-700' :
                        'from-red-500 to-red-700'
                      } transition-all duration-1000 ease-out group-hover:scale-x-105`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indie Games Success Stories */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-purple-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Indie Oyun Başarı Hikayeleri
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Küçük ekipler, büyük hayaller. Bu oyunlar tek kişi veya küçük ekipler tarafından geliştirildi.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {indieGames.map((game, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                  <p className="text-sm text-purple-300 mb-2">{game.developer}</p>
                  <p className="text-sm text-white/70 mb-3">{game.description}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30">
                    <span className="text-xs font-semibold text-purple-200">{game.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Yarışmalar & Etkinlikler
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Teknofest'ten Global Game Jam'e kadar oyun geliştirme yarışmalarında yerinizi alın.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 backdrop-blur-md hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30">
                      <span className="text-sm font-bold text-blue-200">{comp.prize}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {comp.categories.map((cat, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20">
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-white/60 text-sm">📅 {comp.deadline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-linear-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Oyun Geliştirmeye Başla
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Teknofest 2026'da yerinizi alın. Ekibinizi kurun, fikirlerinizi gerçeğe dönüştürün.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ekip"
                  className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
                >
                  Ekibe Katıl
                </Link>
                <Link
                  href="/projeler"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  Projeleri İncele
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(-15deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(-15deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
