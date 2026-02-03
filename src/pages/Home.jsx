import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import './Home.css';

export default function Home() {
    const { products } = useProducts();
    const { addToCart } = useCart();

    // Imágenes de alta costura para el estilo pro
    const defaultImgs = [
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000", // Modelo vestido
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000", // Collar
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000"  // Joyería
    ];

    return (
        <div className="home-container">
            <header className="hero-section">
                <div className="hero-text">
                    <h1 className="hero-title">Nueva Colección - <br /><span>Elegancia Atemporal</span></h1>
                    <p>Luxurolo e-commerce de la web appliinop</p>
                    <button className="btn-primary">Comprar Ahora</button>
                </div>
                <div className="hero-visual">
                    <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000" alt="Fashion" />
                </div>
            </header>

            <section className="product-showcase">
                <div className="product-grid">
                    {products.map((p, i) => (
                        <div key={p.id} className="item-card">
                            <div className="item-img">
                                <img src={p.image || defaultImgs[i % 3]} alt={p.name} />
                            </div>
                            <div className="item-details">
                                <h4>{p.name}</h4>
                                <p className="price">{p.price.toFixed(2)} €</p>
                                <button onClick={() => addToCart(p)}>Añadir al carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}