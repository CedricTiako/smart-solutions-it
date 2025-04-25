import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Réalisations', id: 'projects' },
    { label: 'Équipe', id: 'team' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
            Smart Solution IT
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`font-medium transition-colors ${
                activeSection === item.id
                  ? isScrolled 
                    ? 'text-green-600 border-b-2 border-green-600' 
                    : 'text-white font-bold'
                  : isScrolled 
                    ? 'text-gray-700 hover:text-green-600' 
                    : 'text-white hover:text-green-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-medium py-2 px-4 rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-green-100 text-green-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;