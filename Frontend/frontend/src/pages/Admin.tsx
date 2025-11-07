import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

export default function Admin() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setUsers([
            { id: 1, name: "Admin One", email: "admin@example.com", roles: ["Admin"] },
            { id: 2, name: "User Two", email: "user@example.com", roles: ["User"] }
        ]);
    }, []);

    return (
        <div>
            <h1>Admin Panel</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.roles.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
