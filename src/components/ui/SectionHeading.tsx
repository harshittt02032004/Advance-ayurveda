import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${a} ${className}`}>
      {eyebrow && (
        <Reveal y={14}>
          <p className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`mt-3 text-3xl font-medium leading-[1.08] text-balance sm:text-4xl lg:text-[2.85rem] ${light ? "text-cream" : "text-forest"}`}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${light ? "text-cream/75" : "text-ink-2"}`}
          >
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
