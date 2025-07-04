import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { BrandsSection } from "@/components/sections/brands-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WorkSection } from "@/components/sections/work-section"
import { TeamSection } from "@/components/sections/team-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FaqSection } from "@/components/sections/faq-section"
import { AwardsSection } from "@/components/sections/awards-section"
import { CtaSection } from "@/components/sections/cta-section"

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
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <AwardsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
