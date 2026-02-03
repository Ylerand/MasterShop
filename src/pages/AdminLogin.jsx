import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth(); // Usamos el contexto de autenticación

    const handleSubmit = (e) => {
        e.preventDefault();
        // 1. Simulación de credenciales de admin (Hardcoded para esta demo)
        if (email === 'admin@mastershop.com' && password === 'admin123') {

            // 2. Actualizar estado global (Importante para que la App sepa que es admin)
            login({ email, name: 'Admin Master', role: 'admin' });

            // 3. Redireccionar
            window.location.hash = 'dashboard';
        } else {
            setError('Credenciales incorrectas. Prueba admin@mastershop.com / admin123');
        }
    };

    return (
        <div style={{ padding: '4rem', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Acceso Administrativo</h2>
            <p>Solo personal autorizado</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                <input
                    type="email"
                    placeholder="Email de Administrador"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px' }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: '10px', fontSize: '16px' }}
                />

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <button
                    type="submit"
                    style={{
                        padding: '12px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    ENTRAR AL DASHBOARD
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;