import heroIllustration from "@/assets/images/showcase_hero_isometric_1788548964350.jpg";
import gameBeyondHills from "@/assets/images/game_beyond_hills_1788548980744.jpg";
import gameCyberHeist from "@/assets/images/game_cyber_heist_1788548996575.jpg";
import gameSkybound from "@/assets/images/game_skybound_1788549010053.jpg";
import gameFragmentsTime from "@/assets/images/game_fragments_time_1788549026107.jpg";
import gameRogueAssemble from "@/assets/images/game_rogue_assemble_1788549042574.jpg";
import gameAstralCollapse from "@/assets/images/game_astral_collapse_1788549059570.jpg";
import gameDeepBlue from "@/assets/images/game_deep_blue_1788549074060.jpg";
import gamePixelGuardians from "@/assets/images/game_pixel_guardians_1788549091195.jpg";

import eventAnatoliaJam from "@/assets/images/event_anatolia_jam_1788549107894.jpg";
import eventUnityJam from "@/assets/images/event_unity_jam_1788549144680.jpg";
import eventIzmirShowcase from "@/assets/images/event_izmir_showcase_1788549161031.jpg";
import eventGlobalJam from "@/assets/images/event_global_jam_1788549176358.jpg";

export { heroIllustration };

export interface ShowcaseGame {
  id: string;
  title: string;
  image: string;
  platform: "PC" | "Web" | "Mobil" | "Konsol";
  genre: "Macera" | "Aksiyon" | "Bulmaca" | "Strateji" | "Simülasyon" | "Platform";
  year: number;
  views: string;
  numericViews: number;
  rating: number;
  category: "Game Jam" | "Yarışma" | "Atölye" | "Topluluk Projesi" | "Eğitim Projesi";
  event: string;
  developer: string;
  school: string;
  description: string;
  engine: string;
  demoUrl?: string;
}

export interface ShowcaseEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  isOnline: boolean;
  image: string;
  link: string;
}

export const SHOWCASE_STATS = [
  { value: "245", label: "Oyun", key: "games" },
  { value: "102", label: "Yarışma", key: "competitions" },
  { value: "18K+", label: "Oyuncu", key: "players" },
  { value: "27", label: "Ülke", key: "countries" },
];

export const PRIMARY_GAMES: ShowcaseGame[] = [
  {
    id: "beyond-the-hills",
    title: "Beyond the Hills",
    image: gameBeyondHills,
    platform: "PC",
    genre: "Macera",
    year: 2023,
    views: "12.4K",
    numericViews: 12400,
    rating: 4.8,
    category: "Game Jam",
    event: "Anatolia Game Jam",
    developer: "Kuzey Stüdyosu",
    school: "Ankara Fen Lisesi",
    description:
      "Sisli dağların derinliklerindeki unutulmuş tapınakları ve antik sırları keşfeden bir gezginin atmosferik yolculuğu.",
    engine: "Unity 3D",
  },
  {
    id: "cyber-heist",
    title: "Cyber Heist",
    image: gameCyberHeist,
    platform: "PC",
    genre: "Aksiyon",
    year: 2024,
    views: "9.8K",
    numericViews: 9800,
    rating: 4.7,
    category: "Yarışma",
    event: "LOGD Yıllık Geliştirici Ligi",
    developer: "Neon Pulse",
    school: "Kabataş Erkek Lisesi",
    description:
      "Neon ışıklı fütüristik metropolde mega şirketlerin veri sunucularına sızan gizli bir hacker ekibinin aksiyon dolu soygun macerası.",
    engine: "Unreal Engine 5",
  },
  {
    id: "skybound",
    title: "Skybound",
    image: gameSkybound,
    platform: "PC",
    genre: "Macera",
    year: 2024,
    views: "7.1K",
    numericViews: 7100,
    rating: 4.5,
    category: "Topluluk Projesi",
    event: "Bahar Topluluk Atölyesi",
    developer: "Bulut Avcıları",
    school: "İzmir Fen Lisesi",
    description:
      "Gökyüzünde süzülen yüzen adalar arasında kanca mekanikleri ve rüzgar akımlarıyla gezinen stilize 3D macera platform oyunu.",
    engine: "Godot Engine 4",
  },
  {
    id: "fragments-of-time",
    title: "Fragments of Time",
    image: gameFragmentsTime,
    platform: "PC",
    genre: "Bulmaca",
    year: 2024,
    views: "6.2K",
    numericViews: 6200,
    rating: 4.6,
    category: "Game Jam",
    event: "Global Game Jam 2024",
    developer: "Chrono Studios",
    school: "Galatasaray Lisesi",
    description:
      "Zaman portalları yaratarak fizik kanunlarını büktüğünüz, geçmiş ve gelecek arasında mekansal mantık bulmacaları sunduğumuz özgün bir oyun.",
    engine: "Unity 3D",
  },
  {
    id: "rogue-assemble",
    title: "Rogue Assemble",
    image: gameRogueAssemble,
    platform: "PC",
    genre: "Aksiyon",
    year: 2024,
    views: "5.4K",
    numericViews: 5400,
    rating: 4.6,
    category: "Atölye",
    event: "Kış Kodlama Kampı",
    developer: "DungeonCrafters",
    school: "Kadıköy Anadolu Lisesi",
    description:
      "Prosedürel zindan odalarında dinamik silah kombinasyonları ve boss dövüşleriyle ilerlenen retro pikselli roguelike aksiyon deneyimi.",
    engine: "Unity 2D",
  },
  {
    id: "astral-collapse",
    title: "Astral Collapse",
    image: gameAstralCollapse,
    platform: "PC",
    genre: "Strateji",
    year: 2023,
    views: "8.2K",
    numericViews: 8200,
    rating: 4.6,
    category: "Yarışma",
    event: "Uzay Oyunları Maratonu",
    developer: "Nova Games",
    school: "İstanbul Atatürk Fen Lisesi",
    description:
      "Çökmekte olan yıldız sisteminde filonuzu taktiksel olarak yönetip koloninizi tahliye etmeye çalıştığınız gerçek zamanlı uzay stratejisi.",
    engine: "Unreal Engine 5",
  },
  {
    id: "deep-blue",
    title: "Deep Blue",
    image: gameDeepBlue,
    platform: "PC",
    genre: "Simülasyon",
    year: 2024,
    views: "5.0K",
    numericViews: 5000,
    rating: 4.4,
    category: "Topluluk Projesi",
    event: "Yaz Oyun Geliştirme İvmesi",
    developer: "Abyss Crew",
    school: "Bornova Anadolu Lisesi",
    description:
      "Okyanusun ışık almayan en derin çukurlarını pirinç bir steampunk denizaltıyla araştırıp biyo-ışıldayan su altı faunasını keşfettiğiniz dingin simülasyon.",
    engine: "Unity 3D",
  },
  {
    id: "pixel-guardians",
    title: "Pixel Guardians",
    image: gamePixelGuardians,
    platform: "PC",
    genre: "Platform",
    year: 2024,
    views: "3.3K",
    numericViews: 3300,
    rating: 4.3,
    category: "Eğitim Projesi",
    event: "LOGD Akademi Mezuniyet",
    developer: "PixelKnights",
    school: "Cağaloğlu Anadolu Lisesi",
    description:
      "Eski usul 16-bit estetikle bezenmiş, iki şövalyenin krallığın kayıp kristallerini korumak için savaştığı hızlı tempolu platform oyunu.",
    engine: "Godot 4",
  },
];

