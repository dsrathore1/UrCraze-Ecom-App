"use client"
import { Kaushan_Script } from 'next/font/google';
import Image from 'next/image';

export const k_s = Kaushan_Script({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal"]
})


const AboutPage = () => {
    return (
        <div className="pt-16 text-white bg-pattern">
            <div className="container mx-auto text-center my-4">
                <h1 className="text-5xl font-extrabold mb-4 text-amber uppercase leading-extra-loose">Welcome to <br /><span className={`${k_s.className} font-bold capitalize`}>UrCraze</span></h1>
                <p className="text-lg mx-96 italic text-gray-300">
                    Elevate your lifestyle with UrCraze - A curated collection of exceptional products
                    designed to inspire and delight.
                </p>
            </div>

            {/* Founder Section */}
            <div className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 text-white">Meet our visionary Founder</h2>
                    <div className="flex flex-col justify-center items-center">
                        <div className="max-w-md mb-6 md:mb-0">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Founder"
                                className="rounded-full shadow-lg border-4 border-dark"
                                width={200}
                                height={50} />
                        </div>
                        <div className="md:ml-8 text-center my-5">
                            <p className="text-lg mb-4 text-gray-300 ">Meet <span className='font-bold text-lg text-white'>John Doe</span>, the creative force behind <span className={`${k_s.className} text-white`}>UrCraze.</span> With a passion for discovering
                                extraordinary products, <span className={`font-bold text-lg text-white`}>John</span> has redefined the online shopping experience.
                                His journey began with a simple idea: to curate a collection that transcends the
                                ordinary, bringing joy and satisfaction to every <span className={`${k_s.className} text-white`}>UrCraze.</span> customer. <span className={`font-bold text-lg text-white`}>John&apos;s</span> commitment
                                to excellence and his relentless pursuit of unique products have shaped <span className={`${k_s.className} text-white`}>UrCraze.</span> into
                                a trusted name in the world of online shopping. Outside the world of e-commerce, John is a passionate advocate for sustainable
                                practices and ethical business. His vision extends beyond products — it encompasses a
                                community where customers share in the joy of discovery.
                            </p>
                            <br />
                            <p>
                                <span className='font-bold text-lg text-white'>His vision:</span> To curate a collection that transcends the ordinary, bringing joy and
                                satisfaction to every <span className={`${k_s.className} font-bold text-lg text-white`}> UrCraze</span> customer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
