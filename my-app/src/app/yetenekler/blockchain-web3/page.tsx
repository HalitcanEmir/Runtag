"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Link from "next/link";

export default function BlockchainWeb3Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [blocks, setBlocks] = useState<Array<{x: number, y: number, hash: string}>>([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800);

    // Blockchain blocks animation
    const blockArray = Array.from({ length: 20 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      hash: `0x${Math.random().toString(16).slice(2, 10)}`
    }));
    setBlocks(blockArray);
  }, []);

  const web3Areas = [
    {
      title: "Smart Contracts",
      description: "Ethereum akıllı kontratları ve DeFi protokolleri",
      examples: ["Solidity programlama", "Token oluşturma", "DAO geliştirme"],
      color: "purple"
    },
    {
      title: "DeFi Uygulamaları",
      description: "Merkezi olmayan finans platformları",
      examples: ["AMM DEX", "Lending Protokolü", "Staking sistemleri"],
      color: "blue"
    },
    {
      title: "NFT & Metaverse",
      description: "Dijital varlıklar ve sanal dünyalar",
      examples: ["NFT koleksiyonları", "Metaverse dünyaları", "Gaming tokens"],
      color: "pink"
    },
    {
      title: "Blockchain Analytics",
      description: "Zincir analitikleri ve güvenlik denetimi",
      examples: ["Transaction tracing", "Smart contract audit", "Risk analysis"],
      color: "amber"
    }
  ];

  const competitions = [
    {
      name: "Teknofest Blockchain",
      prize: "400.000 TL",
      categories: ["Smart Contract", "DApp Development"],
      deadline: "Mayıs 2026",
      color: "purple"
    },
    {
      name: "Ethereum Hackathon",
      prize: "$200,000",
      categories: ["DeFi", "NFT", "Web3"],
      deadline: "Nisan 2026",
      color: "blue"
    },
    {
      name: "Web3 Istanbul Hackathon",
      prize: "$150,000",
      categories: ["Layer 2", "Scaling", "Innovation"],
      deadline: "Haziran 2026",
      color: "pink"
    },
    {
      name: "Solana Riptide",
      prize: "$1M",
      categories: ["DApps", "Gaming", "Infrastructure"],
      deadline: "Temmuz 2026",
      color: "amber"
    }
  ];

  const tools = [
    { name: "Solidity", icon: "📜", proficiency: 92 },
    { name: "Hardhat", icon: "🔨", proficiency: 89 },
    { name: "Web3.js", icon: "🕸️", proficiency: 91 },
    { name: "Ethers.js", icon: "⚡", proficiency: 93 },
    { name: "Truffle", icon: "🍄", proficiency: 87 },
    { name: "Foundry", icon: "🏗️", proficiency: 88 },
    { name: "MetaMask", icon: "🦊", proficiency: 90 },
    { name: "OpenZeppelin", icon: "🛡️", proficiency: 94 }
  ];

  const projects = [
    {
      title: "DeFi Protocol",
      description: "Tam fonksiyonlu DeFi protokolü (Lending + Swap)",
      tvl: "$50M+ TVL",
      users: "10K+ kullanıcı",
      tech: ["Solidity", "Hardhat", "React", "Web3.js"]
    },
    {
      title: "NFT Marketplace",
      description: "Ethereum ve Polygon üzerinde NFT pazaryeri",
      volume: "$5M+ Volume",
      collections: "500+ koleksiyon",
      tech: ["Solidity", "IPFS", "Next.js", "Wagmi"]
    },
    {
      title: "DAO Implementation",
      description: "Tam yetkilendirilmiş merkezi olmayan otonom organizasyon",
      members: "5K+ holders",
      treasury: "$10M+",
      tech: ["Solidity", "Governance", "Multi-sig"]
    },
    {
      title: "Layer 2 Scaling",
      description: "Arbitrum/Optimism tabanlı skalabilite çözümü",
      tps: "4000+ TPS",
      cost: "99% daha ucuz",
      tech: ["ZK-Rollups", "Optimistic", "Bridging"]
    }
  ];

  const roadmap = [
    {
      phase: "Temeller",
      duration: "1.5 Ay",
      skills: ["Blockchain Temel", "Kriptografi", "Ethereum"],
      milestone: "İlk wallet kurulumu"
    },
    {
      phase: "Smart Contracts",
      duration: "2 Ay",
      skills: ["Solidity", "Hardhat", "Testing"],
      milestone: "İlk kontrat deploy"
    },
    {
      phase: "DApp Geliştirme",
      duration: "2 Ay",
      skills: ["Frontend Integration", "Web3.js", "UI/UX"],
      milestone: "Full-stack DApp"
    },
    {
      phase: "Yarışma",
      duration: "1-2 Ay",
      skills: ["Optimization", "Security", "Presentation"],
      milestone: "Teknofest Katılımı"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Blockchain Loading */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8 flex justify-center gap-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-12 border-2 border-purple-400 rounded flex items-center justify-center text-purple-200 font-bold text-xs animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  ⛓️
                </div>
              ))}
            </div>
            <div className="text-2xl font-bold text-white mb-4">BLOCKCHAIN INITIALIZING</div>
            <div className="text-purple-300 font-mono text-sm">Mining Genesis Block...</div>
          </div>
        </div>
      </div>

      {/* Blockchain Network Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950" />
        
        {/* Blockchain connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {blocks.map((block, i) => (
            <g key={i}>
              {/* Connections to next blocks */}
              {blocks.slice(i + 1, i + 3).map((nextBlock, j) => (
                <line
                  key={j}
                  x1={`${block.x}%`}
                  y1={`${block.y}%`}
                  x2={`${nextBlock.x}%`}
                  y2={`${nextBlock.y}%`}
                  stroke="#a78bfa"
                  strokeWidth="1"
                  className="animate-pulse"
                  style={{ animationDelay: `${(i + j) * 0.1}s` }}
                />
              ))}
              {/* Block node */}
              <rect
                x={`${block.x - 1}%`}
                y={`${block.y - 1}%`}
                width="2%"
                height="2%"
                fill="#c084fc"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            </g>
          ))}
        </svg>

        {/* Floating tokens */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-30 hover:opacity-70 transition-opacity"
            style={{
              left: `${(i * 8.3) % 100}%`,
              top: `${Math.random() * 80}%`,
              animation: `floattoken ${15 + i}s ease-in-out infinite`,
              animationDelay: `${i * -1.2}s`
            }}
          >
            {["💎", "🪙", "🔐", "📈", "🏦", "🎯", "⛓️", "🚀", "💰", "🌐", "🎁", "🔑"][i]}
          </div>
        ))}

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Navbar />

      <main className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-purple-400/30 bg-purple-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-purple-200 uppercase tracking-wider">
                ⛓️ Blockchain & Web3
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Blockchain & Web3
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Merkezi olmayan dünya inşa et. Akıllı kontratlar ve DApp'ler geliştir. Web3 yarışmalarında öncü ol.
            </p>

            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-md mb-12 font-mono text-left text-xs sm:text-sm">
              <pre>
                <code>{"pragma solidity ^0.8.20;\n\ncontract DeFiProtocol\n  function swap() public\n    // Execute swap"}</code>
              </pre>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "$1.2T", label: "Toplam Kripto Market" },
                { value: "400K TL", label: "Teknofest Ödül" },
                { value: "∞", label: "İnovasyon Potansiyeli" },
                { value: "24/7", label: "Network Çalışması" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Web3 Areas */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Blockchain & Web3 Alanları
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {web3Areas.map((area, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    area.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    area.color === 'blue' ? 'from-blue-500/10 to-blue-600/10 border-blue-400/20 hover:border-blue-400/50' :
                    area.color === 'pink' ? 'from-pink-500/10 to-pink-600/10 border-pink-400/20 hover:border-pink-400/50' :
                    'from-amber-500/10 to-amber-600/10 border-amber-400/20 hover:border-amber-400/50'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-white/70 mb-6">{area.description}</p>
                  
                  <div className="space-y-2">
                    {area.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          area.color === 'purple' ? 'bg-purple-400' :
                          area.color === 'blue' ? 'bg-blue-400' :
                          area.color === 'pink' ? 'bg-pink-400' :
                          'bg-amber-400'
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

        {/* Tools & Stack */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-indigo-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Geliştirme Araçları
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-md hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{tool.name}</h3>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Yeterlilik</span>
                      <span className="text-white/80">{tool.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                        style={{ width: `${tool.proficiency}%` }}
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
              Mainnet'te çalışan gerçek Web3 uygulamaları
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-400/20 backdrop-blur-md hover:border-indigo-400/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Metrik</div>
                      <div className="text-sm font-bold text-purple-400">{project.tvl || project.volume || project.members || project.tps}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Başarı</div>
                      <div className="text-sm font-bold text-blue-400">{project.users || project.collections || project.treasury || project.cost}</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
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
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 hidden lg:block" />

              <div className="space-y-8">
                {roadmap.map((phase, idx) => (
                  <div key={idx} className="relative lg:pl-20">
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-purple-400 border-4 border-black hidden lg:block" />

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-md">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{phase.phase}</h3>
                          <p className="text-purple-300">⏱️ {phase.duration}</p>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
                          <span className="text-sm font-semibold text-purple-200">🎯 {phase.milestone}</span>
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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Web3 Yarışmaları & Hackathonlar
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-gradient-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    comp.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    comp.color === 'blue' ? 'from-blue-500/10 to-blue-600/10 border-blue-400/20 hover:border-blue-400/50' :
                    comp.color === 'pink' ? 'from-pink-500/10 to-pink-600/10 border-pink-400/20 hover:border-pink-400/50' :
                    'from-amber-500/10 to-amber-600/10 border-amber-400/20 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <div className={`px-4 py-2 rounded-full border ${
                      comp.color === 'purple' ? 'bg-purple-500/20 border-purple-400/30 text-purple-200' :
                      comp.color === 'blue' ? 'bg-blue-500/20 border-blue-400/30 text-blue-200' :
                      comp.color === 'pink' ? 'bg-pink-500/20 border-pink-400/30 text-pink-200' :
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
            <div className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 border border-purple-400/30 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                Web3 Geleceğini İnşa Et
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Blockchain'i öğren. DeFi ve NFT projeleri geliştir. Teknofest blockchain kategorisinde yerinizi alın.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ekip"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white font-bold hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
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
        @keyframes floattoken {
          0%, 100% { transform: translateY(0px) rotateZ(0deg) scale(1); }
          25% { transform: translateY(-20px) rotateZ(90deg) scale(1.1); }
          50% { transform: translateY(-40px) rotateZ(180deg) scale(1); }
          75% { transform: translateY(-20px) rotateZ(270deg) scale(1.1); }
        }
      `}</style>
    </div>
  );
}
