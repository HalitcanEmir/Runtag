"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Link from "next/link";

export default function SiberGuvenlikPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scanlines, setScanlines] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800);

    // Hacking terminal effect
    const lines = [
      "$ nmap -sV target.com",
      "Starting Nmap...",
      "Host is up (0.021s latency)",
      "PORT STATE SERVICE",
      "$ sqlmap -u 'http://target.com'",
      "Testing SQL injection...",
      "$ hashcat -m 1000 hash.txt",
      "Recovered: 45%",
      "$ metasploit framework",
      "msf > use exploit/windows/smb",
      "$ wireshark",
      "Capturing packets...",
      "$ burpsuite",
      "Proxy: 127.0.0.1:8080",
      "$ nikto -h target.com"
    ];

    const interval = setInterval(() => {
      setScanlines(prev => {
        const updated = [...prev];
        if (updated.length > 15) updated.shift();
        updated.push(lines[Math.floor(Math.random() * lines.length)]);
        return updated;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const securityFields = [
    {
      title: "Ethical Hacking",
      description: "Etik hackleme ve penetrasyon testleri",
      examples: ["Ağ penetrasyonu", "Web app testing", "Social engineering"],
      color: "red"
    },
    {
      title: "CTF & Capture The Flag",
      description: "Flag bulma yarışmaları",
      examples: ["Kripto çözümleme", "Reverse engineering", "Stego challenges"],
      color: "orange"
    },
    {
      title: "Network Security",
      description: "Ağ ve sistem güvenliği",
      examples: ["Firewall config", "IDS/IPS", "VPN & Encryption"],
      color: "amber"
    },
    {
      title: "Malware Analysis",
      description: "Kötü amaçlı yazılım analizi",
      examples: ["Static analysis", "Dynamic analysis", "Sandbox testing"],
      color: "rose"
    }
  ];

  const competitions = [
    {
      name: "Teknofest Siber Güvenlik",
      prize: "500.000 TL",
      categories: ["Hacking Challenge", "Defense Competition"],
      deadline: "Mayıs 2026",
      color: "red"
    },
    {
      name: "DEF CON CTF",
      prize: "$1.2M",
      categories: ["Elite CTF", "Capture The Flag"],
      deadline: "Ağustos 2026",
      color: "orange"
    },
    {
      name: "DEFCON Turkish",
      prize: "150.000 TL",
      categories: ["CTF", "Hacking"],
      deadline: "Haziran 2026",
      color: "amber"
    },
    {
      name: "Hackathon Security",
      prize: "200.000 TL",
      categories: ["Blue Team", "Red Team"],
      deadline: "Nisan 2026",
      color: "rose"
    }
  ];

  const tools = [
    { name: "Burp Suite", icon: "🔍", mastery: 95 },
    { name: "Metasploit", icon: "⚔️", mastery: 90 },
    { name: "Wireshark", icon: "📡", mastery: 92 },
    { name: "Nmap", icon: "🗺️", mastery: 94 },
    { name: "SQLMap", icon: "💾", mastery: 88 },
    { name: "Hashcat", icon: "🔓", mastery: 89 },
    { name: "Ghidra", icon: "🔬", mastery: 87 },
    { name: "Volatility", icon: "💨", mastery: 86 }
  ];

  const projects = [
    {
      title: "Penetration Test",
      description: "Gerçek şirket ağına full penetrasyon testi",
      difficulty: "Expert",
      vulnFound: "23 Kritik",
      tech: ["Metasploit", "Burp Suite", "Custom Exploits"]
    },
    {
      title: "CTF Solution",
      description: "DEF CON CTF 2025 Final Challenge",
      difficulty: "Elite",
      score: "1000+ Points",
      tech: ["Reverse Engineering", "Cryptography", "Exploitation"]
    },
    {
      title: "Malware Analysis",
      description: "Ransomware örneğinin detaylı analizi",
      difficulty: "Advanced",
      findings: "12 IOCs",
      tech: ["Static Analysis", "Dynamic Analysis", "IDA Pro"]
    },
    {
      title: "Security Audit",
      description: "Web uygulaması güvenlik denetimi",
      difficulty: "Intermediate",
      vulnFixed: "45",
      tech: ["OWASP", "Burp Suite", "Manual Testing"]
    }
  ];

  const roadmap = [
    {
      phase: "Temeller",
      duration: "1.5 Ay",
      skills: ["Networking", "Linux", "İşletim Sistemleri"],
      milestone: "Network temellerini öğren"
    },
    {
      phase: "Güvenlik Temelleri",
      duration: "2 Ay",
      skills: ["Kriptografi", "Ağ Protokolleri", "Web Güvenliği"],
      milestone: "İlk OWASP Top 10"
    },
    {
      phase: "Penetrasyon Testleri",
      duration: "2 Ay",
      skills: ["Metasploit", "Burp Suite", "Privilege Escalation"],
      milestone: "İlk penetrasyon testi"
    },
    {
      phase: "Yarışma",
      duration: "1-2 Ay",
      skills: ["CTF", "Red Team", "Blue Team"],
      milestone: "Teknofest Katılımı"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Hacking Terminal Loading */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-black flex items-center justify-center font-mono">
          <div className="w-full h-full p-8 space-y-2 overflow-hidden">
            <div className="text-red-400 text-sm">
              <span className="text-green-400">$</span> Initializing Security Systems...
            </div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="text-green-400 text-xs opacity-60"
                style={{ animation: `typewriter 0.5s ease-in-out ${i * 0.2}s forwards` }}
              >
                <span className="text-red-400">&gt;</span> {["Loading modules", "Setting up encryption", "Enabling firewalls", "Deploying IDS", "Configuring VPN", "Scanning ports", "Analyzing threats", "Ready"][i]}...
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hacking Terminal Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-linear-to-br from-red-950 via-black to-red-950 opacity-30" />
        </div>
        
        {/* Terminal scanlines effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-linear-to-r from-transparent via-green-500/30 to-transparent opacity-40"
              style={{
                top: `${i}%`,
                animation: `scanline 8s linear infinite`,
                animationDelay: `${i * -0.1}s`
              }}
            />
          ))}
        </div>

        {/* Code rain - security commands */}
        <div className="absolute inset-0 opacity-15 font-mono text-xs">
          {scanlines.map((line, i) => (
            <div
              key={i}
              className="text-green-400 p-2"
              style={{
                position: 'absolute',
                left: `${Math.random() * 80}%`,
                top: `${(i * 10) % 100}%`,
                animation: `coderain ${15 + i}s linear infinite`,
                animationDelay: `${i * -1}s`
              }}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Lock icons floating */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 hover:opacity-50 transition-opacity"
            style={{
              left: `${(i * 12.5) % 100}%`,
              top: `${Math.random() * 80}%`,
              animation: `floatlock ${12 + i}s ease-in-out infinite`,
              animationDelay: `${i * -1}s`
            }}
          >
            🔒
          </div>
        ))}

        {/* Red alert glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent opacity-30 animate-pulse" />
      </div>

      <Navbar />

      <main className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-red-400/30 bg-red-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-red-200 uppercase tracking-wider">
                🔐 Siber Güvenlik
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-red-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Siber Güvenlik
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Etik hackleme ve penetrasyon testleri öğren. CTF yarışmalarında kazanç sağla. Teknofest siber güvenlik kategorisinde yarış.
            </p>

            <div className="inline-block p-8 rounded-2xl bg-linear-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 backdrop-blur-md mb-12 font-mono text-left text-xs sm:text-sm">
              <pre>
                <code>{"$ nmap -sV -p- target.com\nStarting Nmap 7.92...\nPORT STATE SERVICE VERSION\n22/tcp open ssh\n\n$ msfconsole\nmsf exploit -j\n# Access Granted ✓"}</code>
              </pre>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "500K TL", label: "Teknofest Ödül" },
                { value: "∞", label: "Zafiyet Sı" },
                { value: "24/7", label: "Monitoring" },
                { value: "100%", label: "Koruma" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-linear-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Fields */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Siber Güvenlik Alanları
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFields.map((field, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-linear-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    field.color === 'red' ? 'from-red-500/10 to-red-600/10 border-red-400/20 hover:border-red-400/50' :
                    field.color === 'orange' ? 'from-orange-500/10 to-orange-600/10 border-orange-400/20 hover:border-orange-400/50' :
                    field.color === 'amber' ? 'from-amber-500/10 to-amber-600/10 border-amber-400/20 hover:border-amber-400/50' :
                    'from-rose-500/10 to-rose-600/10 border-rose-400/20 hover:border-rose-400/50'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{field.title}</h3>
                  <p className="text-white/70 mb-6">{field.description}</p>
                  
                  <div className="space-y-2">
                    {field.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          field.color === 'red' ? 'bg-red-400' :
                          field.color === 'orange' ? 'bg-orange-400' :
                          field.color === 'amber' ? 'bg-amber-400' :
                          'bg-rose-400'
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

        {/* Security Tools */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-red-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Araçlar & Kütüphaneler
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-linear-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 backdrop-blur-md hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{tool.name}</h3>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Ustalık</span>
                      <span className="text-white/80">{tool.mastery}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-red-500 to-orange-500"
                        style={{ width: `${tool.mastery}%` }}
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
              Gerçek güvenlik denetimi ve CTF başarıları
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-linear-to-br from-orange-500/10 to-rose-500/10 border border-orange-400/20 backdrop-blur-md hover:border-orange-400/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Seviye</div>
                      <div className="text-sm font-bold text-orange-400">{project.difficulty}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Sonuç</div>
                      <div className="text-sm font-bold text-red-400">
                        {project.vulnFound || project.score || project.findings || project.vulnFixed}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-orange-500/20 text-orange-200 border border-orange-400/30">
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
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-red-400 via-orange-400 to-rose-400 hidden lg:block" />

              <div className="space-y-8">
                {roadmap.map((phase, idx) => (
                  <div key={idx} className="relative lg:pl-20">
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-red-400 border-4 border-black hidden lg:block" />

                    <div className="p-8 rounded-2xl bg-linear-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 backdrop-blur-md">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <p className="text-red-300">⏱️ {phase.duration}</p>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30">
                          <span className="text-sm font-semibold text-red-200">🎯 {phase.milestone}</span>
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-red-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Yarışmalar & CTF
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-linear-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    comp.color === 'red' ? 'from-red-500/10 to-red-600/10 border-red-400/20 hover:border-red-400/50' :
                    comp.color === 'orange' ? 'from-orange-500/10 to-orange-600/10 border-orange-400/20 hover:border-orange-400/50' :
                    comp.color === 'amber' ? 'from-amber-500/10 to-amber-600/10 border-amber-400/20 hover:border-amber-400/50' :
                    'from-rose-500/10 to-rose-600/10 border-rose-400/20 hover:border-rose-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <div className={`px-4 py-2 rounded-full border ${
                      comp.color === 'red' ? 'bg-red-500/20 border-red-400/30 text-red-200' :
                      comp.color === 'orange' ? 'bg-orange-500/20 border-orange-400/30 text-orange-200' :
                      comp.color === 'amber' ? 'bg-amber-500/20 border-amber-400/30 text-amber-200' :
                      'bg-rose-500/20 border-rose-400/30 text-rose-200'
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
            <div className="p-12 rounded-3xl bg-linear-to-br from-red-500/20 via-orange-500/20 to-rose-500/20 border border-red-400/30 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Siber Güvenlik Uzmanı Ol
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Etik hackleme öğren. Teknofest siber güvenlik kategorisinde yerinizi alın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ekip"
                  className="px-8 py-4 rounded-full bg-linear-to-r from-red-600 via-orange-600 to-rose-600 text-white font-bold hover:from-red-700 hover:via-orange-700 hover:to-rose-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/50"
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
        @keyframes scanline {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }

        @keyframes coderain {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes floatlock {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          25% { transform: translateY(-15px) rotateZ(5deg); }
          50% { transform: translateY(-30px) rotateZ(-5deg); }
          75% { transform: translateY(-15px) rotateZ(5deg); }
        }

        @keyframes typewriter {
          0% { 
            opacity: 0;
            width: 0;
          }
          100% { 
            opacity: 1;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
