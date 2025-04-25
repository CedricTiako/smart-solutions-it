import React from 'react';
import { teamMembers } from '../../data/team';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Équipe</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rencontrez les experts passionnés qui composent Smart Solution IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-2"
            >
              <img 
                src={member.imageUrl} 
                alt={member.name}
                className="w-full h-64 w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-green-600 mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} target="_blank" className="text-gray-500 hover:text-green-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${member.email}`} target="_blank" className="text-gray-500 hover:text-green-500 transition-colors">
                    <Mail size={20} />
                  </a>
                  <a href={`tel:${member.phone}`} target="_blank" className="text-gray-500 hover:text-green-500 transition-colors">
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;