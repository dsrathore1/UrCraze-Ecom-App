import React from "react";
import Product from "./Product";

const ProductLists = () => {
  return (
    <div className="h-[80vh] w-full gap-8 flex justify-center items-center">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default ProductLists;
