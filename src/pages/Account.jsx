import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';
import { CreditCard, Lock, X } from 'lucide-react';
import './Account.css';

export default function Account() {
    const { orders, payOrder } = useOrders();
    const [activeOrder, setActiveOrder] = useState(null);

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        payOrder(activeOrder);
        setActiveOrder(null);
        alert("¡Pago procesado con éxito! ✨");
    };

    return (
        <div className="account-view">
            <section className="order-history">
                <h2>Mis Pedidos</h2>
                <div className="order-list">
                    {orders.map(order => (
                        <div key={order.id} className="order-card">
                            <div className="order-header">
                                <span className="order-id">{order.id}</span>
                                <span className={`badge ${order.payNow ? 'wait' : 'done'}`}>{order.status}</span>
                            </div>
                            <div className="order-previews">
                                {order.items.map((item, i) => <img key={i} src={item.image} alt="" />)}
                            </div>
                            <div className="order-footer">
                                <span className="total">{order.total}</span>
                                {order.payNow && (
                                    <button className="btn-pay" onClick={() => setActiveOrder(order.id)}>Pagar con Tarjeta</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {activeOrder && (
                <div className="modal-overlay">
                    <div className="pay-modal">
                        <div className="modal-top">
                            <h3><Lock size={18} /> Pago Seguro</h3>
                            <X className="close" onClick={() => setActiveOrder(null)} />
                        </div>
                        <form onSubmit={handlePaymentSubmit}>
                            <div className="card-input">
                                <label>Nombre del Titular</label>
                                <input type="text" placeholder="Como aparece en la tarjeta" required />
                            </div>
                            <div className="card-input">
                                <label>Número de Tarjeta</label>
                                <input type="text" placeholder="0000 0000 0000 0000" maxLength="16" required />
                            </div>
                            <div className="flex-row">
                                <input type="text" placeholder="MM/YY" maxLength="5" required />
                                <input type="password" placeholder="CVC" maxLength="3" required />
                            </div>
                            <button type="submit" className="btn-confirm">FINALIZAR COMPRA</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}