"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import Link from "next/link";

export default function AIVeriPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [neurons, setNeurons] = useState<Array<{x: number, y: number, active: boolean}>>([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 600);

    // Neural network animation
    const neuronArray = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: false
    }));
    setNeurons(neuronArray);

    const interval = setInterval(() => {
      setNeurons(prev => prev.map(n => ({
        ...n,
        active: Math.random() > 0.7
      })));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const aiDomains = [
    {
      title: "Computer Vision",
      description: "Görüntü işleme ve nesne tanıma",
      examples: ["Yüz tanıma", "Otonom araçlar", "Medikal görüntü analizi"],
      color: "pink"
    },
    {
      title: "Natural Language Processing",
      description: "Metin analizi ve dil modelleri",
      examples: ["Chatbotlar", "Duygu analizi", "Çeviri sistemleri"],
      color: "purple"
    },
    {
      title: "Machine Learning",
      description: "Tahmin ve sınıflandırma modelleri",
      examples: ["Öneri sistemleri", "Fraud detection", "Fiyat tahmini"],
      color: "blue"
    },
    {
      title: "Deep Learning",
      description: "Sinir ağları ve ileri düzey modeller",
      examples: ["GANlar", "Transformers", "Reinforcement Learning"],
      color: "cyan"
    }
  ];

  const competitions = [
    {
      name: "Teknofest AI Kategorileri",
      prize: "1.000.000 TL",
      categories: ["Doğal Dil İşleme", "Görüntü İşleme", "Makine Öğrenmesi"],
      deadline: "Mayıs 2026",
      color: "pink"
    },
    {
      name: "Kaggle Competitions",
      prize: "$100,000+",
      categories: ["Data Science", "ML", "Deep Learning"],
      deadline: "Sürekli",
      color: "blue"
    },
    {
      name: "Google AI Challenge",
      prize: "$50,000",
      categories: ["TensorFlow", "Computer Vision", "NLP"],
      deadline: "Mart 2026",
      color: "purple"
    },
    {
      name: "Microsoft AI Hackathon",
      prize: "Azure Credits",
      categories: ["Azure AI", "OpenAI", "Cognitive Services"],
      deadline: "Her ay",
      color: "cyan"
    }
  ];

  const tools = [
    { name: "Python", icon: "🐍", usage: 95 },
    { name: "TensorFlow", icon: "🧠", usage: 90 },
    { name: "PyTorch", icon: "🔥", usage: 88 },
    { name: "Scikit-learn", icon: "📊", usage: 85 },
    { name: "Pandas", icon: "🐼", usage: 92 },
    { name: "NumPy", icon: "🔢", usage: 90 },
    { name: "Keras", icon: "⚡", usage: 87 },
    { name: "OpenCV", icon: "👁️", usage: 83 }
  ];

  const projects = [
    {
      title: "Sentiment Analysis Bot",
      description: "Sosyal medya duygu analizi için NLP modeli",
      accuracy: "94%",
      dataset: "1M+ tweet",
      tech: ["BERT", "PyTorch", "Transformers"]
    },
    {
      title: "Object Detection System",
      description: "Gerçek zamanlı nesne tanıma sistemi",
      accuracy: "91%",
      dataset: "COCO Dataset",
      tech: ["YOLO", "OpenCV", "TensorFlow"]
    },
    {
      title: "Recommendation Engine",
      description: "E-commerce öneri sistemi",
      accuracy: "89%",
      dataset: "500K kullanıcı",
      tech: ["Collaborative Filtering", "Deep Learning"]
    },
    {
      title: "Medical Image Classifier",
      description: "Medikal görüntü sınıflandırma",
      accuracy: "96%",
      dataset: "ChestX-ray14",
      tech: ["ResNet", "Transfer Learning"]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* AI Loading Effect */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-br from-pink-900 via-purple-900 to-blue-900 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-4 animate-pulse">
              AI INITIALIZING...
            </div>
            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 animate-loading" />
            </div>
          </div>
        </div>
      </div>

      {/* Neural Network Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-pink-950 via-purple-950 to-blue-950" />
        
        {/* Neurons and connections */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {neurons.map((neuron, i) => (
            <g key={i}>
              {/* Connections */}
              {neurons.slice(i + 1, i + 4).map((target, j) => (
                <line
                  key={j}
                  x1={`${neuron.x}%`}
                  y1={`${neuron.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={neuron.active || target.active ? "#ec4899" : "#94a3b8"}
                  strokeWidth={neuron.active && target.active ? "2" : "1"}
                  className="transition-all duration-300"
                />
              ))}
              {/* Neuron */}
              <circle
                cx={`${neuron.x}%`}
                cy={`${neuron.y}%`}
                r={neuron.active ? "6" : "4"}
                fill={neuron.active ? "#ec4899" : "#94a3b8"}
                className="transition-all duration-300"
              >
                <animate
                  attributeName="r"
                  values={neuron.active ? "4;8;4" : "4;4;4"}
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Data particles */}
        {[...Array(20)].map((_, i) => {
          const xPos = Math.sin(i * 0.3) * 50 + 50;
          const yPos = Math.cos(i * 0.2) * 50 + 50;
          return (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-60"
              style={{
                left: `${xPos}%`,
                top: `${yPos}%`,
                animation: `dataflow ${10 + i}s linear infinite`,
                animationDelay: `${i * -0.5}s`
              }}
            />
          );
        })}
      </div>

      <Navbar />

      <main className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 rounded-full border border-pink-400/30 bg-pink-500/20 backdrop-blur-md">
              <span className="text-sm font-semibold text-pink-200 uppercase tracking-wider">
                🤖 Artificial Intelligence
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI & Veri Bilimi
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Geleceğin teknolojisini öğren. Machine Learning&apos;den Deep Learning&apos;e kadar AI dünyasında uzmanlaş.
            </p>

            <div className="inline-block p-8 rounded-2xl bg-linear-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 backdrop-blur-md mb-12">
              <pre className="text-left font-mono text-sm sm:text-base">
                <code>
                  <span className="text-pink-400">import</span> <span className="text-white">tensorflow</span> <span className="text-pink-400">as</span> <span className="text-white">tf</span>{"\n"}
                  <span className="text-pink-400">from</span> <span className="text-white">transformers</span> <span className="text-pink-400">import</span> <span className="text-white">pipeline</span>{"\n\n"}
                  <span className="text-purple-400">model</span> = <span className="text-white">pipeline</span>(<span className="text-green-400">&quot;sentiment-analysis&quot;</span>){"\n"}
                  <span className="text-purple-400">result</span> = <span className="text-white">model</span>(<span className="text-green-400">&quot;Teknofest 2026!&quot;</span>){"\n"}
                  <span className="text-gray-400"># Output: POSITIVE 🎉</span>
                </code>
              </pre>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "1M TL", label: "Teknofest AI Ödül" },
                { value: "96%", label: "Model Accuracy" },
                { value: "∞", label: "Veri Potansiyeli" },
                { value: "24/7", label: "Model Training" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-linear-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 backdrop-blur-md">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Domains */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              AI Alanları
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {aiDomains.map((domain, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-linear-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    domain.color === 'pink' ? 'from-pink-500/10 to-pink-600/10 border-pink-400/20 hover:border-pink-400/50' :
                    domain.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    domain.color === 'blue' ? 'from-blue-500/10 to-blue-600/10 border-blue-400/20 hover:border-blue-400/50' :
                    'from-cyan-500/10 to-cyan-600/10 border-cyan-400/20 hover:border-cyan-400/50'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{domain.title}</h3>
                  <p className="text-white/70 mb-6">{domain.description}</p>
                  
                  <div className="space-y-2">
                    {domain.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          domain.color === 'pink' ? 'bg-pink-400' :
                          domain.color === 'purple' ? 'bg-purple-400' :
                          domain.color === 'blue' ? 'bg-blue-400' :
                          'bg-cyan-400'
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

        {/* Tools & Libraries */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-purple-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Araçlar & Kütüphaneler
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-linear-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/20 backdrop-blur-md hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{tool.name}</h3>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/60">Kullanım</span>
                      <span className="text-white/80">{tool.usage}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-pink-500 to-purple-500"
                        style={{ width: `${tool.usage}%` }}
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
              AI Proje Örnekleri
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Gerçek veri setleri ve production-ready AI modelleri
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-linear-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 backdrop-blur-md hover:border-purple-400/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Doğruluk</div>
                      <div className="text-xl font-bold text-green-400">{project.accuracy}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60 mb-1">Veri Seti</div>
                      <div className="text-xl font-bold text-blue-400">{project.dataset}</div>
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

        {/* Competitions */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-pink-950/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              AI Yarışmaları
            </h2>
            <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
              Teknofest&apos;ten Kaggle&apos;a kadar AI yarışmalarında yerinizi alın
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {competitions.map((comp, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-linear-to-br border backdrop-blur-md hover:scale-[1.02] transition-all duration-300 ${
                    comp.color === 'pink' ? 'from-pink-500/10 to-pink-600/10 border-pink-400/20 hover:border-pink-400/50' :
                    comp.color === 'blue' ? 'from-blue-500/10 to-blue-600/10 border-blue-400/20 hover:border-blue-400/50' :
                    comp.color === 'purple' ? 'from-purple-500/10 to-purple-600/10 border-purple-400/20 hover:border-purple-400/50' :
                    'from-cyan-500/10 to-cyan-600/10 border-cyan-400/20 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{comp.name}</h3>
                    <div className={`px-4 py-2 rounded-full border ${
                      comp.color === 'pink' ? 'bg-pink-500/20 border-pink-400/30 text-pink-200' :
                      comp.color === 'blue' ? 'bg-blue-500/20 border-blue-400/30 text-blue-200' :
                      comp.color === 'purple' ? 'bg-purple-500/20 border-purple-400/30 text-purple-200' :
                      'bg-cyan-500/20 border-cyan-400/30 text-cyan-200'
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
            <div className="p-12 rounded-3xl bg-linear-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-pink-400/30 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-white mb-4">
                AI Dünyasına Adım At
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Teknofest AI kategorilerinde yerinizi alın. Geleceğin teknolojisini bugün öğrenin.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ekip"
                  className="px-8 py-4 rounded-full bg-linear-to-r from-pink-600 via-purple-600 to-blue-600 text-white font-bold hover:from-pink-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/50"
                >
                  Ekibe Katıl
                </Link>
                <Link
                  href="/projeler"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  AI Projelerini İncele
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes dataflow {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(100px, 100px) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
