import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Messages from './components/admin/Messages';
import { supabase } from './lib/supabase';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user?.email === 'Tiako1998@gmail.com') {
      setIsAdmin(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    document.title = 'Smart Solution IT - Solutions Digitales pour l\'Afrique';
  }, []);

  if (isAdmin && window.location.pathname === '/admin/messages') {
    return <Messages />;
  }

  return (
    <div className="font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;