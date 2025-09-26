import { MessageCircle, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  
  const whatsappNumber = "+212660446735";
  const whatsappMessage = "Hello! I'm interested in your digital marketing services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  // Show notification after 5 seconds, then hide after 3 seconds
  useEffect(() => {
    const showTimer = setTimeout(() => setShowNotification(true), 5000);
    const hideTimer = setTimeout(() => setShowNotification(false), 8000);
    
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  return (
    <>
      {/* Main Float Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        
        {/* Notification Bubble - Alex Hormozi Style */}
        {showNotification && !isExpanded && (
          <div className="bg-premium-white shadow-2xl rounded-2xl p-4 max-w-xs border border-gold/20 animate-slide-up">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-gold rounded-full mt-2 animate-pulse"></div>
              <div>
                <p className="text-agency-black text-sm font-medium">
                  Get Your Free Strategy Call
                </p>
                <p className="text-gray-dark text-xs mt-1">
                  90% of our clients see results in 30 days
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Menu */}
        {isExpanded && (
          <div className="bg-premium-white shadow-2xl rounded-2xl p-6 w-80 border border-gold/20 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gold rounded-full animate-pulse"></div>
                <h4 className="font-premium font-bold text-agency-black">
                  Ready to Grow?
                </h4>
              </div>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-gray-medium hover:text-agency-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-gray-dark text-sm mb-4 leading-relaxed">
              Join 100+ Moroccan businesses that increased their revenue with our proven strategies.
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-gold hover:bg-gold-light text-agency-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Free Consultation
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-gray-medium">
                  ⚡ Usually reply within 90 minutes
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <div className="relative">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-light hover:from-gold-light hover:to-gold text-agency-black shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-premium-white/20"
            aria-label="Contact us"
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </Button>
          
          {/* Subtle breathing effect - not annoying */}
          {!isExpanded && (
            <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping-slow"></div>
          )}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
