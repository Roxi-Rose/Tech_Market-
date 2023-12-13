import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Auction from './components/auction';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Registration from './components/Registration';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://6566ef4764fcff8d730f588d.mockapi.io/web')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout products={products} />} />
        <Route path='/auction/:id' element={<Auction products={products} />} />
        <Route path='/details/:id' element={<ProductDetails products={products} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />  
        <Route path='/register' element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;