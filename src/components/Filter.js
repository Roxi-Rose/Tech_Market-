import React, { useState } from 'react';

const Filter = () => {
  // Products...
  const [products, setProducts] = useState([
    { type: 'Laptop', brand: 'A', condition: 'see details', price: '3000'},
  ]);

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
        <option value="">Select Type</option>
        <option value="">Laptop</option>
        <option value="">Phone</option>
      </select>

       {/* Filter Brand */}
      <select className="select-box"  onChange={(e) => setFilterBrand(e.target.value)}>
        <option value="">Select Brand</option>
        <option value="">A</option>
        <option value="">B</option>
      </select>

      {/* Filter Price */}
      <select className="select-box"  onChange={(e) => setFilterPrice(e.target.value)}>
        <option value="">Select price</option>
        <option value="">New</option>
        <option value="">Used</option>
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
