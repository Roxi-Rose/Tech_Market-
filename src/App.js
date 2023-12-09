import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Auction from './components/auction';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://6566ef4764fcff8d730f588d.mockapi.io/web')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout products={products} />} />
        <Route path='/auction/:id' element={<Auction products={products} />}></Route>
        <Route path='/details/:id' element={<ProductDetails products={products} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;