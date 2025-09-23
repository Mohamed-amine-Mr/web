import { Video, Camera, Palette, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  // WhatsApp configuration
  const whatsappNumber = "+212660446735"; // Replace with your actual number
  const whatsappMessage = "Hello! I want to grow my business with Amine Media Pro.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Ads",
      description: "Impactful, budget-friendly video campaigns that drive engagement and conversions.",
      features: ["Script Writing", "Professional Editing", "Platform Optimization", "Performance Tracking"],
      highlight: "180k+ views achieved"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional branding photography for products, portraits, and business content.",
      features: ["Product Photography", "Corporate Portraits", "Event Coverage", "Brand Photography"],
      highlight: "Studio & on-location"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding",
      description: "Complete visual identity packages including logos and brand guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Selection"],
      highlight: "Premium design quality"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Social Media",
      description: "Strategic growth on Instagram, TikTok, and Facebook with engaging content.",
      features: ["Content Strategy", "Community Management", "Hashtag Research", "Analytics Reporting"],
      highlight: "Organic growth focus"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Websites",
      description: "Modern, responsive websites built with WordPress and React for optimal performance.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Mobile-First Approach"],
      highlight: "Modern tech stack"
    }
  ];

  return (
    <section className="py-20 bg-premium-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-premium font-black text-4xl md:text-6xl text-agency-black mb-6">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to elevate your business 
            and deliver measurable results in the Moroccan market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} service={service} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-agency-black rounded-2xl p-8 md:p-12 text-center">
            <h3 className="font-premium font-bold text-2xl md:text-3xl text-premium-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-light text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom strategy that delivers real results for your business in Morocco.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto transform hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <div className="group bg-premium-white border-2 border-gray-light rounded-2xl p-8 hover:border-gold hover:shadow-xl transition-all duration-300 relative">
      <div className="absolute top-0 right-0 bg-gold text-agency-black px-3 py-1 rounded-bl-xl rounded-tr-xl text-xs font-semibold">
        {service.highlight}
      </div>
      
      <div className="bg-gold/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
        <div className="text-gold group-hover:text-agency-black transition-colors duration-300">
          {service.icon}
        </div>
      </div>
      
      <h3 className="font-premium font-bold text-xl text-agency-black mb-4">
        {service.title}
      </h3>
      
      <p className="text-gray-dark mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <ul className="space-y-2">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-sm text-gray-dark">
            <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesSection;