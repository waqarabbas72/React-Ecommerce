import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlCart } from "../store/Slices/cardSlice";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import QuantityToggle from "./Button/QuantityToggle";


function ShoppingCart() {
    const dispatch = useDispatch()
    const showBag = useSelector((state) => state.card.showCart)
    const addToCart = useSelector((state) => state.card.cartData)
    console.log(addToCart);


    const [quantity, setQuantity] = useState(1)
    // const increment = () => {
    //     setQuantity(quantity + 1)
    // }

    // const decrement = () => {
    //     setQuantity(quantity - 1)
    // }


    return (
        <>
            {showBag && (
                <div className="w-full h-full bg-black z-30 mt-16 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                    <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => dispatch(controlCart())}>
                                    <XMarkIcon className="h-6" />
                                </div>
                                <p className="text-3xl font-black leading-10 text-gray-800 pt-3">Shopping Cart</p>
                                <>
                                    {
                                        addToCart?.map((item) => (
                                            <div className="md:flex items-center mt-5 py-8 border-t border-gray-200">
                                                <div className="w-1/4">
                                                    <img src={item.images[0].url} alt className="w-full h-full object-center object-cover" />
                                                </div>
                                                <div className="md:pl-3 md:w-3/4">
                                                    <p className="text-base font-black leading-none text-rose-800 mb-3">{item.productTitle}</p>
                                                    <p className="text-sm text-gray-600 md:pt-0 pt-2">Brand : {item.brand}</p>
                                                    <p className="text-sm text-gray-600 my-1">Height : 10 inches</p>
                                                    <p className="text-sm text-gray-600 my-1">Color : {item.preSelectedColor}</p>
                                                    <p className="text-sm text-gray-600 flex items-center">Ratings : <StarIcon className="h-4 mx-1" /> {item.avgRating || item.rating.avgRating}</p>
                                                    <div className="flex items-center justify-between pt-5 pr-6">
                                                        <p className="text-sm underline text-red-500 cursor-pointer">Remove</p>
                                                        {/* <QuantityToggle decrement={decrement} increment={increment} /> */}
                                                        <p className="text-sm font-black leading-none text-gray-800">${item.price.regularPrice.minPrice || item.prices.regularPrice.minPrice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </>

                            </div>
                            <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                    <div>
                                        <p className="text-3xl font-black leading-9 text-gray-800">Summary</p>
                                        <div className="flex items-center justify-between pt-16">
                                            <p className="text-base leading-none text-gray-800">Subtotal</p>
                                            <p className="text-base leading-none text-gray-800">$9,000</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Shipping</p>
                                            <p className="text-base leading-none text-gray-800">$30</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-5">
                                            <p className="text-base leading-none text-gray-800">Tax</p>
                                            <p className="text-base leading-none text-gray-800">$35</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                            <p className="text-2xl leading-normal text-gray-800">Total</p>
                                            <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                                        </div>
                                        <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                            Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default ShoppingCart;
