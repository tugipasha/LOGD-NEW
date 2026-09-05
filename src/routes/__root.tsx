import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "../components/site/CookieConsent";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "LOGD | Liseli Oyun Geliştiriciler Derneği (Kütük No: 35-089-005)" },
      {
        name: "description",
        content:
          "Liseli Oyun Geliştiriciler Derneği (LOGD): Lise öğrencilerine yönelik ücretsiz oyun geliştirme atölyeleri, Anatolia Game Jam, lise kulüp ağı ve mentorluk sağlayan resmî sivil toplum kuruluşu.",
      },
      {
        name: "keywords",
        content:
          "LOGD, Liseli Oyun Geliştiriciler Derneği, dernek kütük 35-089-005, lise oyun geliştirme, game jam, lise bilişim kulüpleri, genç oyun geliştiriciler, Unity, Godot, Unreal Engine",
      },
      { name: "author", content: "Liseli Oyun Geliştiriciler Derneği" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0e0a24" },
      { property: "og:site_name", content: "LOGD - Liseli Oyun Geliştiriciler Derneği" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:title", content: "LOGD | Liseli Oyun Geliştiriciler Derneği" },
      {
        property: "og:description",
        content:
          "Liseli gençlerin oyun geliştirme ve dijital üretim yolculuğu: Ücretsiz Game Jam'ler, eğitimler, okul kulüpleri ve mentorluk.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://logd.org.tr" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "LOGD | Liseli Oyun Geliştiriciler Derneği" },
      {
        name: "twitter:description",
        content:
          "Liseli oyun geliştiricilerinin resmî sivil toplum kuruluşu: projeler, Anatolia Game Jam, eğitimler ve fırsatlar.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://logd.org.tr" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NGO", "Organization"],
        "@id": "https://logd.org.tr/#organization",
        name: "Liseli Oyun Geliştiriciler Derneği",
        alternateName: "LOGD",
        legalName: "Liseli Oyun Geliştiriciler Derneği",
        url: "https://logd.org.tr",
        logo: {
          "@type": "ImageObject",
          url: "https://logd.org.tr/favicon.png",
          caption: "LOGD - Liseli Oyun Geliştiriciler Derneği Logosu",
        },
        identifier: "35-089-005",
        taxID: "35-089-005",
        description:
          "Liseli Oyun Geliştiriciler Derneği (LOGD), lise çağındaki gençlerin oyun geliştirme, yazılım, dijital sanat ve yapay zekâ alanlarında yetkinlik kazanmasını sağlayan kütük numarası 35-089-005 olan kâr amacı gütmeyen resmî bir sivil toplum kuruluşudur.",
        foundingDate: "2018",
        foundingLocation: {
          "@type": "Place",
          name: "İzmir, Türkiye",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Konak",
          addressRegion: "İzmir",
          addressCountry: "TR",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+90-232-483-3500",
            contactType: "Dernek Genel Sekreterliği",
            email: "info@logd.org.tr",
            availableLanguage: ["Turkish", "English"],
          },
          {
            "@type": "ContactPoint",
            email: "kvkk@logd.org.tr",
            contactType: "KVKK ve Veri Koruma İrtibatı",
            availableLanguage: ["Turkish"],
          },
        ],
        sameAs: [
          "https://www.instagram.com/izmirlogt",
          "https://www.linkedin.com/company/liseler-oyun-geli%C5%9Ftiriciler-derne%C4%9Fi/",
        ],
        knowsAbout: [
          "Oyun Geliştirme",
          "Game Jam",
          "Lise Bilişim Kulüpleri",
          "Unity",
          "Unreal Engine",
          "Godot Engine",
          "Dijital Sanat ve Modelleme",
          "Oyun Sektörü Kariyer Rehberliği",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://logd.org.tr/#website",
        url: "https://logd.org.tr",
        name: "LOGD - Liseli Oyun Geliştiriciler Derneği",
        description:
          "Lise öğrencileri için kâr amacı gütmeyen oyun geliştirme topluluğu ve sivil toplum kuruluşu.",
        publisher: {
          "@id": "https://logd.org.tr/#organization",
        },
        inLanguage: "tr-TR",
      },
    ],
  };

  return (
    <html lang="tr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <CookieConsent />
    </QueryClientProvider>
  );
}
