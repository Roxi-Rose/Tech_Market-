import React from 'react';
import '../App.css';
// import logo from '../assets/logo.png';



function Header() {
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
      <p>Login/Sign-up</p>
      <img src="/assets/shop.jpg" alt="Shop Icon" className="shop-icon" />
    </div>
    </header>
   
  );
}

export default Header;
