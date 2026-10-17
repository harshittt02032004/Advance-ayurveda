import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function Intro() {
  return (
    <section className="container-x py-20 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="relative lg:col-span-6">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift lg:aspect-[4/4.2]">
            <Image
              src="/images/clinic/reception-wide.jpg"
              alt="Reception and Ayurvedic medical store at Advance Ayurved Centre, Tagore Town, Prayagraj"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover object-left transition-transform duration-[1.6s] [transition-timing-function:var(--ease-spring)] hover:scale-105"
            />
          </Reveal>
          <Reveal
            delay={0.25}
            className="absolute -bottom-8 -right-4 w-56 rounded-3xl border border-forest/10 bg-cream p-5 shadow-lift sm:right-8 lg:-right-10"
          >
            <p className="font-display text-4xl text-forest">
              1<span className="text-gold">st</span>
            </p>
            <p className="mt-1 text-sm text-ink-2">
              visit begins with a full history, pulse reading and your reports
              — never a fixed package.
            </p>
          </Reveal>
          <div
            aria-hidden
            className="absolute -left-10 -top-10 -z-10 h-56 w-56 rounded-full bg-sage/60 blur-3xl"
          />
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <Reveal y={14}>
            <p className="eyebrow">Welcome to Advance Ayurved Centre</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 text-3xl font-medium leading-[1.08] text-forest text-balance sm:text-4xl lg:text-[2.85rem]">
              Authentic Ayurveda, explained in plain language and planned
              around <em className="font-normal italic text-moss">your</em> life.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 leading-relaxed text-ink-2 sm:text-lg">
              Advance Ayurved Centre is an Ayurvedic clinic and Panchakarma
              centre in Tagore Town, Prayagraj (Allahabad). Every patient is
              seen by a qualified Ayurvedic doctor who takes time to understand
              your history, your daily routine and your <em>prakriti</em> (body
              constitution) before recommending anything.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 leading-relaxed text-ink-2 sm:text-lg">
              Your plan may include classical medicines, Panchakarma, a diet
              chart you can actually follow at home, and yoga. We tell you what
              to expect, how long it is likely to take, and when a condition
              also needs modern investigations or a specialist&apos;s opinion.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Natural ingredients",
                "Health-specific plans",
                "Traditional & trustworthy",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 rounded-full border border-forest/10 bg-white/60 px-4 py-2.5 text-sm font-medium text-forest"
                >
                  <Icon name="check" className="h-4 w-4 text-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/about" variant="primary">
                About the Centre
              </Button>
              <Button href="/doctors" variant="outline">
                Meet the Doctors
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
