"use client"

import cartItems from "../Assets/Items.json";
import Image from "next/image";

const Cart = () => {
    const handleBuyNow = () => {
        // Add logic to handle the "Buy Now" action
        console.log('Buying now:', cartItems);
    };

    const handleEditQuantity = (itemId, newQuantity) => {
        // Add logic to handle the "Edit Quantity" action
        console.log(`Editing quantity for item ${itemId} to ${newQuantity}`);
    };

    const handleDeleteItem = (itemId) => {
        // Add logic to handle the "Delete Item" action
        console.log(`Deleting item ${itemId}`);
    };

    return (
        <div className="container mx-auto pt-24 px-4 ">
            <h1 className="text-3xl font-semibold mb-4">Shopping Cart :-</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cartItems.map((item) => (
                    <div key={item.id} className="bg-cardBg p-4 rounded shadow-md  flex flex-col justify-center items-center">
                        <div className="w-2/3 h-40 overflow-hidden bg-red-400">
                            <Image className="bg-cover w-full h-full object-fill" src={item.image_url} alt="image" width={200} height={100} />
                        </div>
                        <p className="text-lg font-semibold text-white mb-2">{item.name}</p>
                        <p className="text-gray-400 mb-2 font-bold">₹ {item.price}</p>
                        <p className="text-gray-400 mb-2">Quantity: {item.quantity}</p>
                        <p className="text-gray-400 mb-2">Total: <span className="italic font-bold"> {item.total_price} ₹ </span></p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleBuyNow()}
                                className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
                            >
                                Buy Now
                            </button>
                            <button
                                onClick={() => handleEditQuantity(item.id, item.quantity + 1)}
                                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                            >
                                Edit Quantity
                            </button>
                            <button
                                onClick={() => handleDeleteItem(item.id)}
                                className="bg-red-500 text-white py-2 px-4 rounded"
                            >
                                Delete Item
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
