import Image from "next/image";

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <Image src={product.image} alt={product.name} width={500} height={400} className="w-full h-[18rem] object-cover mb-4 rounded-md" priority={true} />
            <h3 className="text-lg font-bold text-black capitalize tracking-wide">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-amber font-bold mt-2">₹{product.price}</p>
            <div className="flex items-center justify-between">
                <button className="bg-amber text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
                <button className="border-amber border-2 text-black px-4 py-2 mt-4 rounded-md">Buy Now</button>

            </div>
        </div>
    );
};

export default ProductCard;
