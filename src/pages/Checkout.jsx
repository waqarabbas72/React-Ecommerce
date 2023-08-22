import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { controlCart } from "../store/Slices/cardSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [changeText1, setChangeText1] = useState("City");
    const [changeText2, setChangeText2] = useState("Region");
    const [changeText3, setChangeText3] = useState("Country");


    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };

    const HandleText2 = (e) => {
        setChangeText2(e);
        setDropdown2(false);
    };

    const HandleText3 = (e) => {
        setChangeText3(e);
        setDropdown3(false);
    };

    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(controlCart())
    }

    //Summary Details
    const { cartItemsSubtotal, cartItemsQuantity } = useSelector((state) => state.card)
    const shippingFee = 20;
    const tax = 0.02;
    const taxAmount = cartItemsSubtotal * tax;
    const cartTotalAmount = cartItemsSubtotal + shippingFee + taxAmount

    return (
        <div className="overflow-y-hidden mt-5">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-2 flex gap-3 items-baseline">
                            <a onClick={() => handleCart()} href="javascript:void(0)" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                Back to my bag
                            </a>
                            <Link to={`/`} className="underline  hover:text-gray-800 text-gray-600">Back to Home</Link>
                        </div>
                        <div className="mt-10">
                            <p className="text-xl font-medium leading-5 text-gray-800">Shipping Details</p>
                        </div>
                        <div className="mt-6 flex flex-col justify-start items-start w-full space-y-2 ">
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full" type="text" placeholder="Name" />
                            <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full" type="text" placeholder="Address" />
                            <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                <div className="relative w-full">
                                    <p id="button3" className=" px-2 border border-gray-200 text-left leading-4 text-base text-gray-600 py-3 w-full">
                                        {changeText3}
                                    </p>
                                    <button onClick={() => setDropdown3(!dropdown3)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0 mr-2">
                                        <svg id="close3" className={` transform ${dropdown3 ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <div id="menu3" className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown3 ? "" : "hidden"}`}>
                                        <div className="flex flex-col  w-full">
                                            <p tabIndex={0} onClick={() => HandleText3("USA")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                USA
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText3("UK")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                UK
                                            </p>
                                            <p tabIndex={0} onClick={() => HandleText3("Russia")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                Russia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full" type="text" placeholder="Zip Code" />
                                </div>
                            </div>
                            <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3   w-full" type="text" placeholder="Phone Number" />

                            {/* Credit Card Details */}
                            <p className="text-xl font-medium leading-5 text-gray-800 py-3">Credit Card Details</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-gray-500"> Card Holder</label>
                                    <input id="name" className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600 w-full" placeholder="Card Holder" type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-500"> Expiry Date</label>
                                    <input id="email" className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600  w-full" type="date" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="cardNumber" className="text-gray-500"> Card Number</label>
                                    <input id="cardNumber" className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600  w-full" type="number" placeholder="Card Number" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-500">CVC</label>
                                    <input id="email" className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600 w-full" placeholder="CVC" type="text" />
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-3 w-full md:w-4/12 lg:w-full text-white bg-gray-800 cursor-pointer" value='Place Order'/>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total items</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{cartItemsQuantity}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${cartItemsSubtotal}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${shippingFee}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Tax</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">${(taxAmount).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">${(cartTotalAmount).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;