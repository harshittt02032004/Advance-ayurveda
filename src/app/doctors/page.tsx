import type { Metadata } from "next";
import Link from "next/link";
import { doctors, staff } from "@/lib/team";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { DoctorAvatar } from "@/components/home/Doctors";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Our Ayurvedic Doctors & Therapists in Prayagraj",
  description:
    "Meet Dr Sanjay Verma (MD Ayurved), Dr Sweta Singh, Dr Shubham Agrahari and the Panchakarma, yoga and pharmacy team at Advance Ayurved Centre.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our doctors and team"
        title="Good Ayurvedic care needs more than a prescription"
        text="Our doctors, therapists, yoga instructor, counsellor and pharmacist work together on your recovery."
        image="/images/treatments/pulse.jpg"
        crumbs={[{ href: "/doctors", label: "Doctors" }]}
      />

      <section className="container-x py-20 lg:py-28">
        <SectionHeading eyebrow="Doctors" title="Consulting physicians" />
        <Stagger className="mt-12 grid gap-8 lg:grid-cols-3">
          {doctors.map((d) => (
            <StaggerItem key={d.slug}>
              <article className="flex h-full flex-col rounded-[2rem] border border-forest/10 bg-white/70 p-3 shadow-soft">
                <DoctorAvatar initials={d.initials} photo={d.photo} name={d.name} />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-moss">
                    {d.role}
                  </p>
                  <h2 className="mt-1 font-display text-2xl text-forest">{d.name}</h2>
                  <p className="text-sm text-ink-3">{d.qualification}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-2">{d.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {d.focus.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-sage-light px-3 py-1 text-xs font-medium text-forest"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/doctors/${d.slug}`}
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-forest link-underline"
                  >
                    Full profile <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-sage-light py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Clinical & support team"
            title="The people who make every visit calm and well organised"
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s) => (
              <StaggerItem
                key={s.name}
                className="flex items-center gap-4 rounded-3xl border border-forest/10 bg-white/80 p-5"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-forest font-display text-gold">
                  {s.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <p className="font-semibold text-forest">{s.name}</p>
                  <p className="text-sm text-ink-3">{s.role}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand title="Book a consultation with our doctors" />
    </>
  );
}
