import Link from "next/link";
import { doctors } from "@/lib/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function DoctorAvatar({
  initials,
  size = "lg",
}: {
  initials: string;
  size?: "lg" | "sm";
}) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-[1.75rem] bg-[radial-gradient(circle_at_30%_20%,#2f6b4f,#0f3d2e_60%,#082519)] text-gold ${size === "lg" ? "aspect-[4/5]" : "h-20 w-20 rounded-2xl"}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 48 48"
        className={`absolute text-gold/10 ${size === "lg" ? "h-56 w-56 -bottom-10 -right-10" : "h-20 w-20 -bottom-4 -right-4"}`}
        fill="currentColor"
      >
        <path d="M24 40c-9 0-16-5-16-12 5 0 9 2 11 5 0-7 2-14 5-19 3 5 5 12 5 19 2-3 6-5 11-5 0 7-7 12-16 12Z" />
      </svg>
      <span
        className={`font-display ${size === "lg" ? "text-6xl" : "text-2xl"}`}
      >
        {initials}
      </span>
      {size === "lg" && (
        <span className="absolute bottom-4 left-4 rounded-full bg-cream/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-cream/70 backdrop-blur">
          Photo coming soon
        </span>
      )}
    </div>
  );
}

export default function Doctors() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Meet our doctors"
          title="Qualified Ayurvedic physicians who take time to listen"
        />
        <Reveal delay={0.2} className="shrink-0">
          <Button href="/doctors" variant="outline">
            Meet the full team
          </Button>
        </Reveal>
      </div>
      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {doctors.map((d) => (
          <StaggerItem key={d.slug}>
            <Link
              href={`/doctors/${d.slug}`}
              className="group block rounded-[2rem] border border-forest/10 bg-white/70 p-3 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="overflow-hidden rounded-[1.75rem] transition-transform duration-700 [transition-timing-function:var(--ease-spring)] group-hover:scale-[1.02]">
                <DoctorAvatar initials={d.initials} />
              </div>
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">
                  {d.role}
                </p>
                <h3 className="mt-1 font-display text-2xl text-forest">{d.name}</h3>
                <p className="text-sm text-ink-3">{d.qualification}</p>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-forest">
                  View profile
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
