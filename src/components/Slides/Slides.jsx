import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import { useGetProductsListQuery } from "../../fashionApi";
import Loader from "../Loader";
import { useGetClothesListQuery } from "../../clothingApi";
import { StarIcon } from "@heroicons/react/24/outline";


const Slides = () => {
    // const { data, isLoading } = useGetProductsListQuery();
    // console.log(data, 'data')

    const { data, isLoading } = useGetClothesListQuery()
    if (isLoading) console.log('Loading');
    console.log(data?.payload?.products);


    return (
        <div className="m-10">
            <div className="text-center my-10">
                <p className="text-rose-800 font-medium">Shop by Popular</p>
                <p className="text-4xl font-medium">Popular on the Shofy store.</p>
            </div>

            <div className="xl:w-[80%] mx-auto">


                <>
                    {
                        !isLoading ? (
                            <Swiper
                                scrollbar={{
                                    hide: true,
                                }}
                                cssMode={true}
                                mousewheel={true}
                                keyboard={true}
                                freeMode={true}
                                modules={[Mousewheel, Keyboard]}
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
                                        slidesPerView: 4,
                                    },

                                    1500: {
                                        slidesPerView: 5,
                                    },
                                }}
                                spaceBetween={20}
                                slidesPerView={5}
                            >
                                {data?.payload?.products.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i} className="group relative ">
                                            <div className=" relative mb-10">
                                                <div className=" relative group">
                                                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                                    <img className=" w-full" src={item.image.url} alt="A girl Posing Img" />
                                                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                        <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to Cart</button>
                                                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                                                    </div>
                                                </div>
                                                <div className="flex items-baseline justify-between px-2 shadow-md">
                                                    <p className=" font-semibold text-xl  text-gray-800 mt-4">${item.prices[0].regularPrice.minPrice}</p>

                                                    <div className="flex items-center justify-center">
                                                        <StarIcon width={20} className="text-yellow-600" />
                                                        <p className="text-lg text-yellow-600 my-2 ">{item.rating.avgRating}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-700 my-3">{item.productTitle}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                                }
                            </Swiper>) : (<Loader />)

                    }
                </>
            </div>
        </div>
    );
};

export default Slides;

// import React from "react";

// // const Slide = () => {
//     return (
//         <div className=" 2xl:container 2xl:mx-auto">

//             <div className=" py-6 lg:px-20 md:px-6 px-4">




//                 <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
//                     <div className=" relative ">
//                         <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
//                             <p className="text-xs leading-3 text-gray-800">New</p>
//                         </div>
//                         <div className=" relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/HqmJYgW/gs-Kd-Pc-Iye-Gg.png" alt="A girl Posing Img" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>
//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
//                         <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
//                     </div>
//                     <div className=" relative">
//                         <div className=" bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1">
//                             <p className=" text-white fonr-normal text-base leading-4">XS , S , M , L</p>
//                         </div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/m6V0MzR/gs-Kd-Pc-Iye-Gg-1.png" alt="A girl wearing white suit and googgles" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>
//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
//                     </div>
//                     <div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/6g1KhhF/pexels-django-li-2956641-1.png" alt="A girl wearing dark blue suit and posing" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>
//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
//                         <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
//                     </div>
//                     <div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/KLDN7Vt/gbarkz-vq-Knu-G8-Ga-Qc-unsplash.png" alt="A girl posing and wearing white suit" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>

//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
//                     </div>
//                     <div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png" alt="Girl posing for an Img" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>

//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
//                     </div>
//                     <div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png" alt="A blonde girl posing" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>

//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
//                         <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
//                     </div>
//                     <div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png" alt="A girl wearing white suit posing in desert" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>

//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
//                     </div>
//                     <div>
//                         <div className="relative group">
//                             <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
//                             <img className=" w-full" src="https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png" alt="Girl wearing pink suit posing" />
//                             <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
//                                 <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
//                                 <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
//                             </div>
//                         </div>

//                         <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
//                         <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
//                     </div>
//                 </div>

//                 <div className=" flex justify-center items-center">
//                     <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slide;
