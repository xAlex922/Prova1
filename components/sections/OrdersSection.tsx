'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { FileText, Download, Eye, Package } from 'lucide-react';

export default function OrdersSection() {
  const { user } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`/api/orders?userId=${user?.id}`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const getStatusColor = (status: string) => {
    const colors: any = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6">Storico Ordini</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{order.orderNumber}</h3>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-primary">€{order.total.toFixed(2)}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="flex items-center space-x-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded"
                >
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Dettagli</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-2 bg-primary text-white hover:bg-secondary rounded">
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Fattura</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Dettagli Ordine</h2>
              <button onClick={() => setSelectedOrder(null)} className="text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Numero Ordine</p>
                <p className="font-semibold">{selectedOrder.orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data</p>
                <p className="font-semibold">{selectedOrder.date}</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-bold mb-3">Articoli</h3>
                {selectedOrder.items.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantità: {item.quantity}</p>
                    </div>
                    <p className="font-semibold">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span>Totale:</span>
                  <span className="text-primary">€{selectedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
