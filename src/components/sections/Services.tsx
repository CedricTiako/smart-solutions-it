import React, { useState } from 'react';
import { services } from '../../data/services';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const handleServiceClick = (id: number) => {
    setActiveService(activeService === id ? null : id);
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)];
    return IconComponent ? <IconComponent size={32} className="text-green-500 mb-4" /> : null;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services technologiques conçus pour propulser votre entreprise dans l'ère du numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 cursor-pointer
                ${activeService === service.id ? 'shadow-xl transform scale-105' : 'hover:shadow-lg'}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="text-center mb-4">
                {getIcon(service.icon)}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeService === service.id ? 'max-h-96 mt-6' : 'max-h-0'
                }`}
              >
                <div className="border-t pt-4">
                  <ul className="space-y-2">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;