import { useId } from "react";

type Tone = "light" | "dark";
/** `light` = brand sits on a light background; `dark` = brand sits on forest/dark. */

/**
 * Advance Ayurveda Centre mark.
 * Two leaves rise and meet at the apex to form an "A" (Advance / Ayurveda);
 * a drop of golden oil sits where the crossbar would be (Panchakarma).
 * Pure SVG so it stays crisp at every size and recolours for dark/light surfaces.
 */
export function BrandMark({
  className = "h-10 w-10",
  tone = "light",
  ring = false,
}: {
  className?: string;
  tone?: Tone;
  ring?: boolean;
}) {
  const id = useId().replace(/:/g, "");
  const onDark = tone === "dark";
  // left leaf (deeper) and right leaf (brighter) for depth
  const l1 = onDark ? "#5FAE6E" : "#0F3D2E";
  const l2 = onDark ? "#CDEFA4" : "#2F6B4F";
  const r1 = onDark ? "#8CC63F" : "#3E8E5A";
  const r2 = onDark ? "#E3F7C4" : "#A8E063";
  const g1 = "#9D7A2A";
  const g2 = "#F1DFA6";
  const vein = onDark ? "rgba(8,37,25,0.35)" : "rgba(255,255,255,0.55)";

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${id}-l`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={l1} />
          <stop offset="1" stopColor={l2} />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor={r1} />
          <stop offset="1" stopColor={r2} />
        </linearGradient>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={g2} />
          <stop offset="1" stopColor={g1} />
        </linearGradient>
      </defs>
      {ring && (
        <circle cx="60" cy="62" r="55" fill="none" stroke="#C9A24D" strokeWidth="1.6" opacity="0.9" />
      )}
      {/* left leaf */}
      <path d="M60 16C30 42 18 76 20 106C46 94 58 58 60 16Z" fill={`url(#${id}-l)`} />
      <path d="M58 24C44 48 34 72 28 98" stroke={vein} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* right leaf */}
      <path d="M60 16C90 42 102 76 100 106C74 94 62 58 60 16Z" fill={`url(#${id}-r)`} />
      <path d="M62 24C76 48 86 72 92 98" stroke={vein} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* golden drop — the crossbar of the A */}
      <path d="M60 58C53 68 50 74 50 79A10 10 0 0 0 70 79C70 74 67 68 60 58Z" fill={`url(#${id}-g)`} />
      <ellipse cx="56" cy="76" rx="2.2" ry="3.4" fill="rgba(255,255,255,0.55)" transform="rotate(-20 56 76)" />
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
