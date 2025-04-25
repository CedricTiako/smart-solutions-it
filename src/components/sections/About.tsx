import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { title: "Innovation", description: "Nous recherchons constamment les meilleures solutions technologiques." },
    { title: "Excellence", description: "Nous visons l'excellence dans chaque projet et chaque ligne de code." },
    { title: "Éducation", description: "Nous croyons au potentiel des jeunes africains et à leur formation." },
    { title: "Intégrité", description: "Nous agissons avec transparence et honnêteté dans toutes nos relations." }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos de Smart Solution IT</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes une entreprise technologique camerounaise spécialisée dans la transformation digitale et la formation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&fit=crop" 
              alt="Smart Solution IT Team"
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Notre Mission</h3>
            <p className="text-gray-600 mb-8">
              Fondée à Douala par Tiako Tchouameni Cedric Aime, Smart Solution IT a pour mission de digitaliser les 
              entreprises camerounaises en leur proposant des solutions numériques sur mesure, innovantes et performantes. 
              Nous accompagnons également les jeunes talents du digital à travers des formations spécialisées pour les 
              préparer au marché de l'emploi ou à l'entrepreneuriat technologique.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Notre Vision</h3>
            <p className="text-gray-600 mb-8">
              Nous aspirons à faire de Smart Solution IT un leader africain du numérique, reconnu pour la qualité de ses 
              prestations techniques, son impact dans la formation digitale des jeunes, et sa capacité à transformer les 
              entreprises à l'ère du numérique.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Nos Valeurs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;