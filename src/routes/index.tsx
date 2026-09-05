import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Code2,
  Gamepad2,
  MapPin,
  Rocket,
  Users,
  Building2,
  Layers,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PartnersSection } from "@/components/site/PartnersSection";
import { TurkiyeMap } from "@/components/site/TurkiyeMap";
import heroBg from "@/assets/hero-bg.png.asset.json";
import logo from "@/assets/logd-logo.png.asset.json";
import p1 from "@/assets/project-1.jpg.asset.json";
import p2 from "@/assets/project-2.jpg.asset.json";
import p3 from "@/assets/project-3.jpg.asset.json";
import p4 from "@/assets/project-4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOGD | Liseli Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "LOGD, lise öğrencilerinin oyun geliştirme yolculuğuna öğrenerek, üreterek ve birlikte başaran büyük bir topluluktur. Projeler, etkinlikler ve kaynaklar seni bekliyor.",
      },
      { property: "og:title", content: "LOGD | Liseli Oyun Geliştiricileri Derneği" },
      {
        property: "og:description",
        content:
          "Geleceğin oyunlarını bugünden geliştiriyoruz. Türkiye'nin dört bir yanından binlerce liseli oyun geliştiricisiyle tanış.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const FEATURES = [
  {
    icon: Users,
    title: "Topluluk",
    text: "Lise öğrencilerinin bir araya geldiği, bilgi paylaştığı ve birlikte üretim yaptığı sıcak bir topluluk.",
  },
  {
    icon: Code2,
    title: "Projeler",
    text: "Öğrencilerin geliştirdiği oyunları keşfedin, ilham alın ve kendi projelerinizi dünyayla paylaşın.",
  },
  {
    icon: Calendar,
    title: "Etkinlikler",
    text: "Game jam'ler, atölyeler, seminerler ve buluşmalarla kendini geliştirme fırsatı yakalayın.",
  },
  {
    icon: BookOpen,
    title: "Kaynaklar",
    text: "Oyun geliştirme yolculuğunuzda ihtiyacınız olan rehberler, eğitimler ve araçlara kolayca ulaşın.",
  },
  {
    icon: Rocket,
    title: "Fırsatlar",
    text: "Yarışmalar, burslar ve staj imkânlarıyla geleceğinize yatırım yapın.",
  },
];

const PROJECTS = [
  {
    img: p1,
    title: "Project NOVA",
    genre: "3D · Bilim Kurgu",
    engine: "Unreal Engine",
    author: "11D | Doğukan Arslan",
  },
  {
    img: p2,
    title: "Echoes of Mirava",
    genre: "2D · Pixel Art",
    engine: "Unity",
    author: "9C | Kaanalp Musluoğlu",
  },
  {
    img: p3,
    title: "Beyond the Hills",
    genre: "3D · Macera",
    engine: "Blender",
    author: "AL | Mert Eren Levent",
  },
  {
    img: p4,
    title: "Cyber Heist",
    genre: "2D · Roguelike",
    engine: "Unity",
    author: "9B | Berkcan Ardalo Levent",
  },
];

const EVENTS = [
  {
    day: "21",
    month: "EYL",
    title: "LOGD Game Jam",
    time: "12:00",
    desc: "48 saatlik Oyun Geliştirme Yarışması",
    place: "Online",
    tag: "Yarışma",
  },
  {
    day: "28",
    month: "EYL",
    title: "Unity ile 2D Oyun Geliştirme",
    time: "16:00",
    desc: "Uygulamalı Atölye",
    place: "Online",
    tag: "Atölye",
  },
  {
    day: "05",
    month: "EKİ",
    title: "Game Design Buluşması",
    time: "18:00",
    desc: "Tasarım Üzerine Sohbetler",
    place: "İstanbul",
    tag: "Buluşma",
  },
];

