import React from 'react'
import { useGetProductListQuery } from '../clothingApi'
import { Link } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'
import { quickView, fetchProductId, addToCart } from '../store/Slices/cardSlice'
import { useDispatch } from 'react-redux'
import QuickView from '../components/QuickView'
import Loader from '../components/Loader'

const AllProducts = () => {
    const dispatch = useDispatch()

    const { data, isLoading } = useGetProductListQuery()
    console.log(data);

    const handleClick = (id) => {
        dispatch(fetchProductId(id))
        dispatch(quickView())
    }

    return (
        <div className="mx-auto mt-20  p-4  sm:px-6  lg:px-8 relative">
            <h2 className='text-2xl text-center my-5 font-bold'>ALL PRODUCTS</h2>
            <h2 className='text-xl text-center mb-10 text-rose-800'>Products Found : {data?.length}</h2>

            {
                !isLoading ? (
                    <>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {
                                data?.map((product, i) => (
                                    <div key={i} className="group relative shadow-lg">
                                        <div className=" relative mb-10">
                                            <div className=" relative group">
                                                <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                                                <img className=" w-64 h-72 mx-auto" src={product.image} alt="A girl Posing Img" />
                                                <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                                    <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                                                    <Link>
                                                        <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white" onClick={() => handleClick(product.id)}>Quick View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex items-baseline justify-between px-2 shadow-md">
                                                <p className=" font-semibold text-xl  text-gray-800 mt-4">${product.price}</p>

                                                <div className="flex items-center justify-center">
                                                    <StarIcon width={20} className="text-yellow-600" />
                                                    <p className="text-lg text-yellow-600 my-2 ">{product.rating.rate}</p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700 my-3">{product.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ) : (<Loader />)
            }

            <QuickView />
        </div>
    );
}

export default AllProducts
