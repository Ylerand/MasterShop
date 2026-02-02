import React, { useState } from 'react';
import './Account.css';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Account = () => {
    const { user, login, logout, updateProfile } = useAuth();
    const { getOrderHistory } = useCart();
    const [isLoginView, setIsLoginView] = useState(true);
    const [formData, setFormData] = useState({ name: '', email: '' });

    const history = getOrderHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        login(formData);
    };

    if (!user) {
        return (
            <div className="account-page container fade-in">
                <div className="auth-box">
                    <h2 className="serif">{isLoginView ? 'Iniciar Sesión' : 'Registrarse'}</h2>
                    <p className="auth-subtitle">Únete a la comunidad exclusiva de MasterShop</p>
                    <form onSubmit={handleLogin}>
                        {!isLoginView && (
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    required
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <label>Correo Electrónico</label>
                            <input
                                type="email"
                                placeholder="email@ejemplo.com"
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="btn-premium w-100">
                            {isLoginView ? 'Entrar' : 'Crear Cuenta'}
                        </button>
                    </form>
                    <p className="auth-switch">
                        {isLoginView ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                        <button onClick={() => setIsLoginView(!isLoginView)}>
                            {isLoginView ? 'Regístrate aquí' : 'Inicia sesión'}
                        </button>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="account-page container fade-in">
            <div className="account-grid">
                <aside className="account-sidebar">
                    <div className="user-info">
                        <div className="user-avatar">{user.name ? user.name[0] : 'U'}</div>
                        <h3 className="serif">{user.name || 'Usuario'}</h3>
                        <p>{user.email}</p>
                    </div>
                    <nav className="account-nav">
                        <button className="active">Mi Perfil</button>
                        <button>Mis Pedidos</button>
                        <button onClick={logout} className="logout-btn">Cerrar Sesión</button>
                    </nav>
                </aside>

                <main className="account-main">
                    <section className="profile-section">
                        <h2 className="serif">Mi Perfil</h2>
                        <div className="info-card">
                            <p><strong>Fecha de registro:</strong> {user.joinDate}</p>
                            <p><strong>Estado:</strong> Miembro Premium ✨</p>
                        </div>
                    </section>

                    <section className="orders-section">
                        <h2 className="serif">Mis Pedidos</h2>
                        {history.length === 0 ? (
                            <div className="empty-history">
                                <p>Aún no has realizado pedidos.</p>
                                <a href="#shop" className="btn-outline">Ir a la tienda</a>
                            </div>
                        ) : (
                            <div className="orders-list">
                                {history.map(order => (
                                    <div key={order.id} className="order-card">
                                        <div className="order-header">
                                            <span>Pedido #{order.id}</span>
                                            <span className="order-status">{order.status}</span>
                                        </div>
                                        <div className="order-summary">
                                            <p>{order.items.length} productos</p>
                                            <p className="order-total">${order.total.toFixed(2)}</p>
                                        </div>
                                        <p className="order-date">{order.date}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Account;
