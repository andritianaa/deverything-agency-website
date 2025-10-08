import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutSection } from "@/components/sections/about-section";
import { BrandsSection } from "@/components/sections/brands-section";
import { ComparisonCards } from "@/components/sections/comparison-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TeamSection } from "@/components/sections/team-section";
import { WorkSection } from "@/components/sections/work-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <TeamSection />
        <ComparisonCards />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
