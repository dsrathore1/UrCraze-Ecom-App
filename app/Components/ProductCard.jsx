import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-cardBg p-4 h-[70vh] shadow-md rounded-md hover_scale-[.9] duration-[.8s] ease-in-out transition-all relative ">
            <Image src={product.image} alt={product.name} width={500} height={400} className="w-full h-[18rem] object-cover mb-4 rounded-md" priority={true} />
            <h2 className="text-xl font-bold text-white capitalize tracking-wide">{product.name}</h2>
            <p className="text-gray-300 my-4 text-ellipsis overflow-hidden whitespace-nowrap">{product.description}</p>
            <p className="text-amber font-bold mt-2">₹{product.price}</p>
            <div className="flex items-center justify-between px-5">
                <button className="bg-amber hover_bg-lightAmber text-white px-4 py-2 mt-4 rounded-md cursor-pointer">Add to Cart</button>
                <button className="border-amber hover_border-darkAmber border-2 text-white px-4 py-2 mt-4 rounded-md">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductCard;
