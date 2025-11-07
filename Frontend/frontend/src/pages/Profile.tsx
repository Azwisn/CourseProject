import { InventoryTable } from "../components/InventoryTable";
import type { Inventory } from "../types/Inventory";
import { useEffect, useState } from "react";
import { apiClient } from "../api/apiClient";
import { useAuth } from "../auth/AuthProvider";


export const Profile = () => {
    const [inventories, setInventories] = useState<Inventory[]>([]);
    const { user } = useAuth();


    if (!user) return <div>Loading...</div>;

    useEffect(() => {
        apiClient.get("/inventories/mine").then(res => setInventories(res.data));
    }, []);

    return (
        <div>
            <h1>Profile</h1>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <h1>My Inventories</h1>
            <InventoryTable inventories={inventories} />
        </div>
    );
};
