"use client"
import Link from 'next/link';
import { Kaushan_Script } from 'next/font/google';
import { BsSearch } from "react-icons/bs"
import { useState, useEffect, useRef } from 'react';

export const k_s = Kaushan_Script({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"]
})

const Navbar = () => {
    const [click, setClick] = useState(true);

    const searchBtnClicked = () => {
        setClick(false);
    }

    const ref = useRef(null);

    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setClick(true);
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    return (
        <nav className="bg-[#00000057]  p-4 flex w-full items-center justify-center fixed backdrop-blur-sm z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Title */}
                <Link href="/">
                    <p className={`${k_s.className} text-amber text-4xl font-bold cursor-pointer`}><span className='text-white'>Ur</span>Craze</p>
                </Link>

                {/* Search Bar */}
                <div className={`p-2 border-solid border-2 rounded flex items-center space-x-4 ${click ? "border-white" : "border-amber"}`}>
                    <BsSearch className={`text-2x ${click ? "text-white" : "text-amber"}`} />
                    <input
                        onClick={searchBtnClicked}
                        type="text"
                        placeholder="Search..."
                        className={`w-[40vw] bg-transparent border-none outline-none text-white`}
                        ref={ref}
                    />
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-7">
                    <Link href="/">
                        <p className="text-amber cursor-pointer hover_text-lightAmber">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="text-amber cursor-pointer hover_text-lightAmber">About Us</p>
                    </Link>
                    <Link href="/cart">
                        <p className="text-amber hover_text-lightAmber">Cart</p>
                    </Link>
                    <Link href="/contactUs">
                        <p className="text-amber cursor-pointer hover_text-lightAmber">Contact Us</p>
                    </Link>

                    <Link href="#">
                        <p className='text-amber cursor-pointer hover_text-lightAmber'>Account</p>
                    </Link>
                </div>
            </div>
            <button className='mx-10 bg-amber px-8 py-2 rounded-sm shadow-md text-black font-semibold' onClick={() => { window.location.href = '/login' }}>Login</button>
        </nav>
    );
};

export default Navbar;
