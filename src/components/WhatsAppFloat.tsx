import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "+212660446735"; // Replace with actual number
  const whatsappMessage = "Hello! I'm interested in your digital marketing services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl animate-pulse hover:animate-none"
        onClick={() => window.open(whatsappUrl, '_blank')}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
