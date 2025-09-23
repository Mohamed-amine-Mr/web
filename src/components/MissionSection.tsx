const MissionSection = () => {
  return (
    <section className="py-20 bg-premium-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-premium font-black text-4xl md:text-6xl text-agency-black mb-12">
            Built From <span className="text-gold">Passion</span>, 
            <br />Driven By <span className="text-gold">Results</span>
          </h2>
          
          <div className="bg-gray-light rounded-2xl p-8 md:p-12 text-left relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-gold-light rounded-t-2xl"></div>
            
            <blockquote className="text-lg md:text-xl text-agency-black leading-relaxed mb-8">
              "I started from scratch with limited resources in Khouribga. Today, I run 
              <strong className="text-gold"> Amine Media Pro</strong> as an official auto-entrepreneur. 
              With creativity and persistence, I help local businesses grow their brand online."
            </blockquote>
            
            <div className="border-l-4 border-gold pl-6 mb-8">
              <p className="text-lg text-gray-dark">
                Currently working with <strong>one of the biggest pastry shops in Khouribga</strong> 
                while helping small businesses increase visibility and sales through proven digital strategies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gold rounded-full mr-4"></div>
                <span className="text-agency-black font-medium">Official Auto-Entrepreneur Status</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gold rounded-full mr-4"></div>
                <span className="text-agency-black font-medium">Based in Khouribga, Morocco</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gold rounded-full mr-4"></div>
                <span className="text-agency-black font-medium">Proven Track Record</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gold rounded-full mr-4"></div>
                <span className="text-agency-black font-medium">Results-Driven Approach</span>
              </div>
            </div>
            
            <footer className="mt-8 pt-6 border-t border-gold/20">
              <cite className="text-gold font-semibold text-lg">
                - Mohamed Amine Mounir, Founder & CEO
              </cite>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;