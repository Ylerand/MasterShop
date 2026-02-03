import React from 'react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { X, CreditCard, Trash2 } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose }) {
    const { cart, removeFromCart, total, clearCart } = useCart();
    const { createOrder } = useOrders();

    const handleCheckout = () => {
        if (cart.length === 0) return;
        createOrder(cart, total);
        clearCart();
        onClose();
        window.location.hash = 'account';
    };

    return (
        <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h3>Tu Carrito</h3>
                <button onClick={onClose}><X /></button>
            </div>
            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt="" />
                        <div className="info">
                            <h4>{item.name}</h4>
                            <p>{item.price.toFixed(2)} €</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}><Trash2 size={16} /></button>
                    </div>
                ))}
            </div>
            <div className="cart-footer">
                <div className="total">Total: {total.toFixed(2)} €</div>
                <button className="btn-checkout" onClick={handleCheckout}>
                    <CreditCard size={18} /> PAGAR CON TARJETA
                </button>
            </div>
        </div>
    );
}