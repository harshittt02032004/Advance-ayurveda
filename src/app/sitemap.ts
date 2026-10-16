import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { treatments, therapies } from "@/lib/treatments";
import { doctors } from "@/lib/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = [
    "", "/about", "/doctors", "/treatments", "/panchakarma", "/swarnaprashan",
    "/gallery", "/testimonials", "/blog", "/contact",
  ].map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 }));
  return [
    ...statics,
    ...treatments.map((t) => ({ url: `${site.url}/treatments/${t.slug}`, lastModified: now, priority: 0.9 })),
    ...therapies.map((t) => ({ url: `${site.url}/panchakarma/${t.slug}`, lastModified: now, priority: 0.7 })),
    ...doctors.map((d) => ({ url: `${site.url}/doctors/${d.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
