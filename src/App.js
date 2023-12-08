import React from 'react';
import Layout from './components/Layout';
import Auction from './components/auction'
import Cart from './components/Cart';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';




function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path = '/' element={<Layout/>}/>
      <Route path = '/Cart' element = {<Cart/>}/>
      <Route path = '/Detail' element = {<ProductDetails/>}/>
      <Route path = '/Auction' element = {<Auction/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
