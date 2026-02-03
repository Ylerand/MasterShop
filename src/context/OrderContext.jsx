import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();
export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    // Persistencia: Cargamos pedidos del localStorage al iniciar
    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem('mastershop_orders');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('mastershop_orders', JSON.stringify(orders));
    }, [orders]);

    const createOrder = (cartItems, total) => {
        const newOrder = {
            id: `#ORD-${Math.floor(1000 + Math.random() * 9000)}`,
            date: new Date().toLocaleDateString(),
            total: `${total.toFixed(2)} €`,
            status: 'Pendiente de Pago ⚠️',
            items: [...cartItems],
            payNow: true
        };
        setOrders([newOrder, ...orders]);
    };

    const payOrder = (orderId) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: 'Pagado - Preparando Envío 📦', payNow: false } : order
        ));
    };

    return (
        <OrderContext.Provider value={{ orders, createOrder, payOrder }}>
            {children}
        </OrderContext.Provider>
    );
};