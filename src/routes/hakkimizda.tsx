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
import heroBg from "@/assets/hero-bg.png.asset.json";

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
          "LOGD, lise öğrencilerinin oyun geliştirme yolculuğunda kendilerini keşfetmelerini, yeni beceriler kazanmalarını ve gerçek projelerle gelişmelerini destekleyen bir topluluktur.",
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
    description: "Bir grup lise öğrencisi ile LOGD fikri doğdu ve ilk buluşmamızı gerçekleştirdik.",
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

const PARTNER_LOGOS = [
  { name: "PUBG Mobile" },
  { name: "Global Game Jam" },
  { name: "IGDA İzmir" },
  { name: "Gaming Istanbul" },
  { name: "Neotroy Games" },
  { name: "Games For Change Türkiye" },
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
    <div className="flex min-h-screen flex-col bg-[#F8FAFC] font-sans text-slate-900 selection:bg-[#0B0F19] selection:text-white">
      {/* Header */}
      <Header activeNav="Hakkımızda" />

      {/* Hero Section */}
      <section className="page-hero relative bg-navy-deep text-cream">
        <img
          src={heroBg.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-16 pt-24 sm:pb-20 sm:pt-32">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              Ana Sayfa
            </a>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">Hakkımızda</span>
          </nav>

          <div className="mt-8 max-w-2xl">
            {/* Headline, Description & CTAs */}
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
              Liseliler için, liselilerle
              <br />
              geleceğin oyunlarını
              <br />
              inşa ediyoruz.
            </h1>
            <p className="mt-6 max-w-[540px] text-base leading-relaxed text-cream/75 sm:text-[17px]">
              LOGD, lise öğrencilerinin oyun geliştirme yolculuğunda kendilerini keşfetmelerini,
              yeni beceriler kazanmalarını ve gerçek projelerle gelişmelerini destekleyen bir
              topluluktur.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/#katil"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-cream px-6 text-sm font-bold text-navy shadow-sm transition-all hover:opacity-90"
              >
                Topluluğumuza Katıl <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/etkinlikler"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-cream/30 bg-white/5 px-6 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
              >
                Etkinliklerimizi Keşfet <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: BİZ KİMİZ? (Misyon, Vizyon, Değerlerimiz + LOGD Hakkında) */}
      <section className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            BİZ KİMİZ?
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Misyonumuz, vizyonumuz ve değerlerimiz.
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
            {/* Left 3-Column Card */}
            <div className="grid rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 md:grid-cols-3 md:divide-x md:divide-slate-200">
              {/* Misyon */}
              <div className="flex flex-col pr-0 md:pr-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Target className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">Misyon</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Türkiye genelindeki lise topluluklarını destekleyerek yeni toplulukların
                  kurulmasına rehberlik etmek; game jam, atölye ve mentorluk programlarıyla
                  öğrencileri sektörün gerçek üretim süreçleriyle buluşturmak.
                </p>
              </div>

              {/* Vizyon */}
              <div className="mt-8 flex flex-col border-t border-slate-200 pt-8 md:mt-0 md:border-t-0 md:px-6 md:pt-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Eye className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">Vizyon</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Her ilde en az bir aktif LOGD topluluğunun bulunduğu, Türkiye'yi bölgesinde oyun
                  geliştirme yeteneği yetiştiren öncü ülkelerden biri hâline getiren bir ekosistem
                  kurmak.
                </p>
              </div>

              {/* Değerlerimiz */}
              <div className="mt-8 flex flex-col border-t border-slate-200 pt-8 md:mt-0 md:border-t-0 md:pl-6 md:pt-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                  <Heart className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">Değerlerimiz</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>Öğrenmeye Açıklık</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>Birlikte Üretmek</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>Saygı ve Kapsayıcılık</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>Sürekli Gelişim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                    <span>Paylaşım ve Destek</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Dark Navy LOGD Hakkında Card */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#0B0F19] p-7 text-white shadow-md sm:p-8">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-2.5 backdrop-blur-sm">
                  <img
                    src={logo.url}
                    alt="LOGD"
                    className="h-full w-full object-contain brightness-200"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white">LOGD Hakkında</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Oyun geliştirmeye ilgi duyan lise öğrencilerini bir araya getiren, kâr amacı
                  gütmeyen bir topluluk olan LOGD; öğrenci topluluklarını destekler, yeni
                  toplulukların kurulmasına yardımcı olur ve genç geliştiricilere sektöre dair
                  gerçek üretim deneyimleri sunar.
                </p>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#yolculuk"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Topluluk Yolculuğumuz <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Stats Bar (Right below Section 1) */}
          <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-slate-200">
              {STATS.map(({ icon: Icon, value, label }, idx) => (
                <div key={label} className={`flex items-center gap-4 ${idx > 0 ? "lg:pl-6" : ""}`}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {value}
                    </div>
                    <div className="text-xs font-medium text-slate-500 sm:text-[13px]">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: YOLCULUĞUMUZ (Timeline) */}
      <section id="yolculuk" className="border-b border-slate-200/80 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
            {/* Left Header */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                YOLCULUĞUMUZ
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Bir hayalle başladık,
                <br />
                birlikte büyüdük.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Küçük bir fikirle çıktığımız bu yolculukta, bugün binlerce lise öğrencisine ilham
                olmaya devam ediyoruz.
              </p>

              <div className="mt-7">
                <a
                  href="#zaman-cizelgesi"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#0B0F19] px-5 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  Zaman Çizelgesini Keşfet <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Horizontal Timeline */}
            <div id="zaman-cizelgesi" className="relative pt-2">
              {/* Connecting horizontal line (visible on md+) */}
              <div className="absolute left-6 right-6 top-8 hidden h-0.5 bg-slate-200 md:block" />

              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
                {TIMELINE.map(({ icon: Icon, year, title, description }) => (
                  <div key={year} className="relative flex flex-col">
                    {/* Circle Milestone Node */}
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-900 shadow-sm">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div className="mt-4">
                      <span className="text-base font-extrabold tracking-tight text-slate-900">
                        {year}
                      </span>
                      <h3 className="mt-0.5 text-xs font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: BİRLİKTE ÜRETİYORUZ */}
      <section className="border-b border-slate-200/80 bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                BİRLİKTE ÜRETİYORUZ
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Kendini geliştirmek ve başkalarına
                <br className="hidden sm:inline" /> katkı sağlamak için buradayız.
              </h2>
            </div>
            <a
              href="#ekibimiz"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-75"
            >
              Ekibimizle Tanış <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-800">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-[13px]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: PARTNERLERİMİZ (Exact 7 Partners as in design image) */}
      <section id="partnerlerimiz" className="border-b border-slate-200/80 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                PARTNERLERİMİZ
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Birlikte daha güçlüyüz.
              </h2>
            </div>
            <a
              href="/#partnerlerimiz"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-75"
            >
              Tüm Partnerlerimiz <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {PARTNER_LOGOS.map(({ name }) => (
              <div
                key={name}
                className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                title={name}
              >
                <span className="text-sm font-bold text-slate-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: EKİBİMİZ */}
      <section id="ekibimiz" className="bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
            EKİBİMİZ
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Topluluğumuzu birlikte büyüten çekirdek ekibimiz.
          </h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-[15px]">
            Tutkulu, üretken ve lise öğrencilerinden oluşan ekibimizle her gün daha iyisini inşa
            ediyoruz.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* Circular Portrait with border ring */}
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="mt-4 text-sm font-bold tracking-tight text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{member.role}</p>

                {/* Social Icons */}
                <div className="mt-4 flex items-center gap-3 text-slate-400">
                  <a
                    href={member.linkedin}
                    aria-label={`${member.name} LinkedIn`}
                    className="transition-colors hover:text-slate-900"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    aria-label={`${member.name} GitHub`}
                    className="transition-colors hover:text-slate-900"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`${member.name} E-posta`}
                    className="transition-colors hover:text-slate-900"
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
