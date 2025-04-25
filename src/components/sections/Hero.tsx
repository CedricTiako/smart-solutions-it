import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const handleGetStarted = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    setActiveSection('services');
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10 text-center text-white py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-green-400">Solutions Digitales</span> <br className="hidden sm:block" />
          Innovantes pour l'Afrique
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Nous digitalisons les entreprises camerounaises avec des solutions sur mesure 
          et formons les talents tech de demain
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleGetStarted}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-md transition-colors flex items-center"
          >
            Contactez-nous
            <ArrowRight size={20} className="ml-2" />
          </button>
          
          <button 
            onClick={handleLearnMore}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Découvrir nos services
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;