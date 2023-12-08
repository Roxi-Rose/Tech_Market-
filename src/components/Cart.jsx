import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "./Cart.css";

function Cart() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://6566ef4764fcff8d730f588d.mockapi.io/cart')
      .then(response => {
        setProducts(response.data);
        calculateTotal(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const calculateTotal = (productList) => {
    const sum = productList.reduce((acc, product) => acc + Number(product.price), 0);
    setTotal(sum);
  };

  const handleRemoveClick = (productId) => {
    const removedProduct = products.find(product => product.id === productId);

    axios.post('https://6566ef4764fcff8d730f588d.mockapi.io/web', removedProduct)
      .then(response => {
        console.log('Product listed successfully:', response.data);
        setProducts(prevProducts => {
          const updatedProducts = prevProducts.filter(product => product.id !== productId);
          calculateTotal(updatedProducts);
          return updatedProducts;
        });
      })
      .catch(error => console.error('Error listing product:', error));
  
    axios.delete(`https://6566ef4764fcff8d730f588d.mockapi.io/cart/${productId}`)
      .then(response => {
        console.log('Product removed successfully:', response.data);
      })
      .catch(error => console.error('Error removing product:', error));
  };
  
  const handleCheckoutClick = () => {
    products.forEach(product => {
      axios.delete(`https://6566ef4764fcff8d730f588d.mockapi.io/cart/${product.id}`)
        .then(response => {
          console.log(`Product ${product.id} removed successfully:`, response.data);
        })
        .catch(error => {
          console.error(`Error removing product ${product.id}:`, error);
        });
    });

    setProducts([]);
    setTotal(0);
    alert('Checkout Success');
  };
  
  return (
    <div className='parent'>
      <div className='container'>
        <h2 className="title">Your Cart</h2>
        <button className="home" onClick={() => navigate('/')}>Home</button>
        {products.map(product => (
          <section className="product" key={product.id}>
            <img
              src={product['image-url']}
              alt={product.name}
              className="card-img"
              width="300"
              height="200"
            />
            <article className="details">
              <h3 className="name">{product.name}</h3>
              <p className="details">{product.description}</p>
            </article>
            <h3 className="price">${product.price}</h3>
            <button className="remove" onClick={() => handleRemoveClick(product.id)}>X</button>
          </section>
        ))}
        <section className="checkout">
          <button className="pay" onClick={handleCheckoutClick}>Checkout</button>
          <h3 className="total">${total}</h3>
        </section>
      </div>
    </div>
  );
}

export default Cart;
