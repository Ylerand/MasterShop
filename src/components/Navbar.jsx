import React from 'react'

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav style={styles.nav}>
            <h1 style={styles.logo}>
                Master<span style={styles.logoSpan}>Shop</span> 🌸
            </h1>

            <div style={styles.links}>
                <a href="#home" style={styles.link}>Tienda</a>
                <a href="#account" style={styles.link}>Cuenta</a>
                <button onClick={onCartClick} style={styles.cartBtn}>
                    🛍️ Bolsa <span style={styles.badge}>{cartCount}</span>
                </button>
            </div>
        </nav>
    )
}

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)', // Blanco casi puro
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(212, 130, 150, 0.2)' // Sombra rosada
    },
    logo: {
        margin: 0,
        fontSize: '1.8rem',
        fontFamily: "'Playfair Display', serif", // Fuente elegante si la tienes, si no usa la default
        color: '#4a4a4a',
    },
    logoSpan: {
        color: '#d48296', // Color Rosa Principal
        fontStyle: 'italic'
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    link: {
        textDecoration: 'none',
        color: '#666',
        fontWeight: '500',
        fontSize: '1rem',
        transition: 'color 0.3s'
    },
    cartBtn: {
        backgroundColor: '#d48296',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 10px rgba(212, 130, 150, 0.3)'
    },
    badge: {
        backgroundColor: 'white',
        color: '#d48296',
        borderRadius: '50%',
        padding: '2px 8px',
        fontSize: '0.8rem',
        fontWeight: 'bold'
    }
}

export default Navbar