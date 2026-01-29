"use client";

import Image from "next/image";

const cards = [
  {
    title: "Oyun Geliştirme",
    subtitle: "Indie Games",
    description:
      "PC, mobil ve web için indie oyunlar, game jam projeleri ve yarışma yapımları.",
    tags: ["Unity", "Unreal", "Godot", "2D / 3D"],
    image: "/images/game-dev.png",
    accentColor: "purple",
  },
  {
    title: "Web & Mobil",
    subtitle: "Platforms",
    description:
      "SaaS panelleri, mobil uygulamalar ve gerçek kullanıcılı PoC platformları.",
    tags: ["Next.js", "React Native", "Node.js", "SaaS"],
    image: "/images/web-dev.png",
    accentColor: "blue",
  },
  {
    title: "AI & Yarışmalar",
    subtitle: "Competitions",
    description:
      "Teknofest, global hackathonlar ve fikirleri gerçek prototiplere dönüştüren AI demolar.",
    tags: ["ML", "Hackathons", "Teknofest", "PoC"],
    image: "/images/ai-dev.png",
    accentColor: "pink",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20">
      {/* Section Header */}
      <div className="mx-auto max-w-6xl space-y-3 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Yetenekler
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Neler Yapıyoruz
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
          Küçük, odaklı ekipler kurarak fikirler üzerinde çalışıyoruz — indie oyunlardan
          ölçeklenebilir web platformlarına ve yarışma prototiplere.
        </p>
      </div>

      {/* Netflix-style Cards - Full Width */}
      <div className="mt-12 grid gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative h-[400px] cursor-pointer overflow-hidden rounded-3xl sm:h-[450px] lg:h-[500px]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Glass border overlay */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 transition-all duration-300 group-hover:border-white/25" />

            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content - All in one container */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="relative z-10">
                {/* Subtitle chip */}
                <span
                  className={`inline-block rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${
                    card.accentColor === "purple"
                      ? "border-purple-400/30 bg-purple-500/20 text-purple-200"
                      : card.accentColor === "blue"
                      ? "border-blue-400/30 bg-blue-500/20 text-blue-200"
                      : "border-pink-400/30 bg-pink-500/20 text-pink-200"
                  }`}
                >
                  {card.subtitle}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
                  {card.title}
                </h3>

                {/* Description - appears on hover with proper spacing */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      {card.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner glow accent */}
            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 ${
                card.accentColor === "purple"
                  ? "bg-purple-500/40"
                  : card.accentColor === "blue"
                  ? "bg-blue-500/40"
                  : "bg-pink-500/40"
              } opacity-0 group-hover:opacity-100`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

