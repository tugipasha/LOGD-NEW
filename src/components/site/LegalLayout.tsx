import { type ReactNode } from "react";
import {
  ShieldCheck,
  FileText,
  Cookie,
  Mail,
  Printer,
  Calendar,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { openCookieSettings } from "@/components/site/CookieConsent";

interface TocItem {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  activeDoc: "gizlilik" | "kvkk" | "cerez";
  title: string;
  subtitle: string;
  lastUpdated: string;
  toc: TocItem[];
  children: ReactNode;
}

export function LegalLayout({
  activeDoc,
  title,
  subtitle,
  lastUpdated,
  toc,
  children,
}: LegalLayoutProps) {
  const tabs = [
    {
      id: "gizlilik",
      label: "Gizlilik Politikası",
      href: "/gizlilik-politikasi",
      icon: ShieldCheck,
    },
    {
      id: "kvkk",
      label: "KVKK Aydınlatma Metni",
      href: "/kvkk",
      icon: FileText,
    },
    {
      id: "cerez",
      label: "Çerez Politikası",
      href: "/cerez-politikasi",
      icon: Cookie,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-navy selection:text-cream">
      {/* Global Header */}
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.38_0.11_288/0.45),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.28_0.09_288/0.6),transparent_65%)]" />

        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-32 sm:pb-20 sm:pt-36">
          {/* Breadcrumb */}
          <nav
            aria-label="Ekmek Kırıntısı Gezintisi"
            className="flex items-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              Ana Sayfa
            </a>
            <span className="text-cream/40">›</span>
            <span className="text-cream/80">Hukuki ve Yasal Bilgiler</span>
            <span className="text-cream/40">›</span>
            <span className="font-semibold text-cream">{title}</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-xs font-medium text-cream/90 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5" />
              <span>Son Güncelleme: {lastUpdated}</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-cream/80 sm:text-base">{subtitle}</p>
          </div>

          {/* Segmented Document Tabs */}
          <div className="mt-10 flex flex-wrap gap-2 sm:gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDoc === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                    isActive
                      ? "bg-cream text-navy shadow-md"
                      : "border border-cream/20 bg-cream/10 text-cream/85 hover:bg-cream/15 hover:text-cream"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="mx-auto w-full max-w-[1240px] flex-1 px-6 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-14">
          {/* Sticky Sidebar Navigation (İçindekiler & Hızlı Aksiyonlar) */}
          <aside className="order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents Box */}
              <div className="card-elevate rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  İÇİNDEKİLER
                </h2>
                <nav className="mt-4">
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-start gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-[13px]"
                        >
                          <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                          <span className="leading-snug">{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Action: Cookie settings trigger */}
              <div className="card-elevate rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-navy">
                    <SlidersHorizontal className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold sm:text-sm">Çerez Tercihleri</h3>
                    <p className="text-[11px] text-muted-foreground">İzinlerinizi düzenleyin</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Cookie className="h-3.5 w-3.5" />
                  Tercihleri Özelleştir
                </button>
              </div>

              {/* Action: Print or Save Document */}
              <div className="card-elevate rounded-2xl border border-border bg-card p-5 shadow-sm">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  <Printer className="h-3.5 w-3.5" />
                  Metni Yazdır / PDF
                </button>
              </div>

              {/* Contact box for legal inquiries */}
              <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Hukuki İletişim
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  KVKK haklarınız veya gizlilikle ilgili sorularınız için veri sorumlumuza
                  ulaşabilirsiniz.
                </p>
                <a
                  href="mailto:kvkk@logd.org.tr"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:underline dark:text-cream"
                >
                  <Mail className="h-3.5 w-3.5" />
                  kvkk@logd.org.tr
                </a>
              </div>
            </div>
          </aside>

          {/* Main Legal Content Document */}
          <main className="order-1 lg:order-2">{children}</main>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
