import { useEffect, useState } from "react";
import { Globe, Search, Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logd-logo.png.asset.json";

const NAV = [
  { label: "Topluluk", href: "#topluluk" },
  { label: "Projeler", href: "#projeler" },
  { label: "Oyunlar", href: "#projeler" },
  { label: "Etkinlikler", href: "#etkinlikler" },
  { label: "Haberler", href: "#haberler" },
  { label: "Kaynaklar", href: "#kaynaklar" },
  { label: "Hakkımızda", href: "#hakkimizda" },
];

const LANGS = ["Türkçe", "English", "Deutsch"];

export function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("TR");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [langOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="LOGD logosu"
            width={44}
            height={44}
            className="h-11 w-11 rounded-lg"
          />
          <span className="text-xl font-extrabold tracking-tight text-cream">LOGD</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Ara"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream sm:flex"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>

          <div className="relative hidden sm:block">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              className="flex h-9 items-center gap-1.5 rounded-md border border-cream/25 px-3 text-sm font-medium text-cream/90 transition-colors hover:bg-cream/10"
            >
              <Globe className="h-4 w-4" />
              {lang}
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-36 overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l === "Türkçe" ? "TR" : l === "English" ? "EN" : "DE");
                      setLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary"
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#katil"
            className="hidden h-10 items-center rounded-md bg-cream px-5 text-sm font-semibold text-navy transition-opacity hover:opacity-90 sm:flex"
          >
            LOGD'ye Katıl
          </a>

          <button
            aria-label="Menü"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-cream lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-6 rounded-xl border border-cream/15 bg-navy-deep/95 p-4 backdrop-blur lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-cream/85 hover:bg-cream/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#katil"
              className="mt-2 rounded-md bg-cream px-3 py-2.5 text-center text-sm font-semibold text-navy"
            >
              LOGD'ye Katıl
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
