import { useId } from "react";

type Tone = "light" | "dark";
/** `light` = brand sits on a light background; `dark` = brand sits on forest/dark. */

/**
 * Vector brand mark inspired by the client's logo: a leafy swoosh that curls
 * around the wordmark. Drawn in SVG so it stays crisp at any size and can be
 * recoloured for dark/light surfaces.
 */
export function BrandMark({
  className = "h-10 w-10",
  tone = "light",
}: {
  className?: string;
  tone?: Tone;
}) {
  const id = useId().replace(/:/g, "");
  const onDark = tone === "dark";
  const leafA = onDark ? "#A8E063" : "#7CC243";
  const leafB = onDark ? "#3E8E5A" : "#1F5A3A";
  const arcA = onDark ? "#E7CF8A" : "#8CC63F";
  const arcB = onDark ? "#C9A24D" : "#2F6B4F";
  const vein = onDark ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.7)";

  const Leaf = ({
    x,
    y,
    r,
    s = 1,
  }: {
    x: number;
    y: number;
    r: number;
    s?: number;
  }) => (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path
        d="M0 0C6-14 22-20 34-12C28 4 12 12 0 0Z"
        fill={`url(#${id}-leaf)`}
      />
      <path d="M1 -1C10-6 20-10 31-11" stroke={vein} strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>
  );

  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-leaf`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={leafB} />
          <stop offset="1" stopColor={leafA} />
        </linearGradient>
        <linearGradient id={`${id}-arc`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={arcB} />
          <stop offset="1" stopColor={arcA} />
        </linearGradient>
      </defs>
      {/* tapered swoosh: thick on the left, tapering to points at both tips */}
      <path
        d="M73 13.6A42 42 0 1 0 73 86.4A38.5 38.5 0 1 1 73 13.6Z"
        fill={`url(#${id}-arc)`}
      />
      {/* leaves growing outward from the swoosh */}
      <Leaf x={66} y={17} r={-42} s={1.15} />
      <Leaf x={70} y={12} r={-5} s={0.55} />
      <Leaf x={24} y={22} r={-135} s={0.95} />
      <Leaf x={11} y={52} r={-168} s={0.8} />
      <Leaf x={30} y={85} r={138} s={0.7} />
    </svg>
  );
}

export function Brand({
  tone = "light",
  size = "md",
  className = "",
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const onDark = tone === "dark";
  const text = onDark ? "text-cream" : "text-forest";
  const sub = onDark ? "text-gold" : "text-moss";
  const dims = {
    sm: { mark: "h-9 w-9", title: "text-[0.95rem]", sub: "text-[0.5rem] tracking-[0.28em]" },
    md: { mark: "h-11 w-11", title: "text-[1.08rem]", sub: "text-[0.54rem] tracking-[0.3em]" },
    lg: { mark: "h-16 w-16", title: "text-[1.5rem]", sub: "text-[0.66rem] tracking-[0.32em]" },
  }[size];

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <BrandMark tone={tone} className={`${dims.mark} shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]`} />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display font-semibold uppercase leading-none tracking-[0.02em] ${dims.title} ${text}`}
        >
          Advance
        </span>
        <span className={`mt-[3px] font-sans font-bold uppercase leading-none ${dims.sub} ${sub}`}>
          Ayurveda Centre
        </span>
        {size === "lg" && (
          <span
            className={`mt-1.5 flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.4em] ${onDark ? "text-cream/55" : "text-ink-3"}`}
          >
            <span className={`h-px w-5 ${onDark ? "bg-gold/60" : "bg-moss/50"}`} />
            Prayagraj
            <span className={`h-px w-5 ${onDark ? "bg-gold/60" : "bg-moss/50"}`} />
          </span>
        )}
      </span>
    </span>
  );
}
