import React from 'react'
import Button from '../Button/Button';
import { ArrowRightIcon } from '@heroicons/react/20/solid';


const Card = ({ data }) => {
    return (
        <>
            {data.map((item , index) => (
                <div className='bg-gray-200 flex justify-between items-center px-6 h-80 ' key={index}>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl' >{item.name} </h1>
                        <div className='flex items-center justify-between gap-1 border border-black py-1 px-3 cursor-pointer hover:bg-red-600 hover:text-white hover:border-red-600 duration-200'>
                            <button className='border-none hover:bg-transparent '>{item.btn}</button>
                            <ArrowRightIcon className='h-6' />
                        </div>
                    </div>
                    <div className='hover:scale-125 transition-all duration-900'>
                        <img src={item.img} alt="" className='h-56' />
                    </div>
                </div>
            ))}
        </>
    )
};

export default Card;
