import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import { useGetProductsListQuery } from "../../fashionApi";
import Loader from "../Loader";
import { useGetProductListQuery } from "../../clothingApi";
import { StarIcon } from "@heroicons/react/24/outline";
import { quickView, fetchProductId } from "../../store/Slices/cardSlice";
import { useDispatch } from "react-redux";
import QuickView from "../QuickView";
import { Link } from "react-router-dom";


const Slides = () => {
    const dispatch = useDispatch()

    const { data, isLoading } = useGetProductListQuery()
    if (isLoading) console.log('Loading');
    console.log(data?.payload?.products);
    
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
                                                         <Link>
                                                         <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white" onClick={() => handleClick(item.webID)}>Quick View</button>
                                                         </Link>
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
            <QuickView />
        </div>
    );
};

export default Slides;

