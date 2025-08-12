import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BenefitsSection from "@/components/benefits-section";
import RoleCategories from "@/components/role-categories";
import OpportunitiesSection from "@/components/opportunities-section";
import TeamSection from "@/components/team-section";
import TestimonialsSection from "@/components/testimonials-section";
import ResourcesSection from "@/components/resources-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-white text-navy">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <RoleCategories />
      <OpportunitiesSection />
      <TeamSection />
      <TestimonialsSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