export const EXTRA_GAMES: ShowcaseGame[] = [
  {
    id: "echoes-of-neon",
    title: "Echoes of Neon",
    image: gameCyberHeist,
    platform: "Web",
    genre: "Aksiyon",
    year: 2024,
    views: "4.1K",
    numericViews: 4100,
    rating: 4.5,
    category: "Game Jam",
    event: "Unity 2D Game Jam",
    developer: "CyberWave",
    school: "Beşiktaş Anadolu Lisesi",
    description: "Tarayıcı üzerinde çalışan ritim tabanlı neon parkur aksiyon oyunu.",
    engine: "Unity WebGL",
  },
  {
    id: "aetheria-winds",
    title: "Aetheria: Wind & Stone",
    image: gameBeyondHills,
    platform: "PC",
    genre: "Macera",
    year: 2024,
    views: "5.8K",
    numericViews: 5800,
    rating: 4.7,
    category: "Yarışma",
    event: "Anatolia Game Jam 2024",
    developer: "Aether Lab",
    school: "ODTÜ Geliştirme Vakfı Lisesi",
    description:
      "Rüzgar akımlarını kontrol ederek kadim kalıntıları uyandırdığınız huzurlu macera.",
    engine: "Unreal Engine 5",
  },
  {
    id: "orbit-escape",
    title: "Orbit Escape",
    image: gameAstralCollapse,
    platform: "Mobil",
    genre: "Bulmaca",
    year: 2024,
    views: "6.9K",
    numericViews: 6900,
    rating: 4.6,
    category: "Topluluk Projesi",
    event: "Global Game Jam 2025",
    developer: "Gravity Shift",
    school: "Bursa Tofaş Fen Lisesi",
    description:
      "Yerçekimi sapan etkisiyle uyduları yörüngeden yörüngeye fırlattığınız fizik bulmacası.",
    engine: "Unity Mobile",
  },
  {
    id: "forest-keeper",
    title: "Forest Keeper",
    image: gameSkybound,
    platform: "PC",
    genre: "Simülasyon",
    year: 2023,
    views: "4.7K",
    numericViews: 4700,
    rating: 4.4,
    category: "Eğitim Projesi",
    event: "LOGD Akademi 2023",
    developer: "Verdant Team",
    school: "Antalya Yusuf Ziya Öner Fen Lisesi",
    description:
      "Orman ekosistemini koruyup büyüterek hayvan türlerini geri çağırdığınız mikro simülatör.",
    engine: "Godot 4",
  },
];

export const SHOWCASE_EVENTS: ShowcaseEvent[] = [
  {
    id: "anatolia-jam-2025",
    title: "Anatolia Game Jam 2025",
    date: "24 - 26 Mayıs 2025",
    location: "Online",
    isOnline: true,
    image: eventAnatoliaJam,
    link: "#",
  },
  {
    id: "unity-2d-jam-2025",
    title: "Unity 2D Game Jam",
    date: "14 - 15 Haziran 2025",
    location: "Online",
    isOnline: true,
    image: eventUnityJam,
    link: "#",
  },
  {
    id: "izmir-indie-showcase",
    title: "İzmir Indie Games Show-Showcase",
    date: "5 Temmuz 2025",
    location: "İzmir",
    isOnline: false,
    image: eventIzmirShowcase,
    link: "#",
  },
  {
    id: "global-game-jam-2025",
    title: "Global Game Jam 2025",
    date: "31 Ocak - 2 Şubat 2025",
    location: "Online",
    isOnline: true,
    image: eventGlobalJam,
    link: "#",
  },
];
