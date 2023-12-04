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
    category: {
      type:'',
      brand:'',
      condition:'',
    },
  });

  // const handleInputChange = (e) => {
    
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleInputChange = (e) => {
    // Destructure the name and value from the input eve..
    //Destructuring allows you to extract objects or elements and assign 'em to var in a concise way..
    const { name, value } = e.target;
  
    // Set the form data usin' the prev. state..
    setFormData((prevFormData) => {
          // Check if the input field is 1 of the nested prop in 'category'.. -_-
      if (name === 'brand' || name === 'type' || name === 'condition') {
         // If yes, update the 'category' object with the new value..
        return {
          ...prevFormData, //("..." <= spread operator )
          category: {
            ...prevFormData.category,
            [name]: value,
          },
        };
      } else {
       // If no, update the regular form field with the new value
        return {
          ...prevFormData,
          [name]: value,
        };
      }
    });
  };
  
  
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('https://6566ef4764fcff8d730f588d.mockapi.io/web', formData)
   
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
          <input type="text" name="category" placeholder='Category' value={formData.category} onChange={handleInputChange} required />
     
<input type="text" name="brand" placeholder='brand' value={formData.category.brand} onChange={handleInputChange} required />
<input type="text" name="type" placeholder='type' value={formData.category.type} onChange={handleInputChange} required />
<input type="text" name="condition" placeholder='condition' value={formData.category.condition} onChange={handleInputChange} required />

          <button type="submit">List Product</button>
        </form>
      )}
    </div>
  );
}

export default ProductListingForm;