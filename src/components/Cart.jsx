import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Cart.css";

function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://6566ef4764fcff8d730f588d.mockapi.io/cart')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleRemoveClick = (productId) => {
    const removedProduct = products.find(product => product.id === productId);
    axios.post('https://6566ef4764fcff8d730f588d.mockapi.io/web', removedProduct)
      .then(response => {
        console.log('Product listed successfully:', response.data);
        // Update the product list after a successful listing
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
      })
      .catch(error => console.error('Error listing product:', error));

    axios.delete(`https://6566ef4764fcff8d730f588d.mockapi.io/cart/${productId}`)
      .then(response => {
        console.log('Product removed successfully:', response.data);
      })
      .catch(error => console.error('Error removing product:', error));
  };

  return (
    <div className='parent'>
      <div className='container'>
        <h2 className="title">Your Cart</h2>
        {products.map(product => (
          <section className="product" key={product.id}>
            <img 
            src={product['image-url']} 
            alt={product.name} 
            className="card-img"
            width="100"
            height="100"/>
            <article className="details">
              <h3 className="name">{product.name}</h3>
              <p className="details">{product.description}</p>
            </article>
            <h3 className="price">${product.price}</h3>
            <button className="remove" onClick={() => handleRemoveClick(product.id)}>X</button>
          </section>
        ))}
        <section className="checkout">
          <button className="pay">Checkout</button>
          <h3 className="total">$ 3850</h3>
        </section>
      </div>
    </div>
  );
}

export default Cart;
