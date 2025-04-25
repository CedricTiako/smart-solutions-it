import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Mail, Clock, User, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      toast.error('Erreur lors du chargement des messages');
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: 'read' | 'replied') => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, status } : msg
      ));
      toast.success('Statut mis à jour');
    } catch (error) {
      console.error('Error updating message status:', error);
      toast.error('Erreur lors de la mise à jour du statut');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages de Contact</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Messages List */}
            <div className="p-6 border-r border-gray-200">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedMessage?.id === message.id
                        ? 'bg-green-50 border-green-500'
                        : 'bg-gray-50 hover:bg-gray-100'
                    } border`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{message.subject}</h3>
                        <p className="text-sm text-gray-600 mt-1">{message.name}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(message.status)}`}>
                        {message.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{message.message}</p>
                    <p className="text-xs text-gray-400 mt-2">{formatDate(message.created_at)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Details */}
            <div className="col-span-2 p-6">
              {selectedMessage ? (
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">{selectedMessage.subject}</h2>
                    <div className="space-x-2">
                      <button
                        onClick={() => updateMessageStatus(selectedMessage.id, 'read')}
                        className="px-4 py-2 text-sm font-medium text-yellow-700 bg-yellow-100 rounded-md hover:bg-yellow-200"
                      >
                        Marquer comme lu
                      </button>
                      <button
                        onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                        className="px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-md hover:bg-green-200"
                      >
                        Marquer comme répondu
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <User className="w-5 h-5 mr-2" />
                      <span className="font-medium">{selectedMessage.name}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 mr-2" />
                      <a href={`mailto:${selectedMessage.email}`} className="text-blue-600 hover:underline">
                        {selectedMessage.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{formatDate(selectedMessage.created_at)}</span>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex items-start text-gray-600">
                        <MessageSquare className="w-5 h-5 mr-2 mt-1" />
                        <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 mt-12">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Sélectionnez un message pour voir les détails</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;