import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import QuickView from './components/QuickView';
import AllProducts from './pages/AllProducts';
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import ShoppingCart from './components/ShoppingCart';
import Checkout from './pages/Checkout';
import { useDispatch } from 'react-redux';
import { itemsInCart } from './store/Slices/cardSlice';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itemsInCart())
  })

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/quickView/:id' element={<QuickView />} />
          <Route path='/allProducts' element={<AllProducts />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <ShoppingCart />
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
