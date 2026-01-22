import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simular carga de sesión desde LocalStorage
        const savedUser = localStorage.getItem('mastershop_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        // Simular login exitoso
        const userWithId = { ...userData, id: 'user_123', joinDate: new Date().toLocaleDateString() };
        setUser(userWithId);
        localStorage.setItem('mastershop_user', JSON.stringify(userWithId));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('mastershop_user');
    };

    const updateProfile = (newData) => {
        const updatedUser = { ...user, ...newData };
        setUser(updatedUser);
        localStorage.setItem('mastershop_user', JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateProfile, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
