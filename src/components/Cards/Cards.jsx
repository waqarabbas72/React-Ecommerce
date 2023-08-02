import React from 'react'
import bags from '../../images/6-2-women-bag-png-hd.png';
import clothing from '../../images/clothings.png';
import shoes from '../../images/shoes.png'
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const data = [
    { name: 'Bags', btn: 'Shop Now', img: bags },
    { name: 'Clothing', btn: 'Shop Now', img: clothing },
    { name: 'Shoes', btn: 'Shop Now', img: shoes }
];

const Cards = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:mx-10 my-6'>

            {data.map((item, index) => (
                <div className='bg-gray-100 flex justify-between items-center px-6 h-80 ' key={index}>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl' >{item.name} </h1>
                        <div className='flex items-center justify-between gap-1 border border-black py-1 px-3 cursor-pointer hover:bg-rose-800 hover:text-white  duration-200'>
                            <button className='border-none hover:bg-transparent '>{item.btn}</button>
                            <ArrowRightIcon className='h-6' />
                        </div>
                    </div>
                    <div className='hover:scale-125 transition-all duration-900'>
                        <img src={item.img} alt="" className='h-56' />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards;
