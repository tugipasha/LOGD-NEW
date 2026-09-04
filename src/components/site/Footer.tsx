import { Github, Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logd-logo.png.asset.json";

const COLUMNS = [
  {
    title: "Keşfet",
    links: ["Topluluk", "Projeler", "Oyunlar", "Etkinlikler", "Haberler"],
  },
  {
    title: "Kaynaklar",
    links: ["Rehberler", "Videolar", "Araçlar", "Eğitimler", "Blog"],
  },
  {
    title: "LOGD",
    links: ["Hakkımızda", "Ekibimiz", "Kariyer", "İletişim", "Gizlilik Politikası"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="LOGD logosu"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-lg font-extrabold">LOGD</span>
            </div>
            <p className="mt-3 max-w-[220px] text-sm text-cream/60">
              Liseli Oyun Geliştiricileri Derneği
            </p>
            <div className="mt-6 flex items-center gap-4 text-cream/70">
              <a href="#" aria-label="Discord" className="transition-colors hover:text-cream">
                <MessageCircle className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-cream">
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-cream">
                <Youtube className="h-[18px] w-[18px]" />
              </a>
              <a href="#" aria-label="GitHub" className="transition-colors hover:text-cream">
                <Github className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-cream/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-cream/50">
              İletişim
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>
                <a href="mailto:info@logd.org.tr" className="hover:text-cream">
                  info@logd.org.tr
                </a>
              </li>
              <li>Liseler İçin Geliştiricilerin Derneği</li>
              <li>Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6">
          <p className="text-xs text-cream/50">© 2024 LOGD. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
