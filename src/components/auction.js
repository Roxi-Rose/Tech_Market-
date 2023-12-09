import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './auction.css';

function Auction(props) {
  const { id } = useParams();
  const product = props.products.find((p) => p.id === id);
  const navigate = useNavigate();

  const [allBids, setAllBids] = useState([1080, 1120, 980, 1170]);
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
          price: highest.toString(),
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
    <div className="parent">
      <div className="productDetails">
        <section className="pDisplay">
          <img
            src={product['image-url']}
            alt={product.name}
            className="card-img"
            width="300"
            height="200"
          />
          <h4 className="pName">{product.name}</h4>
          <h3>${product.price}</h3>
        </section>
        <section className="pDetails">
          <button className="home" onClick={() => navigate('/')}>
            Home
          </button>
          <p>{`All Bids = [${allBids}]`}</p>
          <h5>{`Current Highest = ${highest}`}</h5>
          <article className="form">
            <label>Enter Bid:</label>
            <input
              type="number"
              name="price"
              placeholder="Bid Value"
              value={userBid}
              onChange={handleInputChange}
            />
            <button onClick={handlePlaceBid}>Place Bid</button>
          </article>
          {statusMessage && <h5 className="status">{statusMessage}</h5>}
        </section>
      </div>
    </div>
  );
}

export default Auction;