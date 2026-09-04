import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Gamepad2,
  Calendar,
  Landmark,
  GraduationCap,
  Flag,
  Rocket,
  Trophy,
  Star,
  Sprout,
  Globe,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import logo from "@/assets/logd-logo.png.asset.json";

import ahmetImg from "@/assets/images/team_ahmet_1788547015900.jpg";
import zeynepImg from "@/assets/images/team_zeynep_1788547038479.jpg";
import mertcanImg from "@/assets/images/team_mertcan_1788547060404.jpg";
import elifnurImg from "@/assets/images/team_elifnur_1788547075365.jpg";
import batuhanImg from "@/assets/images/team_batuhan_1788547091587.jpg";
import selinImg from "@/assets/images/team_selin_1788547116444.jpg";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | LOGD - Liseli Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "LOGD, lise öğrencilerinin oyun geliştirme yolculuğunda öğrenmelerini, üretmelerini ve birlikte başarmalarını destekleyen bir topluluktur.",
      },
      { property: "og:title", content: "Hakkımızda | LOGD" },
      {
        property: "og:description",
        content:
          "Liseliler için, liselilerle geleceğin oyunlarını inşa ediyoruz. LOGD misyonu, vizyonu, değerleri ve ekibi.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HakkimizdaPage,
});

const STATS = [
  {
    icon: Users,
    value: "10.000+",
    label: "Üye Öğrenci",
  },
  {
    icon: Gamepad2,
    value: "500+",
    label: "Tamamlanan Proje",
  },
  {
    icon: Calendar,
    value: "300+",
    label: "Etkinlik",
  },
  {
    icon: Landmark,
    value: "81",
    label: "İlde Aktif",
  },
  {
    icon: GraduationCap,
    value: "600+",
    label: "Gönüllü Mentor",
  },
];

const TIMELINE = [
  {
    icon: Flag,
    year: "2018",
    title: "İlk Adım",
    description: "Bir grup lise öğrencisi ile LOGD fikri doğdu ve ilk buluşmamız gerçekleşti.",
  },
  {
    icon: Users,
    year: "2019",
    title: "Toplulukla Büyüme",
    description: "İlk etkinliklerimizi düzenledik ve üyelerimizle birlikte büyümeye başladık.",
  },
  {
    icon: Rocket,
    year: "2021",
    title: "Projelerle Sıçrama",
    description: "Game jam'ler, eğitimler ve projelerle daha geniş kitlelere ulaştık.",
  },
  {
    icon: Trophy,
    year: "2024+",
    title: "Geleceğe Doğru",
    description: "Daha fazla öğrenciye dokunuyor, oyun ekosistemini birlikte büyütüyoruz.",
  },
];

const VALUES = [
  {
    icon: Users,
    title: "Öğrenci Odaklı",
    description: "Tüm çalışmalarımızın merkezinde lise öğrencileri ve onların gelişimi bulunur.",
  },
  {
    icon: Star,
    title: "Gönüllülük Esasına Dayalı",
    description: "Etkinliklerimizi ve projelerimizi gönüllü öğrencilerimizle birlikte yürütüyoruz.",
  },
  {
    icon: Sprout,
    title: "Sürekli Destek",
    description: "Mentorluk, eğitim ve topluluk desteğiyle her adımda yanındayız.",
  },
  {
    icon: Globe,
    title: "Kapsayıcı Topluluk",
    description: "Farklı okullardan, şehirlerden öğrencileri bir araya getiriyoruz.",
  },
];

const PARTNERS = [
  { name: "ODTÜ", detail: "Teknoloji ve eğitim partneri", mark: "ODTÜ", tone: "bg-[#e9e3ff] text-[#342174]" },
  { name: "Unity", detail: "Oyun geliştirme ekosistemi", mark: "U", tone: "bg-[#e8edf2] text-[#18212b]" },
  { name: "Unreal Engine", detail: "Gerçek zamanlı 3D teknolojileri", mark: "UE", tone: "bg-[#e5e5e7] text-[#202126]" },
  { name: "T.C. Gençlik ve Spor Bakanlığı", detail: "Gençlik ve topluluk desteği", mark: "GSB", tone: "bg-[#f5e7d4] text-[#6b3d1c]" },
  { name: "İstanbul Büyükşehir Belediyesi", detail: "Yerel etkinlik iş birlikleri", mark: "İBB", tone: "bg-[#e0eff0] text-[#155b61]" },
  { name: "Girişimcilik Vakfı", detail: "Genç girişimci ağı", mark: "GV", tone: "bg-[#eee8da] text-[#675528]" },
];

