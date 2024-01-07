"use client"

// components/HeroSection.js
const HeroSection = () => {
    const heroStyles = {
        background: "url('https://images.unsplash.com/photo-1627163439134-7a8c47e08208?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat",
    };

    return (
        <div className="relative bg-dark text-white mb-5 pt-[40vh]" style={heroStyles}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative h-[60vh] z-20 flex flex-col items-start">
                <div className="flex justify-center gap-2 items-center ml-32 mb-10 text-lg">
                    <div className="w-32 h-[2px] bg-amber"></div>
                    let&apos;s try new in
                </div>
                <h1 className={`font-medium text-7xl tracking-wider ml-32`}>WINTER 2024</h1>
            </div>
        </div>
    );
};

export default HeroSection;
