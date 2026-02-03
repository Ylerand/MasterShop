import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, ShoppingBag, BarChart3, Plus, Trash2 } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
    const { products, deleteProduct } = useProducts();
    const { user } = useAuth();

    // Security Guard 🛡️
    useEffect(() => {
        if (!user || user.email !== 'admin@mastershop.com') {
            window.location.hash = 'admin-login';
        }
    }, [user]);

    if (!user || user.email !== 'admin@mastershop.com') return null; // Prevent flash

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-brand">MasterShop <span>Admin</span></div>
                <nav>
                    <button className="nav-btn active"><LayoutDashboard size={18} /> Dashboard</button>
                    <button className="nav-btn"><ShoppingBag size={18} /> Productos</button>
                    <button className="nav-btn"><BarChart3 size={18} /> Estadísticos</button>
                </nav>
            </aside>

            <main className="admin-main">
                <div className="stats-row">
                    <div className="stat-box"><span>Ventas</span><h3>500.00 €</h3></div>
                    <div className="stat-box"><span>Total Productos</span><h3>{products.length}</h3></div>
                </div>

                <div className="table-card">
                    <div className="table-header">
                        <h3>Inventario</h3>
                        <button className="btn-add"><Plus size={16} /> Nuevo Producto</button>
                    </div>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Nombre</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(p => (
                                <tr key={p.id}>
                                    <td><img src={p.image} className="thumb" alt="" /></td>
                                    <td>{p.name}</td>
                                    <td>1</td>
                                    <td>{p.price} €</td>
                                    <td>
                                        <button className="btn-del" onClick={() => deleteProduct(p.id)}>
                                            <Trash2 size={14} /> Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}