const TEAM = [
  {
    name: "Ahmet Yılmaz",
    role: "Topluluk Yöneticisi",
    image: ahmetImg,
    linkedin: "#",
    github: "#",
    email: "ahmet@logd.org.tr",
  },
  {
    name: "Zeynep Kaya",
    role: "Etkinlik Koordinatörü",
    image: zeynepImg,
    linkedin: "#",
    github: "#",
    email: "zeynep@logd.org.tr",
  },
  {
    name: "Mert Can Öz",
    role: "Teknik Lider",
    image: mertcanImg,
    linkedin: "#",
    github: "#",
    email: "mertcan@logd.org.tr",
  },
  {
    name: "Elif Nur Demir",
    role: "İletişim Sorumlusu",
    image: elifnurImg,
    linkedin: "#",
    github: "#",
    email: "elif@logd.org.tr",
  },
  {
    name: "Batuhan Arslan",
    role: "Eğitim Koordinatörü",
    image: batuhanImg,
    linkedin: "#",
    github: "#",
    email: "batuhan@logd.org.tr",
  },
  {
    name: "Selin Aydın",
    role: "Tasarım Sorumlusu",
    image: selinImg,
    linkedin: "#",
    github: "#",
    email: "selin@logd.org.tr",
  },
];

function HakkimizdaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-navy selection:text-cream">
      {/* Header */}
      <Header activeNav="Hakkımızda" />

      {/* Hero Section */}
      <section
        className="page-hero relative bg-navy-deep text-cream"
        style={{ backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hakkinda-YzN4DBeMwyzv91gDeOaXczc9XVP1ZI.png)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-navy-deep/55" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs font-medium text-cream/65"
          >
            <a href="/" className="transition-colors hover:text-cream">
              Ana Sayfa
            </a>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">Hakkımızda</span>
          </nav>

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Text & CTA */}
            <div>
              <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
                Liseliler için, liselilerle
                <br />
                geleceğin oyunlarını
                <br />
                inşa ediyoruz.
              </h1>
              <p className="mt-6 max-w-[540px] text-base leading-relaxed text-cream/75 sm:text-[17px]">
                LOGD, lise öğrencilerinin oyun geliştirme yolculuğunda öğrenmelerini, üretmelerini
                ve birlikte başarmalarını destekleyen bir topluluktur.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#katil"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-cream px-6 text-sm font-bold text-navy shadow-sm transition-opacity hover:opacity-90"
                >
                  Topluluğumuza Katıl <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#etkinlikler"
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-cream/25 bg-cream/10 px-6 text-sm font-semibold text-cream transition-colors hover:bg-cream/15"
                >
                  Etkinliklerimizi Keşfet <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 1: BİZ KİMİZ? Misyon, Vizyon, Değerlerimiz & LOGD Hakkında */}
      <section className="border-b border-border/80 bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            BİZ KİMİZ?
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Misyonumuz, vizyonumuz ve değerlerimiz.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
            {/* Left 3-Column Card */}
            <div className="card-elevate grid rounded-2xl border border-border bg-card p-6 sm:p-8 md:grid-cols-3 md:divide-x md:divide-border/80">
              {/* Misyon */}
              <div className="flex flex-col pr-0 md:pr-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/80 text-navy">
                  <Target className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">Misyon</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Lise öğrencilerinin oyun geliştirme alanında kendilerini keşfetmelerini, yeni
                  beceriler kazanmalarını ve gerçek projelerle gelişmelerini sağlamak.
                </p>
              </div>

              {/* Vizyon */}
              <div className="mt-8 flex flex-col border-t border-border/80 pt-8 md:mt-0 md:border-t-0 md:px-6 md:pt-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/80 text-navy">
                  <Eye className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">Vizyon</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Türkiye'nin dört bir yanındaki liselileri bir araya getirerek, oyun geliştirme
                  ekosistemini büyütmek ve geleceğin yaratıcı geliştiricilerini yetiştirmek.
                </p>
              </div>

              {/* Değerlerimiz */}
              <div className="mt-8 flex flex-col border-t border-border/80 pt-8 md:mt-0 md:border-t-0 md:pl-6 md:pt-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/80 text-navy">
                  <Heart className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">Değerlerimiz</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/85">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                    <span>Öğrenmeye Açıklık</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                    <span>Birlikte Üretmek</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                    <span>Saygı ve Kapsayıcılık</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                    <span>Sürekli Gelişim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-navy" />
                    <span>Paylaşım ve Destek</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Dark Navy LOGD Hakkında Card */}
            <div className="card-elevate flex flex-col justify-between rounded-2xl bg-navy-deep p-7 text-cream shadow-md sm:p-8">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cream/10 p-2.5 backdrop-blur-sm">
                  <img
                    src={logo.url}
                    alt="LOGD"
                    className="h-full w-full object-contain brightness-200"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-cream">LOGD Hakkında</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  2018 yılında lise öğrencilerinin inisiyatifiyle kurulan LOGD, bugün binlerce
                  liseliye Türkiye'nin en büyük lise odaklı oyun geliştirme topluluğu olarak ilham
                  veriyor.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#yolculuk"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cream transition-opacity hover:opacity-80"
                >
                  Topluluk Yolculuğumuz <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Stats Banner */}
      <section className="border-b border-border/80 bg-sand/30 py-10">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="card-elevate rounded-2xl border border-border/80 bg-card p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-border/80">
              {STATS.map(({ icon: Icon, value, label }, idx) => (
                <div key={label} className={`flex items-center gap-4 ${idx > 0 ? "lg:pl-6" : ""}`}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                      {value}
                    </div>
                    <div className="text-xs font-medium text-muted-foreground sm:text-[13px]">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: YOLCULUĞUMUZ (Timeline) */}
      <section id="yolculuk" className="border-b border-border/80 py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            {/* Left Header */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                YOLCULUĞUMUZ
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Bir hayalle başladık,
                <br />
                birlikte büyüdük.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Küçük bir fikirle çıktığımız bu yolculukta, bugün binlerce lise öğrencisine ilham
                olmaya devam ediyoruz.
              </p>

              <div className="mt-7">
                <a
                  href="#ekibimiz"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-navy-deep px-5 text-sm font-semibold text-cream shadow-sm transition-opacity hover:opacity-90"
                >
                  Zaman Çizelgesini Keşfet <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Horizontal Timeline */}
            <div className="relative pt-2">
              {/* Connecting horizontal line (visible on md+) */}
              <div className="absolute left-6 right-6 top-7 hidden h-0.5 bg-border md:block" />

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
                {TIMELINE.map(({ icon: Icon, year, title, description }) => (
                  <div key={year} className="relative flex flex-col">
                    {/* Circle Milestone Node */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-card shadow-sm">
                      <Icon className="h-5 w-5 text-foreground" strokeWidth={1.8} />
                    </div>

                    <div className="mt-4">
                      <span className="text-base font-extrabold tracking-tight text-foreground">
                        {year}
                      </span>
                      <h3 className="mt-0.5 text-xs font-bold text-foreground">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: BİRLİKTE ÜRETİYORUZ */}
      <section className="border-b border-border/80 bg-sand/20 py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                BİRLİKTE ÜRETİYORUZ
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Kendini geliştirmek ve başkalarına
                <br className="hidden sm:inline" /> katkı sağlamak için buradayız.
              </h2>
            </div>
            <a
              href="#ekibimiz"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-75"
            >
              Ekibimizle Tanış <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card-elevate flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/80 text-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: PARTNERLERİMİZ */}
      <section id="partnerlerimiz" className="relative overflow-hidden border-b border-border/80 bg-navy-deep py-16 text-cream lg:py-24">
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-sand/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sand/80">PARTNERLERİMİZ</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-cream sm:text-3xl">
                Birlikte daha büyük bir etki yaratıyoruz.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/70 sm:text-[15px]">
                Eğitimden teknolojiye, gençlik çalışmalarından yerel iş birliklerine kadar bizi destekleyen kurumlarla geleceğin geliştiricilerini güçlendiriyoruz.
              </p>
            </div>
            <span className="inline-flex w-fit items-center rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-xs font-semibold text-cream/75">
              Güçlü iş birlikleri
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group flex min-h-32 items-center gap-4 rounded-2xl border border-cream/10 bg-cream/[0.06] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cream/25 hover:bg-cream/[0.1] motion-reduce:transition-none"
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-sm font-black tracking-tight shadow-lg transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none ${partner.tone}`}>
                  {partner.mark}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-cream">{partner.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-cream/60">{partner.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: EKİBİMİZ */}
      <section id="ekibimiz" className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            EKİBİMİZ
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            Topluluğumuzu birlikte büyüten çekirdek ekibimiz.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-[15px]">
            Tutkulu, üretken ve lise öğrencilerinden oluşan ekibimizle her gün daha iyisini inşa
            ediyoruz.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="card-elevate flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* Circular Portrait with border ring */}
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-border/80">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-4 text-sm font-bold tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{member.role}</p>

                {/* Social Icons */}
                <div className="mt-4 flex items-center gap-3 text-muted-foreground">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className="transition-colors hover:text-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    aria-label={`${member.name} GitHub`}
                    className="transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`${member.name} E-posta`}
                    className="transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
