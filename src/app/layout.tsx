import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCta from "@/components/layout/FloatingCta";
import SmoothScroll from "@/components/motion/SmoothScroll";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { JsonLd } from "@/components/layout/JsonLd";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ayurvedic Doctor in Prayagraj | Advance Ayurved Centre",
    template: "%s | Advance Ayurved Centre",
  },
  description:
    "Advance Ayurved Centre, Tagore Town: Ayurvedic treatment and Panchakarma under Dr Sanjay Verma (MD Ayurved). Piles, liver, joint pain and more. Call 9532650556.",
  keywords: [
    "Ayurvedic doctor in Prayagraj",
    "Ayurvedic hospital in Prayagraj",
    "Panchakarma centre in Prayagraj",
    "Dr Sanjay Verma Ayurved",
    "piles treatment in Prayagraj",
    "Ayurvedic doctor in Allahabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
    title: "Ayurvedic Doctor in Prayagraj | Advance Ayurved Centre",
    description:
      "Doctor-led Ayurvedic treatment and Panchakarma in Prayagraj under Dr Sanjay Verma, MD (Ayurved).",
    images: [{ url: "/images/treatments/hero.jpg", width: 1680, height: 944 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${site.url}/#clinic`,
  name: site.name,
  url: site.url,
  telephone: site.phonePrimaryRaw,
  email: site.email,
  image: `${site.url}/images/treatments/hero.jpg`,
  medicalSpecialty: "Ayurveda",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  founder: {
    "@type": "Physician",
    name: "Dr Sanjay Verma",
    honorificSuffix: "MD (Ayurved)",
    url: `${site.url}/doctors/dr-sanjay-verma`,
  },
  sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={clinicSchema} />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCta />
      </body>
    </html>
  );
}
