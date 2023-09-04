import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../images/s1.jpg'
import slide2 from '../../images/s2.jpg';
import slide3 from '../../images/s3.jpg';


const TopCarousel = () => {

    return (


        <Carousel
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            swipeable={true}
            className='md:mx-10 mt-16'
        >

            <div className='w-full h-[50vh] md:h-[80vh]  flex  items-center justify-center  bg-gray-100' style={{
                background: `url(${slide1}) center/cover no-repeat`
            }}>
                <div className='bg-gray-800 bg-opacity-50 flex flex-col md:flex-row  w-full h-full p-10 items-start md:items-center'>
                    <div className=' flex-1 pt-10 md:pt-0 md:ml-5 text-start'>
                        <p className='text-xl text-white font-bold'>New Arrivals 2023</p>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl  my-5 text-white'>The Clothing <br /> Collection</h1>
                    </div>
                </div>
            </div>

            <div className='w-full h-[50vh] md:h-[80vh]  flex  items-center justify-center  bg-gray-100' style={{
                background: `url(${slide2}) center/cover no-repeat`
            }}>
                <div className='bg-gray-800 bg-opacity-50 flex flex-col md:flex-row  w-full h-full p-10 items-start md:items-center'>
                    <div className=' flex-1 pt-10 md:pt-0 md:ml-5 text-start'>
                        <p className='text-xl text-white font-bold'>New Arrivals 2023</p>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl  my-5 text-white'>Best Electronics <br /> Collection</h1>
                    </div>
                </div>
            </div>

            <div className='w-full h-[50vh] md:h-[80vh]  flex  items-center justify-center  bg-gray-100' style={{
                background: `url(${slide3}) center/cover no-repeat`
            }}>
                <div className='bg-gray-800 bg-opacity-50 flex flex-col md:flex-row  w-full h-full p-10 items-start md:items-center'>
                    <div className=' flex-1 pt-10 md:pt-0 md:ml-5 text-start'>
                        <p className='text-xl text-white font-bold'>New Arrivals 2023</p>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl  my-5 text-white'>Our Jewellery <br /> Collection</h1>
                    </div>
                </div>
            </div>
        </Carousel>


    )
};

export default TopCarousel;