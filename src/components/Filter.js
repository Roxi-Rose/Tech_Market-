import React, { useState } from 'react';

const Filter = () => {
  // Products...
  const [products, setProducts] = useState([]);
  
  //useState for each filter...
  const [filterType, setFilterType] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  //The !filterType, !filterBrand, nd !filterPrice conditions are used to check if a filter is set (empty). If a filter is nt set, the condition is always true, allowing all products to pass through tht specific filter...
  const filteredProducts = products
    .filter(product => !filterType  || product.type  === filterType)
    .filter(product => !filterBrand || product.brand === filterBrand)
    .filter(product => !filterPrice || product.price === filterPrice);

  return (
    <div className="filter-container">
      {/* Filter Type */}
      <select className="select-box"  onChange={(e) => setFilterType(e.target.value)}>
        <option className = "option" value ="">Type</option>
        <option value="">Laptops</option>
        <option value="">Smartphones</option>
        <option value="">Smartwatches</option>
        <option value="">PCs</option>
        <option value="">Headphones</option>
        <option value="">Cameras</option>
        <option value="">USB</option>
        <option value="">Routers</option>
        <option value="">TVs</option>
        <option value="">Servers</option>
      </select>

       {/* Filter Brand */}
      <select className="select-box"  onChange={(e) => setFilterBrand(e.target.value)}>
        <option  className = "option" value="">Brand</option>
        <option value="">NVIDIA</option>
        <option value="">Apple</option>
        <option value="">Lenovo</option>
        <option value="">Asus</option>
        <option value="">Xiaomi</option>
        <option value="">LG</option>
        <option value="">Logitech</option>
        <option value="">Seagate</option>
        <option value="">Corsair </option>
        <option value="">AMD</option>
      </select>

      {/* Filter Price */}
      <select className="select-box"  onChange={(e) => setFilterPrice(e.target.value)}>
        <option className = "option"   value="">Price</option>
        <option value="">New</option>
        <option value="">Like New</option>
        <option value="">Refurbished</option>
        <option value="">Used/Good</option>
        <option value="">Used/Fair</option>
    
      </select>

      {/* Display Filtered Products */}
      <div className="filtered-products">
        {filteredProducts.map((product) => (
          <div  key={product.id}>
            <p>{`Type: ${product.type}`}</p>
            <p>{`Brand: ${product.brand}`}</p>
            <p>{`Condition: ${product.condition}`}</p>
            <p>{`Price: $${product.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
