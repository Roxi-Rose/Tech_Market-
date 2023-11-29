import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer'; 
import SearchBar from './Searchbar';
import Devices from './Devices';
import Browse from './Browse'; 
import Filter from './Filter';

function Layout() {
  return (
    <section className="layout">
     <Header/>
     <Footer/>
     <SearchBar />
     <Devices/>
     <Browse/>
     <Filter/>
    </section>
  );
}

export default Layout;
