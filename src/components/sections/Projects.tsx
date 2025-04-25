import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos projets récents qui transforment le paysage numérique africain.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'Tous' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="inline-block px-3 py-1 mb-2 text-xs bg-green-500 text-white rounded-full">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 line-clamp-2">{project.description}</p>
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="text-white" size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;