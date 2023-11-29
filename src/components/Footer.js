import React from 'react';
import '../App.css';


 
function Footer() { 
  return (
    <footer>
        <section className="footer-layout">
        <div>
          <img src="/assets/logo.png" alt=""/>
          <p>&copy; 2023Team#2 </p>
       </div>
        <article id="list-1">
         <ul>
          <li>Sell on Team#2 </li>
          <li>Supply to Team#2</li>
         </ul>
        </article>

        <article id="list-2">
          <p>At Team#2 we help sellers to list their products and buyer to get all at one place. &copy; 2023Team#2 </p>
        </article>
        <article id="list-3">
          <ul>
          <li>Let us Help you</li>
          <li>Customer Service</li>
          </ul>
        </article>
        <article id="list-4">
          <ul>
          <li>Conditions of use</li>
          <li>Privacy Policy</li>
          </ul>
        </article>
      </section>
      </footer>
  );
}

export default Footer;
