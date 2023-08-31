import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { quickView, addToCart } from "../store/Slices/cardSlice";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/24/outline";
import { useGetProductDetailQuery } from "../clothingApi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const QuickView = () => {
    const prodId = useSelector((state) => state.card.productId)
    const { data } = useGetProductDetailQuery(prodId)

    const { productQuickview } = useSelector((state) => state.card)

    const [color, setColor] = useState("White");
    const [size, setSize] = useState("");

    const getColor = (value) => {
        setColor(value);
    };
    const getSize = (value) => {
        setSize(value);
    };
    const dispatch = useDispatch()

    const handleDispatch = (itemData) => {
        dispatch(addToCart(itemData))
    }
    return (
        <>
            {
                productQuickview && (

                    <>
                        <div className="flex justify-center items-center absolute top-0 right-0 left-0 w-full z-10">
                            <div id="menu" className={"md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-transparent"}>
                                <div className="w-full 2xl:mx-auto relative flex justify-start md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row lg:space-x-8 py-8 md:py-16 lg:py-12 px-4 md:px-6 bg-white border-2 shadow-2xl">
                                    <div className="w-full">
                                        <div className={"flex flex-shrink-0 transform "}>
                                            <img className="flex items-center mx-auto h-44 w-44 md:w-56 md:h-60 lg:w-72 lg:h-80 flex-col justify-center object-center"
                                                src={data?.image} alt="A girl posing front" />
                                        </div>
                                    </div>
                                    <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-3">
                                        <h2 className="  md:text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">{data?.title}</h2>
                                        <div className=" flex justify-start items-center mt-4">
                                            <p className="font-normal leading-6 text-gray-600 mr-4">${data?.price}</p>
                                            <div className="flex items-center mr-3  text-yellow-600">
                                                <StarIcon className="h-5" /> {data?.rating?.rate}
                                            </div>
                                            <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">{data?.rating?.count} reviews</p>
                                        </div>
                                        <div className="mt-10">
                                            <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                                                {color}
                                            </p>
                                            <div className=" flex space-x-2 mt-4">
                                                <div tabIndex="0" onClick={() => getColor("White")} className="focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-6 h-6 bg-gray-50"></div>
                                                <div tabIndex="0" onClick={() => getColor("Red")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-6 h-6 bg-red-700"></div>
                                                <div tabIndex="0" onClick={() => getColor("Yellow")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-6 h-6 bg-yellow-300"></div>
                                            </div>
                                        </div>
                                        <div className=" mt-10 w-full">
                                            <div className=" flex justify-between">
                                                <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                                                <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
                                            </div>
                                            <div className=" grid grid-cols-5 gap-2 sm:flex sm:flex-wrap sm:gap-4 sm:justify-between lg:justify-start mt-4">
                                                <div onClick={() => getSize("XS")} id="XS" className={"font-medium text-xs sm:text-base text-gray-800 border  py-1 w-12 sm:w-16 text-center cursor-pointer " + (size === "XS" ? "border-gray-500" : "border-gray-200")}>
                                                    XS
                                                </div>
                                                <div onClick={() => getSize("S")} id="S" className={"font-medium text-xs sm:text-base text-gray-800 border py-1 w-12 sm:w-16 text-center cursor-pointer " + (size === "S" ? "border-gray-500" : "border-gray-200")}>
                                                    S
                                                </div>
                                                <div onClick={() => getSize("M")} id="M" className={"font-medium text-xs sm:text-base text-gray-800 border py-1 w-12 sm:w-16 text-center cursor-pointer " + (size === "M" ? "border-gray-500" : "border-gray-200")}>
                                                    M
                                                </div>
                                                <div onClick={() => getSize("L")} id="L" className={"font-medium text-xs sm:text-base text-gray-800 border py-1 w-12 sm:w-16 text-center cursor-pointer " + (size === "L" ? "border-gray-500" : "border-gray-200")}>
                                                    L
                                                </div>
                                                <div onClick={() => getSize("XL")} id="XL" className={"font-medium text-xs sm:text-base text-gray-800 border py-1 w-12 sm:w-16 text-center cursor-pointer " + (size === "XL" ? "border-gray-500" : "border-gray-200")}>
                                                    XL
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10 flex justify-center items-center">
                                            <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-64  sm:w-96 hover:bg-black text-base font-medium leading-4 bg-gray-800 py-2 text-white" onClick={() => handleDispatch(data)}>Add to Cart</button>
                                        </div>
                                    </div>
                                    <button onClick={() => dispatch(quickView())} aria-label="show Menu" className="absolute top-4 right-4  md:top-6 md:right-6 focus:outline-none focus:ring-2  focus:ring-gray-800">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.3346 13.3337L2.66797 2.66699M13.3346 2.66699L2.66797 13.3337" stroke="#1F2937" strokeLinecap="square" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <style>
                            {` 
                .slider {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .slide-ana {
                    height: 539px;
                }   

                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s;
                }
            `}
                        </style>
                    </>


                )
            }

        </>

    );
};

export default QuickView;