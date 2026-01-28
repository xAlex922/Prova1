'use client';

import { useState } from 'react';
import { Eye, Plus, Minus, ShoppingCart } from 'lucide-react';

const LENSES = [
  { id: '7', name: 'Acuvue Oasys (30 lenti)', price: 35 },
  { id: '8', name: 'Dailies Total 1 (30 lenti)', price: 40 },
  { id: '9', name: 'Biofinity (6 lenti)', price: 30 },
];

const PRESCRIPTION = {
  rightEye: { sphere: '-2.50', cylinder: '-0.75', axis: '180', bc: '8.6' },
  leftEye: { sphere: '-2.25', cylinder: '-0.50', axis: '175', bc: '8.6' },
  brand: 'Acuvue Oasys',
  date: '2024-11-15',
};

export default function QuickOrderSection({ addToCart }: any) {
  const [selectedLens, setSelectedLens] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    const lens = LENSES.find(l => l.id === selectedLens);
    if (lens) {
      addToCart(lens, quantity);
      alert('Lenti aggiunte al carrello!');
      setSelectedLens('');
      setQuantity(1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Ordine Rapido Lenti a Contatto</h2>

      {/* Prescription */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Eye className="w-5 h-5 text-primary" />
          <h3 className="font-bold">Prescrizione Attiva</h3>
          <span className="text-sm text-gray-600">({PRESCRIPTION.date})</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold mb-2">Occhio Destro</p>
            <p className="text-sm">Sfera: {PRESCRIPTION.rightEye.sphere}</p>
            <p className="text-sm">Cilindro: {PRESCRIPTION.rightEye.cylinder}</p>
            <p className="text-sm">Asse: {PRESCRIPTION.rightEye.axis}°</p>
            <p className="text-sm">BC: {PRESCRIPTION.rightEye.bc}</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Occhio Sinistro</p>
            <p className="text-sm">Sfera: {PRESCRIPTION.leftEye.sphere}</p>
            <p className="text-sm">Cilindro: {PRESCRIPTION.leftEye.cylinder}</p>
            <p className="text-sm">Asse: {PRESCRIPTION.leftEye.axis}°</p>
            <p className="text-sm">BC: {PRESCRIPTION.leftEye.bc}</p>
          </div>
        </div>
      </div>

      {/* Lens Selection */}
      <div className="mb-6">
        <h3 className="font-bold mb-3">Seleziona Confezione</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LENSES.map((lens) => (
            <button
              key={lens.id}
              onClick={() => setSelectedLens(lens.id)}
              className={`p-4 border-2 rounded-lg text-left transition-all ${
                selectedLens === lens.id
                  ? 'border-primary bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <p className="font-semibold mb-2">{lens.name}</p>
              <p className="text-2xl font-bold text-primary">€{lens.price}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <h3 className="font-bold mb-3">Quantità</h3>
        <div className="flex items-center space-x-4">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 bg-gray-100 rounded hover:bg-gray-200">
            <Minus className="w-5 h-5" />
          </button>
          <span className="text-2xl font-bold px-6">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="p-2 bg-gray-100 rounded hover:bg-gray-200">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {selectedLens && (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
          <span className="font-semibold">Totale:</span>
          <span className="text-2xl font-bold text-primary">
            €{(LENSES.find(l => l.id === selectedLens)!.price * quantity).toFixed(2)}
          </span>
        </div>
      )}

      <button
        onClick={handleOrder}
        disabled={!selectedLens}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Aggiungi al Carrello</span>
      </button>
    </div>
  );
}
