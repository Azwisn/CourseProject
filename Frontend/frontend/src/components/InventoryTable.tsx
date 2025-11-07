import type { Inventory } from "../types/Inventory";

interface Props {
    inventories: Inventory[];
}

export const InventoryTable = ({ inventories }: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                {inventories.map(inv => (
                    <tr key={inv.id}>
                        <td>{inv.title}</td>
                        <td>{inv.description}</td>
                        <td>{inv.ownerId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
