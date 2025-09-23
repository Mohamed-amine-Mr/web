import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen font-premium">
      <HeroSection />
      <MissionSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
