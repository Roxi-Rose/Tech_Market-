import React, { useState } from 'react';
import axios from 'axios';
import './listingForm.css';
import Header from './Header';
import Devices from './Devices';
import Footer from './Footer';


function ProductListingForm() {
  // const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    'image-url': '',
    category: {
      type:'',
      brand:'',
      condition:'',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      if (name === 'brand' || name === 'type' || name === 'condition') {
        return {
          ...prevFormData,
          category: {
            ...prevFormData.category,
            [name]: value,
          },
        };
      } else {
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    axios
      .post('https://6566ef4764fcff8d730f588d.mockapi.io/web', formData)
      .then((response) => {
        console.log('Product listed successfully:', response.data);
        setFormData({
          name: '',
          description: '',
          price: 0,
          'image-url': '',
          category: {
            type: '',
            brand: '',
            condition: '',
          },
        });

        alert('Product successfully listed');
      })
      .catch((error) => console.error('Error listing product:', error));
  };
  

  return (
    <div>
    <Header/>
    <Devices/>
    <div className="product-listing-form">
      {/* <button onClick={() => setFormVisible(true)}>Sell</button> */}
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
           <input type="text" name="brand" placeholder='brand' value={formData.category.brand} onChange={handleInputChange} required />
           <input type="text" name="type" placeholder='type' value={formData.category.type} onChange={handleInputChange} required />
           <input type="text" name="condition" placeholder='condition' value={formData.category.condition} onChange={handleInputChange} required />
          <input type="text" name="category" placeholder='Category' value={formData.category} onChange={handleInputChange} required />
          <button type="submit">List Product</button>
        </form>
    </div>
    <Footer/>
    </div>
  );
}

export default ProductListingForm;