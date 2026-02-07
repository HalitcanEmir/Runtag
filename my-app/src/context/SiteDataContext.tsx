"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ==================== TYPES ====================

export type ProjectTechnology = { name: string; purpose: string };
export type ProjectMember = { name: string; role: string };

export type Project = {
  slug: string;
  category: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  aim: string;
  stack: string;
  technologies: ProjectTechnology[];
  team: ProjectMember[];
  image: string;
  stats: string;
  date: string;
};

export type Capability = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  expandedDescription: string;
  tags: string[];
  benefits: string[];
  image: string;
  accentColor: string;
  link: string;
};

export type CrewTask = {
  title: string;
  description: string;
  image?: string;
  members: number;
  priority: "high" | "medium" | "low";
};

export type CrewColumn = {
  title: string;
  color: string;
  gradient: string;
  bgGlow: string;
  tasks: CrewTask[];
};

export type StatItem = {
  label: string;
  value: string;
};

export type HeroSettings = {
  title: string;
  subtitle: string;
  typewriterTexts: string[];
  ctaText: string;
  ctaLink: string;
};

export type SiteCategory = {
  name: string;
  emoji: string;
  color: string;
};

export type SiteData = {
  hero: HeroSettings;
  capabilities: Capability[];
  projects: Project[];
  categories: Record<string, SiteCategory>;
  crews: CrewColumn[];
  stats: StatItem[];
};

// ==================== DEFAULTS ====================

const defaultHero: HeroSettings = {
  title: "Runteg Tech Studio",
  subtitle: "Ekip Bazlı Teknoloji Stüdyosu",
  typewriterTexts: [
    "Ekibimize katıl, sen de bunun bir parçası ol.",
    "Sitenizin bakımı, yapımı... Hepsini yapalım.",
    "Indie oyunlarımıza bakmak ister misiniz?",
    "Hayalinizdeki projeyi birlikte geliştirelim.",
  ],
  ctaText: "Projelerimiz",
  ctaLink: "/projeler",
};

