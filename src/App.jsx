import React, { useState } from 'react';
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

  const renderView = () => {
    switch (view) {
      case 'dashboard': return <Dashboard />;
      case 'account': return <Account />;
      default: return <Home />;
    }
  };

  const isAdmin = view === 'dashboard';

  return (
    <AuthProvider>
      <ProductProvider>
        <OrderProvider>
          <CartProvider>
            <div className="master-app">
              {!isAdmin && <Navbar onAccount={() => setView('account')} onCart={() => setCartOpen(true)} onHome={() => setView('home')} />}

              {renderView()}

              <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} onCheckout={() => { setCartOpen(false); setView('account'); }} />
            </div>
          </CartProvider>
        </OrderProvider>
      </ProductProvider>
    </AuthProvider>
  );
}