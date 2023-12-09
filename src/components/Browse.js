import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';


const Browse = (props) => {
  const navigate = useNavigate();

  const handleClickDetails = (id) => {
    navigate(`/details/${id}`);
  };

  const handleClickAuction = (id) => {
    navigate(`/auction/${id}`);
  };
  
  return (

    <div className="-container">
      <section className="filtered-row">
      {props.products.map((product, index) => (
        <div key={index} className="filtered-card">
          <img
            src={product['image-url']}
            alt={product.name}
            className="filtered-img"
            width="300"
            height="200"
          />
          <button className='auction' onClick={() => handleClickAuction(product.id)}>$</button>
          <div className="filtered-details">
            <h3>{product.name}</h3>
            <p>{`$${product.price}`}</p>
            <button onClick={() => handleClickDetails(product.id)}>details</button>
          </div>
        </div>
      ))}
      </section>
    </div>
  );
};


export default Browse;
