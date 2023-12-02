import React, { useState } from 'react';
import './test.css'

const Filter = ({ products, setFilteredProducts }) => {
  const [filterType, setFilterType] = useState('');
  const [filterBrand, setFilterBrand] = useState('');
  const [filterCondition, setFilterCondition] = useState('');

  const handleFilter = () => {
    const filteredProducts = products
      .filter(product => !filterType || product.category.type === filterType)
      .filter(product => !filterBrand || product.category.brand === filterBrand)
      .filter(product => !filterCondition || product.category.condition === filterCondition);

    setFilteredProducts(filteredProducts);
  };

  return (
    <div className="filter-container">
      {/* Filter Type */}
      <select className="select-box" onChange={(e) => setFilterType(e.target.value)}>
        <option value="">Select Type</option>
        <option value="Laptop">Laptop</option>
        <option value="Mobile">Mobile</option>
        <option value="Camera">Camera</option>
        <option value="Others">Others</option>
      </select>

      {/* Filter Brand */}
      <select className="select-box" onChange={(e) => setFilterBrand(e.target.value)}>
        <option value="">Select Brand</option>
        <option value="">Apple</option>
        <option value="">MSI</option>
        <option value="">OnePlus</option>
        <option value="">Canon</option>
        <option value="">Others</option>
      </select>

      {/* Filter Condition */}
      <select className="select-box" onChange={(e) => setFilterCondition(e.target.value)}>
        <option value="">Select Condition</option>
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>

      <button onClick={() => handleFilter(products)}>Apply Filter</button>
    </div>
  );
};

export default Filter;
