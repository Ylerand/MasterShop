import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';
import { CreditCard, Lock, X } from 'lucide-react';
import './Account.css';

export default function Account() {
  const { orders, payOrder } = useOrders();
  const [activeOrder, setActiveOrder] = useState(null);
  const [isLogged, setIsLogged] = useState(false); // Simulación simple para el ejemplo

  const handlePayment = (e) => {
    e.preventDefault();
    payOrder(activeOrder);
    setActiveOrder(null);
    alert("¡Pago procesado con éxito! ✨");
  };

  if (!isLogged) {
    return (
      <div className="auth-view">
        <div className="auth-box">
          <h2>Iniciar Sesión</h2>
          <p>Únete a la comunidad exclusiva de MasterShop</p>
          <input type="email" placeholder="email@ejemplo.com" />
          <button className="btn-black" onClick={() => setIsLogged(true)}>ENTRAR</button>
          <p className="auth-footer">¿No tienes cuenta? <span>Regístrate aquí</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="account-view">
      <div className="profile-wrapper">
        <header className="profile-header">
          <div className="user-info">
            <div className="avatar">C</div>
            <div><h2>Hola, Cliente VIP</h2><p>Miembro Gold</p></div>
          </div>
          <button className="btn-outline" onClick={() => setIsLogged(false)}>Cerrar Sesión</button>
        </header>

        <section className="order-history">
          <h3>Mis Pedidos Recientes</h3>
          <table className="order-table">
            <thead>
              <tr>
                <th>Pedido</th>
                <th>Productos</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    <div className="order-thumbs">
                      {order.items.map((item, idx) => (
                        <img key={idx} src={item.image} alt="" className="mini-thumb" />
                      ))}
                    </div>
                  </td>
                  <td className="bold">{order.total}</td>
                  <td><span className={`badge ${order.payNow ? 'wait' : 'done'}`}>{order.status}</span></td>
                  <td>
                    {order.payNow && (
                      <button className="btn-pay" onClick={() => setActiveOrder(order.id)}>Pagar <CreditCard size={14}/></button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {activeOrder && (
        <div className="modal-overlay">
          <div className="pay-modal">
            <div className="modal-top">
              <h3>Pago Seguro</h3>
              <X className="close" onClick={() => setActiveOrder(null)}/>
            </div>
            <form onSubmit={handlePayment}>
              <div className="card-mockup">MasterCard</div>
              <label>Número de Tarjeta</label>
              <input type="text" placeholder="**** **** **** ****" required />
              <div className="flex-row">
                <input type="text" placeholder="MM/YY" required />
                <input type="password" placeholder="CVC" required />
              </div>
              <button type="submit" className="btn-confirm">CONFIRMAR PAGO</button>
              <p className="secure"><Lock size={12}/> Pago encriptado SSL</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}