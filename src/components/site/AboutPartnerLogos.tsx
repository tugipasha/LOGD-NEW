import React from "react";

export function EpicGamesLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 80" className={className} fill="currentColor" aria-label="Epic Games">
      {/* Epic Games Crest */}
      <g fill="#121212">
        <path d="M22 12 h24 l12 28 l-12 28 h-24 l-12 -28 z" fill="#000" />
        <path d="M24 16 h20 l9 24 l-9 24 h-20 l-9 -24 z" fill="#fff" />
        <path d="M26 19 h16 l7 21 l-7 21 h-16 l-7 -21 z" fill="#000" />
      </g>
      {/* EPIC GAMES text */}
      <text
        x="66"
        y="38"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="900"
        letterSpacing="1.5"
        fill="#111"
      >
        EPIC
      </text>
      <text
        x="66"
        y="58"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="14"
        fontWeight="800"
        letterSpacing="2.5"
        fill="#333"
      >
        GAMES
      </text>
    </svg>
  );
}

export function UnityLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 50" className={className} fill="currentColor" aria-label="Unity">
      {/* Unity 3D Cube Icon */}
      <g fill="#222c37">
        <path d="M24 6 L38 14 L38 21 L31 17 L24 21 L24 13 Z" fill="#000" />
        <path d="M10 30 L24 38 L24 30 L17 26 L17 18 L10 22 Z" fill="#000" />
        <path d="M38 30 L24 38 L31 34 L31 26 L38 22 Z" fill="#000" />
        <circle cx="24" cy="24" r="5" fill="#000" />
      </g>
      {/* Unity text */}
      <text
        x="48"
        y="33"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#111"
      >
        unity
      </text>
    </svg>
  );
}

export function TubitakLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 50" className={className} fill="none" aria-label="TÜBİTAK">
      {/* TUBITAK emblem */}
      <g transform="translate(8, 7)">
        <polygon points="18,0 36,32 0,32" fill="#E30A17" />
        <polygon points="18,7 30,28 6,28" fill="#FFFFFF" />
        <polygon points="18,12 26,26 10,26" fill="#1E293B" />
        <circle cx="18" cy="21" r="3" fill="#FFFFFF" />
      </g>
      {/* TUBITAK text */}
      <text
        x="52"
        y="32"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="900"
        letterSpacing="0.8"
        fill="#1E293B"
      >
        TÜBİTAK
      </text>
    </svg>
  );
}

export function IntelLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 50" className={className} fill="none" aria-label="Intel">
      <text
        x="15"
        y="36"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-1.5"
        fill="#0071C5"
      >
        intel<tspan fill="#0071C5">.</tspan>
      </text>
    </svg>
  );
}

export function AsusLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 50" className={className} fill="none" aria-label="ASUS">
      <text
        x="12"
        y="28"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="25"
        fontWeight="900"
        letterSpacing="3"
        fill="#002F6C"
      >
        ASUS
      </text>
      <text
        x="12"
        y="41"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="7"
        fontWeight="700"
        letterSpacing="1.8"
        fill="#555"
      >
        IN SEARCH OF INCREDIBLE
      </text>
    </svg>
  );
}

export function MsiLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 50" className={className} fill="none" aria-label="MSI">
      {/* MSI Red Dragon Shield */}
      <g transform="translate(10, 8)">
        <path d="M17 0 L34 5 L34 22 C34 29 25 34 17 37 C9 34 0 29 0 22 L0 5 Z" fill="#ED1C24" />
        {/* Dragon silhouette */}
        <path
          d="M17 6 C19 10 24 11 26 15 C28 19 25 24 21 26 C17 28 13 25 12 21 C11 17 15 14 17 10 Z"
          fill="#FFF"
          opacity="0.95"
        />
      </g>
      {/* msi text */}
      <text
        x="54"
        y="34"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="26"
        fontWeight="900"
        letterSpacing="1"
        fill="#111"
      >
        msi
      </text>
    </svg>
  );
}

export function GoogleDevelopersLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 50" className={className} fill="none" aria-label="Google for Developers">
      {/* Google wordmark */}
      <text
        x="10"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="17"
        fontWeight="700"
      >
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
      </text>
      {/* for Developers text */}
      <text
        x="10"
        y="39"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="12"
        fontWeight="600"
        fill="#5F6368"
        letterSpacing="-0.2"
      >
        for Developers
      </text>
    </svg>
  );
}
