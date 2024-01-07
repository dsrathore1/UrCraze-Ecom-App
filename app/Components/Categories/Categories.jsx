"use client"
import React, { useState } from 'react';
import CategoryTile from './categoryTile';
import { BsCart, BsTwitter } from 'react-icons/bs';
import { Bebas_Neue } from 'next/font/google';

const b_n = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    style: ["normal"]
});


const Categories = () => {
    const [activeBtn, setActiveBtn] = useState(true);
    const [fashionBtn, setFashionBtn] = useState(false);
    const [trendBtn, setTrendBtn] = useState(false);
    const [sneakerBtn, setSneakerBtn] = useState(false);
    const [formalBtn, setFormalBtn] = useState(false);

    const handleActive = () => {
        setActiveBtn(!activeBtn);
    }
    const handleFashionTab = () => {
        setFashionBtn(!fashionBtn);
    }
    const handleTrendTab = () => {
        setTrendBtn(!trendBtn);
    }
    const handleSneakerBtn = () => {
        setSneakerBtn(!sneakerBtn);
    }
    const handleFormalBtn = () => {
        setFormalBtn(!formalBtn);
    }


    return (
        // Must change the my-32 to my-12
        <div className='z-10 relative my-12'>
            <div className='w-full flex flex-col justify-center items-center my-10'>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white w-24 h-[1px]' />
                    <span className='text-xl capitalize'>click on your choice</span>
                    <div className='bg-white w-24 h-[1px]' />
                </div>
                <h1 className={`${b_n.className} text-7xl tracking-wide uppercase cursor-default`} >featured Categories</h1>
            </div>
            <h1 className='capitalize ml-6 mb-10 text-3xl'>Shop by Category</h1>
            <div className='flex h-[12rem] cursor-default gap-5 justify-evenly overflow-x-scroll no-scrollbar'>
                <CategoryTile on_Click={handleActive} active={activeBtn} icon={<BsCart className='text-3xl' />} category_name={"All products"} />
                <CategoryTile on_Click={handleFashionTab} active={fashionBtn} icon={<BsTwitter className='text-3xl' />} category_name={"Fashion"} />
                <CategoryTile on_Click={handleTrendTab} active={trendBtn} icon={<BsCart className='text-3xl' />} category_name={"Trending"} />
                <CategoryTile on_Click={handleSneakerBtn} active={sneakerBtn} icon={<BsCart className='text-3xl' />} category_name={"Sneakers"} />
                <CategoryTile on_Click={handleFormalBtn} active={formalBtn} icon={<BsCart className='text-3xl' />} category_name={"Formals"} />
            </div>
        </div>
    )
}

export default Categories