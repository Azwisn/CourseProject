import { useEffect, useState } from "react";
import type { Inventory } from "../types/Inventory";
import { apiClient } from "../api/apiClient";
import { InventoryTable } from "../components/InventoryTable";

export const Home = () => {
    const [inventories, setInventories] = useState<Inventory[]>([]);

    useEffect(() => {
        apiClient.get("/inventories").then(res => setInventories(res.data));
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <InventoryTable inventories={inventories} />
        </div>
    );
};
