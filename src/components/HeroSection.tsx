import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappNumber = "+212660446735"; // Replace with actual number
  const whatsappMessage = "Hello! I'm interested in your digital marketing services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-agency-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})` }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-premium font-black text-5xl md:text-7xl lg:text-8xl text-premium-white mb-6 leading-tight">
            <span className="block">Amine Media Pro</span>
            <span className="block text-gold text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Digital Marketing & Content Creation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Helping local businesses in Morocco build strong brands online with 
            <span className="text-gold font-semibold"> proven results</span> and 
            <span className="text-gold font-semibold"> creative strategies</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <Phone className="mr-2" />
              Work With Us
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button 
              variant="outline-gold" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              View Our Portfolio
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-premium-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold/20">
              <div className="text-3xl font-bold text-gold mb-2">225k+</div>
              <div className="text-premium-white">Video Views</div>
            </div>
            <div className="bg-premium-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold/20">
              <div className="text-3xl font-bold text-gold mb-2">90%</div>
              <div className="text-premium-white">Client Satisfaction</div>
            </div>
            <div className="bg-premium-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold/20">
              <div className="text-3xl font-bold text-gold mb-2">24/7</div>
              <div className="text-premium-white">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
