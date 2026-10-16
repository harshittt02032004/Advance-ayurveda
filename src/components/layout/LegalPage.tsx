import { PageHero } from "./PageHero";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <PageHero compact eyebrow="Legal" title={title} text={intro} />
      <section className="container-x py-16">
        <div className="prose-like max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-2xl text-forest">{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-ink-2">{p}</p>
              ))}
            </div>
          ))}
          <p className="text-xs text-ink-3">Last updated: October 2026</p>
        </div>
      </section>
    </>
  );
}
