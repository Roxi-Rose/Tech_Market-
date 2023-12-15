import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Cart.css";
import Header from './Header';
import Devices from './Devices';
import Footer from './Footer';

function Cart() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [numItems, setNumItems] = useState(0);

  useEffect(() => {
    axios.get('https://6566ef4764fcff8d730f588d.mockapi.io/cart')
      .then(response => {
        setProducts(response.data);
        calculateTotal(response.data);
        setNumItems(response.data.length);
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
          setNumItems(updatedProducts.length);
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
    setNumItems(0); 
    alert('Checkout Success');
  };
  
  return (
    <div>
    <Header/>
    <Devices/>
      <div className='Parent'>
        <div className='Container'>
          <h2 className="title">≈~Your Cart</h2>
          <button className="Home" onClick={() => navigate('/')}>Home</button>
          {products.map(product => (
            <section className="cartProduct" key={product.id}>
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
              <div className="price-remove-container">
                <h3 className="price">${product.price}</h3>
                <button className="remove" onClick={() => handleRemoveClick(product.id)}>X</button>
              </div>
            </section>
          ))}
          <section className="checkout">
            <button className="pay" onClick={handleCheckoutClick}>Checkout</button>
            <h3 className="total">${total}</h3>
            <p className="num-items">Number of items :  {numItems}</p>
          </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Cart;
