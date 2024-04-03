"use client";

import React from "react";
import Headphone from "../../Assets/Designs/Headphone.png";
import Image from "next/image";

import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
  style: ["normal"],
});

const Product = () => {
  return (
    <>
      <div className="h-[90%] w-[22rem] bg-[#50505056] rounded text-center">
        <h1 className="text-center my-4 text-2xl font-semibold uppercase text-gray-300">
          Beats Solo 3
        </h1>
        <div className="w-full h-1/2 flex justify-center items-center">
          <Image
            className="h-[28vh] w-52 hover:scale-[1.2] cursor-pointer transition-all ease-in-out duration-300"
            src={Headphone}
            alt="#ProductImg"
            height={300}
            width={300}
          />
        </div>
        <div>
          <h1
            className={`${caveat.className} text-center tracking-widest text-3xl text-gray-400 font-[700]`}
          >
            Electronic
          </h1>

          <p className="mt-4 text-3xl text-amber font-bold">$165</p>
          <p className="text-justify mx-4 mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            accusamus tenetu Nesciunt accusamus tenetu
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
