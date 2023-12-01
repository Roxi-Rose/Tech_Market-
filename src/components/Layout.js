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

function Layout() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <Router>
      <section className="layout">
        <Header />
        <SearchBar />
        <Devices />
        <Routes>
          <Route path="/" element={<Browse products={filteredProducts} />} />
          <Route path="/filter" element={<Filter setFilteredProducts={setFilteredProducts} />} />
        </Routes>
        <ProductListingForm/>

        <Footer />
      </section>
    </Router>
  );
}

export default Layout;
