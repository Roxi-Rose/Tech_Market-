import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import Header from './Header';
import Devices from './Devices';
import Footer from './Footer';
export default function ProductDetails(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Find the product with the given ID
  const product = props.products.find((p) => p.id === id);

  if (!product) {
    alert('Product not found');
    navigate('/');
    return null;
  }

  const handleAddToCart = (id) => {

    axios.post('https://6566ef4764fcff8d730f588d.mockapi.io/cart', props.products.id)
      .then(response => {
        setProducts(prevProducts => {
          const updatedProducts = prevProducts.filter(products => products.id !== id);
          alert('Successfully added to cart');
          return updatedProducts;
        });
      })
      .catch(error => console.error('Error listing product:', error));
  
    axios.delete(`https://6566ef4764fcff8d730f588d.mockapi.io/web/${id}`)
      .then(response => {
      })
      .catch(error => console.error('Error removing product:', error));
    }

  return (
    <div>
    <Header/>
    <Devices/>
    <div className="parent">
      <div className="productDetails">
        <section className="pDisplay">
          <img
            src={product['image-url']}
            alt={product.name}
            className="card-img"
            // width="50"
            // height="50"
          />
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </section>
        <section className="pDetails">
          <button className="home" onClick={() => navigate('/')}>Home</button>
          <h4 className="pName">{product.name}</h4>
          <h2>${product.price}</h2>
          <p>{product.description}</p>
          <h5>{product.category.condition}</h5>
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
}