const STATS = [
  { icon: Users, value: "900+", label: "Üye Öğrenci" },
  { icon: Building2, value: "120+", label: "Proje" },
  { icon: Gamepad2, value: "24+", label: "Oyun Jami" },
  { icon: Calendar, value: "60+", label: "Düzenlenen Etkinlik" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="page-hero relative bg-navy-deep">
        <img
          src={heroBg.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-16 pt-24 sm:pb-20 sm:pt-32">
          <div className="max-w-[640px]">
            <p className="eyebrow text-cream/55">Liseliler, imkânlar, oyunlar.</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.08] text-cream md:text-[3.75rem]">
              Geleceğin oyunlarını
              <br />
              bugünden geliştiriyoruz.
            </h1>
            <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-cream/70">
              LOGD, lise öğrencilerinin oyun geliştirme yolculuğuna öğrenerek, üreterek ve birlikte
              başaran büyük bir topluluktur. Hayal et, tasarla, geliştir ve dünyayla paylaş.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#katil"
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-cream px-6 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
              >
                Topluluğa Katıl <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#projeler"
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-cream/30 px-6 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Projeleri Keşfet <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section id="hakkimizda" className="mx-auto max-w-[1240px] px-6 py-24">
        <p className="eyebrow">Neler yapıyoruz?</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold text-foreground">
            Öğrenciler için, öğrencilerle birlikte.
          </h2>
          <a
            href="/hakkimizda"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            Hakkımızda <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="card-elevate rounded-xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
            >
              <Icon className="h-7 w-7 text-navy" strokeWidth={1.6} />
              <h3 className="mt-6 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projeler" className="mx-auto max-w-[1240px] px-6 pb-24">
        <p className="eyebrow">Öne çıkan projeler</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold text-foreground">
            Liselerden çıkan yaratıcı oyun projeleri.
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            Tüm Projeler <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="card-elevate group overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={project.img.url}
                alt={`${project.title} oyun görseli`}
                width={800}
                height={600}
                loading="lazy"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-sm font-bold text-foreground">{project.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Gamepad2 className="h-3.5 w-3.5" /> {project.genre}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5" /> {project.engine}
                  </span>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {project.author}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-navy transition-colors group-hover:bg-navy group-hover:text-cream">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Events + stats */}
      <section id="etkinlikler" className="mx-auto max-w-[1240px] px-6 pb-24">
        <p className="eyebrow">Yaklaşan etkinlikler</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold text-foreground">Takvimde neler var?</h2>
          <a
            href="/etkinlikler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
          >
            Tüm Etkinlikler <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[2.2fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-3">
            {EVENTS.map((ev) => (
              <article
                key={ev.title}
                className="card-elevate flex flex-col rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-extrabold leading-none text-foreground">{ev.day}</p>
                    <p className="mt-1 text-[10px] font-bold tracking-widest text-muted-foreground">
                      {ev.month}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-snug text-foreground">{ev.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{ev.time}</p>
                  </div>
                </div>
                <p className="mt-5 text-[13px] leading-relaxed text-muted-foreground">{ev.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {ev.place}
                  </span>
                  <span className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">
                    {ev.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="card-elevate divide-y divide-border rounded-xl border border-border bg-card px-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 py-5">
                <Icon className="h-6 w-6 text-navy" strokeWidth={1.6} />
                <div>
                  <p className="text-xl font-extrabold leading-none text-foreground">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="topluluk" className="mx-auto max-w-[1240px] px-6 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <p className="eyebrow">Topluluğumuz</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-foreground">
              Birlikte büyüyen
              <br />
              büyük bir aile.
            </h2>
            <p className="mt-5 max-w-[340px] text-[13px] leading-relaxed text-muted-foreground">
              Türkiye'nin 81 ilinde yer alan liseli geliştiriciler, sektörün mentorlarıyla büyüyen
              bir topluluğun parçası olun.
            </p>
            <a
              href="#katil"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-navy px-5 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
            >
              Topluluğa Katıl <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <TurkiyeMap />
            <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> İzmir · Uşak · Aydın merkezli, 81 ilde topluluk
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="katil" className="mx-auto max-w-[1240px] px-6 pb-24">
        <div className="grid items-center gap-8 rounded-2xl bg-navy px-8 py-10 lg:grid-cols-[auto_1.1fr_1fr_auto]">
          <img
            src={logo.url}
            alt="LOGD logosu"
            width={72}
            height={72}
            loading="lazy"
            className="h-16 w-16 rounded-xl"
          />
          <h2 className="text-2xl font-extrabold leading-snug text-cream">
            Sıradaki projede
            <br />
            sen de varsın.
          </h2>
          <p className="text-[13px] leading-relaxed text-cream/65">
            Etkinliklerden haberdar ol, içeriklerden yararlan ve topluluğun parçası kal.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full flex-wrap items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder="E-posta adresin"
              aria-label="E-posta adresin"
              className="h-11 min-w-[220px] flex-1 rounded-lg border border-cream/20 bg-cream px-4 text-sm text-navy placeholder:text-navy/45 focus:outline-none focus:ring-2 focus:ring-cream/60"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-sand px-5 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Gönder <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Partners */}
      <PartnersSection />

      <Footer />
    </div>
  );
}
