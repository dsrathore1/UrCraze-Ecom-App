import React from 'react';
import Image from "next/image";
import { CHANEL, CK, DIOR, PRADA, ZARA } from "../Assets/Companies/export.js";

const Companies_Logo = () => {
    return (
        <div className='bg-white/90 backdrop-blur-sm flex w-full justify-evenly h-24 items-center'>
            <Image className='h-16' height={120} width={100} src={CHANEL} alt='#' />
            <Image className='h-28 w-32' height={120} width={100} src={CK} alt='#' />
            <Image className='h-32 w-32' height={250} width={120} src={DIOR} alt='#' />
            <Image className='h-8' height={120} width={150} src={PRADA} alt='#' />
            <Image className='h-24 w-24' height={120} width={100} src={ZARA} alt='#' />
        </div>
    )
}

export default Companies_Logo