import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer'; 
import SearchBar from './Searchbar';
import Devices from './Devices';
import Browse from './Browse'; 
import ProductListingForm from './ProductListingForm'

function Layout() {
  const [products, setProducts] = useState([]);  
  const [filtered, setFilteredProducts] = useState([]);


    //useState for each filter...
    const [filterType, setFilterType] = useState('');
    const [filterBrand, setFilterBrand] = useState('');
    const [filterCondition, setFilterCondition] = useState('');


    useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://6566ef4764fcff8d730f588d.mockapi.io/web')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

     const handleFilter = () => {
      setFilteredProducts(
        products.filter(
          (product) =>
            (!filterType || product.category.type === filterType) &&
            (!filterBrand || product.category.brand === filterBrand) &&
            (!filterCondition || product.category.condition === filterCondition)
        )
       );
  }; 


  return (
    
      <section className="layout">
        <Header />
        <SearchBar />
        <Devices />
      
        <section className="filter_options">
          {/* Filter Type */}
          <select className="select-box"  onChange={(e) => setFilterType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="laptop">laptop</option>
            <option value="mobile">mobile</option>
            <option value="camera">camera</option>
            <option value="others">others</option>
          </select>

          {/* Filter Brand */}
          <select className="select-box"  onChange={(e) => setFilterBrand(e.target.value)}>
            <option value="">Select Brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Dell">Dell</option>
            <option value="Acer">Acer</option>
            <option value="Google">Google</option>
            <option value="Microsoft">Microsoft</option>
          </select>

          {/* Filter Price */}
          <select className="select-box"  onChange={(e) => setFilterCondition(e.target.value)}>
            <option value="">Condition</option>
            <option value="new">new</option>
            <option value="used">used</option>
          </select>

          <button onClick={() => handleFilter(products)}>Apply Filter</button>
        </section>
      
        <Browse products={products.length === filtered.length? products : filtered} />
        <ProductListingForm/>
        <Footer />
      </section>
  );
}

export default Layout;
