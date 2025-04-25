import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Smart Solution IT</h3>
            <p className="mb-4">
              Nous transformons les entreprises camerounaises par des solutions numériques 
              innovantes et sur mesure, tout en formant les talents de demain.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com" className="text-white hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-white hover:text-green-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-green-400 transition-colors">Développement Web & Mobile</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Conception SI</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Consulting IT</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Formation & Coaching</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Solutions Cloud & DevOps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2 text-green-500" />
                <span>Douala, Cameroun</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-green-500" />
                <span>+237 677 334 686 / +237 690 406 987</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-green-500" />
                <a href="mailto:Tiako1998@gmail.com" className="hover:text-green-400 transition-colors">
                  Tiako1998@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smart Solution IT. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;