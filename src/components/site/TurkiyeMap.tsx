import { useState } from "react";
import { MAP_H, MAP_W, MARKERS, PROVINCES } from "./turkiye-map-data";

const HIGHLIGHT = new Set(MARKERS.map((m) => m.name));

export function TurkiyeMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        role="img"
        aria-label="Türkiye haritası: İzmir, Uşak ve Aydın illeri işaretli"
        className="w-full overflow-visible"
      >
        <defs>
          <linearGradient id="tr-base" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--navy)" stopOpacity="0.32" />
          </linearGradient>
          <linearGradient id="tr-hot" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0%" stopColor="var(--navy)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--navy-deep)" stopOpacity="1" />
          </linearGradient>
          <filter id="tr-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="9"
              floodColor="var(--navy-deep)"
              floodOpacity="0.28"
            />
          </filter>
          <filter id="tr-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#tr-shadow)">
          {PROVINCES.map((p) => {
            const hot = HIGHLIGHT.has(p.n);
            const on = active === p.n;
            return (
              <path
                key={p.n}
                d={p.d}
                fill={hot ? "url(#tr-hot)" : "url(#tr-base)"}
                stroke="var(--cream)"
                strokeWidth={hot ? 1.6 : 0.9}
                strokeLinejoin="round"
                className="cursor-pointer transition-[opacity,transform] duration-300 ease-out"
                style={{
                  opacity: active && !on ? (hot ? 0.85 : 0.55) : 1,
                  transformOrigin: "center",
                  transform: on ? "translateY(-3px)" : undefined,
                }}
                onMouseEnter={() => setActive(p.n)}
                onMouseLeave={() => setActive(null)}
              >
                <title>{p.n}</title>
              </path>
            );
          })}
        </g>

        {MARKERS.map((m, i) => (
          <g key={m.name} onMouseEnter={() => setActive(m.name)} onMouseLeave={() => setActive(null)}>
            <circle cx={m.x} cy={m.y} r="6" fill="var(--sand)" opacity="0.5">
              <animate
                attributeName="r"
                values="6;20;6"
                dur="2.8s"
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.5;0;0.5"
                dur="2.8s"
                begin={`${i * 0.6}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle
              cx={m.x}
              cy={m.y}
              r="5.5"
              fill="var(--sand)"
              stroke="var(--cream)"
              strokeWidth="2"
              filter="url(#tr-glow)"
            />
            <text
              x={m.x}
              y={m.y - 14}
              textAnchor="middle"
              className="pointer-events-none select-none"
              style={{
                fontSize: 17,
                fontWeight: 800,
                fill: "var(--navy-deep)",
                paintOrder: "stroke",
                stroke: "var(--cream)",
                strokeWidth: 4,
                strokeLinejoin: "round",
              }}
            >
              {m.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
