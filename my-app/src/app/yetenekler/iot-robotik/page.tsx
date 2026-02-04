"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Link from "next/link";

export default function IoTRobotikaPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [robotParts, setRobotParts] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800);

    // Robot assembly effect
    const parts = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setRobotParts(parts);
  }, []);

  const iotAreas = [
    {
      title: "Drone & UAV",
      description: "Otonom insansız hava araçları geliştirme",
      examples: ["Harita çıkarma", "İtfaiye dronu", "Tarım dronu"],
      color: "cyan"
    },
    {
      title: "Mobile Robotics",
      description: "Hareketli robot sistemleri",
      examples: ["Özerk robot", "Robot futbolu", "Kaynama robotu"],
      color: "green"
    },
    {
      title: "IoT Sistemleri",
      description: "Nesnelerin interneti uygulamaları",
      examples: ["Smart home", "Endüstri 4.0", "Wearable cihazlar"],
      color: "amber"
    },
    {
      title: "Manipülatör & Robotik Kol",
      description: "Hassas kontrollü robot kolları",
      examples: ["Endüstriyel kol", "Cerrah robotu", "Eksoskeleton"],
      color: "purple"
    }
  ];

  const competitions = [
    {
      name: "Teknofest İHA Kategorileri",
      prize: "750.000 TL",
      categories: ["İHA Görev", "KAZA", "Yersel Araç"],
      deadline: "Mayıs 2026",
      color: "cyan"
    },
    {
      name: "RoboCup",
      prize: "International Trophy",
      categories: ["Robot Futbolu", "Hizmet Robotu"],
      deadline: "Haziran 2026",
      color: "green"
    },
    {
      name: "FIRST Robotics",
      prize: "$7.2M",
      categories: ["Lise Kategorisi", "Üniversite"],
      deadline: "Nisan 2026",
      color: "purple"
    },
    {
      name: "IoT Hackathon Turkey",
      prize: "200.000 TL",
      categories: ["Smart Device", "IoT Platform"],
      deadline: "Şubat 2026",
      color: "amber"
    }
  ];

  const hardware = [
    { name: "Arduino", icon: "🔌", power: 85 },
    { name: "Raspberry Pi", icon: "🥧", power: 90 },
    { name: "ESP32", icon: "📡", power: 88 },
    { name: "STM32", icon: "⚙️", power: 87 },
    { name: "NVIDIA Jetson", icon: "🚀", power: 92 },
    { name: "PLC", icon: "🏭", power: 89 },
    { name: "ROS", icon: "🤖", power: 91 },
    { name: "3D Printing", icon: "🖨️", power: 85 }
  ];

  const projects = [
    {
      title: "Autonomous Drone",
      description: "GPS ve LIDAR ile otonom harita çıkarma dronu",
      specs: "2kg | 60min | 50km",
      achievement: "Teknofest 2025 İHA 1. Ödül",
      tech: ["PX4", "ROS", "Computer Vision"]
    },
    {
      title: "Robot Futbolu",
      description: "Yapay zeka destekli futbol oynayan robot",
      specs: "5kg | 12m/s | Multi-agent",
      achievement: "RoboCup 2025 Finalist",
      tech: ["ROS", "OpenCV", "Machine Learning"]
    },
    {
      title: "Smart Home System",
      description: "IoT tabanlı akıllı ev otomasyonu",
      specs: "50+ device | 99.9% uptime",
      achievement: "Teknofest IoT Kategorisi Top 10",
      tech: ["MQTT", "Node-RED", "ESP32"]
    },
    {
      title: "Robotic Arm",
      description: "6-DOF indüstriyel robot kolu",
      specs: "±5mm | 200ms cycle | 10kg load",
      achievement: "Endüstri 4.0 Ödülü",
      tech: ["ROS", "Kinematics", "Control Systems"]
    }
  ];

  const roadmap = [
    {
      phase: "Temeller",
      duration: "1 Ay",
      skills: ["Elektronik Temel", "Arduino", "Sensör/Aktuatör"],
      milestone: "İlk LED kontrolü"
    },
    {
      phase: "Sistemler",
      duration: "2 Ay",
      skills: ["Raspberry Pi", "ROS Basics", "MQTT"],
      milestone: "IoT sistem kurulumu"
    },
    {
      phase: "Robotik",
      duration: "2 Ay",
      skills: ["Robot Kinematiği", "Computer Vision", "Path Planning"],
      milestone: "Otonom robot"
    },
    {
      phase: "Yarışma",
      duration: "1-2 Ay",
      skills: ["Integration", "Testing", "Optimization"],
      milestone: "Teknofest Katılımı"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Robot Assembly Loading */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-emerald-900 to-teal-900 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-spin" style={{ animationDuration: '2s' }}>
                🤖
              </div>
              <div className="text-2xl font-bold text-white mb-4">ROBOT INITIALIZING</div>
            </div>
            <div className="flex justify-center gap-3">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-8 bg-gradient-to-t from-cyan-400 to-cyan-600 rounded animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Hardware Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-emerald-950 to-teal-950" />
        
        {/* Circuit board pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${(i * 5) % 100}%`}
                y1="0%"
                x2={`${(i * 5) % 100}%`}
                y2="100%"
                stroke="#22d3ee"
                strokeWidth="1"
              />
              <circle
                cx={`${(i * 10) % 100}%`}
                cy={`${Math.random() * 100}%`}
                r="3"
                fill="#06b6d4"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            </g>
          ))}
        </svg>

        {/* Floating robot parts */}
        {robotParts.map((part, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center text-2xl opacity-40 hover:opacity-100 transition-opacity"
            style={{
              left: `${part.x}%`,
              top: `${part.y}%`,
              animation: `robotfloat ${12 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * -1}s`
            }}
          >
            {["⚙️", "🔩", "🛠️", "🔌", "📡", "🎛️", "⚡", "🎚️"][i % 8]}
          </div>
        ))}

        {/* Energy grid */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                width: "100%",
                top: `${(i * 8.3) % 100}%`,
                animation: `energyflow ${15 + i}s linear infinite`,
                animationDelay: `${i * -1}s`
              }}
            />
          ))}
        </div>
      </div>

      <Navbar />

      <main className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-cyan-200 uppercase tracking-wider">
                🤖 IoT & Robotik
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              IoT & Robotik
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Donanım ve yazılımı birleştir. Otonom sistemler ve akıllı cihazlar geliştir. Teknofest İHA kategorisinde yerinizi alın.
            </p>

            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 backdrop-blur-md mb-12">
              <pre className="text-left font-mono text-sm sm:text-base">
                <code>
                  <span className="text-cyan-400">import</span> <span className="text-white">RPi.GPIO</span> <span className="text-cyan-400">as</span> <span className="text-white">GPIO</span>{"\n"}
                  <span className="text-cyan-400">import</span> <span className="text-white">cv2</span>, <span className="text-white">rospy</span>{"\n\n"}
                  <span className="text-emerald-400">bot</span> = <span className="text-white">Robot</span>(){"\n"}
                  <span className="text-emerald-400">bot</span>.<span className="text-white">autonomousNav</span>(){"\n"}
                  <span className="text-gray-400"># Status: Running ✓</span>
                </code>
              </pre>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "750K TL", label: "Teknofest İHA Ödül" },
                { value: "∞", label: "Donanım Seçeneği" },
                { value: "24/7", label: "Sistem Çalışması" },
                { value: "100%", label: "Otonomi Hedefi" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IoT Areas */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              IoT & Robotik Alanları
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {iotAreas.map((area, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    area.color === 'cyan' ? 'from-cyan-500/10 to-cyan-600/10 border-cyan-400/20 hover:border-cyan-400/50' :
                    area.color === 'green' ? 'from-green-500/10 to-green-600/10 border-green-400/20 hover:border-green-400/50' :
                    area.color === 'amber' ? 'from-amber-500/10 to-amber-600/10 border-amber-400/20 hover:border-amber-400/50' :
                    'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-white/70 mb-6">{area.description}</p>
                  
                  <div className="space-y-2">
                    {area.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          area.color === 'cyan' ? 'bg-cyan-400' :
                          area.color === 'green' ? 'bg-green-400' :
                          area.color === 'amber' ? 'bg-amber-400' :
                          'bg-purple-400'
                        }`} />
                        <span className="text-sm text-white/80">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hardware Stack */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-emerald-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Donanım & Platformlar
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hardware.map((hw, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 backdrop-blur-md hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{hw.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{hw.name}</h3>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Popülarite</span>
                      <span className="text-white/80">{hw.power}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                        style={{ width: `${hw.power}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Proje Örnekleri
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Gerçek Teknofest ve RoboCup projeleri
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-400/20 backdrop-blur-md hover:border-emerald-400/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Özellikler</div>
                      <div className="text-sm font-bold text-cyan-400">{project.specs}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Başarı</div>
                      <div className="text-sm font-bold text-emerald-400">{project.achievement}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Roadmap */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Öğrenme Yol Haritası
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-emerald-400 to-teal-400 hidden lg:block" />

              <div className="space-y-8">
                {roadmap.map((phase, idx) => (
                  <div key={idx} className="relative lg:pl-20">
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-cyan-400 border-4 border-black hidden lg:block" />

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-400/20 backdrop-blur-md">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <p className="text-cyan-300">⏱️ {phase.duration}</p>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                          <span className="text-sm font-semibold text-cyan-200">🎯 {phase.milestone}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {phase.skills.map((skill, i) => (
                          <span key={i} className="px-4 py-2 text-sm rounded-full bg-white/10 text-white/90 border border-white/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Competitions */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-cyan-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Yarışmalar & Etkinlikler
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    comp.color === 'cyan' ? 'from-cyan-500/10 to-cyan-600/10 border-cyan-400/20 hover:border-cyan-400/50' :
                    comp.color === 'green' ? 'from-green-500/10 to-green-600/10 border-green-400/20 hover:border-green-400/50' :
                    comp.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    'from-amber-500/10 to-amber-600/10 border-amber-400/20 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <div className={`px-4 py-2 rounded-full border ${
                      comp.color === 'cyan' ? 'bg-cyan-500/20 border-cyan-400/30 text-cyan-200' :
                      comp.color === 'green' ? 'bg-green-500/20 border-green-400/30 text-green-200' :
                      comp.color === 'purple' ? 'bg-purple-500/20 border-purple-400/30 text-purple-200' :
                      'bg-amber-500/20 border-amber-400/30 text-amber-200'
                    }`}>
                      <span className="text-sm font-bold">{comp.prize}</span>
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
            <div className="p-12 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-emerald-500/20 to-teal-500/20 border border-cyan-400/30 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Robotik Dünyanız Başlasın
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Donanım ve yazılım birleştir. Teknofest İHA kategorisinde yerinizi alın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ekip"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-bold hover:from-cyan-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50"
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
    </div>
  );
}
