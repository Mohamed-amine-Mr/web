import { Phone, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+212660446735"; // Replace with actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return (
    <footer className="bg-agency-black text-premium-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 className="font-premium font-black text-2xl text-gold mb-4">
              Amine Media Pro
            </h3>
            <p className="text-gray-light mb-6 max-w-md leading-relaxed">
              Professional digital marketing agency helping Moroccan businesses shine online. 
              From Khouribga to the world, we create impactful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold/10 hover:bg-gold text-gold hover:text-agency-black p-3 rounded-lg transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://ma.linkedin.com/in/mohamedamine-mounir"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold/10 hover:bg-gold text-gold hover:text-agency-black p-3 rounded-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-premium font-bold text-lg text-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gold mr-3" />
                <span className="text-gray-light">{whatsappNumber}</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 text-gold mr-3" />
                <a 
                  href={whatsappUrl}
                  className="text-gray-light hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gold mr-3" />
                <a 
                  href="mailto:aminemediapro.contact@gmail.com"
                  className="text-gray-light hover:text-gold transition-colors"
                >
                aminemediapro.contact@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gold mr-3" />
                <span className="text-gray-light">Khouribga, Morocco</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-premium font-bold text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Video Advertising",
                "Professional Photography",
                "Brand Design",
                "Social Media Marketing",
                "Website Development"
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-light hover:text-gold transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Status & Copyright */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-light text-sm">
                <strong className="text-gold">Legal Status:</strong> Auto-entrepreneur registered in Morocco
              </p>
              <p className="text-gray-light text-sm mt-1">
                Amine Media Pro – Helping Moroccan businesses shine online
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-light text-sm">
                © {currentYear} Amine Media Pro. All rights reserved.
              </p>
              <p className="text-gold text-sm font-medium">
                Founded by Mohamed Amine Mounir
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
