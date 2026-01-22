import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import './Home.css';

const Home = () => {
    const [filter, setFilter] = useState("Todas");
    const { addToCart } = useCart();

    const filteredProducts = filter === "Todas"
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container hero-content">
                    <span className="hero-subtitle">Nueva Colección 2026</span>
                    <h1 className="hero-title">Elegancia en cada detalle</h1>
                    <p className="hero-desc">Descubre piezas exclusivas diseñadas para la mujer moderna y sofisticada.</p>
                    <a href="#shop" className="btn-premium">Comprar Ahora</a>
                </div>
            </section>

            {/* Categories / Services */}
            <section className="benefits">
                <div className="container benefits-grid">
                    <div className="benefit-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                        <h3>Envíos Rápidos</h3>
                        <p>A todo el país coordinado por WhatsApp.</p>
                    </div>
                    <div className="benefit-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        <h3>Compra Segura</h3>
                        <p>Trato directo y confiable con nosotros.</p>
                    </div>
                    <div className="benefit-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        <h3>Atención 24/7</h3>
                        <p>Resolvemos todas tus dudas al instante.</p>
                    </div>
                </div>
            </section>

            {/* Shop Section */}
            <section className="shop" id="shop">
                <div className="container">
                    <h2 className="section-title">
                        <span>Explora</span>
                        Nuestra Colección
                    </h2>

                    <div className="filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="container about-content">
                    <div className="about-text">
                        <h2 className="serif">Nuestra Historia</h2>
                        <p>MasterShop nació con la visión de empoderar a la mujer a través del estilo. Creemos que la moda y los accesorios no son solo adornos, sino una extensión de tu personalidad y confianza.</p>
                        <p>Cada pieza en nuestro catálogo es seleccionada con amor y criterio, buscando siempre la máxima calidad y exclusividad.</p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800" alt="Sobre MasterShop" />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title"><span>Opiniones</span>Lo que dicen nuestras clientas</h2>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>"La blusa de lino es simplemente perfecta. La atención por WhatsApp fue súper rápida y amable."</p>
                            <span className="author">- Valentina R.</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>"Joyas de excelente calidad. Compré el collar de oro y brilla más de lo que esperaba. ¡Recomendado!"</p>
                            <span className="author">- Maria Jose L.</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">★★★★★</div>
                            <p>"Mi tienda favorita. El envío llegó antes de lo previsto y todo muy bien empaquetado."</p>
                            <span className="author">- Camila S.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
