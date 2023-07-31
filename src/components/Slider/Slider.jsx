import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from '../Button/Button';

import slide1 from '../../images/s1.webp'
import slide2 from '../../images/s2.png';
import slide3 from '../../images/s3.webp';


const Slider = () => {

    return (


        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            className='md:mx-10 mt-5'
        >

            <div className='w-full flex  items-center justify-center  bg-gray-200'>
                <div className='flex flex-col md:flex-row  w-[80%] items-start md:items-center'>
                    <div className=' flex-1 pt-10 md:pt-0 md:ml-5 text-start'>
                        <p className='text-lg'>New Arrivals 2023</p>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl  my-5'>The Clothing <br /> Collection</h1>
                        <Button name='Shop Collection' />
                    </div>
                    <div className='h-[85vh] flex-1'>
                        <img src={slide1} className='object-contain w-full h-full' />
                    </div>
                </div>
            </div>

            <div className='w-full flex  items-center justify-center bg-gray-200'>
                <div className='flex flex-col md:flex-row  w-[80%] items-start md:items-center'>
                    <div className=' flex-1 pt-10 md:pt-0 md:ml-5 text-start'>
                        <p className='text-lg'>New Arrivals 2023</p>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl  my-5'>The Clothing <br /> Collection</h1>
                        <Button name='Shop Collection' />
                    </div>
                    <div className='h-[85vh] flex-1'>
                        <img src={slide2} className='object-contain w-full h-full' />
                    </div>
                </div>
            </div>

            <div className='w-full flex  items-center justify-center bg-gray-200'>
                <div className='flex flex-col md:flex-row  w-[80%] items-start md:items-center'>
                    <div className=' flex-1 pt-10 md:pt-0 md:ml-5 text-start'>
                        <p className='text-lg'>New Arrivals 2023</p>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl  my-5'>The Clothing <br /> Collection</h1>
                        <Button name='Shop Collection' />
                    </div>
                    <div className='h-[85vh] flex-1'>
                        <img src={slide3} className='object-contain w-full h-full' />
                    </div>
                </div>
            </div>
        </Carousel>


    )
};

export default Slider;