import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Keyboard, Mousewheel, Scrollbar } from "swiper/modules";
import { useGetProductsListQuery } from "../../fashionApi";
import Loader from "../Loader";
import { useGetClothesListQuery } from "../../clothingApi";


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

                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                <img
                                                    alt={item}
                                                    src={item.image.url}
                                                    className="h-60 w-full  object-center lg:h-full lg:w-full"
                                                />
                                            </div>
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        {item.productTitle}
                                                    </h3>
                                                    <p className="text-sm font-medium text-gray-900">${item.prices[0].regularPrice.minPrice}</p>
                                                </div>
                                                <p className="mt-1 text-sm text-gray-500">{item.categoryName}</p>
                                            </div>
                                            <div className="cursor-pointer">
                                                <button className="bg-gray-200 p-1 rounded-md w-full my-4"><a href="#">Add to bag</a></button>
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
