import { useState, useMemo, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Gamepad2,
  Search,
  ChevronDown,
  X,
  Monitor,
  Calendar,
  Globe,
  ArrowRight,
  ArrowDown,
  MapPin,
  CheckCircle2,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  PRIMARY_GAMES,
  EXTRA_GAMES,
  SHOWCASE_EVENTS,
  type ShowcaseGame,
} from "@/data/showcaseGames";

export const Route = createFileRoute("/projeler")({
  head: () => ({
    meta: [
      { title: "Projeler & Oyunlar Showcase | LOGD - Liseler Oyun Geliştiricileri Derneği" },
      {
        name: "description",
        content:
          "Liseler Oyun Geliştiricileri Derneği (LOGD) topluluğunun geliştirdiği oyunları keşfedin. Game Jam, yarışma ve öğrenci projeleri.",
      },
      { property: "og:title", content: "Projeler & Oyunlar Showcase | LOGD" },
      {
        property: "og:description",
        content:
          "Yarışmalarda, game jam'lerde ve topluluk etkinliklerinde geliştirilen en iyi oyunları burada bulabilirsin.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProjelerShowcasePage,
});

function ProjelerShowcasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [platformFilter, setPlatformFilter] = useState("Tüm Platformlar");
  const [genreFilter, setGenreFilter] = useState("Tüm Türler");

  // Load more state
  const [isExpanded, setIsExpanded] = useState(false);

  // Modal detail state
  const [selectedGame, setSelectedGame] = useState<ShowcaseGame | null>(null);

  // Submission email state
  const [email, setEmail] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  // How to submit dialog state
  const [howToSubmitOpen, setHowToSubmitOpen] = useState(false);

  const allAvailableGames = useMemo(() => {
    return isExpanded ? [...PRIMARY_GAMES, ...EXTRA_GAMES] : PRIMARY_GAMES;
  }, [isExpanded]);

  const filteredGames = useMemo(() => {
    return allAvailableGames.filter((game) => {
      // Search
      if (
        searchQuery.trim() &&
        !game.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !game.genre.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !game.developer.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !game.school.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Platform
      if (platformFilter !== "Tüm Platformlar" && game.platform !== platformFilter) {
        return false;
      }

      // Genre
      if (genreFilter !== "Tüm Türler" && game.genre !== genreFilter) {
        return false;
      }

      return true;
    });
  }, [allAvailableGames, searchQuery, platformFilter, genreFilter]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setPlatformFilter("Tüm Platformlar");
    setGenreFilter("Tüm Türler");
  };

  const hasActiveFilters =
    searchQuery !== "" || platformFilter !== "Tüm Platformlar" || genreFilter !== "Tüm Türler";

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setEmailSuccess(true);
    setTimeout(() => {
      setEmail("");
      setEmailSuccess(false);
    }, 4500);
  };

  const scrollToGames = () => {
    const el = document.getElementById("tum-oyunlar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground selection:bg-navy selection:text-cream">
      {/* Global Header with Oyunlar underlined */}
      <Header activeNav="Oyunlar" />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-[#131127] bg-cover bg-right-center bg-no-repeat text-cream"
        style={{ backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/showcase-MQaR8kxMzo3URT4IFVKmuNgJxjbAz1.png)" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[#131127]/55" />

        <div className="relative mx-auto max-w-[1240px] px-6 pb-16 pt-24 sm:pb-20 sm:pt-32">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Ekmek Kırıntısı"
              className="flex items-center gap-2 text-xs font-medium text-cream/70"
            >
              <a href="/" className="transition-colors hover:text-cream">
                Ana Sayfa
              </a>
              <span className="text-cream/40">›</span>
              <span className="font-semibold text-cream">Showcase</span>
            </nav>

            {/* Eyebrow tag */}
            <div className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cream/75">
              SHOWCASE
            </div>

            {/* Headline */}
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
              Topluluğumuzun <br className="hidden sm:inline" />
              ürettiği oyunları keşfet.
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
              Yarışmalarda, game jam'lerde ve topluluk etkinliklerinde geliştirilen en iyi oyunları
              burada bulabilirsin.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={scrollToGames}
                className="inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-3 text-sm font-bold text-[#131127] shadow-lg transition-all hover:bg-cream/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Oyunları Keşfet</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setHowToSubmitOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-cream/25 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Nasıl eklenir?</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Workspace (Search, Filters, Games, Events) */}
      <main className="mx-auto w-full max-w-[1240px] flex-1 px-6 py-10 sm:py-12">
        {/* Filters and Search Container Card */}
        <section
          id="filtreler"
          aria-label="Arama ve Filtreleme Seçenekleri"
          className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5"
        >
          {/* Controls row: Search + "Tüm Platformlar" + "Tüm Türler" + Clear */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_auto]">
            {/* Search input */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Oyun ara..."
                className="h-10 w-full rounded-xl border border-border bg-background pl-9 pr-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy sm:text-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Dropdown 1: Tüm Platformlar */}
            <div className="relative">
              <select
                value={platformFilter}
                onChange={(e) => setPlatformFilter(e.target.value)}
                className="h-10 w-full appearance-none rounded-xl border border-border bg-background px-3.5 pr-8 text-xs font-medium text-foreground focus:border-navy focus:outline-none sm:text-sm"
              >
                <option value="Tüm Platformlar">Tüm Platformlar</option>
                <option value="PC">PC</option>
                <option value="Web">Web</option>
                <option value="Mobil">Mobil</option>
                <option value="Konsol">Konsol</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Dropdown 2: Tüm Türler */}
            <div className="relative">
              <select
                value={genreFilter}
                onChange={(e) => setGenreFilter(e.target.value)}
                className="h-10 w-full appearance-none rounded-xl border border-border bg-background px-3.5 pr-8 text-xs font-medium text-foreground focus:border-navy focus:outline-none sm:text-sm"
              >
                <option value="Tüm Türler">Tüm Türler</option>
                <option value="Macera">Macera</option>
                <option value="Aksiyon">Aksiyon</option>
                <option value="Bulmaca">Bulmaca</option>
                <option value="Strateji">Strateji</option>
                <option value="Simülasyon">Simülasyon</option>
                <option value="Platform">Platform</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            {/* Clear Button */}
            <button
              type="button"
              onClick={handleResetFilters}
              disabled={!hasActiveFilters}
              className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-xl border border-border px-4 text-xs font-semibold transition-colors sm:text-sm ${
                hasActiveFilters
                  ? "bg-secondary text-foreground hover:bg-secondary/80"
                  : "cursor-not-allowed text-muted-foreground/50 opacity-60"
              }`}
            >
              <span>Filtreleri Temizle</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </section>

        {/* Tüm Oyunlar Section */}
        <section id="tum-oyunlar" className="mt-12 scroll-mt-24">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Tüm Oyunlar
            </h2>
            <div className="text-xs font-medium text-muted-foreground sm:text-sm">
              Toplam{" "}
              {filteredGames.length === PRIMARY_GAMES.length && !isExpanded
                ? "245"
                : filteredGames.length}{" "}
              oyun
            </div>
          </div>

          {/* Games Grid */}
          {filteredGames.length === 0 ? (
            <div className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border p-12 text-center">
              <Gamepad2 className="h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-3 text-base font-bold text-foreground">Eşleşen oyun bulunamadı</h3>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Arama kriterlerinizi değiştirerek veya filtreleri temizleyerek tekrar
                deneyebilirsiniz.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-4 rounded-xl bg-navy px-4 py-2 text-xs font-bold text-cream transition-colors hover:bg-navy/90"
              >
                Tüm Filtreleri Sıfırla
              </button>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedGame(game)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-navy"
                >
                  {/* Thumbnail without category badge */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <img
                      src={game.image}
                      alt={game.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Details without rating, views, and year */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      {/* Title */}
                      <h3 className="text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-navy sm:text-base">
                        {game.title}
                      </h3>

                      {/* Platform & Genre only */}
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Monitor className="h-3 w-3 text-muted-foreground/70" />
                          <span>{game.platform}</span>
                        </div>
                        <span className="text-muted-foreground/40">•</span>
                        <span>{game.genre}</span>
                      </div>
                    </div>

                    {/* Bottom Arrow Action */}
                    <div className="mt-4 flex items-center justify-end border-t border-border/50 pt-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border/80 text-foreground transition-all group-hover:bg-[#271d44] group-hover:border-transparent group-hover:text-cream">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {!isExpanded && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:bg-secondary sm:text-sm"
              >
                <span>Daha Fazla Yükle</span>
                <ArrowDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </section>

        {/* Son Etkinlikler Section */}
        <section id="son-etkinlikler" className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Son Etkinlikler
            </h2>
            <a
              href="/#etkinlikler"
              className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              <span>Tüm Etkinlikler</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative mt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SHOWCASE_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3.5 rounded-2xl border border-border bg-card p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="h-16 w-16 rounded-xl object-cover shrink-0 shadow-inner bg-muted"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 text-xs font-bold leading-snug text-foreground sm:text-[13px]">
                      {event.title}
                    </h3>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Calendar className="h-3 w-3 shrink-0" />
                      <span className="truncate">{event.date}</span>
                    </div>
                    <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      {event.isOnline ? (
                        <>
                          <Globe className="h-3 w-3 shrink-0" />
                          <span>Online</span>
                        </>
                      ) : (
                        <>
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{event.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Carousel Next Button */}
            <div className="hidden -right-4 top-1/2 -translate-y-1/2 lg:absolute lg:flex">
              <a
                href="/#etkinlikler"
                aria-label="Daha fazla etkinlik gör"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-lg text-foreground transition-transform hover:scale-110"
              >
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter & Game Submission Callout Banner */}
        <section
          id="oyununu-paylas"
          className="mt-16 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:mt-20 sm:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            {/* Left Info with Emblem */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2b1e4a] text-cream shadow-md">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  Senin oyununda burada yerini alabilir!
                </h2>
                <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Geliştirdiğin oyunu toplulukla paylaş, geri bildirim al ve daha fazla oyuncuya
                  ulaş.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresin"
                  required
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-xs text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none sm:w-72 sm:text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#2e1f4f] px-6 text-xs font-bold text-cream shadow-sm transition-all hover:bg-[#3d2968] active:scale-[0.98] sm:text-sm shrink-0"
                >
                  <span>Gönder</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              {emailSuccess && (
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Harika! Başvuru yönergeleri ve topluluk rehberi e-postana iletildi.</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Game Detail Modal */}
      {selectedGame && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedGame(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl animate-in fade-in zoom-in-95 sm:p-7"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedGame(null)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Thumbnail banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
              <img
                src={selectedGame.image}
                alt={selectedGame.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Modal Body */}
            <div className="mt-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  {selectedGame.title}
                </h3>
              </div>

              {/* Developer & School */}
              <div className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Geliştirici Ekip:{" "}
                <strong className="text-foreground">{selectedGame.developer}</strong> (
                {selectedGame.school})
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-foreground/80 sm:text-sm">
                {selectedGame.description}
              </p>

              {/* Tags & Tech */}
              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-medium">
                  Platform: {selectedGame.platform}
                </span>
                <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-medium">
                  Tür: {selectedGame.genre}
                </span>
                <span className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-medium">
                  Motor: {selectedGame.engine}
                </span>
              </div>

              {/* Action row */}
              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedGame(null)}
                  className="rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:bg-secondary sm:text-sm"
                >
                  Kapat
                </button>
                <a
                  href={`https://itch.io/search?q=${encodeURIComponent(selectedGame.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-2 text-xs font-bold text-cream shadow-sm hover:opacity-90 sm:text-sm"
                >
                  <span>Oyunu Oyna (Itch.io)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How to submit dialog */}
      {howToSubmitOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setHowToSubmitOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-7"
          >
            <button
              type="button"
              onClick={() => setHowToSubmitOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-navy">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Oyununu Nasıl Eklersin?</h3>
            </div>

            <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-cream">
                  1
                </span>
                <span>LOGD Discord sunucumuza katıl ve lise öğrenci/kulüp rolünü doğrula.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-cream">
                  2
                </span>
                <span>
                  Oyununu Itch.io veya GitHub üzerinde yayınla ve proje kapak görselini hazırla.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-cream">
                  3
                </span>
                <span>
                  <strong>#showcase-başvuru</strong> kanalından formunu doldur. Ekibimiz
                  inceledikten sonra oyunun showcase vitrinine eklenir!
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setHowToSubmitOpen(false)}
                className="rounded-xl border border-border px-4 py-2 text-xs font-semibold hover:bg-secondary"
              >
                Anladım
              </button>
              <a
                href="https://discord.gg/logd"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-navy px-4 py-2 text-xs font-bold text-cream hover:opacity-90"
              >
                Discord'a Katıl
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer (sabit ve aynı olarak eklenmiştir) */}
      <Footer />
    </div>
  );
}
