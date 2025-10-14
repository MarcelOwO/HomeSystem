"use client";

import {useState} from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        try {

            const res = await fetch('/api/auth/login', {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({email, password}),
            });
            if (res.ok) {
                const data = await res.json();
                localStorage.setItem('token', data.token);
                window.location.href = '/';
            } else {
                const error = await res.json();
                alert(error.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error)
            alert('An error occurred during loging');

        }
    }

    return (
        <section className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded p-2"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border rounded p-2"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </section>
    );
}
