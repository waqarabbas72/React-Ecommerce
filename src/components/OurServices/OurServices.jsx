import React from 'react'
import { TruckIcon, CurrencyDollarIcon, ReceiptPercentIcon, PhoneIcon } from '@heroicons/react/20/solid';


const data = [
    { name: 'Free Delivery', desc: 'Orders from all item', icon: 'truck' },
    { name: 'Return & Refund', desc: 'Money back guarantee', icon: 'dollar' },
    { name: 'Member Discount', desc: 'Onevery order over $140.00', icon: 'percent' },
    { name: 'Support 24/7', desc: 'Contact us 24 hours a day', icon: 'phone' },
]

const Icons = {
    truck: TruckIcon,
    dollar: CurrencyDollarIcon,
    percent: ReceiptPercentIcon,
    phone: PhoneIcon
};


const OurServices = () => {

    return (

        <div className='mx-5'>
            <div className="text-center mt-10 lg:mt-24 mb-7">
                <p className="text-rose-800  text-5xl">Our Awesome Services</p>
            </div>

            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-2xl p-6 pb-16  sm:px-6  lg:max-w-7xl lg:px-8 border my-4'>
                {
                    data.map((item, i) => {
                        const Logo = Icons[item.icon]
                        return (
                            <div className='flex justify-center gap-5 border-b-2 lg:border-b-0 lg:border-l-2' key={i}>
                                <div>
                                    <Logo />
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