const defaultCapabilities: Capability[] = [
  {
    id: "oyun-gelistirme",
    title: "Oyun Geliştirme",
    subtitle: "Indie Games",
    description: "Üniversite öğrencileri için tasarlanmış oyun geliştirme platformu.",
    expandedDescription: "2D/3D indie oyunlar geliştirin, game jam'lere katılın ve Teknofest gibi ulusal yarışmalarda yerinizi alın.",
    tags: ["Unity", "Unreal", "Godot", "2D / 3D"],
    benefits: ["Teknofest ve ulusal yarışmalara hazırlık", "Global Game Jam katılımı", "Indie oyun geliştirme deneyimi", "Profesyonel mentörlük desteği"],
    image: "/images/game-dev.png",
    accentColor: "purple",
    link: "/yetenekler/oyun-gelistirme",
  },
  {
    id: "web-mobil",
    title: "Web & Mobil",
    subtitle: "Platforms",
    description: "Modern web ve mobil uygulama geliştirme.",
    expandedDescription: "Next.js, React Native ve Node.js ile SaaS platformları, mobil uygulamalar geliştirin.",
    tags: ["Next.js", "React Native", "Node.js", "SaaS"],
    benefits: ["Teknofest teknoloji kategorilerinde yarış", "Startup fikirlerini hayata geçir", "Full-stack geliştirme deneyimi", "Gerçek kullanıcılı prototip geliştirme"],
    image: "/images/web-dev.png",
    accentColor: "blue",
    link: "/yetenekler/web-mobil",
  },
  {
    id: "ai-veri-bilimi",
    title: "AI & Veri Bilimi",
    subtitle: "Competitions",
    description: "Yapay zeka ve makine öğrenmesi.",
    expandedDescription: "Machine Learning, Deep Learning ve AI teknolojileri ile Teknofest ve global yarışmalarda öne çıkın.",
    tags: ["ML", "Deep Learning", "Teknofest", "PoC"],
    benefits: ["Teknofest AI kategorilerinde yarış", "Global AI hackathonlarına katıl", "Gerçek dünya AI uygulamaları", "Veri bilimi ve analitik deneyimi"],
    image: "/images/ai-dev.png",
    accentColor: "pink",
    link: "/yetenekler/ai-veri-bilimi",
  },
  {
    id: "iot-robotik",
    title: "IoT & Robotik",
    subtitle: "Hardware",
    description: "IoT ve robotik projeler.",
    expandedDescription: "Arduino, Raspberry Pi ve mikrodenetleyicilerle IoT sistemleri ve robotik projeler geliştirin.",
    tags: ["Arduino", "Raspberry Pi", "IoT", "Robotics"],
    benefits: ["Teknofest İHA ve robotik kategorileri", "Gerçek donanım projeleri", "Otonom sistem geliştirme", "Sensör ve aktuatör entegrasyonu"],
    image: "/images/game-dev.png",
    accentColor: "cyan",
    link: "/yetenekler/iot-robotik",
  },
  {
    id: "siber-guvenlik",
    title: "Siber Güvenlik",
    subtitle: "Security",
    description: "Siber güvenlik eğitimi ve CTF yarışmaları.",
    expandedDescription: "Etik hackleme, penetrasyon testleri ve güvenlik analizleri yapın.",
    tags: ["Ethical Hacking", "CTF", "Penetration", "Security"],
    benefits: ["Teknofest siber güvenlik kategorisi", "CTF yarışmalarına hazırlık", "Network ve sistem güvenliği", "Güvenlik açığı analizi"],
    image: "/images/web-dev.png",
    accentColor: "red",
    link: "/yetenekler/siber-guvenlik",
  },
  {
    id: "blockchain-web3",
    title: "Blockchain & Web3",
    subtitle: "Decentralized",
    description: "Blockchain ve Web3 teknolojileri.",
    expandedDescription: "Ethereum, Solana ve diğer blockchain platformlarında akıllı kontratlar ve DApp'ler geliştirin.",
    tags: ["Ethereum", "Solidity", "Web3", "DeFi"],
    benefits: ["Akıllı kontrat geliştirme", "DApp oluşturma", "Web3 hackathonları", "NFT ve DeFi projeleri"],
    image: "/images/ai-dev.png",
    accentColor: "amber",
    link: "/yetenekler/blockchain-web3",
  },
];

const defaultStats: StatItem[] = [
  { label: "Aktif Ekip Üyesi", value: "10+" },
  { label: "Tamamlanan Proje", value: "5+" },
  { label: "Yarışma Finali", value: "3" },
  { label: "Test Saati", value: "100+" },
];

