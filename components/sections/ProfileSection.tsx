'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { Edit2, Save, X, Glasses, Eye } from 'lucide-react';

export default function ProfileSection() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user || {});
  const [visits, setVisits] = useState<any[]>([]);
  const [visitCategory, setVisitCategory] = useState<'occhiali' | 'lenti'>('occhiali');

  useEffect(() => {
    if (user) {
      fetchVisits();
    }
  }, [user, visitCategory]);

  const fetchVisits = async () => {
    // Mock visits - in produzione chiamare API
    const mockVisits = {
      occhiali: [
        { id: '1', date: '2024-12-15', type: 'Controllo Vista', notes: 'Prescrizione aggiornata' },
        { id: '2', date: '2024-10-20', type: 'Ritiro Occhiali', notes: 'Ray-Ban RB5154' },
      ],
      lenti: [
        { id: '3', date: '2024-11-30', type: 'Ordine Lenti', notes: 'Acuvue Oasys x2' },
        { id: '4', date: '2024-09-15', type: 'Controllo Lenti', notes: 'Adattamento ottimale' },
      ],
    };
    setVisits(mockVisits[visitCategory]);
  };

  const handleSave = async () => {
    await updateUser(formData);
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      {/* Profile Info */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dati Personali</h2>
          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="text-primary hover:text-secondary">
              <Edit2 className="w-5 h-5" />
            </button>
          ) : (
            <div className="flex space-x-2">
              <button onClick={handleSave} className="text-green-600 hover:text-green-700">
                <Save className="w-5 h-5" />
              </button>
              <button onClick={() => {setIsEditing(false); setFormData(user || {});}} className="text-red-600 hover:text-red-700">
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['nome', 'cognome', 'email', 'telefono', 'indirizzo', 'citta', 'cap', 'dataNascita'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="text"
                name={field}
                value={(formData as any)[field] || ''}
                onChange={handleChange}
                disabled={!isEditing}
                className={`input ${!isEditing ? 'bg-gray-50' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Visit History */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Storico Visite</h2>

        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setVisitCategory('occhiali')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              visitCategory === 'occhiali' ? 'bg-primary text-white' : 'bg-gray-100'
            }`}
          >
            <Glasses className="w-5 h-5" />
            <span>Occhiali</span>
          </button>
          <button
            onClick={() => setVisitCategory('lenti')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              visitCategory === 'lenti' ? 'bg-primary text-white' : 'bg-gray-100'
            }`}
          >
            <Eye className="w-5 h-5" />
            <span>Lenti a Contatto</span>
          </button>
        </div>

        <div className="space-y-4">
          {visits.map((visit) => (
            <div key={visit.id} className="border-l-4 border-primary bg-gray-50 p-4 rounded">
              <div className="flex justify-between">
                <h3 className="font-semibold">{visit.type}</h3>
                <span className="text-sm text-gray-500">{visit.date}</span>
              </div>
              <p className="text-gray-600 mt-2">{visit.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
