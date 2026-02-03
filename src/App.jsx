import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { OrderProvider } from './context/OrderContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import CartDrawer from './components/CartDrawer';
import './App.css';

export default function App() {
  const [view, setView] = useState('home');
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => setView(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const isAdmin = view === 'dashboard' || view === 'admin-login';

  return (
    <AuthProvider>
      <ProductProvider>
        <OrderProvider>
          <CartProvider>
            <div className="master-app">
              {!isAdmin && (
                <Navbar
                  onAccount={() => window.location.hash = 'account'}
                  onCart={() => setCartOpen(true)}
                  onHome={() => window.location.hash = 'home'}
                />
              )}

              <main className="fade-in">
                {view === 'dashboard' ? <Dashboard /> : view === 'account' ? <Account /> : <Home />}
              </main>

              <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
            </div>
          </CartProvider>
        </OrderProvider>
      </ProductProvider>
    </AuthProvider>
  );
}