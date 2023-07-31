import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Slide from './Slide';

const Slides = () => {


    return (
        <div className='m-10'>
            <div className='text-center my-10'>
                <p className='text-rose-800 font-medium'>Shop by Popular</p>
                <p className='text-4xl font-medium'>Popular on the Shofy store.</p>
            </div>

            <div className='xl:w-[80%]  mx-auto'>
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        500: {
                            slidesPerView: 2,
                        },
                        639: {
                            slidesPerView: 3,
                        },
                        865: {
                            slidesPerView: 4
                        },

                        1500: {
                            slidesPerView: 5
                        },

                    }}
                    spaceBetween={20}
                    slidesPerView={5}
                >
                    

                        <SwiperSlide>
                            <Slide />
                        </SwiperSlide>
                    



                </Swiper>
            </div>
        </div>
    );
};

export default Slides;