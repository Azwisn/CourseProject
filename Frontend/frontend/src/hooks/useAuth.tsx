import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

const axiosInstance = axios.create({ baseURL: API_BASE });

type User = { id: string; username: string; displayName?: string } | null;

const AuthContext = createContext<{ user: User, setToken: (t: string | null) => void }>({ user: null, setToken: () => { } });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User>(null);
    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            // Optionally load user profile
            setUser({ id: "me", username: "me" });
        }
    }, []);
    const setToken = (t: string | null) => {
        if (t) {
            localStorage.setItem("jwt", t);
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${t}`;
            setUser({ id: "me", username: "me" });
        } else {
            localStorage.removeItem("jwt");
            delete axiosInstance.defaults.headers.common["Authorization"];
            setUser(null);
        }
    };
    return <AuthContext.Provider value={{ user, setToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export { axiosInstance };
