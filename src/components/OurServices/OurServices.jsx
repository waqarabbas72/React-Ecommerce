import React from 'react'
import { FaTruck, FaDollarSign, FaPercentage, FaPhone } from 'react-icons/fa';


const data = [
    { name: 'Free Delivery', desc: 'Orders from all item', icon: FaTruck },
    { name: 'Return & Refund', desc: 'Money back guarantee', icon: FaDollarSign },
    { name: 'Member Discount', desc: 'Onevery order over $140.00', icon: FaPercentage },
    { name: 'Support 24/7', desc: 'Contact us 24 hours a day', icon: FaPhone },
]



const OurServices = () => {

    return (

        <div className='mx-5'>
            <div className="text-center mt-10 lg:mt-24 mb-7">
                <p className="text-rose-800 text-2xl sm:text-5xl">Our Awesome Services</p>
            </div>

            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-2xl p-6 pb-16  sm:px-6  lg:max-w-7xl lg:px-8 border my-4'>
                {
                    data.map((item, i) => {

                        return (
                            <div className='flex justify-center gap-5 border-b-2 lg:border-b-0 lg:border-l-2 p-2' key={i}>
                                <div>
                                    <item.icon className='h-16 w-6' />
                                </div>

                                <div className=''>
                                    <p className='font-medium'>{item.name}</p>
                                    <p className='text-gray-500'>{item.desc}</p>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </div>
    )
};

export default OurServices;
