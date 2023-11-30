import React, { useState, useEffect } from 'react';
import "./test.css";

const Browse = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://6566ef4764fcff8d730f588d.mockapi.io/web')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="browse-container">
      {products.map((product, index) => (
        <div key={index} className="card">
          <img
            src={product['image-url']}
            alt={product.name}
            className="card-img"
            width="300"
            height="200"
          />
          <button className='auction'>$</button>
          <div className="card-details">
            <h3>{product.name}</h3>
            <p>{`$${product.price}`}</p>
            <button>details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Browse;

