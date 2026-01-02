'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, name: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check for existing session (mocking local storage check)
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, _password: string) => {
        setIsLoading(true);
        try {
            // Mock login implementation
            const mockUser: User = {
                id: '1',
                email,
                name: email.split('@')[0],
                role: 'user',
            };

            await new Promise((resolve) => setTimeout(resolve, 800));

            setUser(mockUser);
            localStorage.setItem('auth_user', JSON.stringify(mockUser));
            router.push('/leads');
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (email: string, name: string, _password: string) => {
        setIsLoading(true);
        try {
            // Mock signup implementation
            const mockUser: User = {
                id: Math.random().toString(36).substr(2, 9),
                email,
                name,
                role: 'user',
            };

            await new Promise((resolve) => setTimeout(resolve, 800));

            setUser(mockUser);
            localStorage.setItem('auth_user', JSON.stringify(mockUser));
            router.push('/leads');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
