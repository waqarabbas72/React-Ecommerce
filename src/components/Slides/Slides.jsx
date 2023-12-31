import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import Loader from "../Loader";
import { useGetProductListQuery } from "../../clothingApi";
import { StarIcon } from "@heroicons/react/24/outline";
import { quickView, fetchProductId, addToCart } from "../../store/Slices/cardSlice";
import { useDispatch } from "react-redux";
import QuickView from "../QuickView";
import { Link } from "react-router-dom";

import 'swiper/css/scrollbar';


const Slides = () => {
    const dispatch = useDispatch()

    const { data, isLoading, error } = useGetProductListQuery()

    const handleClick = (id) => {
        dispatch(fetchProductId(id))
        dispatch(quickView())
    }


    return (
        <div className="m-2 sm:m-10 relative">
            <div className="text-center my-10">
                <p className="text-rose-800 font-medium">Shop by Popular</p>
                <p className="text-xl sm:text-4xl font-medium">Popular on the Shofy store.</p>
            </div>

            <div className="xl:w-[80%] mx-auto">


                <>
                    {
                        !isLoading ? (
                            <Swiper
                                scrollbar={{
                                    hide: true,
                                    draggable: true
                                }}
                                cssMode={true}
                                mousewheel={true}
                                keyboard={true}
                                freeMode={true}
                                modules={[Mousewheel, Keyboard, Scrollbar]}
                                breakpoints={{
                                    0: {
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
                                {data?.slice(0, 7).map((item, i) => {
                                    return (
                                        <SwiperSlide key={i} className="group relative ">
                                            <div className=" relative mb-10">
                                                <div className=" relative group">
                                                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                                    <img className="w-32 h-44 sm:w-60 sm:h-72 object-center mx-auto" src={item.image} alt="A girl Posing Img" />
                                                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                        <button className=" font-medium text-xs sm:text-sm leading-4 text-gray-800 bg-white py-1 sm:py-3 w-full" onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
                                                        <Link>
                                                            <button className=" bg-transparent font-medium text-xs sm:text-sm leading-4 border-2 border-white py-1 sm:py-3 w-full mt-2 text-white" onClick={() => handleClick(item.id)}>Quick View</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="flex items-baseline justify-between px-2 shadow-md">
                                                    <p className=" font-semibold text-sm sm:text-xl  text-gray-800 mt-4">${item.price}</p>

                                                    <div className="flex items-center justify-center">
                                                        <StarIcon width={20} className="text-yellow-600" />
                                                        <p className="text-sm sm:text-lg text-yellow-600 my-2 ">{item.rating.rate}</p>
                                                    </div>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-700 my-3">{item.title}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                                }
                            </Swiper>) : (<Loader />)

                    }

                </>
            </div>
            <QuickView />
        </div>
    );
};

export default Slides;

