'use client';

import { useState } from 'react';
import { Send, Shield } from 'lucide-react';

const MOCK_MESSAGES = [
  { id: '1', sender: 'optician', text: 'Ciao! Come posso aiutarti oggi?', time: '10:30' },
];

export default function ChatSection({ onClose }: any) {
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: String(messages.length + 1),
      sender: 'user',
      text: input,
      time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMsg]);
    setInput('');

    // Simula risposta automatica
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          sender: 'optician',
          text: 'Grazie per il messaggio! Ti risponderò al più presto.',
          time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-xl font-bold">Chat con Ottico</h2>
          <button onClick={onClose} className="hover:bg-white/20 rounded p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center space-x-1 bg-green-50 px-3 py-2 text-sm text-green-700">
          <Shield className="w-4 h-4" />
          <span>Chat sicura e privata</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Scrivi un messaggio..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="bg-primary text-white p-3 rounded-lg hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
