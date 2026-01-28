'use client';

import { useState } from 'react';
import { Calendar, Clock, CheckCircle, Plus } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { it } from 'date-fns/locale';

const VISIT_TYPES = [
  { id: 'controllo', name: 'Controllo Vista', duration: '30min', price: 0 },
  { id: 'optometrica', name: 'Visita Optometrica', duration: '60min', price: 50 },
];

const MOCK_APPOINTMENTS = [
  { id: '1', type: 'Controllo Vista', date: '2026-02-05', time: '10:30', status: 'confirmed' },
];

export default function AppointmentsSection() {
  const [showBooking, setShowBooking] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const dates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i + 1));
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

  const handleConfirm = () => {
    alert('Prenotazione confermata!');
    setShowBooking(false);
    setStep(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Prenotazioni</h2>
        <button onClick={() => setShowBooking(true)} className="btn-primary flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Nuova Prenotazione</span>
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_APPOINTMENTS.map((apt) => (
          <div key={apt.id} className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{apt.type}</h3>
                <div className="flex items-center space-x-4 text-gray-600 mt-2">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{apt.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{apt.time}</span>
                  </span>
                </div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {step === 1 && 'Tipo di Visita'}
                {step === 2 && 'Seleziona Data'}
                {step === 3 && 'Seleziona Orario'}
              </h2>
              <button onClick={() => setShowBooking(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                {VISIT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      setStep(2);
                    }}
                    className="w-full p-4 border-2 rounded-lg text-left hover:border-primary transition-colors"
                  >
                    <h3 className="font-bold text-lg">{type.name}</h3>
                    <p className="text-gray-600">Durata: {type.duration}</p>
                    <p className="text-2xl font-bold text-primary mt-2">
                      {type.price === 0 ? 'GRATIS' : `€${type.price}`}
                    </p>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {dates.map((date, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedDate(format(date, 'yyyy-MM-dd'));
                        setStep(3);
                      }}
                      className="p-3 border-2 rounded-lg hover:border-primary transition-colors text-center"
                    >
                      <p className="text-sm text-gray-600">{format(date, 'EEE', { locale: it })}</p>
                      <p className="text-2xl font-bold">{format(date, 'd')}</p>
                      <p className="text-sm text-gray-600">{format(date, 'MMM', { locale: it })}</p>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(1)} className="btn-secondary">Indietro</button>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 border-2 rounded-lg transition-colors ${
                        selectedTime === time ? 'border-primary bg-blue-50' : 'hover:border-primary'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setStep(2)} className="btn-secondary flex-1">Indietro</button>
                  <button
                    onClick={handleConfirm}
                    disabled={!selectedTime}
                    className="btn-primary flex-1 disabled:opacity-50"
                  >
                    Conferma
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
