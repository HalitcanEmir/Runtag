"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Oyun Geliştirme",
    subtitle: "Indie Games",
    description:
      "Üniversite öğrencileri için tasarlanmış oyun geliştirme platformu. Teknofest, Global Game Jam ve diğer yarışmalara hazırlanın.",
    expandedDescription:
      "2D/3D indie oyunlar geliştirin, game jam'lere katılın ve Teknofest gibi ulusal yarışmalarda yerinizi alın. Unity, Unreal Engine ve Godot ile profesyonel projeler oluşturun.",
    tags: ["Unity", "Unreal", "Godot", "2D / 3D"],
    benefits: [
      "Teknofest ve ulusal yarışmalara hazırlık",
      "Global Game Jam katılımı",
      "Indie oyun geliştirme deneyimi",
      "Profesyonel mentörlük desteği"
    ],
    image: "/images/game-dev.png",
    accentColor: "purple",
    link: "/yetenekler/oyun-gelistirme"
  },
  {
    title: "Web & Mobil",
    subtitle: "Platforms",
    description:
      "Üniversite öğrencileri için modern web ve mobil uygulama geliştirme. Yarışmalarda öne çıkacak projeler yapın.",
    expandedDescription:
      "Next.js, React Native ve Node.js ile SaaS platformları, mobil uygulamalar geliştirin. Teknofest ve hackathonlar için gerçek kullanıcılı PoC'ler oluşturun.",
    tags: ["Next.js", "React Native", "Node.js", "SaaS"],
    benefits: [
      "Teknofest teknoloji kategorilerinde yarış",
      "Startup fikirlerini hayata geçir",
      "Full-stack geliştirme deneyimi",
      "Gerçek kullanıcılı prototip geliştirme"
    ],
    image: "/images/web-dev.png",
    accentColor: "blue",
    link: "/yetenekler/web-mobil"
  },
  {
    title: "AI & Veri Bilimi",
    subtitle: "Competitions",
    description:
      "Üniversite öğrencileri için yapay zeka ve makine öğrenmesi. Teknofest AI kategorilerinde yarışın.",
    expandedDescription:
      "Machine Learning, Deep Learning ve AI teknolojileri ile Teknofest, hackathonlar ve global yarışmalarda öne çıkın. Fikirleri gerçek AI demolarına dönüştürün.",
    tags: ["ML", "Deep Learning", "Teknofest", "PoC"],
    benefits: [
      "Teknofest AI kategorilerinde yarış",
      "Global AI hackathonlarına katıl",
      "Gerçek dünya AI uygulamaları",
      "Veri bilimi ve analitik deneyimi"
    ],
    image: "/images/ai-dev.png",
    accentColor: "pink",
    link: "/yetenekler/ai-veri-bilimi"
  },
  {
    title: "IoT & Robotik",
    subtitle: "Hardware",
    description:
      "Üniversite öğrencileri için IoT ve robotik projeler. Teknofest teknoloji kategorilerinde yarışın.",
    expandedDescription:
      "Arduino, Raspberry Pi ve mikrodenetleyicilerle IoT sistemleri ve robotik projeler geliştirin. Teknofest'te insansız hava araçları ve otonom sistemler kategorilerinde yer alın.",
    tags: ["Arduino", "Raspberry Pi", "IoT", "Robotics"],
    benefits: [
      "Teknofest İHA ve robotik kategorileri",
      "Gerçek donanım projeleri",
      "Otonom sistem geliştirme",
      "Sensör ve aktuatör entegrasyonu"
    ],
    image: "/images/game-dev.png",
    accentColor: "cyan",
    link: "/yetenekler/iot-robotik"
  },
  {
    title: "Siber Güvenlik",
    subtitle: "Security",
    description:
      "Üniversite öğrencileri için siber güvenlik eğitimi. CTF yarışmalarına hazırlanın.",
    expandedDescription:
      "Etik hackleme, penetrasyon testleri ve güvenlik analizleri yapın. Teknofest siber güvenlik kategorisi ve CTF (Capture The Flag) yarışmalarında yerinizi alın.",
    tags: ["Ethical Hacking", "CTF", "Penetration", "Security"],
    benefits: [
      "Teknofest siber güvenlik kategorisi",
      "CTF yarışmalarına hazırlık",
      "Network ve sistem güvenliği",
      "Güvenlik açığı analizi"
    ],
    image: "/images/web-dev.png",
    accentColor: "red",
    link: "/yetenekler/siber-guvenlik"
  },
  {
    title: "Blockchain & Web3",
    subtitle: "Decentralized",
    description:
      "Üniversite öğrencileri için blockchain ve Web3. Geleceğin teknolojilerinde öncü olun.",
    expandedDescription:
      "Ethereum, Solana ve diğer blockchain platformlarında akıllı kontratlar ve DApp'ler geliştirin. Web3 hackathonları ve global yarışmalarda projelerinizi sergileyin.",
    tags: ["Ethereum", "Solidity", "Web3", "DeFi"],
    benefits: [
      "Akıllı kontrat geliştirme",
      "DApp (Decentralized App) oluşturma",
      "Web3 hackathonları",
      "NFT ve DeFi projeleri"
    ],
    image: "/images/ai-dev.png",
    accentColor: "amber",
    link: "/yetenekler/blockchain-web3"
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Multi-color gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-950 via-transparent to-cyan-950 opacity-30" />

        {/* Animated gradient orbs */}
        <div
          className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />

        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Section Header */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Yetenekler
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Üniversite Öğrencileri İçin Teknoloji Platformu
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
            Teknofest, hackathonlar ve global yarışmalara hazırlanın. Indie oyunlardan blockchain&apos;e,
            web uygulamalarından AI projelerine kadar her alanda kendinizi geliştirin.
          </p>
        </div>
      </div>

      {/* Expandable Cards Grid */}
      <div className="relative z-10 mt-12 grid gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.link}
            className="group relative h-[400px] cursor-pointer overflow-hidden rounded-3xl sm:h-[450px] lg:h-[500px] transition-all duration-500 hover:scale-[1.02]"
          >
            {/* Background Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Glass border overlay */}
            <div
              className={`absolute inset-0 rounded-3xl border transition-all duration-300 ${
                card.accentColor === "purple"
                  ? "border-purple-400/20 group-hover:border-purple-400/50"
                  : card.accentColor === "blue"
                  ? "border-blue-400/20 group-hover:border-blue-400/50"
                  : card.accentColor === "pink"
                  ? "border-pink-400/20 group-hover:border-pink-400/50"
                  : card.accentColor === "cyan"
                  ? "border-cyan-400/20 group-hover:border-cyan-400/50"
                  : card.accentColor === "red"
                  ? "border-red-400/20 group-hover:border-red-400/50"
                  : "border-amber-400/20 group-hover:border-amber-400/50"
              }`}
            />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="relative z-10">
                {/* Subtitle chip */}
                <span
                  className={`inline-block rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md transition-all duration-300 ${
                    card.accentColor === "purple"
                      ? "border-purple-400/30 bg-purple-500/20 text-purple-200 group-hover:bg-purple-500/40"
                      : card.accentColor === "blue"
                      ? "border-blue-400/30 bg-blue-500/20 text-blue-200 group-hover:bg-blue-500/40"
                      : card.accentColor === "pink"
                      ? "border-pink-400/30 bg-pink-500/20 text-pink-200 group-hover:bg-pink-500/40"
                      : card.accentColor === "cyan"
                      ? "border-cyan-400/30 bg-cyan-500/20 text-cyan-200 group-hover:bg-cyan-500/40"
                      : card.accentColor === "red"
                      ? "border-red-400/30 bg-red-500/20 text-red-200 group-hover:bg-red-500/40"
                      : "border-amber-400/30 bg-amber-500/20 text-amber-200 group-hover:bg-amber-500/40"
                  }`}
                >
                  {card.subtitle}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-white drop-shadow-lg sm:text-3xl transition-all duration-300 group-hover:text-3xl group-hover:sm:text-4xl">
                  {card.title}
                </h3>

                {/* Description - expands on hover */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                      {card.expandedDescription}
                    </p>

                    {/* Benefits List */}
                    <div className="mt-4 space-y-2">
                      {card.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span
                            className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                              card.accentColor === "purple"
                                ? "bg-purple-400"
                                : card.accentColor === "blue"
                                ? "bg-blue-400"
                                : card.accentColor === "pink"
                                ? "bg-pink-400"
                                : card.accentColor === "cyan"
                                ? "bg-cyan-400"
                                : card.accentColor === "red"
                                ? "bg-red-400"
                                : "bg-amber-400"
                            }`}
                          />
                          <span className="text-xs text-white/80">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <span>Detaylı İncele</span>
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner glow accent */}
            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                card.accentColor === "purple"
                  ? "bg-purple-500/40"
                  : card.accentColor === "blue"
                  ? "bg-blue-500/40"
                  : card.accentColor === "pink"
                  ? "bg-pink-500/40"
                  : card.accentColor === "cyan"
                  ? "bg-cyan-500/40"
                  : card.accentColor === "red"
                  ? "bg-red-500/40"
                  : "bg-amber-500/40"
              }`}
            />
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
}


