import React, { useState } from 'react';
import './Account.css';

// Datos iniciales (Simulación de base de datos)
const INITIAL_ORDERS = [
    { id: '#ORD-001', date: '03/03/2026', total: '$85.000', status: 'Pendiente de Pago ⚠️', items: 'Ramo Gigante', payNow: true },
    { id: '#ORD-002', date: '28/02/2026', total: '$12.500', status: 'En camino 🚚', items: 'Chocolates', payNow: false },
    { id: '#ORD-003', date: '15/02/2026', total: '$45.000', status: 'Entregado ✅', items: 'Caja de Rosas', payNow: false },
];

export default function Account() {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(true);

    // AHORA los pedidos son un Estado (pueden cambiar)
    const [orders, setOrders] = useState(INITIAL_ORDERS);

    const [formData, setFormData] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden ❌");
            return;
        }
        const userName = isLogin ? "Cliente MasterShop" : formData.name;
        setUser({ name: userName, email: formData.email });
    };

    const handleLogout = () => {
        setUser(null);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    };

    // --- NUEVA FUNCIÓN: PAGAR PEDIDO ---
    const handlePayOrder = (orderId) => {
        const confirmPayment = window.confirm(`¿Deseas pagar el pedido ${orderId} ahora? 💳`);

        if (confirmPayment) {
            // Actualizamos la lista de pedidos
            const updatedOrders = orders.map(order => {
                if (order.id === orderId) {
                    return { ...order, status: 'Pagado Exitosamente ✨', payNow: false };
                }
                return order;
            });

            setOrders(updatedOrders);
            alert("¡Pago procesado con éxito! Gracias por tu compra 🌹");
        }
    };

    // --- VISTA: PERFIL ---
    if (user) {
        return (
            <div className="account-container fade-in">
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="header-left">
                            <div className="avatar-circle">{user.name.charAt(0)}</div>
                            <div>
                                <h2>Hola, {user.name} 🌹</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="logout-btn">Cerrar Sesión</button>
                    </div>

                    <div className="orders-section">
                        <h3>🛍️ Mis Pedidos Recientes</h3>
                        <div className="table-responsive">
                            <table className="orders-table">
                                <thead>
                                    <tr>
                                        <th>Pedido</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                        <th>Estado</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="order-id">{order.id}</td>
                                            <td>{order.date}</td>
                                            <td className="order-total">{order.total}</td>
                                            <td>
                                                <span className={`status-badge ${order.payNow ? 'pending' : 'ok'}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>
                                                {order.payNow ? (
                                                    <button
                                                        className="pay-btn"
                                                        onClick={() => handlePayOrder(order.id)}
                                                    >
                                                        Pagar Ahora 💳
                                                    </button>
                                                ) : (
                                                    <span className="text-muted">Ver detalles</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- VISTA: LOGIN / REGISTRO (Igual que antes) ---
    return (
        <div className="account-container fade-in">
            <div className="auth-card">
                <h2 className="auth-title">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
                <p className="auth-subtitle">{isLogin ? 'Gestiona tus pedidos y pagos' : 'Únete hoy mismo'}</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="form-group">
                            <label>NOMBRE</label>
                            <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
                        </div>
                    )}
                    <div className="form-group">
                        <label>EMAIL</label>
                        <input type="email" name="email" placeholder="email@ejemplo.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>{isLogin ? 'CONTRASEÑA' : 'CREAR CONTRASEÑA'}</label>
                        <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label>CONFIRMAR</label>
                            <input type="password" name="confirmPassword" placeholder="••••••••" value={formData.confirmPassword} onChange={handleChange} required />
                        </div>
                    )}
                    <button type="submit" className="auth-btn">{isLogin ? 'ENTRAR' : 'CREAR CUENTA'}</button>
                </form>

                <p className="auth-switch">
                    {isLogin ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
                    <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Regístrate aquí' : 'Inicia sesión'}</span>
                </p>
            </div>
        </div>
    );
}