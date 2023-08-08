import React, { useState } from "react";
import { useSelector } from 'react-redux'
import { quickView } from "../store/Slices/cardSlice";
import { useDispatch } from "react-redux";
import { StarIcon } from "@heroicons/react/24/outline";
import { useGetProductDetailQuery } from "../clothingApi";

const QuickView = () => {
    const id = useSelector((state) => state.card.productId)
    console.log(id, 'id')
    const { data } = useGetProductDetailQuery(id)
    const detailData = data?.payload?.products

    const { productQuickview } = useSelector((state) => state.card)

    const [color, setColor] = useState("White");
    const [size, setSize] = useState("");
    const [slide, setSlide] = useState(true);

    const slideToggle = () => setSlide(!slide);
    const getColor = (value) => {
        setColor(value);
    };
    const getSize = (value) => {
        setSize(value);
    };
    const dispatch = useDispatch()
    return (
        <>
            {
                productQuickview && (
                    <>
                        {
                            detailData?.map((product , i) => {
                                console.log(product)
                                return <>
                                    <div className="flex justify-center items-center absolute top-0 right-0 left-0 w-full z-10" key={i}>
                                        <div id="menu" className={"md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-transparent"}>
                                            <div className="w-full 2xl:mx-auto relative flex justify-start md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-6 bg-white shadow-2xl">
                                                <div className="w-full">
                                                    <div className="relative">
                                                        <div className="slider h-96 sm:h-full">
                                                            <div className="slide-ana flex flex-shrink-0">
                                                                <div className={"flex flex-shrink-0 transform " + (slide ? "translate-x-0" : "-translate-x-full")}>
                                                                    <img className=" lg:block hidden w-full h-full object-center object-cover"
                                                                        src={product.images[0].url} alt="A girl posing front" />
                                                                    <img className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                                                                        src={product.images[0].url} alt="A girl posing front" />
                                                                    <img className=" block md:hidden w-full h-full object-center object-cover"
                                                                        src={product.images[0].url} alt="A girl posing front" />
                                                                </div>
                                                                <div className={"flex flex-shrink-0 transform " + (slide ? "translate-x-full" : "translate-x-0")}>
                                                                    <img className=" lg:block hidden w-full h-full object-center object-cover"
                                                                        src={product.swatchImages[4].URL} alt="A girl posing Back" />
                                                                    <img className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                                                                        src={product.swatchImages[4].URL} alt="A girl posing Back" />
                                                                    <img className=" block md:hidden w-full h-full object-center object-cover"
                                                                        src={product.swatchImages[4].URL} alt="A girl posing Back" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                                                            <button onClick={slideToggle} aria-label="previous" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                                                <svg className="" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="26" cy="26" r="26" fill="white" />
                                                                    <path d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                            <button onClick={slideToggle} aria-label="Next" className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center">
                                                                <svg className="" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="26" cy="26" r="26" fill="white" />
                                                                    <path d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
                                                    <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">{product.productTitle}</h2>
                                                    <div className=" flex justify-start items-center mt-4">
                                                        <p className="font-normal text-lg leading-6 text-gray-600 mr-4">${product.price.regularPrice.minPrice}</p>
                                                        <div className="cursor-pointer flex items-center mr-3  text-yellow-600">
                                                            <StarIcon className="h-5" /> {product.avgRating}
                                                        </div>
                                                        <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">Brand : {product.brand}</p>
                                                    </div>
                                                    <div className="mt-10">
                                                        <p id="text" className=" font-semibold text-base leading-4 text-gray-800">
                                                            {color}
                                                        </p>
                                                        <div className=" flex space-x-2 mt-4">
                                                            <div tabIndex="0" onClick={() => getColor("White")} className="focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-gray-50"></div>
                                                            <div tabIndex="0" onClick={() => getColor("Red")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-red-700"></div>
                                                            <div tabIndex="0" onClick={() => getColor("Yellow")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-yellow-300"></div>
                                                        </div>
                                                    </div>
                                                    <div className=" mt-10 w-full">
                                                        <div className=" flex justify-between">
                                                            <p className="font-semibold text-base leading-4 text-gray-800">Size</p>
                                                            <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">Size guide</p>
                                                        </div>
                                                        <div className=" grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                                                            <div onClick={() => getSize("XSS")} id="XSS" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XSS" ? "border-gray-500" : "border-gray-200")}>
                                                                XXS
                                                            </div>
                                                            <div onClick={() => getSize("XS")} id="XS" className={"font-medium text-base leading-4 text-gray-800 border  py-3 w-20 text-center cursor-pointer " + (size === "XS" ? "border-gray-500" : "border-gray-200")}>
                                                                XS
                                                            </div>
                                                            <div onClick={() => getSize("S")} id="S" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "S" ? "border-gray-500" : "border-gray-200")}>
                                                                S
                                                            </div>
                                                            <div onClick={() => getSize("M")} id="M" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "M" ? "border-gray-500" : "border-gray-200")}>
                                                                M
                                                            </div>
                                                            <div onClick={() => getSize("L")} id="L" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "L" ? "border-gray-500" : "border-gray-200")}>
                                                                L
                                                            </div>
                                                            <div onClick={() => getSize("XL")} id="XL" className={"font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " + (size === "XL" ? "border-gray-500" : "border-gray-200")}>
                                                                XL
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">Find the perfect size?</p>

                                                    <div className="flex flex-col w-full space-y-4 mt-10">
                                                        <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">Add to Cart</button>
                                                        <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">Add to Wishlist</button>
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
                            })
                        }
                    </>
                )
            }

        </>
    );
};

export default QuickView;
