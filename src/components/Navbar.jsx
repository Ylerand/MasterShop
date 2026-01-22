import React from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo">
                    <span className="logo-main">Master</span>
                    <span className="logo-sub">Shop</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#shop">Tienda</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
                <div className="nav-actions">
                    <button className="cart-btn" onClick={onCartClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
