import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const checkoutWhatsApp = () => {
        const phoneNumber = "56930514851";
        let message = "¡Hola MasterShop! ✨ Me gustaría realizar un pedido:\n\n";

        cart.forEach((item) => {
            message += `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
        });

        message += `\n*TOTAL: $${total.toFixed(2)}*\n\nCoordinemos el pago y envío.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total, checkoutWhatsApp }}>
            {children}
        </CartContext.Provider>
    );
};
