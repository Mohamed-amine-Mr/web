import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Play } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappNumber = "+212660446735";
  const whatsappMessage = "Hello! I'm interested in your digital marketing services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Mobile Status Bar Spacing */}
      <div className="h-6 sm:h-0 bg-agency-black"></div>
      
      <section 
        className="relative min-h-screen flex items-center justify-center bg-agency-black bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(${heroBackground})`,
          minHeight: 'calc(100vh - 1.5rem)' // Account for status bar on mobile
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 pt-8 sm:pt-0">
          <div className="max-w-5xl mx-auto">
            
            {/* Mobile-First Typography */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-premium font-black leading-tight mb-4">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-premium-white">
                  Amine Media Pro
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 sm:mt-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  Digital Marketing & Content Creation
                </span>
              </h1>
            </div>
            
            {/* Mobile-Optimized Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-light mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Helping local businesses in Morocco build strong brands online with 
              <span className="text-gold font-semibold block sm:inline"> proven results</span> and 
              <span className="text-gold font-semibold"> creative strategies</span>.
            </p>
            
            {/* Enhanced Mobile CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 h-auto transform hover:scale-105 transition-all duration-300 shadow-2xl"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                <Phone className="mr-2 w-5 h-5" />
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline-gold" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 h-auto hover:bg-gold/10 transition-all duration-300"
              >
                <Play className="mr-2 w-4 h-4" />
                View Our Portfolio
              </Button>
            </div>
            
            {/* Enhanced Stats Cards - Mobile First */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
              <div className="group bg-premium-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300">225k+</div>
                <div className="text-premium-white text-sm sm:text-base font-medium">Video Views</div>
              </div>
              
              <div className="group bg-premium-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl sm:text-3xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300">90%</div>
                <div className="text-premium-white text-sm sm:text-base font-medium">Client Satisfaction</div>
              </div>
              
              <div className="group bg-premium-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:transform hover:scale-105 sm:col-span-1 col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-gold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-premium-white text-sm sm:text-base font-medium">Support</div>
              </div>
            </div>
            
            {/* Mobile Trust Indicator */}
     
          </div>
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
