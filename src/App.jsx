import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import QuickView from './components/QuickView';


const App = () => {
 
  return (
    <>
    <BrowserRouter>
     <Navbar />
     <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/quickView/:id' element={<QuickView />}/>
     </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
};

export default App;
