import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Cards from './components/Cards.jsx/Cards';
import Slides from './components/Slides/Slides';
import { useDispatch } from 'react-redux';
import { categories } from './store/Slices/cardSlice';
import { useGetCategoriesListQuery } from './fashionApi';

const App = () => {
  const { data, isLoading, error } = useGetCategoriesListQuery()
  
  const dispatch = useDispatch()

  useEffect(() => {
      if(!isLoading){
        dispatch(categories(data))
      }else if (isLoading){
        console.log('loDING')
      }
  }, [dispatch, data])



  return (
    <>
      <Navbar />
      <Slider />
      <Cards />
      <Slides />
    </>
  )
};

export default App;
