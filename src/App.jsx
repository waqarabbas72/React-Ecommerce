import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards/Cards';
import CategoryBtn from './components/CategoryBtn';
import Slides from './components/Slides/Slides';
import ProductList from './components/ProductList';
import OurServices from './components/OurServices/OurServices';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { products } from './store/Slices/cardSlice';
import { useGetProductsListQuery } from './fashionApi';

const App = () => {
  // const { data, isLoading, error } = useGetProductsListQuery()

  // const dispatch = useDispatch()

  // useEffect(() => {
  //     if(!isLoading){
  //       dispatch(products(data))
  //     }else if (isLoading){
  //       console.log('loDING')
  //     }
  // }, [dispatch, data])



  return (
    <>
      <Navbar />
      <Slider />
      <Cards />
      <CategoryBtn />
      <Slides />
      <ProductList />
      <OurServices />
      <Footer />
    </>
  )
};

export default App;
