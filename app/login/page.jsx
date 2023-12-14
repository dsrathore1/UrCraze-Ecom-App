"use client"
import { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', { email, password });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-evenly bg-gray-800">
            <form onSubmit={handleSubmit} className="max-w-md p-4 bg-gray-900 w-full h-full shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 focus:outline-amber rounded text-white"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                >Login</button>
            </form>
            <div>
                <p>Do not have an account? <button className="text-amber py-2 rounded hover:text-darkAmber transition" onClick={() => { window.location.href = "/signUp" }}>Sign Up</button></p>
            </div>
        </div>
    );
};

export default LoginPage;
