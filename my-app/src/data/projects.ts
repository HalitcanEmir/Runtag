export type ProjectTechnology = {
  name: string;
  purpose: string;
};

export type ProjectMember = {
  name: string;
  role: string;
  linkedin?: string;
};

export type Project = {
  slug: string;
  category: string;
  categorySlug: string;
  alsoInCategories?: string[];
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
  url?: string;
};

export const categories = {
  "web-siteleri": { name: "Web Siteleri", emoji: "🌐", color: "blue" },
  platformlarimiz: { name: "Platformlarımız", emoji: "🚀", color: "purple" },
  saglik: { name: "Sağlık", emoji: "🏥", color: "green" },
  "yapay-zeka": { name: "Yapay Zeka", emoji: "🤖", color: "cyan" },
};

export const projects: Project[] = [
  {
    slug: "ccproje",
    category: "Web Siteleri",
    categorySlug: "web-siteleri",
    name: "ccproje.com",
    shortDescription: "Cüneyt Çetinel Mühendislik kurumsal web sitesi",
    longDescription:
      "Cüneyt Çetinel Mühendislik için geliştirilmiş profesyonel kurumsal web sitesi. Modern arayüz tasarımı, hizmet modülleri, referans yönetimi ve teklif alma sistemi içerir. Responsive tasarım ve SEO optimizasyonu ile tüm cihazlarda kusursuz bir deneyim sunar.",
    aim: "Mühendislik firmasının dijital varlığını güçlendirmek, potansiyel müşterilere hizmetleri etkili şekilde tanıtmak ve online teklif alma sürecini otomatikleştirmek.",
    stack: "Next.js · Tailwind CSS · SEO",
    technologies: [
      { name: "Next.js", purpose: "SSR ve performanslı sayfa yükleme" },
      { name: "Tailwind CSS", purpose: "Modern ve responsive arayüz tasarımı" },
      { name: "SEO Optimizasyonu", purpose: "Arama motorlarında üst sıralarda yer alma" },
      { name: "Responsive Tasarım", purpose: "Tüm cihazlarda uyumlu görüntüleme" },
    ],
    team: [
      { name: "Halitcan Emir", role: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/halitcanemir/" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    stats: "Yayında",
    date: "2025",
    url: "https://ccproje.com/tr",
  },
  {
    slug: "runteg",
    category: "Web Siteleri",
    categorySlug: "web-siteleri",
    name: "runteg.com",
    shortDescription: "RuntEg Tech Studio dijital vitrin platformu",
    longDescription:
      "RuntEg Tech Studio'nun dijital vitrini. Projelerin kategorilere ayrıldığı, tasarım ve yazılım odaklı bir showcase platformu. Liquid Glass tasarım dili ile modern ve etkileyici bir kullanıcı deneyimi sunar. Animasyonlu geçişler ve kategori bazlı proje filtreleme sistemi içerir.",
    aim: "Tech studio'nun projelerini, yeteneklerini ve ekibini profesyonel bir şekilde sergilemek. Liquid Glass tasarım dili ile sektörde fark yaratmak.",
    stack: "Next.js · Framer Motion · Tailwind CSS",
    technologies: [
      { name: "Next.js", purpose: "Full-stack React framework" },
      { name: "Framer Motion", purpose: "Animasyonlu geçişler ve etkileşimler" },
      { name: "Tailwind CSS", purpose: "Liquid Glass tasarım sistemi" },
      { name: "TypeScript", purpose: "Tip güvenli geliştirme" },
    ],
    team: [
      { name: "Halitcan Emir", role: "Developer", linkedin: "https://www.linkedin.com/in/halitcanemir/" },
      { name: "Selçuk Demir", role: "Developer", linkedin: "https://www.linkedin.com/in/selçuk-demir-b339b938b/" },
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    stats: "Yayında",
    date: "2025",
    alsoInCategories: ["platformlarimiz"],
    url: "https://www.runteg.com",
  },
  {
    slug: "saglik-analiz-platformu",
    category: "Sağlık",
    categorySlug: "saglik",
    name: "AI Destekli Sağlık Analiz Platformu",
    shortDescription: "Semptom bazlı dinamik hastalık tahmin sistemi",
    longDescription:
      "Kullanıcının semptomlarına göre dinamik sorular sorarak olası hastalık tahmini yapan yapay zekâ destekli sistem. Sabit formlar yerine gerçek bir doktor gibi ilerleyen, semptom bazlı eleme yapan akıllı bir yapı içerir. 100'den fazla semptom veri yapısı, dinamik soru akışı, benzer hasta analiz sistemi ve olasılık bazlı hastalık tahmini ile sıradan bir CRUD projesinin çok ötesinde bir sistem.",
    aim: "Sağlık alanında yapay zekânın gerçek dünya uygulamasını geliştirmek. Kullanıcıların semptomlarını analiz ederek erken teşhis sürecine katkıda bulunmak ve sağlık hizmetlerine erişimi kolaylaştırmak.",
    stack: "Python · AI/ML · Web Arayüz",
    technologies: [
      { name: "Python", purpose: "Backend ve AI model geliştirme" },
      { name: "AI Model Entegrasyonu", purpose: "Semptom analizi ve hastalık tahmini" },
      { name: "Dinamik Soru Motoru", purpose: "Doktor benzeri eleme süreci" },
      { name: "Web Tabanlı Arayüz", purpose: "Kullanıcı dostu semptom giriş sistemi" },
    ],
    team: [
      { name: "Halitcan E.", role: "AI Developer & Backend" },
      { name: "Sağlık Ekibi", role: "Veri Yapısı & Test" },
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    stats: "100+ semptom",
    date: "2025",
  },
  {
    slug: "madeinyou-tarim",
    category: "Yapay Zeka",
    categorySlug: "yapay-zeka",
    name: "Tarım Projesi",
    shortDescription: "AI destekli akıllı tarım ve verim tahmin platformu",
    longDescription:
      "Tarım alanında veri analizi, verim tahmini ve karar destek sistemi geliştirmeyi hedefleyen yapay zekâ destekli platform. Toprak ve iklim verilerini analiz ederek ürün verim tahmini yapan, çiftçilere akıllı öneriler sunan kapsamlı bir sistem. Makine öğrenmesi modelleri ile tarımsal verimliliği artırmayı amaçlar.",
    aim: "Tarım sektöründe yapay zekâ kullanarak verimlilik artışı sağlamak. Çiftçilerin doğru zamanda doğru kararlar almasına yardımcı olan veri odaklı bir karar destek sistemi oluşturmak.",
    stack: "Python · TensorFlow · Data Analytics",
    technologies: [
      { name: "Python", purpose: "Veri işleme ve model geliştirme" },
      { name: "TensorFlow", purpose: "Verim tahmin modeli eğitimi" },
      { name: "Pandas & NumPy", purpose: "Toprak ve iklim verisi analizi" },
      { name: "Scikit-learn", purpose: "Öneri motoru ve sınıflandırma" },
    ],
    team: [
      { name: "Halitcan E.", role: "AI/ML Engineer" },
      { name: "Veri Ekibi", role: "Data Collection & Analysis" },
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80",
    stats: "AI Powered",
    date: "2025",
    alsoInCategories: ["platformlarimiz"],
  },
  {
    slug: "restaurant-ai",
    category: "Yapay Zeka",
    categorySlug: "yapay-zeka",
    name: "Restaurant AI Öneri Sistemi",
    shortDescription: "Kişiselleştirilmiş restoran ve yemek öneri platformu",
    longDescription:
      "Kullanıcının geçmiş tercihlerine ve damak zevkine göre restoran ve yemek önerileri sunan yapay zekâ sistemi. Kullanıcı davranış analizi yaparak kişiselleştirilmiş öneri algoritması çalıştırır. Tercih öğrenme sistemi sayesinde her kullanımda daha doğru öneriler sunar.",
    aim: "Yemek ve restoran seçim sürecini yapay zekâ ile kişiselleştirmek. Kullanıcı deneyimini sürekli iyileştiren, öğrenen bir öneri motoru geliştirmek.",
    stack: "Python · Recommendation Engine · NLP",
    technologies: [
      { name: "Python", purpose: "Backend ve model geliştirme" },
      { name: "Collaborative Filtering", purpose: "Kullanıcı benzerliği analizi" },
      { name: "NLP", purpose: "Yorum ve tercih analizi" },
      { name: "Content-Based Filtering", purpose: "Yemek özellik eşleştirme" },
    ],
    team: [
      { name: "Halitcan E.", role: "AI Developer" },
      { name: "Backend Ekibi", role: "API & Veri Yönetimi" },
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    stats: "AI Powered",
    date: "2025",
    alsoInCategories: ["platformlarimiz"],
  },
  {
    slug: "madeinyouu",
    category: "Yapay Zeka",
    categorySlug: "yapay-zeka",
    name: "MadeInYouu",
    shortDescription: "AI destekli veri analizi ve karar destek platformu",
    longDescription:
      "MadeInYouu, yapay zekâ ve veri analitiği teknolojileriyle geliştirilen bir platform. Sektörel çözümler, analiz araçları ve akıllı karar destek sistemleri sunar. Tarım Projesi ile aynı ekosistemin parçası olmakla birlikte, tasarım ve kullanım alanı açısından farklı bir projedir.",
    aim: "Veri odaklı karar alma süreçlerini yapay zekâ ile güçlendirmek. Kullanıcılara özelleştirilmiş analitik çözümler sunmak.",
    stack: "Python · AI/ML · Web",
    technologies: [
      { name: "Python", purpose: "Backend ve model geliştirme" },
      { name: "AI/ML", purpose: "Veri analizi ve tahminleme" },
      { name: "Web Arayüz", purpose: "Kullanıcı dostu dashboard" },
    ],
    team: [
      { name: "Halitcan E.", role: "Lead Developer" },
      { name: "AI Ekibi", role: "Model & Veri" },
    ],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    stats: "AI Powered",
    date: "2025",
    alsoInCategories: ["platformlarimiz"],
  },
];
