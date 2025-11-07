import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import type { ReactElement } from "react";

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/profile" />;
    return children;
};
