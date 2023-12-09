import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer'; 
import SearchBar from './Searchbar';
import Devices from './Devices';
import Browse from './Browse'; 
import ProductListingForm from './ProductListingForm'

let ProductGallery = () => {
  const firstRowImages = [
    { src: '/assets/browse-1.jpg', alt: 'Device 1', heading: 'Laptop', price: '$1,149.00' },
    { src: '/assets/browse-2.jpg', alt: 'Device 2', heading: 'iPhone', price: '$1,599.00' },
    { src: '/assets/browse-3.jpg', alt: 'Device 3', heading: 'Smartwatches', price: '$108.32' },
    { src: '/assets/browse-4.jpg', alt: 'Device 4', heading: 'PC', price: '$1,871.99' },
    { src: '/assets/browse-5.jpg', alt: 'Device 5', heading: 'Headphone', price: '$100.00' },
  ];
  const secondRowImages = [
    { src: '/assets/browse-6.jpg', alt: 'Device 6', heading: 'Digital Camera', price: '$3,198.00' },
    { src: '/assets/browse-7.jpg', alt: 'Device 7', heading: 'Hard drive', price: '$950.00' },
    { src: '/assets/browse-8.jpg', alt: 'Device 8', heading: 'TV', price: '$24,999.99' },
    { src: '/assets/browse-9.jpg', alt: 'Device 9', heading: 'Router', price: '$149,99' },
    { src: '/assets/browse-10.jpeg', alt: 'Device 10', heading: 'Echo Dot', price: '$69.99' },
  ];

  return (
    <div>
      {/* First Row */}
      <div className="row top">
        {firstRowImages.map((image, index) => (
          <div key={index} className="card-top">
            <img
              src={image.src}
              alt={image.alt}
              className="item-img"
              width={image.width}
              height={image.height}
            />
            <div className="card-details">
              <h3  className="card-heading">{image.heading}</h3>
              <p className="card-price">{image.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="row">
        {secondRowImages.map((image, index) => (
          <div key={index} className="card-bottom">
            <img
              src={image.src}
              alt={image.alt}
              className="card-img"
              width={image.width}
              height={image.height}
            />
            <div className="card-details">
              <h3 className="card-heading">{image.heading}</h3>
              <p className="card-price">{image.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
        <Devices />
        <div className='row'>
        <SearchBar />
        <section className="filter_options">
          {/* Filter Type */}
          <select className="select-box"  onChange={(e) => setFilterType(e.target.value)}>
            <option className='option' value=""> Type</option>
            <option value="laptop">laptop</option>
            <option value="mobile">mobile</option>
            <option value="camera">camera</option>
            <option value="others">others</option>
          </select>

          {/* Filter Brand */}
          <select className="select-box"  onChange={(e) => setFilterBrand(e.target.value)}>
            <option className='option' value=""> Brand</option>
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
            <option className='option' value="">Condition</option>
            <option value="new">new</option>
            <option value="used">used</option>
          </select>
          <button className='apply-button' onClick={() => handleFilter(products)}>Apply</button>
        </section>
       </div>
        <ProductGallery />
        <Browse products={products.length === filtered.length? products : filtered} /> 
        <ProductListingForm/>
        <Footer />
      </section>
  );
}

export default Layout;