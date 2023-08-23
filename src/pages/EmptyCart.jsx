import React from "react";
import { Link } from "react-router-dom";
import emptyCart from '../images/emptyCart.avif'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const EmptyCart = () => {
    return (
        <div className="h-screen mt-10">
            <div className="flex items-center justify-center py-12">
                <div className="bg-white border rounded-md shadow-xl flex items-center justify-center mx-4 md:w-2/3 ">
                    <div className="flex flex-col items-center py-16 ">
                        <img className="px-4 h-64" src={emptyCart} alt="" />
                        <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
                        <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">OOPS! Looks Like Your Cart Is Empty </p>
                        <Link to={`/`} className="flex items-center mx-4 h-10 w-auto p-2 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back To Shop  <ShoppingCartIcon className="h-8 mx-1" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;
