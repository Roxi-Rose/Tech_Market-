import React from 'react';
import "./Cart.css";

function Cart() {
  return (
    <div className='parent'>
    <div className='container'>
      <h2 className="title">Your Cart</h2>
      <section className="product">
        <img src="https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SX425_.jpg" alt="unable to load" width={100} height={100}/>
        <article className="details">
          <h3 className="name">Apple iPhone 14 Pro Max</h3>
          <p className="details">6.7-inch Super Retina XDR display. Dynamic Island. 48MP Main camera for up to 4x greater resolution. </p>
        </article>
        <h3 className="price">$ 2699</h3>
        <button className="remove">X</button>
      </section>
      <section className="checkout">
        <button className="pay">Checkout</button>
        <h3 className="total">$ 3850</h3>
      </section>
    </div>
    </div>
  )
}

export default Cart