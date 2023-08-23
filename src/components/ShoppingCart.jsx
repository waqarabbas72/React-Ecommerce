import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { controlCart, removeItem, clearCart, decreaseItem, addToCart, increaseItem, getTotal, itemsInCart } from "../store/Slices/cardSlice";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import emptyCart from '../images/emptyCart.avif'
import { Link } from "react-router-dom";



function ShoppingCart() {
    const dispatch = useDispatch()
    const showBag = useSelector((state) => state.card.showCart)
    const addToCart = useSelector((state) => state.card.cartData)

    const handleCart = () => {
        dispatch(controlCart())
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        dispatch(itemsInCart());

    }, [dispatch])


    const cartSubtotal = useSelector((state) => state.card.cartItemsSubtotal)
    const shippingFee = 20;
    const tax = 0.02;
    const taxAmount = cartSubtotal * tax;
    const cartTotalAmount = cartSubtotal + shippingFee + taxAmount

    return (
        <>
            {showBag && (
                <div className="w-full h-full bg-black z-30 mt-16 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                    <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="flex md:flex-row flex-col justify-end" id="cart">
                            <div className="lg:w-1/2 w-full  px-5 md:pr-4 py-8 bg-white overflow-hidden h-screen" id="scroll">
                                <div className="flex items-center justify-between px-2 w-full z-10 mb-2 border-b-2 py-3 bg-gray-300">
                                    <div className="text-gray-500 hover:text-red-600 cursor-pointer" onClick={() => handleCart()}>
                                        <XMarkIcon className="h-8" />
                                    </div>
                                    <p className="text-3xl font-black leading-10 text-gray-800">Shopping Cart</p>
                                    <div>
                                        {addToCart.length > 0 ? (
                                            <button className="text-red-500 cursor-pointer p-1 underline" onClick={() => dispatch(clearCart())}>Clear Cart</button>
                                        ) : (
                                            <></>
                                        )
                                        }
                                    </div>

                                </div>

                                <div className="shadow-2xl overflow-y-scroll w-full p-3 bg-white h-[75vh]">
                                    {

                                        addToCart.length > 0 ? (addToCart?.map((item, i) => (
                                            <div className="sm:flex  items-center mt-5 py-8 border-t border-gray-200" key={i}>
                                                <div className="w-auto sm:w-1/4 mr-5">
                                                    <img src={item.image} alt='Image' className="w-60 h-60 sm:w-full sm:h-full object-center mx-auto mb-5 md:mb-0" />
                                                </div>
                                                <div className="md:pl-3 md:w-3/4">
                                                    <p className="text-base font-black leading-none text-rose-800 mb-3">{item.title}</p>
                                                    <p className="text-sm text-gray-600 md:pt-0 pt-2">Category : {item.category}</p>
                                                    <p className="text-sm text-gray-600 my-1">Reviews : {item.rating.count}</p>
                                                    <p className="text-sm text-gray-600 flex items-center">Ratings : <StarIcon className="h-4 mx-1" /> {item.rating.rate}</p>
                                                    <p className="text-sm text-gray-600 my-1">Price : ${item.price}</p>
                                                    <div className="flex items-center justify-between pt-5 pr-6">
                                                        <p className="text-sm underline text-red-500 cursor-pointer" onClick={() => dispatch(removeItem(item.id))}>Remove</p>
                                                        <div className="flex gap-3">
                                                            <span className="cursor-pointer" onClick={() => { dispatch(decreaseItem(item)) }}>-</span>
                                                            <span>{item.quantity}</span>
                                                            <span className="cursor-pointer" onClick={() => dispatch(increaseItem(item))} >+</span>
                                                        </div>
                                                        <p className="text-sm font-black leading-none text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))) : (
                                            <div className="mt-5 py-8 border-t border-gray-200 flex flex-col items-center gap-4 text-lg">
                                                <p>OOPS! Looks Like Your Cart Is Empty. </p>
                                                <img src={emptyCart} alt="" className="h-60" />
                                                <Link to={`/`} onClick={() => dispatch(controlCart())} className="flex items-center mx-4 h-10 w-auto p-2 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back To Shop  <ShoppingCartIcon className="h-8 mx-1" /></Link>


                                            </div>
                                        )

                                    }
                                </div>
                            </div>
                            <>
                                {
                                    addToCart.length > 0 ? (
                                        <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                                            <div className="flex flex-col md:h-screen px-10 py-20 justify-between overflow-y-auto">
                                                <div>
                                                    <p className="text-3xl font-black leading-9 text-gray-800">Summary</p>
                                                    <div className="flex items-center justify-between pt-16">
                                                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                        <p className="text-base leading-none text-gray-800 font-medium">${(cartSubtotal).toFixed(2)}</p>
                                                    </div>
                                                    <div className="flex items-center justify-between pt-5">
                                                        <p className="text-base leading-none text-gray-800">Shipping</p>
                                                        <p className="text-base leading-none text-gray-800 font-medium">${shippingFee}</p>
                                                    </div>
                                                    <div className="flex items-center justify-between pt-5">
                                                        <p className="text-base leading-none text-gray-800">Tax</p>
                                                        <p className="text-base leading-none text-gray-800 font-medium">${tax}</p>
                                                    </div>
                                                </div>
                                                <div className="mb-6">
                                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">${(cartTotalAmount).toFixed(2)}</p>
                                                    </div>
                                                    <Link to={`/checkout`} onClick={() => handleCart()} className="w-full px-5 py-3 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                        Checkout
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (<></>)
                                }
                            </>
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
