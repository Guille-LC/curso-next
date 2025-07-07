"use client";

import { useAuthContext } from "@/src/components/context/AuthContext";

export default function AdminLayout({ children, login }) {
    const { user, logout } = useAuthContext();

    return (
    <>
    <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {user.isAuthenticated ? (
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={logout} title="Logout">Logout</button>
                </div>{children}
            </div>
        ) : (
            <div className="flex items-center justify-center">{login}</div>
        )}
    </>
    );
}