import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Users,
  MapPin,
  Trophy,
  Clock,
  ArrowRight,
  ChevronDown,
  Mail,
  CheckCircle2,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  HERO_STATS,
  UPCOMING_EVENTS,
  PAST_EVENTS,
  EXTRA_PAST_EVENTS,
  type UpcomingEvent,
  type PastEvent,
} from "@/data/eventsData";

export const Route = createFileRoute("/etkinlikler")({
  head: () => ({
    meta: [
      { title: "Etkinlikler | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "Birlikte öğrendik, birlikte geliştirdik, birlikte büyüdük. Game jam'lerden seminerlere, atölyelerden yarışmalara kadar LOGD etkinlikleri.",
      },
      { property: "og:title", content: "Etkinlikler | LOGD" },
      {
        property: "og:description",
        content:
          "Game jam'ler, atölyeler, seminerler ve yarışmalar. Geleceğin oyun geliştiricileri burada buluşuyor.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EtkinliklerPage,
});

function EtkinliklerPage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [isExpandedPast, setIsExpandedPast] = useState(false);
  const [activeModalEvent, setActiveModalEvent] = useState<UpcomingEvent | PastEvent | null>(null);

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
  };

  const allPastEvents = isExpandedPast ? [...PAST_EVENTS, ...EXTRA_PAST_EVENTS] : PAST_EVENTS;

  // Split into left and right columns for the timeline
  const leftColumnEvents = allPastEvents.filter((_, idx) => idx % 2 === 0);
  const rightColumnEvents = allPastEvents.filter((_, idx) => idx % 2 === 1);

  return (
    <div className="min-h-screen bg-[#fafafc] text-foreground antialiased selection:bg-sand/30 selection:text-navy">
      {/* Header */}
      <Header activeNav="Etkinlikler" />

      {/* Hero Section */}
      <section
        className="page-hero relative bg-[#120e2e] pt-28 pb-16 text-cream sm:pt-32 sm:pb-20"
        style={{ backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/etkinlikler-NZXXYrxahwKuliabeMGOWmWsBsx3FB.png)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[#120e2e]/55" />

        <div className="relative z-10 mx-auto max-w-[1240px] px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-xs font-medium text-cream/70"
          >
            <a href="/" className="transition-colors hover:text-cream">
              Ana Sayfa
            </a>
            <span className="text-cream/40">›</span>
            <span className="text-cream">Etkinlikler</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left Content */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
                ETKİNLİKLER
              </span>

              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-[46px] lg:leading-[1.18]">
                Birlikte öğrendik,
                <br />
                birlikte geliştirdik,
                <br />
                birlikte büyüdük.
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
                Game jam'lerden seminerlere, atölyelerden yarışmalara kadar birçok etkinliği geride
                bıraktık. Tüm etkinliklerimize göz atın.
              </p>

              {/* Stats Row */}
              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/10 pt-6">
                {HERO_STATS.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sand shadow-inner">
                      {stat.icon === "calendar" && <Calendar className="h-5 w-5" />}
                      {stat.icon === "users" && <Users className="h-5 w-5" />}
                      {stat.icon === "map-pin" && <MapPin className="h-5 w-5" />}
                      {stat.icon === "trophy" && <Trophy className="h-5 w-5" />}
                    </div>
                    <div>
                      <div className="text-xl font-black text-cream leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-cream/70">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1240px] px-6 py-14 sm:py-16">
        {/* SECTION 1: Yaklaşan Etkinlikler */}
        <section className="mb-20">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/10 text-navy">
                <Calendar className="h-4 w-4" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Yaklaşan Etkinlikler
              </h2>
            </div>
            <a
              href="#tum-yaklasanlar"
              onClick={(e) => {
                e.preventDefault();
                const first = document.getElementById("upcoming-row");
                first?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              <span>Tüm Yaklaşanlar</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Cards Row */}
          <div id="upcoming-row" className="relative">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setActiveModalEvent(event)}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy/30 cursor-pointer"
                >
                  {/* Image container with date badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Date Badge floating on top-left */}
                    <div className="absolute top-3 left-3 flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white/95 px-2.5 py-1.5 text-center shadow-md backdrop-blur-sm">
                      <span className="text-base font-black leading-none text-slate-900">
                        {event.day}
                      </span>
                      <span className="mt-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                        {event.month}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <h3 className="font-bold text-foreground transition-colors group-hover:text-navy sm:text-base line-clamp-1">
                        {event.title}
                      </h3>

                      {/* Category & Mode Tags */}
                      <div className="mt-2.5 flex items-center gap-1.5">
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                          {event.category}
                        </span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                          {event.mode}
                        </span>
                      </div>

                      <p className="mt-2.5 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Bottom Meta & Arrow button */}
                    <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{event.dateRange}</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                          {event.isTime ? (
                            <Clock className="h-3 w-3 text-muted-foreground" />
                          ) : (
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                          )}
                          <span>{event.locationOrTime}</span>
                        </span>
                      </div>

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-cream">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Next Indicator on Desktop */}
            <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card text-foreground shadow-lg backdrop-blur-sm">
                <ChevronRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Geçmiş Etkinlikler Timeline */}
        <section className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Geçmiş Etkinlikler
            </h2>
            <a
              href="#tum-gecmis"
              onClick={(e) => {
                e.preventDefault();
                setIsExpandedPast(true);
              }}
              className="group flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              <span>Tüm Geçmiş Etkinlikler</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Top timeline icon node (Desktop) */}
            <div className="relative z-10 mx-auto mb-6 hidden h-9 w-9 items-center justify-center rounded-full border border-navy/30 bg-card text-navy shadow-sm md:flex">
              <Calendar className="h-4 w-4" />
            </div>

            {/* Vertical timeline line */}
            <div className="absolute top-4 bottom-12 left-1/2 hidden w-0.5 -translate-x-1/2 bg-border md:block" />

            {/* Two-column grid matching the exact screenshot layout */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-x-14 md:gap-y-6">
              {/* Row 1 Left: Unity 2D Game Jam */}
              {leftColumnEvents[0] && (
                <PastEventCard
                  event={leftColumnEvents[0]}
                  onSelect={() => setActiveModalEvent(leftColumnEvents[0])}
                />
              )}

              {/* Row 1 Right: Blender ile 3D Modelleme Atölyesi */}
              {rightColumnEvents[0] && (
                <PastEventCard
                  event={rightColumnEvents[0]}
                  onSelect={() => setActiveModalEvent(rightColumnEvents[0])}
                />
              )}

              {/* Row 2 Left: Mentorluk & Geliştirici Buluşması */}
              {leftColumnEvents[1] && (
                <PastEventCard
                  event={leftColumnEvents[1]}
                  onSelect={() => setActiveModalEvent(leftColumnEvents[1])}
                />
              )}

              {/* Row 2 Right: Unreal Engine 5'e Giriş */}
              {rightColumnEvents[1] && (
                <PastEventCard
                  event={rightColumnEvents[1]}
                  onSelect={() => setActiveModalEvent(rightColumnEvents[1])}
                />
              )}

              {/* Row 3 Left: Global Game Jam 2025 */}
              {leftColumnEvents[2] && (
                <PastEventCard
                  event={leftColumnEvents[2]}
                  onSelect={() => setActiveModalEvent(leftColumnEvents[2])}
                />
              )}

              {/* Row 3 Right: İzmir Indie Games Showcase */}
              {rightColumnEvents[2] && (
                <PastEventCard
                  event={rightColumnEvents[2]}
                  onSelect={() => setActiveModalEvent(rightColumnEvents[2])}
                />
              )}

              {/* Extra Items if expanded */}
              {isExpandedPast && (
                <>
                  {leftColumnEvents.slice(3).map((event) => (
                    <PastEventCard
                      key={event.id}
                      event={event}
                      onSelect={() => setActiveModalEvent(event)}
                    />
                  ))}
                  {rightColumnEvents.slice(3).map((event) => (
                    <PastEventCard
                      key={event.id}
                      event={event}
                      onSelect={() => setActiveModalEvent(event)}
                    />
                  ))}
                </>
              )}
            </div>

            {/* Load More Button */}
            {!isExpandedPast && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsExpandedPast(true)}
                  className="group inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-5 py-2.5 text-xs sm:text-sm font-semibold text-foreground shadow-sm transition-all hover:border-navy/40 hover:bg-secondary/70 hover:shadow"
                >
                  <span>Daha Fazla Yükle</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 3: Newsletter Box */}
        <section className="mb-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#130f2f] p-6 text-cream shadow-2xl sm:p-9 lg:p-10">
            {/* Ambient background light */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-navy/40 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left text & icon */}
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cream shadow-inner">
                  <Mail className="h-6 w-6 text-cream" />
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl text-cream">
                    Etkinliklerden ilk sen haberdar ol!
                  </h3>
                  <p className="mt-1 text-xs text-cream/75 sm:text-sm max-w-lg leading-relaxed">
                    Yeni etkinlikler, yarışmalar ve atölyeler hakkında bilgi almak için e-posta
                    listemize katıl.
                  </p>
                </div>
              </div>

              {/* Right form */}
              <div className="lg:shrink-0">
                {newsletterSubscribed ? (
                  <div className="flex items-center gap-2 rounded-full border border-sand/40 bg-sand/15 px-5 py-2.5 text-xs font-semibold text-sand">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Kaydınız başarıyla alındı! Teşekkürler.</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="E-posta adresin"
                      className="h-11 w-full rounded-full border border-white/20 bg-white px-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sand sm:w-64"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-cream px-6 text-xs sm:text-sm font-bold text-[#130f2f] transition-all hover:bg-cream/90 active:scale-95"
                    >
                      <span>Gönder</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Dialog for Event Details */}
      {activeModalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl text-card-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Event Image */}
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Header info */}
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-semibold text-navy">
                  {activeModalEvent.category}
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                  {activeModalEvent.mode}
                </span>
              </div>

              <h3 className="mt-2 text-xl font-extrabold text-foreground">
                {activeModalEvent.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {activeModalEvent.description}
              </p>

              <div className="mt-5 space-y-2 rounded-2xl bg-secondary/50 p-4 text-xs font-medium text-foreground">
                {"dateRange" in activeModalEvent && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-navy" />
                    <span>Tarih: {activeModalEvent.dateRange}</span>
                  </div>
                )}
                {"date" in activeModalEvent && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-navy" />
                    <span>Tarih: {activeModalEvent.date}</span>
                  </div>
                )}
                {"locationOrTime" in activeModalEvent && (
                  <div className="flex items-center gap-2">
                    {activeModalEvent.isTime ? (
                      <Clock className="h-4 w-4 text-navy" />
                    ) : (
                      <MapPin className="h-4 w-4 text-navy" />
                    )}
                    <span>
                      {activeModalEvent.isTime ? "Saat:" : "Konum:"}{" "}
                      {activeModalEvent.locationOrTime}
                    </span>
                  </div>
                )}
                {"attendees" in activeModalEvent && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-navy" />
                    <span>Katılımcı Sayısı: {activeModalEvent.attendees}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalEvent(null)}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted"
                >
                  Kapat
                </button>
                <a
                  href="/#katil"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy/90"
                >
                  <Sparkles className="h-3.5 w-3.5 text-sand" />
                  <span>Bilgi Al & Katıl</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer - Fixed, persistent and consistent across the site */}
      <Footer />
    </div>
  );
}

// Sub-component for Past Event card with side-by-side thumbnail and stats
function PastEventCard({ event, onSelect }: { event: PastEvent; onSelect: () => void }) {
  return (
    <div
      onClick={onSelect}
      className="group flex items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-border/70 bg-card p-3 sm:p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-navy/30 cursor-pointer"
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        {/* Square thumbnail */}
        <div className="h-18 w-18 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl bg-muted">
          <img
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Title & Tags */}
        <div className="min-w-0">
          <h4 className="font-bold text-foreground transition-colors group-hover:text-navy text-xs sm:text-sm line-clamp-1">
            {event.title}
          </h4>

          <div className="mt-1.5 flex items-center gap-1.5">
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-secondary-foreground">
              {event.category}
            </span>
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-secondary-foreground">
              {event.mode}
            </span>
          </div>
        </div>
      </div>

      {/* Right meta & action */}
      <div className="flex flex-col items-end gap-1.5 shrink-0 pl-2">
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span className="hidden sm:inline">{event.date}</span>
        </div>

        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <Users className="h-3 w-3" />
          <span>{event.attendees}</span>
        </div>

        <button
          type="button"
          className="mt-1 inline-flex items-center gap-1 rounded-lg border border-border bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold text-foreground transition-colors hover:bg-secondary group-hover:border-navy/40"
        >
          <span>Detayları Gör</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
