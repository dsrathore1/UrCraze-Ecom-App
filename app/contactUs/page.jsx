"use client"
import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });

    };

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className='text-6xl select-none'>Contact Us</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full p-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-white text-md font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 text-white rounded"
                        required
                    />
                </div>

                <div className="mb-4 text-black">
                    <label htmlFor="email" className="block text-white text-md font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 text-white rounded"
                        required
                    />
                </div>

                <div className="mb-4 text-black">
                    <label htmlFor="message" className="block text-white text-md font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 bg-gray-800 border border-gray-600 text-white rounded"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-amber text-white py-2 px-4 rounded hover_bg-darkAmber transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
