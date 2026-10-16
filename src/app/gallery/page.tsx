import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look inside Advance Ayurved Centre, Tagore Town, Prayagraj — therapy rooms, pharmacy and reception.",
  alternates: { canonical: "/gallery" },
};

const photos = [
  { src: "/images/treatments/reception.jpg", alt: "Reception and waiting area", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/treatments/shirodhara.jpg", alt: "Shirodhara therapy room" },
  { src: "/images/treatments/pharmacy.jpg", alt: "Ayurvedic pharmacy" },
  { src: "/images/treatments/room.jpg", alt: "Panchakarma therapy room", span: "md:col-span-2" },
  { src: "/images/treatments/knee.jpg", alt: "Janu Basti knee therapy" },
  { src: "/images/treatments/pulse.jpg", alt: "Nadi pariksha consultation" },
  { src: "/images/treatments/hero.jpg", alt: "Herbs and medicated oils", span: "md:col-span-2" },
  { src: "/images/treatments/swarnaprashan.jpg", alt: "Swarnaprashan camp" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero compact eyebrow="Gallery" title="A quiet place to get better" text="Therapy rooms, the pharmacy and the reception at Tagore Town, Prayagraj." crumbs={[{ href: "/gallery", label: "Gallery" }]} />
      <section className="container-x py-16 lg:py-24">
        <Stagger className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4" amount={0.05}>
          {photos.map((p) => (
            <StaggerItem key={p.src + p.alt} className={`group relative overflow-hidden rounded-3xl shadow-soft ${p.span ?? ""}`}>
              <Image src={p.src} alt={p.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-spring)] group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-forest-deep/90 to-transparent p-5 text-sm font-medium text-cream transition-transform duration-500 [transition-timing-function:var(--ease-spring)] group-hover:translate-y-0">{p.alt}</div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-8 text-center text-xs text-ink-3">Certificates and registrations are displayed at the centre and will be added here.</p>
      </section>
      <CtaBand />
    </>
  );
}
