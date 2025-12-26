import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // 1. Initialize user from localStorage if available
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [loading, setLoading] = useState(false);

    // 2. Mock Login Function
    const login = async (email, password) => {
        return new Promise((resolve) => {
            setLoading(true);
            setTimeout(() => {
                const mockUser = {
                    name: "Ravinder Yadav",
                    email: email,
                    avatar: null, // null means use default placeholder
                    role: "Free Plan",
                    joinedDate: "Dec 2025"
                };
                setUser(mockUser);
                localStorage.setItem('user', JSON.stringify(mockUser));
                setLoading(false);
                resolve(mockUser);
            }, 1000); // 1 sec delay to simulate API
        });
    };

    // 3. Logout Function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // 4. Update Profile (Mock)
    const updateProfile = (updatedData) => {
        const newUser = { ...user, ...updatedData };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, updateProfile, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
