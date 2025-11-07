import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export interface User {
    id: string;
    username: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    fetchUser: () => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const API_URL = import.meta.env.VITE_API_URL;

    const fetchUser = async () => {
        try {
            const res = await fetch(`${API_URL}/auth/me`, { credentials: "include" });
            if (res.ok) setUser(await res.json());
            else setUser(null);
        } catch {
            setUser(null);
        }
    };

    const logout = () => {
        setUser(null);
        window.location.href = `${API_URL}/auth/logout`;
    };

    useEffect(() => { fetchUser(); }, []);

    return (
        <AuthContext.Provider value={{ user, fetchUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};
