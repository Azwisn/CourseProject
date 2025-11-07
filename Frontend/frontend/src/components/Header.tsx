import type { FC } from "react";
import { useAuth } from "../auth/AuthProvider";

const Header: FC = () => {
    const { user, logout } = useAuth();

    return (
        <header>
            {user ? (
                <>
                    <span>{user.username}</span>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <span>Not logged in</span>
            )}
        </header>
    );
};

export default Header;
