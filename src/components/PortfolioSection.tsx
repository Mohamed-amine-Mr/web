
import { Eye, TrendingUp, Users, Play } from "lucide-react";
import maison1 from "@/assets/maison1.jpg";
import maison2 from "@/assets/maison2.png";
import dahab from "@/assets/dahab.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Maison Belkadi ",
      description: "Video advertisement that generated massive engagement for one of Khouribga's premier pastry shops.",
      image: maison1,
      stats: "80k views in 72h",
      budget: "60dh budget",
      category: "Video Marketing",
      icon: <Eye className="w-6 h-6" />,
      highlight: "viral success",
      link: "https://www.tiktok.com/@maison.belkadi/video/7551698325813103873?is_from_webapp=1&sender_device=pc&web_id=7553201714632410632" // 👈 Replace with your TikTok link
    },
 
    {
      title: "Pâtisserie Boulangerie Traiteur Salon de Thé",
      description: "Video advertisement that generated massive engagement for one of Khouribga's premier pastry shops.",
      image: maison2,
        stats: "80k views in 72h",
      budget: "60dh budget",
      category: "Video Marketing",
      icon: <Eye className="w-6 h-6" />,
      highlight: "viral success",
      link: "https://www.tiktok.com/@maison.belkadi/video/7544392367067892998?is_from_webapp=1&sender_device=pc&web_id=7553201714632410632" // optional
    }  ,
     {
      title: "Dahab Coffee ",
      description: "??.",
      image: dahab,
         stats: "80k views in 72h",
      budget: "60dh budget",
      category: "Video Marketing",
      icon: <Eye className="w-6 h-6" />,
      highlight: "viral success",
      link: "" // optional
    },
  ];

  return (
    <section className="py-20 bg-agency-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-premium font-black text-4xl md:text-6xl text-premium-white mb-6">
            Proven <span className="text-gold">Results</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Real campaigns, real results. See how we've helped businesses in Morocco 
            achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-premium-white rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* highlight badge */}
                <div className="absolute top-4 left-4 bg-gold text-agency-black px-3 py-1 rounded-full text-sm font-semibold">
                  {project.highlight}
                </div>

                {/* icon badge */}
                <div className="absolute top-4 right-4 bg-agency-black/80 text-premium-white p-2 rounded-full">
                  {project.icon}
                </div>

                {/* TikTok Play Button */}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-agency-black" />
                    </div>
                  </a>
                )}
              </div>
              
              <div className="p-6">
                <div className="text-sm text-gold font-semibold mb-2 uppercase tracking-wide">
                  {project.category}
                </div>
                
                <h3 className="font-premium font-bold text-xl text-agency-black mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-dark mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-light">
                  <div>
                    <div className="text-lg font-bold text-gold">{project.stats}</div>
                    <div className="text-sm text-gray-medium">{project.budget}</div>
                  </div>
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                    <TrendingUp className="w-6 h-6 text-gold group-hover:text-agency-black transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gold font-semibold text-lg mb-4">
            Want to see your business achieve similar results?
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
