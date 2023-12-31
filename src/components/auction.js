import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './auction.css';
import Header from './Header';
import Devices from './Devices';
import Footer from './Footer';

function Auction(props) {
  const { id } = useParams();
  const product = props.products.find((p) => p.id === id);
  const navigate = useNavigate();

  const [allBids, setAllBids] = useState([0]);
  const [highest, setHighest] = useState(product.price);
  const [userBid, setUserBid] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    // Update the product price in the API when highest bid changes
    if (highest > product.price) {
      fetch(`https://6566ef4764fcff8d730f588d.mockapi.io/web/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: highest,
        }),
      })
        .then((response) => response.json())
        .then(() => console.log('Product price updated successfully'))
        .catch((error) => console.error('Error updating product price:', error));
    }
  }, [highest, id, product.price]);

  const handleInputChange = (e) => {
    setUserBid(e.target.value);
    setStatusMessage('');
  };

  const handlePlaceBid = () => {
    const bidValue = parseInt(userBid);

    if (bidValue > highest) {
      setAllBids((prevBids) => [...prevBids, bidValue]);
      setHighest(bidValue);
      setStatusMessage('Bid placed successfully.');
    } else {
      setStatusMessage('Bid value is less than the current highest bid.');
    }
  };

  if (!product) {
    alert('Product not found');
    navigate('/');
    return null;
  }

  return (
    <div>
      <Header/>
    <Devices/>
    <div className="pparent">
      <div className="pproductDetails">
        <section className="ppDisplay">
        <h1>≈~Auction</h1>
          <img
            src={product['image-url']}
            alt={product.name}
            className="ccard-img"
            // width="300"
            // height="300"
          />
          <h4 className="ppName">{product.name}</h4>
          <h3 className='ppPrice'>${product.price}</h3>
        </section>
        <button className="home-btn" onClick={() => navigate('/')}>
            Home
          </button>
        <section className="ppDetails">
          {/* <button className="home-btn" onClick={() => navigate('/')}>
            Home
          </button> */}
          <p>{`All Bids = [${allBids}]`}</p>
          <h4>{`Current Highest = ${highest}`}</h4>
          <article className="form">
            <label>Enter Bid:</label>
            <input
              type="number"
              name="price"
              placeholder="Bid Value"
              value={userBid}
              onChange={handleInputChange}
            />
            <button className = 'bid-btn' onClick={handlePlaceBid}>Place Bid</button>
          </article>
         {statusMessage && (
  <h5
    style={{
      width: '230%',   
      color: 'darkred',    
      fontSize: '21px',
      top: '30px',
      position: 'relative',
      right: '570px', 
      fontStyle: 'italic'
    }}
  > '
    {statusMessage}'
  </h5>
)}
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Auction;