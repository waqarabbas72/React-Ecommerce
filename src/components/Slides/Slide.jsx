import React, { useEffect } from 'react'
import s2 from '../../images/s2.png'
import './Slide.css'
import { useSelector } from 'react-redux'

const Slide = () => {

  const data = useSelector((state) => state.card.apiData)
  console.log(data.results, 'data');

  return (
    <div>
      {
        data?.results?.map((item) => {
          <div className='relative bg-gray-200'>
            <div className="card-image h-60 flex items-center justify-center flex-col">
              <img src={s2} alt="" className='h-44 w-auto ' />
            </div>

            <div className='text-center bg-white m-4 absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col gap-4'>
              <span>{item.name}</span>
              <p className='text-xl'>{item.brandName}</p>
              <button className='border border-black py-1 px-2 hover:bg-red-600 hover:text-white hover:border-red-600 duration-300' >Add to cart</button>
            </div>
          </div>
        })
      }
      </div>
  )
}

export default Slide

