import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "@/lib/team";
import { site } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { JsonLd } from "@/components/layout/JsonLd";
import { Reveal } from "@/components/motion/Reveal";
import { DoctorAvatar } from "@/components/home/Doctors";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = doctors.find((x) => x.slug === slug);
  if (!d) return {};
  return {
    title: `${d.name}, ${d.qualification} | Ayurvedic Doctor Prayagraj`,
    description: `Consult ${d.name}, ${d.qualification}, ${d.role} at Advance Ayurved Centre, Prayagraj. Book an appointment: 9532650556.`,
    alternates: { canonical: `/doctors/${d.slug}` },
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = doctors.find((x) => x.slug === slug);
  if (!d) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Physician",
          name: d.name,
          honorificSuffix: d.qualification,
          jobTitle: d.role,
          medicalSpecialty: "Ayurveda",
          worksFor: { "@id": `${site.url}/#clinic` },
          url: `${site.url}/doctors/${d.slug}`,
          knowsLanguage: d.languages,
        }}
      />
      <PageHero
        compact
        eyebrow={d.role}
        title={d.name}
        text={d.qualification}
        crumbs={[
          { href: "/doctors", label: "Doctors" },
          { href: `/doctors/${d.slug}`, label: d.name },
        ]}
      />
      <section className="container-x py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="rounded-[2rem] border border-forest/10 bg-white/70 p-3 shadow-soft">
              <DoctorAvatar initials={d.initials} photo={d.photo} name={d.name} />
              <div className="p-5">
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Qualification</dt>
                    <dd className="mt-1 text-forest">{d.qualification}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Languages</dt>
                    <dd className="mt-1 text-forest">{d.languages?.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.18em] text-moss">Consults at</dt>
                    <dd className="mt-1 text-forest">{site.address.full}</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <Button href="/contact" className="w-full">
                    Book with {d.name.split(" ").slice(0, 2).join(" ")}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-3xl text-forest">About {d.name}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-2">{d.bio}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="mt-10 font-display text-2xl text-forest">Areas of focus</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {d.focus.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/60 px-5 py-4 text-forest"
                  >
                    <Icon name="check" className="h-4 w-4 text-gold" /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            {d.slug === "dr-sanjay-verma" && (
              <Reveal delay={0.15}>
                <h3 className="mt-10 font-display text-2xl text-forest">Conditions treated</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {treatments.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/treatments/${t.slug}`}
                      className="rounded-full border border-forest/15 px-4 py-2 text-sm text-forest transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                    >
                      {t.name}
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <CtaBand title={`Book a consultation with ${d.name}`} />
    </>
  );
}