const defaultCrews: CrewColumn[] = [
  {
    title: "Fikir Aşaması", color: "red", gradient: "from-red-500 to-orange-500", bgGlow: "bg-red-500/20",
    tasks: [
      { title: "Beyin Fırtınası", description: "Yeni proje fikirleri toplantılar ve Discord'da paylaşılıyor.", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80", members: 3, priority: "high" },
      { title: "Ekip Oluşturma", description: "İlgilenen herkes projeye katılabilir, deneyim şart değil!", members: 2, priority: "medium" },
    ],
  },
  {
    title: "Geliştirme", color: "yellow", gradient: "from-yellow-500 to-amber-500", bgGlow: "bg-yellow-500/20",
    tasks: [
      { title: "Birlikte Öğrenme", description: "Tecrübeli üyeler yeni başlayanlara mentorluk yapıyor.", members: 2, priority: "medium" },
      { title: "Yarışma Ekipleri", description: "Teknofest, hackathon ve yarışmalar için özel ekipler kuruluyor.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", members: 4, priority: "high" },
    ],
  },
  {
    title: "Test & Demo", color: "blue", gradient: "from-blue-500 to-cyan-500", bgGlow: "bg-blue-500/20",
    tasks: [
      { title: "Canlı Demolar", description: "Projeler gerçek kullanıcılara sunuluyor ve geri bildirim alınıyor.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80", members: 2, priority: "medium" },
      { title: "Haftalık Sprintler", description: "Esnek çalışma saatleri, herkes kendi hızında katkı sağlıyor.", members: 3, priority: "low" },
    ],
  },
  {
    title: "Yayınlandı", color: "green", gradient: "from-emerald-500 to-green-500", bgGlow: "bg-emerald-500/20",
    tasks: [
      { title: "Portfolyo & CV", description: "Tamamlanan projeler CV'ne eklenir, referans olarak kullanılır.", members: 4, priority: "high" },
      { title: "Sitede Listeleme", description: "Yaptığınız projeler sitemizde sergileniyor, herkes görebiliyor!", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80", members: 5, priority: "medium" },
    ],
  },
];

const defaultCategories: Record<string, SiteCategory> = {
  oyun: { name: "Oyun", emoji: "🎮", color: "purple" },
  tasarim: { name: "Tasarım", emoji: "🎨", color: "pink" },
  web: { name: "Web", emoji: "🌐", color: "blue" },
  elektrik: { name: "Elektrik", emoji: "⚡", color: "yellow" },
  ai: { name: "AI", emoji: "🤖", color: "cyan" },
  mobil: { name: "Mobil", emoji: "📱", color: "green" },
};

// Default projects imported from original
const defaultProjects: Project[] = [
  { slug: "nebula-drift", category: "Oyun", categorySlug: "oyun", name: "Nebula Drift", shortDescription: "Arcade tarzı uzay oyunu prototipi", longDescription: "Nebula Drift, klasik arcade oyunlarından ilham alan, modern grafik ve ses efektleriyle zenginleştirilmiş bir uzay temalı oyundur.", aim: "Retro arcade oyun deneyimini modern teknolojilerle birleştirmek.", stack: "Unity · C# · FMOD", technologies: [{ name: "Unity", purpose: "Oyun motoru" }, { name: "C#", purpose: "Oyun mekaniği" }, { name: "FMOD", purpose: "Ses efektleri" }], team: [{ name: "Ahmet Y.", role: "Lead Developer" }, { name: "Zeynep K.", role: "Game Designer" }], image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80", stats: "2.4K indirme", date: "2 hafta önce" },
  { slug: "brand-identity", category: "Tasarım", categorySlug: "tasarim", name: "Brand Identity System", shortDescription: "Kurumsal kimlik ve marka tasarımı projesi", longDescription: "Farklı sektörlerden müşteriler için kapsamlı kurumsal kimlik çalışmaları.", aim: "Şirketlerin marka değerini görsel kimlik yoluyla güçlendirmek.", stack: "Figma · Adobe CC · Illustrator", technologies: [{ name: "Figma", purpose: "Prototipleme" }, { name: "Illustrator", purpose: "Vektörel tasarım" }], team: [{ name: "Elif D.", role: "Creative Director" }, { name: "Can T.", role: "Brand Designer" }], image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80", stats: "8 şirket", date: "3 hafta önce" },
  { slug: "crewboard-dashboard", category: "Web", categorySlug: "web", name: "Crewboard Dashboard", shortDescription: "Ekip yönetim ve sprint takip paneli", longDescription: "Agile metodolojisiyle çalışan ekipler için kapsamlı proje yönetim platformu.", aim: "Ekiplerin proje süreçlerini verimli yönetmesini sağlamak.", stack: "Next.js · PostgreSQL · Prisma", technologies: [{ name: "Next.js", purpose: "Frontend framework" }, { name: "PostgreSQL", purpose: "Veritabanı" }], team: [{ name: "Burak M.", role: "Full Stack Developer" }, { name: "Ayşe P.", role: "Backend Developer" }], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", stats: "1.8K kullanıcı", date: "1 ay önce" },
  { slug: "iot-otomasyon", category: "Elektrik", categorySlug: "elektrik", name: "IoT Otomasyon Sistemi", shortDescription: "Akıllı ev ve endüstriyel otomasyon çözümü", longDescription: "IoT teknolojileri kullanılarak geliştirilen akıllı otomasyon sistemi.", aim: "IoT ve otomasyon teknolojilerini birleştirerek enerji verimliliği sağlamak.", stack: "Arduino · ESP32 · MQTT", technologies: [{ name: "ESP32", purpose: "Mikrodenetleyici" }, { name: "MQTT", purpose: "IoT iletişim" }], team: [{ name: "Cem R.", role: "Electronics Engineer" }, { name: "Deniz B.", role: "Embedded Developer" }], image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80", stats: "3 prototip", date: "2 hafta önce" },
  { slug: "teknofest-control", category: "AI", categorySlug: "ai", name: "Teknofest Control Hub", shortDescription: "Yarışma telemetri ve kontrol merkezi", longDescription: "Teknofest Control Hub; drone, rover ve otonom sistemlerden gelen telemetri verilerini izlemek için geliştirilen platform.", aim: "Yarışmalarda güvenilir kontrol altyapısı kurmak.", stack: "Python · FastAPI · React", technologies: [{ name: "FastAPI", purpose: "API servisleri" }, { name: "React", purpose: "Dashboard" }], team: [{ name: "Merve G.", role: "Data Engineer" }, { name: "Okan V.", role: "Frontend Developer" }], image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80", stats: "Finalist", date: "3 ay önce" },
  { slug: "fittrack-pro", category: "Mobil", categorySlug: "mobil", name: "FitTrack Pro", shortDescription: "Kişisel fitness ve beslenme takip uygulaması", longDescription: "FitTrack Pro, kullanıcıların egzersiz ve beslenme planlarını takip edebildiği mobil uygulama.", aim: "Kullanıcıların sağlıklı yaşam alışkanlıkları geliştirmesi.", stack: "React Native · Firebase", technologies: [{ name: "React Native", purpose: "Mobil geliştirme" }, { name: "Firebase", purpose: "Backend" }], team: [{ name: "Derya E.", role: "Mobile Developer" }], image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80", stats: "5.2K indirme", date: "1 hafta önce" },
  { slug: "ecommerce-platform", category: "Web", categorySlug: "web", name: "E-Commerce Platform", shortDescription: "Modern e-ticaret altyapısı", longDescription: "Ürün yönetimi, stok takibi ve ödeme entegrasyonu kapsayan platform.", aim: "KOBİ'ler için ölçeklenebilir e-ticaret altyapısı sunmak.", stack: "Next.js · Stripe · Prisma", technologies: [{ name: "Next.js", purpose: "SSR" }, { name: "Stripe", purpose: "Ödeme" }], team: [{ name: "Seda T.", role: "Full Stack Developer" }], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80", stats: "12K satış", date: "2 ay önce" },
  { slug: "ui-ux-portfolio", category: "Tasarım", categorySlug: "tasarim", name: "UI/UX Design Portfolio", shortDescription: "Arayüz tasarım çalışmaları", longDescription: "Farklı ürünler için hazırlanan arayüz çalışmaları ve prototipleri.", aim: "Kullanıcı odaklı tasarım projeleri üretmek.", stack: "Figma · Sketch · Protopie", technologies: [{ name: "Figma", purpose: "Prototipleme" }], team: [{ name: "İrem Z.", role: "UX Designer" }], image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&q=80", stats: "24 tasarım", date: "1 ay önce" },
  { slug: "pixel-quest", category: "Oyun", categorySlug: "oyun", name: "Pixel Quest", shortDescription: "Retro tarzı platform macera oyunu", longDescription: "Pixel Quest, nostaljik 2D platform oyunlarını modern mekanikler ile birleştiren oyun.", aim: "Retro oyun estetiğini güncel mekaniklerle birleştirmek.", stack: "Godot · GDScript", technologies: [{ name: "Godot", purpose: "Oyun motoru" }], team: [{ name: "Kaan F.", role: "Game Developer" }], image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80", stats: "890 indirme", date: "5 gün önce" },
  { slug: "gunes-paneli", category: "Elektrik", categorySlug: "elektrik", name: "Güneş Paneli Takip Sistemi", shortDescription: "Otomatik güneş paneli yönlendirme", longDescription: "Güneş ışığını maksimum seviyede yakalamak için otomatik panel yönlendirme sistemi.", aim: "Yenilenebilir enerji projelerinde verimliliği artırmak.", stack: "Arduino · Servo · Sensörler", technologies: [{ name: "Arduino", purpose: "Kontrol" }], team: [{ name: "Efe Y.", role: "Electronics Engineer" }], image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80", stats: "%32 verim", date: "1 ay önce" },
  { slug: "cyber-arena", category: "Oyun", categorySlug: "oyun", name: "Cyber Arena", shortDescription: "Multiplayer aksiyon savaş oyunu", longDescription: "Cyber Arena, hızlı reflekslere dayalı çok oyunculu aksiyon oyunu.", aim: "Çok oyunculu oyun geliştirme deneyimi kazanmak.", stack: "Unreal Engine · C++ · Photon", technologies: [{ name: "Unreal Engine", purpose: "Oyun motoru" }], team: [{ name: "Arda Ç.", role: "Gameplay Programmer" }], image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80", stats: "1.2K oyuncu", date: "3 hafta önce" },
  { slug: "motion-graphics", category: "Tasarım", categorySlug: "tasarim", name: "Motion Graphics Showreel", shortDescription: "Animasyon ve hareket tasarımı", longDescription: "Kısa animasyonlar, intro paketleri ve ürün videolarından oluşan showreel.", aim: "Hareketli grafik tasarımında güçlü portfolyo oluşturmak.", stack: "After Effects · Cinema 4D · Blender", technologies: [{ name: "After Effects", purpose: "Animasyon" }], team: [{ name: "Gizem P.", role: "Motion Designer" }], image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80", stats: "15 video", date: "2 hafta önce" },
];

// ==================== CONTEXT ====================

type SiteDataContextType = {
  data: SiteData;
  updateHero: (hero: HeroSettings) => void;
  updateCapabilities: (caps: Capability[]) => void;
  updateProjects: (projects: Project[]) => void;
  updateCategories: (cats: Record<string, SiteCategory>) => void;
  updateCrews: (crews: CrewColumn[]) => void;
  updateStats: (stats: StatItem[]) => void;
};

const SiteDataContext = createContext<SiteDataContextType | null>(null);

const STORAGE_KEY = "runteg_site_data";

function getInitialData(): SiteData {
  if (typeof window === "undefined") {
    return {
      hero: defaultHero,
      capabilities: defaultCapabilities,
      projects: defaultProjects,
      categories: defaultCategories,
      crews: defaultCrews,
      stats: defaultStats,
    };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return {
    hero: defaultHero,
    capabilities: defaultCapabilities,
    projects: defaultProjects,
    categories: defaultCategories,
    crews: defaultCrews,
    stats: defaultStats,
  };
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(getInitialData);
  const [mounted, setMounted] = useState(() => typeof window !== "undefined");

  useEffect(() => {
    if (!mounted) setMounted(true);
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, mounted]);

  const updateHero = (hero: HeroSettings) => setData((d) => ({ ...d, hero }));
  const updateCapabilities = (capabilities: Capability[]) => setData((d) => ({ ...d, capabilities }));
  const updateProjects = (projects: Project[]) => setData((d) => ({ ...d, projects }));
  const updateCategories = (categories: Record<string, SiteCategory>) => setData((d) => ({ ...d, categories }));
  const updateCrews = (crews: CrewColumn[]) => setData((d) => ({ ...d, crews }));
  const updateStats = (stats: StatItem[]) => setData((d) => ({ ...d, stats }));

  return (
    <SiteDataContext.Provider value={{ data, updateHero, updateCapabilities, updateProjects, updateCategories, updateCrews, updateStats }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error("useSiteData must be used within SiteDataProvider");
  return ctx;
}
