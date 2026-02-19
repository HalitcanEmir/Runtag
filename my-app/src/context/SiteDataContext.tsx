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
  title: "Runteg",
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
  "web-siteleri": { name: "Web Siteleri", emoji: "🌐", color: "blue" },
  saglik: { name: "Sağlık", emoji: "🏥", color: "green" },
  "yapay-zeka": { name: "Yapay Zeka", emoji: "🤖", color: "cyan" },
};

const defaultProjects: Project[] = [
  {
    slug: "ccproje", category: "Web Siteleri", categorySlug: "web-siteleri", name: "ccproje.com",
    shortDescription: "Cüneyt Çetinel Mühendislik kurumsal web sitesi",
    longDescription: "Cüneyt Çetinel Mühendislik için geliştirilmiş profesyonel kurumsal web sitesi. Modern arayüz tasarımı, hizmet modülleri, referans yönetimi ve teklif alma sistemi içerir. Responsive tasarım ve SEO optimizasyonu ile tüm cihazlarda kusursuz bir deneyim sunar.",
    aim: "Mühendislik firmasının dijital varlığını güçlendirmek, potansiyel müşterilere hizmetleri etkili şekilde tanıtmak ve online teklif alma sürecini otomatikleştirmek.",
    stack: "Next.js · Tailwind CSS · SEO",
    technologies: [{ name: "Next.js", purpose: "SSR ve performanslı sayfa yükleme" }, { name: "Tailwind CSS", purpose: "Modern ve responsive arayüz tasarımı" }, { name: "SEO Optimizasyonu", purpose: "Arama motorlarında üst sıralarda yer alma" }, { name: "Responsive Tasarım", purpose: "Tüm cihazlarda uyumlu görüntüleme" }],
    team: [{ name: "Halitcan E.", role: "Full Stack Developer" }, { name: "Tasarım Ekibi", role: "UI/UX Design" }],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", stats: "Yayında", date: "2025",
  },
  {
    slug: "runteg", category: "Web Siteleri", categorySlug: "web-siteleri", name: "runteg.com",
    shortDescription: "RuntEg Tech Studio dijital vitrin platformu",
    longDescription: "RuntEg Tech Studio'nun dijital vitrini. Projelerin kategorilere ayrıldığı, tasarım ve yazılım odaklı bir showcase platformu. Liquid Glass tasarım dili ile modern ve etkileyici bir kullanıcı deneyimi sunar.",
    aim: "Tech studio'nun projelerini, yeteneklerini ve ekibini profesyonel bir şekilde sergilemek. Liquid Glass tasarım dili ile sektörde fark yaratmak.",
    stack: "Next.js · Framer Motion · Tailwind CSS",
    technologies: [{ name: "Next.js", purpose: "Full-stack React framework" }, { name: "Framer Motion", purpose: "Animasyonlu geçişler ve etkileşimler" }, { name: "Tailwind CSS", purpose: "Liquid Glass tasarım sistemi" }, { name: "TypeScript", purpose: "Tip güvenli geliştirme" }],
    team: [{ name: "Halitcan E.", role: "Lead Developer" }, { name: "Tasarım Ekibi", role: "UI/UX & Liquid Glass Design" }],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80", stats: "Yayında", date: "2025",
  },
  {
    slug: "saglik-analiz-platformu", category: "Sağlık", categorySlug: "saglik", name: "AI Destekli Sağlık Analiz Platformu",
    shortDescription: "Semptom bazlı dinamik hastalık tahmin sistemi",
    longDescription: "Kullanıcının semptomlarına göre dinamik sorular sorarak olası hastalık tahmini yapan yapay zekâ destekli sistem. Sabit formlar yerine gerçek bir doktor gibi ilerleyen, semptom bazlı eleme yapan akıllı bir yapı içerir. 100'den fazla semptom veri yapısı, dinamik soru akışı, benzer hasta analiz sistemi ve olasılık bazlı hastalık tahmini ile sıradan bir CRUD projesinin çok ötesinde bir sistem.",
    aim: "Sağlık alanında yapay zekânın gerçek dünya uygulamasını geliştirmek. Kullanıcıların semptomlarını analiz ederek erken teşhis sürecine katkıda bulunmak ve sağlık hizmetlerine erişimi kolaylaştırmak.",
    stack: "Python · AI/ML · Web Arayüz",
    technologies: [{ name: "Python", purpose: "Backend ve AI model geliştirme" }, { name: "AI Model Entegrasyonu", purpose: "Semptom analizi ve hastalık tahmini" }, { name: "Dinamik Soru Motoru", purpose: "Doktor benzeri eleme süreci" }, { name: "Web Tabanlı Arayüz", purpose: "Kullanıcı dostu semptom giriş sistemi" }],
    team: [{ name: "Halitcan E.", role: "AI Developer & Backend" }, { name: "Sağlık Ekibi", role: "Veri Yapısı & Test" }],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80", stats: "100+ semptom", date: "2025",
  },
  {
    slug: "madeinyou-tarim", category: "Yapay Zeka", categorySlug: "yapay-zeka", name: "MadeInYou Tarım Projesi",
    shortDescription: "AI destekli akıllı tarım ve verim tahmin platformu",
    longDescription: "Tarım alanında veri analizi, verim tahmini ve karar destek sistemi geliştirmeyi hedefleyen yapay zekâ destekli platform. Toprak ve iklim verilerini analiz ederek ürün verim tahmini yapan, çiftçilere akıllı öneriler sunan kapsamlı bir sistem.",
    aim: "Tarım sektöründe yapay zekâ kullanarak verimlilik artışı sağlamak. Çiftçilerin doğru zamanda doğru kararlar almasına yardımcı olan veri odaklı bir karar destek sistemi oluşturmak.",
    stack: "Python · TensorFlow · Data Analytics",
    technologies: [{ name: "Python", purpose: "Veri işleme ve model geliştirme" }, { name: "TensorFlow", purpose: "Verim tahmin modeli eğitimi" }, { name: "Pandas & NumPy", purpose: "Toprak ve iklim verisi analizi" }, { name: "Scikit-learn", purpose: "Öneri motoru ve sınıflandırma" }],
    team: [{ name: "Halitcan E.", role: "AI/ML Engineer" }, { name: "Veri Ekibi", role: "Data Collection & Analysis" }],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80", stats: "AI Powered", date: "2025",
  },
  {
    slug: "restaurant-ai", category: "Yapay Zeka", categorySlug: "yapay-zeka", name: "Restaurant AI Öneri Sistemi",
    shortDescription: "Kişiselleştirilmiş restoran ve yemek öneri platformu",
    longDescription: "Kullanıcının geçmiş tercihlerine ve damak zevkine göre restoran ve yemek önerileri sunan yapay zekâ sistemi. Kullanıcı davranış analizi yaparak kişiselleştirilmiş öneri algoritması çalıştırır.",
    aim: "Yemek ve restoran seçim sürecini yapay zekâ ile kişiselleştirmek. Kullanıcı deneyimini sürekli iyileştiren, öğrenen bir öneri motoru geliştirmek.",
    stack: "Python · Recommendation Engine · NLP",
    technologies: [{ name: "Python", purpose: "Backend ve model geliştirme" }, { name: "Collaborative Filtering", purpose: "Kullanıcı benzerliği analizi" }, { name: "NLP", purpose: "Yorum ve tercih analizi" }, { name: "Content-Based Filtering", purpose: "Yemek özellik eşleştirme" }],
    team: [{ name: "Halitcan E.", role: "AI Developer" }, { name: "Backend Ekibi", role: "API & Veri Yönetimi" }],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", stats: "AI Powered", date: "2025",
  },
  {
    slug: "madeinyouu", category: "Yapay Zeka", categorySlug: "yapay-zeka", name: "MadeInYouu",
    shortDescription: "AI destekli veri analizi ve karar destek platformu",
    longDescription: "MadeInYouu, yapay zekâ ve veri analitiği teknolojileriyle geliştirilen bir platform. Sektörel çözümler, analiz araçları ve akıllı karar destek sistemleri sunar. MadeInYou Tarım Projesi ile aynı ekosistemin parçası olmakla birlikte, tasarım ve kullanım alanı açısından farklı bir projedir.",
    aim: "Veri odaklı karar alma süreçlerini yapay zekâ ile güçlendirmek. Kullanıcılara özelleştirilmiş analitik çözümler sunmak.",
    stack: "Python · AI/ML · Web",
    technologies: [{ name: "Python", purpose: "Backend ve model geliştirme" }, { name: "AI/ML", purpose: "Veri analizi ve tahminleme" }, { name: "Web Arayüz", purpose: "Kullanıcı dostu dashboard" }],
    team: [{ name: "Halitcan E.", role: "Lead Developer" }, { name: "AI Ekibi", role: "Model & Veri" }],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80", stats: "AI Powered", date: "2025",
  },
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

const STORAGE_KEY = "runteg_site_data_v3";

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
