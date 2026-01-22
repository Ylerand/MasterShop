import React, { useState } from 'react'
import { CartProvider, useCart } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import './App.css'

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-container">
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        <Home />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
