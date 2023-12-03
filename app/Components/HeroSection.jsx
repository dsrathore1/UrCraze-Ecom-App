"use client"
import { k_s } from "./Navbar";

// components/HeroSection.js
const HeroSection = () => {
    const heroStyles = {
        background: "url('https://images.unsplash.com/photo-1627163439134-7a8c47e08208?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat",
    };

    return (
        <div className="relative bg-dark text-white py-20 mb-5" style={heroStyles}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="mx-auto text-center relative">
                <div className="w-full grid justify-center items-center">
                    <h1 className="text-6xl w-[50vw] font-bold mb-1">Discover the <span className={`${k_s.className} font-black text-amber`}>UrCraze</span> Experience</h1>
                    <p className="text-md mb-4">Explore a world of amazing <span className="text-amber font-semibold"> products and shop with confidence.</span></p>
                    <div>
                        <button className="bg-amber text-white px-6 py-3 rounded-full hover:bg-lightAmber transition duration-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
