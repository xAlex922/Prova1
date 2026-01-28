'use client';

import { useAuth } from '@/lib/auth';
import { useState, useEffect } from 'react';
import { 
  Glasses, 
  ShoppingCart, 
  Calendar, 
  User, 
  MessageCircle,
  Eye,
  Package,
  Zap,
  FileText
} from 'lucide-react';

// Import components
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const { user, isLoading } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Glasses className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ottica Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La tua ottica di fiducia, sempre con te. Acquista online, prenota visite e gestisci il tuo profilo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Login/Register Forms */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!showRegister ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Accedi</h2>
                <LoginForm />
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Non hai un account?{' '}
                    <button
                      onClick={() => setShowRegister(true)}
                      className="text-primary font-semibold hover:underline"
                    >
                      Registrati
                    </button>
                  </p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700 font-medium">Demo Account:</p>
                  <p className="text-sm text-gray-600">Email: demo@ottica.com</p>
                  <p className="text-sm text-gray-600">Password: demo123</p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6 text-center">Registrati</h2>
                <RegisterForm />
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Hai già un account?{' '}
                    <button
                      onClick={() => setShowRegister(false)}
                      className="text-primary font-semibold hover:underline"
                    >
                      Accedi
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Shop Online</h3>
                  <p className="text-gray-600">
                    Acquista occhiali, lenti a contatto e accessori direttamente online
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Prenota Visite</h3>
                  <p className="text-gray-600">
                    Prenota controlli vista gratuiti o visite optometriche complete
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ordine Rapido</h3>
                  <p className="text-gray-600">
                    Ordina le tue lenti a contatto in pochi click con la tua prescrizione
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Chat Diretta</h3>
                  <p className="text-gray-600">
                    Contatta il tuo ottico di fiducia per qualsiasi domanda
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Storico & Fatture</h3>
                  <p className="text-gray-600">
                    Accedi al tuo storico ordini, visite e scarica le fatture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p className="mb-2">© 2024 Ottica Demo - Applicazione dimostrativa</p>
          <p className="text-sm">Production-ready • Deployable su Vercel • Backend con API</p>
        </footer>
      </div>
    </div>
  );
}
