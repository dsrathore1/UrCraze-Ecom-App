"use client"
import { useState } from 'react';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup submitted:', { name, email, password });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-evenly bg-gray-800">
            <form onSubmit={handleSubmit} className="max-w-md p-4 bg-gray-900 shadow-md w-full rounded-md">
                <h2 className="text-2xl font-semibold mb-6 text-white">Signup</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
                        required
                    />
                </div>

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
                        className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
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
                    className="bg-red-500 text-white py-2 px-4 rounded hover_bg-red-600 transition"
                >
                    Signup
                </button>
            </form>
            <div>
                <p>Already have an account? <button className="text-amber py-2 rounded hover_text-darkAmber transition" onClick={() => { window.location.href = "/login" }}>Login</button></p>
            </div>
        </div>
    );
};

export default SignupPage;