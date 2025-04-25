import React, { useState } from 'react';
import { Mail, Phone, MapPin, Smartphone } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast.success('Message envoyé avec succès!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-Nous</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besoin d'une solution digitale ou d'une formation ? Contactez-nous dès aujourd'hui !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="development">Développement Web/Mobile</option>
                  <option value="consulting">Consulting IT</option>
                  <option value="training">Formation</option>
                  <option value="support">Support Technique</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Décrivez votre projet ou votre besoin..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 px-6 text-white font-medium rounded-md transition-colors ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-green-500 hover:bg-green-600'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-green-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">Douala, Cameroun</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-green-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+237 677 334 686 / +237 690 406 987</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-green-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">Tiako1998@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-500 rounded-lg shadow-md p-8 text-white">
              <div className="flex items-center mb-6">
                <Smartphone size={28} className="mr-3" />
                <h3 className="text-2xl font-semibold">Contactez-nous sur WhatsApp</h3>
              </div>
              
              <p className="mb-6">
                Besoin d'une réponse rapide ? Envoyez-nous un message sur WhatsApp et recevez une réponse dans les 24h.
              </p>
              
              <a 
                href="https://wa.me/237677334686" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 px-6 bg-white text-green-600 font-medium rounded-md text-center hover:bg-gray-100 transition-colors"
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;