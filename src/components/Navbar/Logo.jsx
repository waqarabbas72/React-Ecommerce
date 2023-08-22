import React from 'react'
import { FaShopify } from 'react-icons/fa'

const Logo = () => {
    return (
        <div className='flex items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-300'>
            <div className='p-1'><FaShopify className='h-8 w-8 text-green-700' /></div>
            <div className='p-1 font-bold text-xl'>SHOPIFY</div>
        </div>
    )
}

export default Logo
