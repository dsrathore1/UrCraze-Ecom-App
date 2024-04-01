"use client";
import React from "react";
import CategoryTile from "./categoryTile";
import { BsCart, BsTwitter } from "react-icons/bs";
import { GiBallerinaShoes } from "react-icons/gi";
import { BiTrendingUp } from "react-icons/bi";
import { RiShirtLine } from "react-icons/ri";

import { Bebas_Neue } from "next/font/google";

const b_n = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

const Categories = () => {
  return (
    // Must change the my-32 to my-12
    <div className="z-10 relative my-12">
      <div className="w-full flex flex-col justify-center items-center my-10">
        <div className="flex gap-3 items-center">
          <div className="bg-white w-24 h-[1px]" />
          <span className="text-xl capitalize">click on your choice</span>
          <div className="bg-white w-24 h-[1px]" />
        </div>
        <h1
          className={`${b_n.className} text-7xl tracking-wide uppercase cursor-default`}
        >
          featured Categories
        </h1>
      </div>
      <h1 className="capitalize ml-6 mb-10 text-3xl">Shop by Category</h1>
      <div className="flex h-[12rem] cursor-default gap-5 justify-evenly overflow-x-scroll no-scrollbar">
        <CategoryTile
          icon={<BsCart className="text-3xl" />}
          category_name={"Limited Offers"}
        />
        <CategoryTile
          icon={<BsTwitter className="text-3xl" />}
          category_name={"Fashion"}
        />
        <CategoryTile
          icon={<BiTrendingUp className="text-3xl" />}
          category_name={"Trending"}
        />
        <CategoryTile
          icon={<GiBallerinaShoes className="text-3xl" />}
          category_name={"Sneakers"}
        />
        <CategoryTile
          icon={<RiShirtLine className="text-3xl" />}
          category_name={"Formals"}
        />
      </div>
    </div>
  );
};

export default Categories;
