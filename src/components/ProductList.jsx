import React, { useEffect } from 'react'
import Loader from './Loader'
import { useGetProductListQuery } from '../clothingApi'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { addToCart } from '../store/Slices/cardSlice'
import { useDispatch } from 'react-redux'

const ProductList = () => {

    const dispatch = useDispatch()
    const { data, isLoading, error } = useGetProductListQuery()


    const handleAdd = (itemsData) => {
        dispatch(addToCart(itemsData))
    }


    return (
        <div>
            <div className="text-center mt-10 lg:mt-24 mb-7">
                <p className="text-rose-800 font-medium">All Product Shop</p>
                <p className="text-xl sm:text-4xl font-medium">Customer Favorite Style Product</p>
            </div>


            <div className="bg-white">
                <>
                    {!isLoading ? (
                        <div className="mx-auto max-w-2xl p-4  sm:px-6  lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Products</h2>

                            <div className="grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {
                                    data?.slice(10).map((product, i) => (
                                        <div className="cursor-pointer shadow-lg p-2" key={i}>
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                                                <img
                                                    src={product.image}
                                                    className="h-32 w-32 sm:w-72 sm:h-72 object-center group-hover:opacity-75  transition-all duration-500 mx-auto "
                                                />
                                            </div>
                                            <div>
                                                <h3 className="mt-4 text-xs sm:text-sm text-gray-700" >{product.title}</h3>
                                                <div className='flex justify-between items-center my-2'>
                                                    <p className="mt-1 text-sm sm:text-lg font-medium text-gray-900">${product.price}</p>
                                                    <ShoppingCartIcon className='h-5 sm:h-8 text-red-500 cursor-pointer' onClick={() => handleAdd(product)} />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='flex justify-center my-10' onClick={() => window.scrollTo(0, 0)}>
                                <Link to={`/allProducts`} className='border py-2  px-4 text-center hover:bg-rose-800 hover:text-white duration-500'>Discover More</Link>
                            </div>
                        </div>
                    ) : (<Loader />)}
                </>
            </div>
        </div>
    )
};

export default ProductList;
