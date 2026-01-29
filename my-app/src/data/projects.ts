export type ProjectTechnology = {
  name: string;
  purpose: string;
};

export type ProjectMember = {
  name: string;
  role: string;
};

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

export const categories = {
  oyun: { name: "Oyun", emoji: "🎮", color: "purple" },
  tasarim: { name: "Tasarım", emoji: "🎨", color: "pink" },
  web: { name: "Web", emoji: "🌐", color: "blue" },
  elektrik: { name: "Elektrik", emoji: "⚡", color: "yellow" },
  ai: { name: "AI", emoji: "🤖", color: "cyan" },
  mobil: { name: "Mobil", emoji: "📱", color: "green" },
};

export const projects: Project[] = [
  {
    slug: "nebula-drift",
    category: "Oyun",
    categorySlug: "oyun",
    name: "Nebula Drift",
    shortDescription: "Arcade tarzı uzay oyunu prototipi",
    longDescription:
      "Nebula Drift, klasik arcade oyunlarından ilham alan, modern grafik ve ses efektleriyle zenginleştirilmiş bir uzay temalı oyundur. Oyuncular, düşman gemilerinden kaçınarak ve bonus toplamalar yaparak en yüksek skoru hedeflerler. Oyun, dinamik zorluk sistemi ile her oyuncuya uygun bir deneyim sunar.",
    aim: "Retro arcade oyun deneyimini modern teknolojilerle birleştirerek, hem nostaljik hem de yeni nesil oyunculara hitap eden bir platform oluşturmak. Ayrıca ekip üyelerimizin Unity ve C# konusunda pratik yapmasını sağlamak.",
    stack: "Unity · C# · FMOD",
    technologies: [
      { name: "Unity", purpose: "Oyun motoru ve geliştirme ortamı" },
      { name: "C#", purpose: "Oyun mekaniği ve kodlama" },
      { name: "FMOD", purpose: "Ses efektleri ve müzik yönetimi" },
      { name: "Git", purpose: "Versiyon kontrolü ve ekip çalışması" },
    ],
    team: [
      { name: "Ahmet Y.", role: "Lead Developer" },
      { name: "Zeynep K.", role: "Game Designer" },
      { name: "Mehmet S.", role: "Sound Designer" },
    ],
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80",
    stats: "2.4K indirme",
    date: "2 hafta önce",
  },
  {
    slug: "brand-identity",
    category: "Tasarım",
    categorySlug: "tasarim",
    name: "Brand Identity System",
    shortDescription: "Kurumsal kimlik ve marka tasarımı projesi",
    longDescription:
      "Farklı sektörlerden müşteriler için kapsamlı kurumsal kimlik çalışmaları. Logo tasarımından başlayarak, renk paleti, tipografi, kartvizit, antetli kağıt ve dijital medya materyallerini içeren tam entegre marka kimliği sistemleri geliştirdik.",
    aim: "Şirketlerin marka değerini görsel kimlik yoluyla güçlendirmek ve tutarlı bir marka deneyimi sunmak. Tasarım ekibimizin profesyonel iş deneyimi kazanmasını sağlamak.",
    stack: "Figma · Adobe CC · Illustrator",
    technologies: [
      { name: "Figma", purpose: "İş birliği ve prototipleme" },
      { name: "Adobe Illustrator", purpose: "Vektörel logo ve grafik tasarımı" },
      { name: "Adobe Photoshop", purpose: "Görsel düzenleme ve mockup" },
      { name: "Adobe InDesign", purpose: "Basılı materyal tasarımı" },
    ],
    team: [
      { name: "Elif D.", role: "Creative Director" },
      { name: "Can T.", role: "Brand Designer" },
      { name: "Selin A.", role: "Visual Designer" },
    ],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    stats: "8 şirket",
    date: "3 hafta önce",
  },
  {
    slug: "crewboard-dashboard",
    category: "Web",
    categorySlug: "web",
    name: "Crewboard Dashboard",
    shortDescription: "Ekip yönetim ve sprint takip paneli",
    longDescription:
      "Agile metodolojisiyle çalışan ekipler için tasarlanmış kapsamlı bir proje yönetim platformu. Görev atama, sprint planlama, zaman takibi ve raporlama özellikleriyle ekiplerin verimliliğini artırır. Real-time güncellemeler ve bildirimler sayesinde herkes projenin son durumundan haberdar olur.",
    aim: "Ekiplerin proje süreçlerini daha verimli yönetmesini sağlamak ve şeffaf iletişim ortamı oluşturmak. Modern web teknolojilerinde deneyim kazanmak.",
    stack: "Next.js · PostgreSQL · Prisma",
    technologies: [
      { name: "Next.js", purpose: "Frontend framework ve SSR" },
      { name: "PostgreSQL", purpose: "Veritabanı yönetimi" },
      { name: "Prisma", purpose: "ORM ve veritabanı sorgulama" },
      { name: "TailwindCSS", purpose: "UI tasarımı" },
      { name: "NextAuth", purpose: "Kimlik doğrulama" },
    ],
    team: [
      { name: "Burak M.", role: "Full Stack Developer" },
      { name: "Ayşe P.", role: "Backend Developer" },
      { name: "Emre L.", role: "UI/UX Designer" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    stats: "1.8K kullanıcı",
    date: "1 ay önce",
  },
  {
    slug: "iot-otomasyon",
    category: "Elektrik",
    categorySlug: "elektrik",
    name: "IoT Otomasyon Sistemi",
    shortDescription: "Akıllı ev ve endüstriyel otomasyon çözümü",
    longDescription:
      "IoT teknolojileri kullanılarak geliştirilen akıllı otomasyon sistemi. Sensörlerden toplanan veriler ile otomatik karar alma mekanizması içerir. Ev ve endüstriyel uygulamalarda enerji tasarrufu ve güvenlik sağlar. Mobil uygulama üzerinden uzaktan kontrol imkanı sunar.",
    aim: "IoT ve otomasyon teknolojilerini birleştirerek enerji verimliliği sağlamak ve kullanıcılara akıllı yaşam alanları sunmak. Gömülü sistem geliştirme konusunda pratik yapmak.",
    stack: "Arduino · ESP32 · MQTT",
    technologies: [
      { name: "ESP32", purpose: "WiFi ve Bluetooth özellikli mikrodenetleyici" },
      { name: "Arduino IDE", purpose: "Programlama ve geliştirme ortamı" },
      { name: "MQTT Protocol", purpose: "IoT cihazlar arası iletişim" },
      { name: "Blynk", purpose: "Mobil uygulama arayüzü" },
      { name: "Node-RED", purpose: "Otomasyon akış tasarımı" },
    ],
    team: [
      { name: "Cem R.", role: "Electronics Engineer" },
      { name: "Deniz B.", role: "Embedded Developer" },
      { name: "Fatma N.", role: "IoT Specialist" },
    ],
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1200&q=80",
    stats: "3 prototip",
    date: "2 hafta önce",
  },
  {
    slug: "teknofest-control",
    category: "AI",
    categorySlug: "ai",
    name: "Teknofest Control Hub",
    shortDescription: "Yarışma telemetri ve kontrol merkezi",
    longDescription:
      "Teknofest Control Hub; drone, rover ve otonom sistemlerden gelen telemetri verilerini gerçek zamanlı izlemek, analiz etmek ve kontrol etmek için geliştirilen merkezi bir platformdur. Sistem, farklı cihazlardan gelen verileri tek panelde birleştirir ve kritik durumlarda hızlı müdahale sağlar.",
    aim: "Yarışma süreçlerinde güvenilir, hızlı ve ölçeklenebilir bir kontrol altyapısı kurmak; takımın veri işleme ve dashboard geliştirme deneyimini artırmak.",
    stack: "Python · FastAPI · React",
    technologies: [
      { name: "FastAPI", purpose: "API servisleri ve hızlı backend" },
      { name: "Python", purpose: "Veri işleme ve servis mantığı" },
      { name: "React", purpose: "Canlı dashboard arayüzü" },
      { name: "WebSocket", purpose: "Gerçek zamanlı veri akışı" },
    ],
    team: [
      { name: "Merve G.", role: "Data Engineer" },
      { name: "Okan V.", role: "Frontend Developer" },
      { name: "Sude I.", role: "Backend Developer" },
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    stats: "Finalist",
    date: "3 ay önce",
  },
  {
    slug: "fittrack-pro",
    category: "Mobil",
    categorySlug: "mobil",
    name: "FitTrack Pro",
    shortDescription: "Kişisel fitness ve beslenme takip uygulaması",
    longDescription:
      "FitTrack Pro, kullanıcıların egzersiz, su tüketimi ve beslenme planlarını takip edebildiği mobil bir uygulamadır. Anlık bildirimler, kişiselleştirilmiş planlar ve haftalık performans raporlarıyla sağlıklı yaşam alışkanlıklarını destekler.",
    aim: "Kullanıcıların düzenli alışkanlıklar geliştirmesini sağlamak ve mobil uygulama geliştirme süreçlerinde ekip becerilerini artırmak.",
    stack: "React Native · Firebase",
    technologies: [
      { name: "React Native", purpose: "Çapraz platform mobil geliştirme" },
      { name: "Firebase", purpose: "Kimlik doğrulama ve veri saklama" },
      { name: "Expo", purpose: "Hızlı geliştirme ve dağıtım" },
    ],
    team: [
      { name: "Derya E.", role: "Mobile Developer" },
      { name: "Kerem U.", role: "Product Designer" },
    ],
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&q=80",
    stats: "5.2K indirme",
    date: "1 hafta önce",
  },
  {
    slug: "ecommerce-platform",
    category: "Web",
    categorySlug: "web",
    name: "E-Commerce Platform",
    shortDescription: "Modern e-ticaret altyapısı ve yönetim paneli",
    longDescription:
      "Ürün yönetimi, stok takibi, ödeme entegrasyonu ve sipariş yönetimi gibi temel e-ticaret ihtiyaçlarını kapsayan bir platform. Yönetim paneli üzerinden kampanya ve indirim yönetimi yapılabilir.",
    aim: "KOBİ'ler için hızlı devreye alınabilen, güvenli ve ölçeklenebilir bir e-ticaret altyapısı sunmak.",
    stack: "Next.js · Stripe · Prisma",
    technologies: [
      { name: "Next.js", purpose: "SSR ve performans" },
      { name: "Stripe", purpose: "Ödeme altyapısı" },
      { name: "Prisma", purpose: "Veri modeli ve ORM" },
    ],
    team: [
      { name: "Seda T.", role: "Full Stack Developer" },
      { name: "Gökhan H.", role: "Backend Developer" },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    stats: "12K satış",
    date: "2 ay önce",
  },
  {
    slug: "ui-ux-portfolio",
    category: "Tasarım",
    categorySlug: "tasarim",
    name: "UI/UX Design Portfolio",
    shortDescription: "Mobil ve web arayüz tasarım çalışmaları",
    longDescription:
      "Farklı ürünler için hazırlanan arayüz çalışmaları, kullanıcı akışları ve prototipleri içeren kapsamlı bir portfolyo. Kullanıcı testlerinden alınan geri bildirimlerle sürekli iyileştirmeler yapıldı.",
    aim: "Kullanıcı odaklı tasarım yaklaşımını benimseyen örnek projeler üretmek ve ekip üyelerinin UI/UX becerilerini geliştirmek.",
    stack: "Figma · Sketch · Protopie",
    technologies: [
      { name: "Figma", purpose: "Wireframe ve prototipleme" },
      { name: "Protopie", purpose: "Etkileşimli prototip" },
      { name: "Miro", purpose: "Kullanıcı akışları ve workshop" },
    ],
    team: [
      { name: "İrem Z.", role: "UX Designer" },
      { name: "Barış O.", role: "UI Designer" },
    ],
    image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&q=80",
    stats: "24 tasarım",
    date: "1 ay önce",
  },
  {
    slug: "pixel-quest",
    category: "Oyun",
    categorySlug: "oyun",
    name: "Pixel Quest",
    shortDescription: "Retro tarzı platform macera oyunu",
    longDescription:
      "Pixel Quest, nostaljik 2D platform oyunlarını modern seviyeler ve mekanikler ile birleştiren bir macera oyunudur. Oyuncular, farklı biyomlarda ilerleyerek ödüller ve gizli bölümler keşfeder.",
    aim: "Retro oyun estetiğini güncel oyun mekanikleriyle birleştirmek ve 2D oyun geliştirme pratiği kazanmak.",
    stack: "Godot · GDScript",
    technologies: [
      { name: "Godot", purpose: "Oyun motoru" },
      { name: "GDScript", purpose: "Oyun mekaniği" },
      { name: "Aseprite", purpose: "Pixel art tasarım" },
    ],
    team: [
      { name: "Kaan F.", role: "Game Developer" },
      { name: "Tuğçe R.", role: "Artist" },
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
    stats: "890 indirme",
    date: "5 gün önce",
  },
  {
    slug: "gunes-paneli",
    category: "Elektrik",
    categorySlug: "elektrik",
    name: "Güneş Paneli Takip Sistemi",
    shortDescription: "Otomatik güneş paneli yönlendirme sistemi",
    longDescription:
      "Güneş ışığını maksimum seviyede yakalamak için panel açısını otomatik ayarlayan bir takip sistemi. Sensör verilerine göre motorları yönlendiren kontrol algoritması ile verim artırılır.",
    aim: "Yenilenebilir enerji projelerinde verimliliği artırmak ve gömülü sistem kontrol algoritmaları geliştirmek.",
    stack: "Arduino · Servo · Sensörler",
    technologies: [
      { name: "Arduino", purpose: "Kontrol ve sensör verisi işleme" },
      { name: "LDR Sensör", purpose: "Işık yoğunluğu ölçümü" },
      { name: "Servo Motor", purpose: "Panel yönlendirme" },
    ],
    team: [
      { name: "Efe Y.", role: "Electronics Engineer" },
      { name: "Naz K.", role: "Embedded Developer" },
    ],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    stats: "%32 verim",
    date: "1 ay önce",
  },
  {
    slug: "cyber-arena",
    category: "Oyun",
    categorySlug: "oyun",
    name: "Cyber Arena",
    shortDescription: "Multiplayer aksiyon savaş oyunu",
    longDescription:
      "Cyber Arena, hızlı reflekslere dayalı çok oyunculu bir aksiyon oyunudur. Takım tabanlı maçlar ve dinamik harita yapısıyla rekabetçi bir deneyim sunar.",
    aim: "Çok oyunculu oyun ağ senaryolarında deneyim kazanmak ve rekabetçi oyun tasarımı yapmak.",
    stack: "Unreal Engine · C++ · Photon",
    technologies: [
      { name: "Unreal Engine", purpose: "Oyun motoru ve grafik" },
      { name: "C++", purpose: "Oyun mantığı" },
      { name: "Photon", purpose: "Multiplayer altyapı" },
    ],
    team: [
      { name: "Arda Ç.", role: "Gameplay Programmer" },
      { name: "Melis J.", role: "Level Designer" },
    ],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1200&q=80",
    stats: "1.2K oyuncu",
    date: "3 hafta önce",
  },
  {
    slug: "motion-graphics",
    category: "Tasarım",
    categorySlug: "tasarim",
    name: "Motion Graphics Showreel",
    shortDescription: "Animasyon ve hareket tasarımı çalışmaları",
    longDescription:
      "Farklı markalar için hazırlanan kısa animasyonlar, intro paketleri ve ürün videolarından oluşan bir showreel. Renk, tipografi ve hareket prensipleri öne çıkarıldı.",
    aim: "Hareketli grafik tasarımında güçlü bir portfolyo oluşturmak ve ekip becerilerini geliştirmek.",
    stack: "After Effects · Cinema 4D · Blender",
    technologies: [
      { name: "After Effects", purpose: "Animasyon ve compositing" },
      { name: "Cinema 4D", purpose: "3D sahne ve modelleme" },
      { name: "Blender", purpose: "Render ve animasyon" },
    ],
    team: [
      { name: "Gizem P.", role: "Motion Designer" },
      { name: "Hakan S.", role: "3D Artist" },
    ],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
    stats: "15 video",
    date: "2 hafta önce",
  },
];
