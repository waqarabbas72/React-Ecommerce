import React from 'react'
import { useSelector } from 'react-redux'
import { useGetProductsListQuery } from '../fashionApi'
import Loader from './Loader'

const ProductList = () => {

    const { data, isLoading } = useGetProductsListQuery()
    console.log(data);

    return (
        <div>
            <div className="text-center mt-10 lg:mt-24 mb-7">
                <p className="text-rose-800 font-medium">All Product Shop</p>
                <p className="text-4xl font-medium">Customer Favorite Style Product</p>
            </div>


            <div className="bg-white">
                <>
                    {!isLoading ? (
                        <div className="mx-auto max-w-2xl p-4  sm:px-6  lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">Products</h2>

                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {
                                    data?.results?.slice(0, 12).map((product, i) => (
                                        <a className="group cursor-pointer" key={i}>
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img
                                                    src={product.images[0].url}
                                                    className="h-full w-full object-cover object-center group-hover:opacity-75 hover:rotate-12 hover:scale-125 transition-all duration-500"
                                                />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price.formattedValue}</p>
                                        </a>
                                    ))
                                }
                            </div>

                            <div className='flex justify-center my-10'>
                                <button className='border py-2  px-4 text-center hover:bg-rose-800 hover:text-white duration-500'><a href="#">Discover More</a></button>
                            </div>
                        </div>
                    ) : (<Loader />)}
                </>
            </div>

        </div>
    )
}

export default ProductList
