import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "+212660446735"; // Replace with actual number
  const whatsappMessage = "Hello! I want to grow my business with Amine Media Pro.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 bg-gradient-to-br from-agency-black via-agency-black-soft to-agency-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-premium font-black text-4xl md:text-6xl text-premium-white mb-6">
            Let's Grow Your Business <span className="text-gold">Today</span>
          </h2>
          
          <p className="text-xl text-gray-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to see real results? Contact us on WhatsApp for a free consultation 
            and discover how we can transform your digital presence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto transform hover:scale-105"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              <Phone className="mr-2" />
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
            
            <Button 
              variant="outline-gold" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Free Consultation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-premium-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
              <h3 className="font-premium font-bold text-xl text-gold mb-2">Free Consultation</h3>
              <p className="text-gray-light">Discover opportunities for your business</p>
            </div>
            <div className="bg-premium-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
              <h3 className="font-premium font-bold text-xl text-gold mb-2">Custom Strategy</h3>
              <p className="text-gray-light">Tailored solutions for your specific needs</p>
            </div>
            <div className="bg-premium-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
              <h3 className="font-premium font-bold text-xl text-gold mb-2">Proven Results</h3>
              <p className="text-gray-light">Track record of success in Morocco</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gold/10 rounded-xl border border-gold/30">
            <p className="text-premium-white text-lg">
              <strong className="text-gold"> Response Guaranteed:</strong> We typically respond within 90 minutes during business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
