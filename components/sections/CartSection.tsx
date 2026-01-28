'use client';

import { ShoppingCart, Trash2, Plus, Minus, CreditCard } from 'lucide-react';

export default function CartSection({
  cartItems,
  onClose,
  removeFromCart,
  updateQuantity,
}: any) {
  const total = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert(`Totale: €${total.toFixed(2)}\n\nIn produzione verrà integrato Stripe per i pagamenti sicuri.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Carrello ({cartItems.length})</h2>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="w-24 h-24 text-gray-300 mb-4" />
            <p className="text-xl text-gray-500">Il carrello è vuoto</p>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-4">
              {cartItems.map((item: any, index: number) => (
                <div key={index} className="flex items-center space-x-4 border rounded-lg p-4">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-lg font-bold text-primary mt-1">€{item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))}
                      className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="p-1 bg-gray-100 rounded hover:bg-gray-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="text-right">
                    <p className="font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="sticky bottom-0 bg-white border-t p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">Totale:</span>
                <span className="text-3xl font-bold text-primary">€{total.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="w-full btn-primary flex items-center justify-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Procedi al Pagamento</span>
              </button>
              <p className="text-sm text-gray-500 text-center mt-2">
                Pagamenti sicuri con Stripe
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
