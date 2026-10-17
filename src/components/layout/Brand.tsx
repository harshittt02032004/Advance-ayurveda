import Image from "next/image";

type Tone = "light" | "dark";
/** `light` = brand sits on a light background; `dark` = brand sits on forest/dark. */

/**
 * The client's logo (hands holding a mortar with leaves + wordmark).
 * Two prepared variants live in /public/brand: the original green on a
 * transparent background, and a cream tint for dark surfaces.
 */
const LOGO = {
  light: "/brand/logo-green.png",
  dark: "/brand/logo-cream.png",
} as const;

const MARK = {
  light: "/brand/mark-green.png",
  dark: "/brand/mark-cream.png",
} as const;

// native pixel size of the cropped lockup (see public/brand); keeps the aspect ratio exact
export const LOGO_RATIO = 1848 / 570;

export function BrandMark({
  className = "h-10 w-10",
  tone = "light",
}: {
  className?: string;
  tone?: Tone;
}) {
  return (
    <span className={`relative block shrink-0 ${className}`}>
      <Image src={MARK[tone]} alt="" fill sizes="120px" className="object-contain" />
    </span>
  );
}

export function Brand({
  tone = "light",
  size = "md",
  className = "",
  priority = false,
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
}) {
  const h = { sm: "h-9", md: "h-11", lg: "h-20" }[size];
  return (
    <span className={`relative block ${h} ${className}`} style={{ aspectRatio: LOGO_RATIO }}>
      <Image
        src={LOGO[tone]}
        alt="Advance Ayurveda Centre, Prayagraj"
        fill
        priority={priority}
        sizes="(min-width:1024px) 240px, 180px"
        className="object-contain object-left"
      />
    </span>
  );
}
