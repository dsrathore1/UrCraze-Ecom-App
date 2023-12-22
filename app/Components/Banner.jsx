/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import ShoppingModel from "../Assets/sm.png";
import Image from "next/image";
import { Bebas_Neue } from 'next/font/google';

const b_n = Bebas_Neue({
    style: ["normal"],
    subsets: ["latin"],
    weight: ["400"]
});


const Banner = () => {
    return (
        <>
            <div className='my-8'>
                <h2 className='text-4xl font-light my-10 uppercase '>Offers and Deals</h2>
                <div className='md:flex h-[70vh] w-full hidden relative'>
                    <div className='line absolute bg-black h-[85vh] rotate-[25deg] w-[20rem] right-[35rem] -bottom-[6rem] z-0' />
                    <div className='bg-amber h-full w-full relative'>
                        <div className='absolute w-[200px] h-[100px] bg-black rounded-t-[150px] rounded-r-[150px] rounded-l-[150px] rotate-180 left-8 top-0 rounded-b-none rounded-bl-none rounded-br-none' />
                        <div className='absolute right-[15rem] top-[8rem] circle h-16 w-16 bg-amber border-solid border-black border-[1rem] rounded-full' />
                        <div className='absolute left-[8rem] bottom-[5rem] circle h-16 w-16 bg-amber border-solid border-black border-[1rem] rounded-full' />
                        <Image className='absolute -right-40 -top-6 z-10' src={ShoppingModel} height={100} width={400} alt='shopping'/>
                        <div className={`${b_n.className} flex flex-col absolute left-20 top-10`}>
                            <h1 className='text-5xl tracking-wider text-white uppercase drop-shadow-md'>Super sale</h1>
                            <div className='flex justify-center items-center font-extrabold drop-shadow-lg text-[#EF223A]'>
                                <h1 className='text-10xl -my-20'>50</h1>
                                <h1 className='text-4xl capitalize tracking-wide mt-16 ml-6'>Upto <br /><span className='text-8xl'>%</span></h1>
                            </div>
                            <div className='w-full text-center'>
                                <p className='text-5xl -mt-8 tracking-wide'>On all Products</p>
                                <p className='text-[#EF223A] text-2xl'>December 25,26 and 27</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center flex-col bg-black h-full w-full'>
                        <div className='absolute right-[7rem] top-32 circle h-16 w-16 bg-black border-solid border-amber border-8 rounded-full' />
                        <div className='absolute left-[4rem] bottom-[3rem] circle h-16 w-16 bg-black border-solid border-amber border-8 rounded-full' />
                        <div className='absolute w-[200px] h-[100px] bg-amber rounded-t-[150px] rounded-r-[150px] rounded-l-[150px] -rotate-90 -right-12 bottom-10 rounded-b-none rounded-bl-none rounded-br-none' />
                        <div className='flex justify-center items-start flex-col'>
                            <h1 className='text-8xl uppercase font-bold'>crazy</h1>
                            <h1 className='text-6xl font-semibold uppercase'>{moment().format('dddd')}</h1>
                        </div>
                        <p className='uppercase text-4xl tracking-widest font-thin my-3'>Limited time offer</p>
                        <button className='py-4 px-16 bg-amber text-4xl font-bold rounded-full my-4'>Shop Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner