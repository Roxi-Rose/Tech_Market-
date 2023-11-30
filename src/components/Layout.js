import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer'; 
import SearchBar from './Searchbar';
import Devices from './Devices';
import Browse from './Browse'; 
import Filter from './Filter';
import ProductListingForm from './ProductListingForm';

function Layout() {
  return (
    <section className="layout">
     <Header/>
     <SearchBar />
     <Devices/>
     <Filter/>
     <Browse/>
    <ProductListingForm/>
     <Footer/>
    </section>
  );
}

export default Layout;
