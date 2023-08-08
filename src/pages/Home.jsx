import React from 'react'
import TopCarousel from '../components/Carousel/TopCarousel'
import Cards from '../components/Cards/Cards'
import CategoryBtn from '../components/CategoryBtn'
import Slides from '../components/Slides/Slides'
import ProductList from '../components/ProductList'
import OurServices from '../components/OurServices/OurServices'
import ShoppingCart from '../components/ShoppingCart'

const Home = () => {
  return (
    <div>
      <TopCarousel />
      <Cards />
      <CategoryBtn />
      <Slides />
      <ProductList />
      <OurServices />
      <ShoppingCart />
    </div>
  )
}

export default Home
