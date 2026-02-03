import React, { useState, useEffect } from 'react'

// 1. Importamos los Contextos (La lógica global)
import { CartProvider, useCart } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'

// 2. Importamos Páginas y Componentes
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import AdminLogin from './pages/AdminLogin'

// Nota: He quitado 'Account' para evitar el error de archivo faltante.

// 3. Importamos Estilos
import './App.css'

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const { cart } = useCart();

  // Lógica para detectar el cambio de página (Rutas con #)
  useEffect(() => {
    const handleHashChange = () => {
      // Si la ruta es #dashboard, toma 'dashboard'. Si está vacía, toma 'home'
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    // Escuchar cambios y ejecutar al inicio
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Calcular total de items en el carrito para el icono
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Función para decidir qué página mostrar
  const renderPage = () => {
    switch (currentPage) {
      case 'admin-login':
        return <AdminLogin />;
      case 'dashboard':
        return <Dashboard />;
      // case 'account': <--- ELIMINADO TEMPORALMENTE
      //   return <Account />;
      case 'home':
      case 'shop':
      default:
        return <Home />;
    }
  };

  // Ocultar Navbar y Footer en páginas de administración
  const isAdminPage = currentPage === 'admin-login' || currentPage === 'dashboard';

  return (
    <div className="app-container">
      {/* Mostramos Navbar solo si NO estamos en admin */}
      {!isAdminPage && (
        <Navbar
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
        />
      )}

      <main className="fade-in">
        {renderPage()}
      </main>

      {/* Mostramos Footer solo si NO estamos en admin */}
      {!isAdminPage && <Footer />}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  )
}

// Componente Principal que envuelve todo con los Proveedores de datos
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductProvider>
          <AppContent />
        </ProductProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App