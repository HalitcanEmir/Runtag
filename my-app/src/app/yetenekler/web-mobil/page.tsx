"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Link from "next/link";

export default function WebMobilPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [codeLines, setCodeLines] = useState<string[]>([]);

  const codeSnippets = [
    "const app = express();",
    "import React from 'react';",
    "function Component() {",
    "  return <div>Hello</div>",
    "}",
    "const server = http.createServer();",
    "app.listen(3000);",
    "export default App;",
    "npm run dev",
    "git commit -m 'feat: new'",
    "docker build -t app .",
    "kubectl apply -f deploy.yaml"
  ];

  useEffect(() => {
    // Loading animation
    setTimeout(() => setIsLoaded(true), 600);

    // Code rain effect
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        if (newLines.length > 20) newLines.shift();
        newLines.push(codeSnippets[Math.floor(Math.random() * codeSnippets.length)]);
        return newLines;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const technologies = [
    {
      category: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"],
      color: "blue"
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
      color: "green"
    },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "AWS", "Vercel", "CI/CD"],
      color: "purple"
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo", "iOS", "Android", "Flutter"],
      color: "pink"
    }
  ];

  const projects = [
    {
      title: "SaaS Dashboard",
      description: "Gerçek zamanlı analitik ve kullanıcı yönetimi",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      users: "1000+ kullanıcı",
      color: "blue"
    },
    {
      title: "E-Commerce Platform",
      description: "Mobil-first alışveriş deneyimi",
      tech: ["React Native", "Node.js", "MongoDB"],
      users: "5000+ sipariş",
      color: "green"
    },
    {
      title: "Social Network PoC",
      description: "Üniversite öğrencileri için sosyal platform",
      tech: ["Next.js", "WebSocket", "Redis"],
      users: "500+ aktif kullanıcı",
      color: "purple"
    },
    {
      title: "Delivery App",
      description: "Gerçek zamanlı takip ve bildirimler",
      tech: ["React Native", "Firebase", "Maps API"],
      users: "2000+ teslimat",
      color: "pink"
    }
  ];

  const competitions = [
    {
      name: "Teknofest Yapay Zeka & Yazılım",
      prize: "750.000 TL",
      focus: "Web/Mobil Uygulamalar",
      deadline: "Mayıs 2026"
    },
    {
      name: "Startup Weekend",
      prize: "Mentörlük & Yatırım",
      focus: "MVP Geliştirme",
      deadline: "Her ay"
    },
    {
      name: "Hackathon TÜBİTAK",
      prize: "100.000 TL",
      focus: "Sosyal Fayda Projeleri",
      deadline: "Mart 2026"
    },
    {
      name: "AWS Hackathon",
      prize: "$10,000",
      focus: "Cloud & Serverless",
      deadline: "Nisan 2026"
    }
  ];

  const roadmap = [
    {
      phase: "Temel",
      duration: "1-2 Ay",
      skills: ["HTML/CSS/JS", "React Basics", "Git & GitHub"],
      milestone: "İlk web uygulaması"
    },
    {
      phase: "Orta",
      duration: "2-3 Ay",
      skills: ["Next.js", "API'ler", "Database", "Authentication"],
      milestone: "Full-stack proje"
    },
    {
      phase: "İleri",
      duration: "3-4 Ay",
      skills: ["React Native", "DevOps", "Scaling", "Testing"],
      milestone: "Production-ready app"
    },
    {
      phase: "Yarışma",
      duration: "1-2 Ay",
      skills: ["Pitch", "Demo", "Dokümantasyon"],
      milestone: "Teknofest kazanımı"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Code Loading Effect */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block px-6 py-3 rounded-lg bg-blue-500/20 border border-blue-400/30 backdrop-blur-md mb-4">
              <code className="text-blue-300 font-mono text-lg">npm run dev</code>
            </div>
            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Code Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-black" />
        
        {/* Matrix-style code rain */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs text-blue-400"
              style={{
                left: `${(i * 7) % 100}%`,
                animation: `codefall ${10 + i * 2}s linear infinite`,
                animationDelay: `${i * -2}s`
              }}
            >
              {codeLines.map((line, idx) => (
                <div key={idx} className="mb-2 opacity-70">{line}</div>
              ))}
            </div>
          ))}
        </div>

        {/* Floating code blocks */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute p-4 rounded-lg bg-blue-500/5 border border-blue-400/20 backdrop-blur-sm"
            style={{
              left: `${(i * 20) % 90}%`,
              top: `${(i * 15) % 80}%`,
              animation: `float ${8 + i}s ease-in-out infinite`,
              animationDelay: `${i * -1.5}s`
            }}
          >
            <code className="text-blue-300 text-xs font-mono">
              {codeSnippets[i % codeSnippets.length]}
            </code>
          </div>
        ))}
      </div>

      <Navbar />

      <main className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-blue-400/30 bg-blue-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                💻 Full-Stack Development
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Web & Mobil Geliştirme
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Modern web ve mobil uygulamalar geliştir. Startup fikirlerini gerçeğe dönüştür.
            </p>

            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-md mb-12">
              <pre className="text-left">
                <code className="text-blue-300 font-mono text-sm sm:text-base">
                  <span className="text-cyan-400">const</span> <span className="text-white">project</span> = {"{"}{"\n"}
                  {"  "}name: <span className="text-green-400">"Teknofest Winner"</span>,{"\n"}
                  {"  "}tech: [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"React Native"</span>],{"\n"}
                  {"  "}users: <span className="text-yellow-400">10000</span>,{"\n"}
                  {"  "}prize: <span className="text-green-400">"750.000 TL"</span>{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "750K TL", label: "Teknofest Ödül" },
                { value: "24/7", label: "Development" },
                { value: "∞", label: "Kullanıcı Potansiyeli" },
                { value: "100%", label: "Gerçek Projeler" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Teknoloji Stack
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-md hover:scale-105 transition-all duration-300 ${
                    tech.color === 'blue' ? 'from-blue-500/10 to-blue-600/10 border-blue-400/20 hover:border-blue-400/50' :
                    tech.color === 'green' ? 'from-green-500/10 to-green-600/10 border-green-400/20 hover:border-green-400/50' :
                    tech.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    'from-pink-500/10 to-pink-600/10 border-pink-400/20 hover:border-pink-400/50'
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          tech.color === 'blue' ? 'bg-blue-400' :
                          tech.color === 'green' ? 'bg-green-400' :
                          tech.color === 'purple' ? 'bg-purple-400' :
                          'bg-pink-400'
                        }`} />
                        <span className="text-sm text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Examples */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Proje Örnekleri
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Gerçek kullanıcılı, production-ready projeler. SaaS'tan e-commerce'e kadar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    project.color === 'blue' ? 'from-blue-500/10 to-blue-600/10 border-blue-400/20 hover:border-blue-400/50' :
                    project.color === 'green' ? 'from-green-500/10 to-green-600/10 border-green-400/20 hover:border-green-400/50' :
                    project.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    'from-pink-500/10 to-pink-600/10 border-pink-400/20 hover:border-pink-400/50'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`inline-block px-4 py-2 rounded-full border ${
                    project.color === 'blue' ? 'bg-blue-500/20 border-blue-400/30 text-blue-200' :
                    project.color === 'green' ? 'bg-green-500/20 border-green-400/30 text-green-200' :
                    project.color === 'purple' ? 'bg-purple-500/20 border-purple-400/30 text-purple-200' :
                    'bg-pink-500/20 border-pink-400/30 text-pink-200'
                  }`}>
                    <span className="text-sm font-semibold">📊 {project.users}</span>
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
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-teal-400 hidden lg:block" />

              <div className="space-y-8">
                {roadmap.map((phase, idx) => (
                  <div key={idx} className="relative lg:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-blue-400 border-4 border-black hidden lg:block" />

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 backdrop-blur-md">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase} Seviye</h3>
                          <p className="text-blue-300">⏱️ {phase.duration}</p>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30">
                          <span className="text-sm font-semibold text-blue-200">🎯 {phase.milestone}</span>
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Yarışmalar & Hackathonlar
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Web ve mobil projelerinle Teknofest ve global hackathonlarda yarış.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 backdrop-blur-md hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                      <span className="text-sm font-bold text-cyan-200">{comp.prize}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-3">🎯 {comp.focus}</p>
                  <p className="text-white/60 text-sm">📅 {comp.deadline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 border border-blue-400/30 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Web & Mobil Geliştirmeye Başla
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Startup fikirlerini hayata geçir. Teknofest 2026'da yerinizi alın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ekip"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50"
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
