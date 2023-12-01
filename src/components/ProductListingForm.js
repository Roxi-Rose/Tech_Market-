import React, { useState } from 'react';
import axios from 'axios';
import './listingForm.css';

function ProductListingForm() {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    'image-url': '',
    category: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('https://655e14659f1e1093c59a7c39.mockapi.io/shelf/tech-marketplace', formData)
      .then(response => {
        console.log('Product listed successfully:', response.data);
        setFormVisible(false);
        // You may want to update the product list after a successful listing
      })
      .catch(error => console.error('Error listing product:', error));
  };

  return (
    <div className="product-listing-form">
      <button onClick={() => setFormVisible(true)}>Sell</button>
      {formVisible && (
        <form onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" placeholder='Product Name' value={formData.name} onChange={handleInputChange} required />
          <label>Description:</label>
          <input type="text" name="description" placeholder='Description' value={formData.description} onChange={handleInputChange} required />
          <label>Price:</label>
          <input type="number" name="price" placeholder='Price' value={formData.price} onChange={handleInputChange} required />
          <label>Image URL:</label>
          <input type="text" name="image-url" placeholder='Image url' value={formData['image-url']} onChange={handleInputChange} required />
          <label>Category:</label>
          <input type = "text" name="brand" placeholder='brand' value={formData.category.brand}  onChange={handleInputChange} required />
         
          
          <button type="submit">List Product</button>
        </form>
      )}
    </div>
  );
}

export default ProductListingForm;
