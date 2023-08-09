import React from 'react'
import { useGetCategoryListQuery } from '../clothingApi';

const CategoryBtn = () => {
    const { data } = useGetCategoryListQuery();
    console.log(data);
    return (
        <div className='my-16'>
            <div>
                <p className='text-4xl text-center my-5 text-rose-800'>Shop by Category</p>
            </div>
            <div className='flex justify-center gap-4 flex-wrap '>

                {
                    data?.map((item, i) => (
                        <button className='border py-2 px-3 hover:text-gray-500' key={i}>{item}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryBtn
