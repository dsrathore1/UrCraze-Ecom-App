"use client"
import Link from 'next/link';
import { Kaushan_Script } from 'next/font/google';
import { BsGithub, BsSearch, BsTwitter, BsInstagram } from "react-icons/bs"
import { useState, useEffect, useRef } from 'react';

const k_s = Kaushan_Script({
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
        <nav className="bg-[#000] flex flex-col w-full z-50">
            <div className='bg-[#181818] flex justify-center items-center h-12'>
                Black Friday. <span className='text-amber font-bold'>Save upto 50%</span>
                <button className='border-2 mx-10 border-amber py-[5px] px-6'>Learn More</button>
            </div>
            <div className='flex items-center h-[20vh] justify-between relative px-5'>
                <ul className='flex justify-center items-center gap-5'>
                    <BsTwitter className='text-2xl' />
                    <BsGithub className='text-2xl' />
                    <BsInstagram className='text-2xl' />
                </ul>
                <Link className='flex flex-col ml-44 justify-center items-center' href="/">
                    <p className={`${k_s.className} transition-all ease-in duration-200 text-white hover:text-amber text-6xl font-bold cursor-pointer`}><span className='text-white'>Ur</span>Craze</p>
                    <p className={`${k_s.className} transition-all ease-in duration-200 hover:text-amber`}>multipurpose shopping hub</p>
                </Link>
                {/* Search Bar */}
                <div className={`p-2 w-[25vw] border-solid border-2 rounded flex items-center space-x-4 ${click ? "border-white" : "border-amber"}`}>
                    <BsSearch className={`text-4xl ${click ? "text-white" : "text-amber"}`} />
                    <input
                        onClick={searchBtnClicked}
                        type="text"
                        placeholder="Search..."
                        className={`w-[40vw] bg-transparent border-none outline-none text-white`}
                        ref={ref}
                    />
                </div>
            </div>

            {/* Navigation Links */}
            <div className='border-t-[.5px] w-full flex justify-center items-center h-[8vh] border-gray-200 border-opacity-20 py-5'>
                <div className="flex items-center space-x-7 font-medium">
                    <Link href="/">
                        <p className="text-lg cursor-pointer text-amber">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="text-white transition-all duration-200 ease-in-out text-lg cursor-pointer hover:text-amber">About Us</p>
                    </Link>
                    <Link href="/cart">
                        <p className="text-white transition-all duration-200 ease-in-out text-lg hover:text-amber">Cart</p>
                    </Link>
                    <Link href="/contactUs">
                        <p className="text-white transition-all duration-200 ease-in-out text-lg cursor-pointer hover:text-amber">Contact Us</p>
                    </Link>

                    <Link href="#">
                        <p className='text-white transition-all duration-200 ease-in-out text-lg cursor-pointer hover:text-amber'>Account</p>
                    </Link>
                    <button className='mx-10 bg-amber px-8 py-2 rounded-sm shadow-md text-black font-semibold' onClick={() => { window.location.href = '/login' }}>Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
