import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export default function SwarnaBand() {
  return (
    <section className="container-x py-10">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-sand via-cream to-sage-light shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Image
              src="/images/treatments/swarnaprashan.jpg"
              alt="Swarnaprashan drops being given to a child"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="eyebrow">Swarnaprashan for children</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] text-forest text-balance sm:text-4xl">
              A time-honoured Ayurvedic practice, on every Pushya Nakshatra
            </h2>
            <p className="mt-4 leading-relaxed text-ink-2">
              A traditional preparation of purified gold, medicated ghee, honey
              and herbs, given to children in a few drops to support immunity
              and healthy growth. It does not replace routine vaccination.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href="/swarnaprashan" variant="primary">
                See dates &amp; register
              </Button>
              <span className="text-sm text-ink-3">Next date: to be announced</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
