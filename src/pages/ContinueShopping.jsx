import React from "react";
import { Link } from "react-router-dom";
import image from '../images/continueShopping.png'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const ContinueShopping = () => {
    return (
        <div className="h-screen mt-10">
            <div className="flex items-center justify-center py-12">
                <div className="bg-white border rounded-md shadow-xl flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 h-64" src={image} alt="" />
                        <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">Thanks For Shopping</h1>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">You will recieve your order within 3 to 7 days. </p>
                        <Link to={`/`} className="flex items-center mx-4 h-10 w-auto p-2 border rounded-md text-white text-base bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-green-800"> Continue Shopping <ShoppingCartIcon className="h-8 mx-1" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContinueShopping;
