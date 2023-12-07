import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Footer from './Footer'; 
import SearchBar from './Searchbar';
import Devices from './Devices';
import Browse from './test'; 
import Filter from './testFilter';
import ProductListingForm from './ProductListingForm'
import ProductDetails from './ProductDetails';

function Layout() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
  
      <section className="layout">
        <Header />
        <SearchBar />
        <Devices />
       
        <ProductListingForm/>
        <Footer />
      </section>
  
  );
}

export default Layout;
