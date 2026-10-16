import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Intro from "@/components/home/Intro";
import Conditions from "@/components/home/Conditions";
import PanchakarmaSection from "@/components/home/PanchakarmaSection";
import SwarnaBand from "@/components/home/SwarnaBand";
import WhyUs from "@/components/home/WhyUs";
import Doctors from "@/components/home/Doctors";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import HomeFaq from "@/components/home/HomeFaq";
import { CtaBand } from "@/components/layout/CtaBand";
import { Marquee } from "@/components/ui/Marquee";

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">
        Ayurvedic Treatment &amp; Panchakarma Centre in Prayagraj — Advance
        Ayurved Centre
      </h1>
      <Hero />
      <TrustStrip />
      <Marquee
        className="border-y border-forest/10"
        items={[
          "Piles · Fistula · Fissure",
          "Fatty Liver",
          "Arthritis & Knee Pain",
          "Sciatica & Back Pain",
          "Diabetes",
          "Kidney Stone",
          "Migraine",
          "Paralysis Rehabilitation",
          "Infertility",
          "Panchakarma",
          "Shirodhara",
          "Swarnaprashan",
        ]}
      />
      <Intro />
      <Conditions limit={8} />
      <PanchakarmaSection />
      <SwarnaBand />
      <WhyUs />
      <Doctors />
      <Process />
      <Testimonials />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
