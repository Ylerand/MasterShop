import React, { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import { useOrders } from '../context/OrderContext';
import {
    LayoutDashboard,
    ShoppingBag,
    BarChart3,
    Plus,
    Trash2,
    Package,
    LogOut,
    Search,
    Bell,
    Settings,
    X
} from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
    const { products, deleteProduct, addProduct, categories, addCategory, deleteCategory } = useProducts();
    const { orders } = useOrders();
    const { user, logout } = useAuth();

    // State
    const [activeTab, setActiveTab] = useState('inventory');
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState('');

    // New Product Form State
    const [newProduct, setNewProduct] = useState({
        name: '', price: '', category: 'Ropa', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800'
    });

    // ... (Security Guard useEffect remains same)

    // ... (Filter Logic remains same)

    const handleAddProduct = (e) => {
        // ... (remains same)
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (newCategory) {
            addCategory(newCategory);
            setNewCategory('');
        }
    }

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                {/* ... Brand ... */}
                <div className="admin-brand">
                    <h2>Master<span>Shop</span></h2>
                    <p>Admin Console</p>
                </div>

                <nav className="admin-nav">
                    <button className={`nav-btn ${activeTab === 'inventory' ? 'active' : ''}`} onClick={() => setActiveTab('inventory')}>
                        <LayoutDashboard size={20} /> Inventario
                    </button>
                    <button className={`nav-btn ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                        <Package size={20} /> Pedidos <span className="badge-cnt">{orders.length}</span>
                    </button>
                    <button className={`nav-btn ${activeTab === 'collections' ? 'active' : ''}`} onClick={() => setActiveTab('collections')}>
                        <ShoppingBag size={20} /> Colecciones
                    </button>
                    <button className={`nav-btn ${activeTab === 'finance' ? 'active' : ''}`} onClick={() => setActiveTab('finance')}>
                        <BarChart3 size={20} /> Finanzas
                    </button>
                    <button className={`nav-btn ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
                        <Settings size={20} /> Configuración
                    </button>
                </nav>

                <div className="sidebar-footer">
                    {/* ... Logout ... */}
                    <button className="btn-logout-sidebar" onClick={() => { logout(); window.location.hash = 'admin-login'; }}>
                        <LogOut size={18} /> Cerrar Sesión
                    </button>
                </div>
            </aside>

            <main className="admin-main">
                {/* ... Header ... */}
                <header className="admin-header">
                    {/* ... Search ... */}
                    <div className="search-bar">
                        <Search size={18} color="#888" />
                        <input type="text" placeholder="Buscar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <div className="header-actions">
                        <button className="icon-btn"><Bell size={20} /></button>
                        <div className="admin-avatar">A</div>
                    </div>
                </header>

                <div className="dashboard-content">
                    {/* ... Stats Row (remains same) ... */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon bg-blue"><ShoppingBag size={24} color="#007bff" /></div>
                            <div><h3>{products.length}</h3><p>Productos</p></div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon bg-green"><BarChart3 size={24} color="#28a745" /></div>
                            <div>
                                <h3>${orders.reduce((acc, o) => acc + parseFloat(o.total.replace('€', '') || 0), 0).toFixed(2)}</h3>
                                <p>Ingresos</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon bg-purple"><Package size={24} color="#6f42c1" /></div>
                            <div><h3>{categories.length}</h3><p>Colecciones</p></div>
                        </div>
                    </div>

                    {/* VISTA: INVENTARIO */}
                    {activeTab === 'inventory' && (
                        /* ... Inventory Table ... */
                        <div className="content-card">
                            <div className="card-header">
                                <h3>Inventario Global</h3>
                                <button className="btn-add-primary" onClick={() => setAddModalOpen(true)}>
                                    <Plus size={18} /> Añadir Producto
                                </button>
                            </div>
                            <div className="table-responsive">
                                <table className="pro-table">
                                    <thead><tr><th>Producto</th><th>Categoría</th><th>Precio</th><th>Acciones</th></tr></thead>
                                    <tbody>
                                        {filteredProducts.map(p => (
                                            <tr key={p.id}>
                                                <td className="product-cell">
                                                    <img src={p.image} alt="" />
                                                    <div><strong>{p.name}</strong><span>ID: #{p.id}</span></div>
                                                </td>
                                                <td>{p.category}</td>
                                                <td className="price-cell">{p.price.toFixed(2)} €</td>
                                                <td>
                                                    <button className="action-btn delete" onClick={() => { if (confirm('¿Borrar?')) deleteProduct(p.id) }}><Trash2 size={16} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* VISTA: COLECCIONES */}
                    {activeTab === 'collections' && (
                        <div className="content-card">
                            <div className="card-header">
                                <h3>Gestor de Colecciones</h3>
                                <form onSubmit={handleAddCategory} className="mini-form">
                                    <input
                                        type="text"
                                        placeholder="Nueva Colección..."
                                        value={newCategory}
                                        onChange={(e) => setNewCategory(e.target.value)}
                                        className="input-mini"
                                    />
                                    <button type="submit" className="btn-mini"><Plus size={16} /> Crear</button>
                                </form>
                            </div>
                            <div className="collections-grid">
                                {categories.map((cat, idx) => (
                                    <div key={idx} className="collection-card">
                                        <h4>{cat}</h4>
                                        <button className="btn-icon-delete" onClick={() => { if (confirm('¿Borrar colección?')) deleteCategory(cat) }}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* VISTA: PEDIDOS */}
                    {activeTab === 'orders' && (
                        /* ... Orders Table ... */
                        <div className="content-card">
                            <div className="card-header"><h3>Pedidos Recientes</h3></div>
                            <table className="pro-table">
                                <thead><tr><th>ID</th><th>Fecha</th><th>Total</th><th>Estado</th></tr></thead>
                                <tbody>
                                    {filteredOrders.map(o => (
                                        <tr key={o.id}>
                                            <td>#{o.id}</td><td>{new Date().toLocaleDateString()}</td><td className="price-cell">{o.total}</td>
                                            <td><span className={`status-pill ${o.payNow ? 'warning' : 'active'}`}>{o.status}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* OTHERS */}
                    {(activeTab === 'finance' || activeTab === 'settings') && (
                        <div className="content-card empty-state">
                            <Settings size={48} color="#ccc" style={{ marginBottom: '1rem' }} />
                            <h3>Próximamente v2.0</h3>
                        </div>
                    )}
                </div>
            </main>

            {/* MODAL ADD PRODUCT */}
            {isAddModalOpen && (
                <div className="modal-overlay">
                    <div className="admin-modal">
                        <div className="modal-top"><h3>Nuevo Producto</h3><X className="close" onClick={() => setAddModalOpen(false)} /></div>
                        <form onSubmit={handleAddProduct}>
                            <input type="text" placeholder="Nombre" required value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
                            <div className="flex-row">
                                <input type="number" placeholder="Precio" required value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                                <select value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}>
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <input type="text" placeholder="URL Imagen" required value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
                            <button type="submit" className="btn-save">Guardar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
