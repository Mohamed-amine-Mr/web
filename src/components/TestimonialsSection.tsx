import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  business: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Youssef",
    business: "Pâtisserie",
    location: "Khouribga",
    rating: 5,
    text: "Amine transformed our bakery's online presence completely. Our video ads went viral with over 180k views.",
    service: "Video Marketing & Social Media",
    result: "180k+ video views"
  },
  {
    id: 2,
    name: "Mohamed",
    business: "Podcast",
    location: "Casablanca",
    rating: 5,
    text: "سي محمد، خدمة نقية تبارك الله عليك!",
    service: "Website",
    result: "Professional podcast website delivered"
  },
  {
    id: 3,
    name: "Yehya",
    business: "Restaurant Le Palmier",
    location: "Beni Mellal",
    rating: 5,
    text: "مرحباً أخي محمد، أشكرك جزيل الشكر على مرونتك وسرعة استجابتك. أقدر التزامك بتلبية المتطلبات وتوضيحك بشأن جودة العمل والمدة الزمنية.",
    service: "Website",
    result: "High-quality restaurant website completed on time"
  },
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-gold fill-gold" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-agency-black via-agency-black-soft to-agency-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-premium font-black text-4xl md:text-6xl text-premium-white mb-6">
            Client <span className="text-gold">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses across Morocco. See how Amine Media
            Pro helped local entrepreneurs achieve their digital goals.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-premium-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
            <div className="text-3xl font-black text-gold mb-2">250k+</div>
            <div className="text-premium-white text-sm">Video Views</div>
          </div>
          <div className="bg-premium-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
            <div className="text-3xl font-black text-gold mb-2">300%</div>
            <div className="text-premium-white text-sm">Avg Growth</div>
          </div>
          <div className="bg-premium-white/5 backdrop-blur-sm rounded-xl p-6 border border-gold/20">
            <div className="text-3xl font-black text-gold mb-2">90%</div>
            <div className="text-premium-white text-sm">Satisfaction</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-premium-white/10 backdrop-blur-sm border-gold/20 hover:border-gold/40 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gold/60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-light leading-relaxed mb-6 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Result Highlight */}
                <div className="bg-gold/10 rounded-lg p-3 mb-4 border border-gold/20">
                  <p className="text-gold font-semibold text-sm">
                    🎯 Result: {testimonial.result}
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-gold/20 pt-4">
                  <h4 className="font-semibold text-premium-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-gold text-sm font-medium mb-1">
                    {testimonial.business}
                  </p>
                  <p className="text-gray-light text-xs mb-2">
                    📍 {testimonial.location}
                  </p>
                  <p className="text-xs text-gray-medium">
                    Service: {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gold/10 rounded-2xl p-8 border border-gold/30">
            <h3 className="font-premium font-bold text-2xl text-premium-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-light text-lg mb-6">
              Let's create your business transformation story next.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gold">
              <span>✓ Free consultation</span>
              <span>✓ Custom strategy</span>
              <span>✓ Proven results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
