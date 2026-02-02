import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="logo">
                        <span className="logo-main">Master</span>
                        <span className="logo-sub">Shop</span>
                    </div>
                    <p className="footer-desc">
                        Exclusividad y estilo para la mujer moderna. Tu tienda de confianza para moda, joyería y belleza.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Explorar</h4>
                    <ul>
                        <li><a href="#shop">Tienda</a></li>
                        <li><a href="#new">Novedades</a></li>
                        <li><a href="#about">Nuestra Historia</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#shipping">Envíos</a></li>
                        <li><a href="#returns">Devoluciones</a></li>
                        <li><a href="#faq">Preguntas Frecuentes</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Contacto</h4>
                    <p>Email: hola@mastershop.com</p>
                    <p>WhatsApp: +56 9 3051 4851</p>
                    <div className="social-icons">
                        {/* SVGs for Instagram, TikTok */}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2026 MasterShop. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
