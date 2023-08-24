import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { controlCart } from "../store/Slices/cardSlice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { useFormik } from "formik";
import { CheckoutSchemas } from "../schemas";
import { toast } from 'react-toastify'

const Checkout = () => {
    const [dropdown, setDropdown] = useState(false);
    const [changeText, setChangeText] = useState("Country");

    const HandleText = (e) => {
        setChangeText(e);
        setDropdown(false);
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

    // Formik 
    const initialValues = {
        name: '',
        email: '',
        address: '',
        zip_code: '',
        phone_number: '',
        card_holder: '',
        expiry_date: '',
        card_number: '',
        cvc: ''
    }

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: CheckoutSchemas,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
            toast.success('Submitted Successfully!')
        },
    });


    return (
        <>
            {cartItemsQuantity ? (
                <div className="overflow-y-hidden mt-5">
                    <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                            <form className="flex w-full  flex-col justify-start items-start" onSubmit={handleSubmit}>
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
                                    <input
                                        className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? (<p className="text-red-700 text-xs">{errors.name}</p>) : null}

                                    <input
                                        className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? (<p className="text-red-700 text-xs">{errors.email}</p>) : null}
                                    <input
                                        className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full"
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.address && touched.address ? (<p className="text-red-700 text-xs">{errors.address}</p>) : null}

                                    <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                                        <div className="relative w-full">
                                            <p id="button3" className=" px-2 border border-gray-200 text-left leading-4 text-base text-gray-600 py-3 w-full">
                                                {changeText}
                                            </p>
                                            <button onClick={() => setDropdown(!dropdown)} className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0 mr-2">
                                                <svg id="close3" className={` transform ${dropdown ? "rotate-180" : ""}  `} width={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6L8 10L4 6" stroke="#4B5563" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                            <div id="menu3" className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${dropdown ? "" : "hidden"}`}>
                                                <div className="flex flex-col  w-full">
                                                    <p tabIndex={0} onClick={() => HandleText("USA")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        USA
                                                    </p>
                                                    <p tabIndex={0} onClick={() => HandleText("UK")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        UK
                                                    </p>
                                                    <p tabIndex={0} onClick={() => HandleText("Russia")} className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full">
                                                        Russia
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <input
                                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600 py-3 w-full"
                                                type="text"
                                                placeholder="Zip Code"
                                                name="zip_code"
                                                value={values.zip_code}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.zip_code && touched.zip_code ? (<p className="text-red-700 text-xs">{errors.zip_code}</p>) : null}
                                        </div>
                                    </div>
                                    <input
                                        className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-3   w-full"
                                        type="number"
                                        placeholder="Phone Number"
                                        name="phone_number"
                                        value={values.phone_number}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.phone_number && touched.phone_number ? (<p className="text-red-700 text-xs">{errors.phone_number}</p>) : null}

                                    {/* Credit Card Details */}
                                    <p className="text-xl font-medium leading-5 text-gray-800 py-3">Credit Card Details</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex flex-col w-">
                                            <label htmlFor="name" className="text-gray-500 text-xs"> Card Holder</label>
                                            <input
                                                id="name"
                                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600 w-full"
                                                placeholder="Card Holder"
                                                type="text"
                                                name="card_holder"
                                                value={values.card_holder}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.card_holder && touched.card_holder ? (<p className="text-red-700 text-xs">{errors.card_holder}</p>) : null}
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="text-gray-500  text-xs"> Expiry Date</label>
                                            <input
                                                id="email"
                                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600  w-full"
                                                type="date"
                                                name="expiry_date"
                                                value={values.expiry_date}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.expiry_date && touched.expiry_date ? (<p className="text-red-700 text-xs">{errors.expiry_date}</p>) : null}
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="cardNumber" className="text-gray-500 text-xs"> Card Number</label>
                                            <input
                                                id="cardNumber"
                                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600  w-full"
                                                type="number"
                                                placeholder="Card Number"
                                                name="card_number"
                                                value={values.card_number}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.card_number && touched.card_number ? (<p className="text-red-700 text-xs">{errors.card_number}</p>) : null}
                                        </div>
                                        <div className="flex flex-col">
                                            <label htmlFor="email" className="text-gray-500 text-xs">CVC</label>
                                            <input
                                                id="email"
                                                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-gray-200 leading-4 text-base placeholder-gray-600 w-full"
                                                placeholder="CVC"
                                                type="text"
                                                name="cvc"
                                                value={values.cvc}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.cvc && touched.cvc ? (<p className="text-red-700 text-xs">{errors.cvc}</p>) : null}
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    className="focus:outline-none focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-focus:ring-gray-800 leading-4 hover:bg-black py-3 w-full md:w-4/12 lg:w-full text-white bg-gray-800 cursor-pointer"
                                    value='Place Order'
                                />
                            </form>
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
            ) :
                <EmptyCart />
            }
        </>
    );
}

export default Checkout;