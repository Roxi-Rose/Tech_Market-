import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  //useState for cart count...
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Fetch cart data from the API on component mount...
  useEffect(() => {
    axios.get('https://6566ef4764fcff8d730f588d.mockapi.io/cart')
      .then(response => {
        // Set the cart count...
        setCartCount(response.data.length);
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);// The empty dependency arr...

  const handleCartClick = () => {
    navigate('/cart');
  }

  const LoginClick= ()=>{
    navigate('/login')
  }

  return (
    <header className="header">
    <div className="header-logo">
    <img src="/assets/logo.png" alt="Logo" className="logo" />
  
     <nav>
       <h1>MARKET 𝓒ONNECT</h1>
     <ul>
     |<a  href="2.html">Smartphones</a>|
      <a  href="2.html">Cameras</a>|
      <a  href="2.html">Laptop</a>|
      <a  href="2.html">Other</a>|
      </ul>
    </nav>
    </div>
    <div className="sign-up">
    <button onClick={LoginClick}>Login</button>
    {/* <button>Login</button> */}
      <img src="/assets/shop.jpg" alt="Shop Icon" className="shop-icon" onClick={handleCartClick}/>
     <div className="cart-count">{cartCount}</div>
    </div>
    </header>
   
  );
}
export default Header;

// usin' the useState nd useEffect hooks, fetchin' and updatin' the count dynamically from the API onClicks...
