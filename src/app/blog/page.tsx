import type { Metadata } from "next";
import Image from "next/image";
import { blogPosts } from "@/lib/team";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Ayurveda Blog & Health Guides",
  description: "Plain-language articles on piles, fatty liver, Panchakarma, Swarnaprashan, sciatica and diabetes, reviewed by our doctors.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero compact eyebrow="Blog & health guides" title="Ayurveda, explained in plain language" text="Articles reviewed by Dr Sanjay Verma, MD (Ayurved). New posts are added regularly." crumbs={[{ href: "/blog", label: "Blog" }]} />
      <section className="container-x py-16 lg:py-24">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.05}>
          {blogPosts.map((p) => (
            <StaggerItem key={p.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-forest/10 bg-white/70 shadow-soft transition-all duration-500 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={p.image} alt="" fill sizes="(min-width:1024px) 30vw, 50vw" className="object-cover transition-transform duration-[1.4s] [transition-timing-function:var(--ease-spring)] group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-forest">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-display text-xl leading-snug text-forest">{p.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-2">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-3">
                    <span>{p.readTime} read</span>
                    <span className="rounded-full bg-sage-light px-3 py-1 font-semibold text-forest">Coming soon</span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <CtaBand />
    </>
  );
}
