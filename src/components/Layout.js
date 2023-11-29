import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer'; 
import SearchBar from './Searchbar';
import Devices from './Devices';

function Layout() {
  return (
    <section className="layout">
     <Header/>
     <Footer/>
     <SearchBar />
     <Devices/>

    </section>
  );
}

export default Layout;
