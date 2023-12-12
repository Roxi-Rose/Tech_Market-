import React, { useState, useEffect } from 'react'; // Imports necessary React functionalities
import { useParams, useNavigate } from 'react-router-dom'; // Imports routing functionalities
import './auction.css'; // Imports the CSS file for styling

function Auction(props) { // Defines the Auction component
  // Retrieves the 'id' from the URL parameters
  const { id } = useParams();

  // Finds the product based on the 'id' from the list of products passed as props
  const product = props.products.find((p) => p.id === id);

  // Initializes state variables using useState hook
  const navigate = useNavigate(); // Gets the navigation function from React Router
  const [allBids, setAllBids] = useState([1080, 1120, 980, 1170]); // Stores all bids
  const [highest, setHighest] = useState(product.price); // Tracks the highest bid
  const [userBid, setUserBid] = useState(''); // Tracks the user's bid input
  const [statusMessage, setStatusMessage] = useState(''); // Displays status messages

  // useEffect to update product price in the API when highest bid changes
  useEffect(() => {
    if (highest > product.price) {
      // Updates the product price in the API
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

  // Handles changes in the bid input field
  const handleInputChange = (e) => {
    setUserBid(e.target.value); // Updates the userBid state with the entered value
    setStatusMessage(''); // Clears any existing status message
  };

  // Handles placing a bid
  const handlePlaceBid = () => {
    const bidValue = parseInt(userBid); // Parses the user's bid input to an integer

    if (bidValue > highest) {
      // If the bid is higher than the current highest bid
      setAllBids((prevBids) => [...prevBids, bidValue]); // Adds the bid to the list of all bids
      setHighest(bidValue); // Sets the new highest bid
      setStatusMessage('Bid placed successfully.'); // Updates status message
    } else {
      setStatusMessage('Bid value is less than the current highest bid.'); // Displays an error message
    }
  };

  // If the product doesn't exist, display an alert, navigate to the home page, and return null
  if (!product) {
    alert('Product not found');
    navigate('/');
    return null;
  }

  // Renders the auction page with product details, bid input, and related information
  return (
    <div className="parent">
      <div className="productDetails">
        <section className="pDisplay">
          {/* Displays product image, name, and current price */}
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
          {/* Button to navigate back to the home page */}
          <button className="home" onClick={() => navigate('/')}>
            Home
          </button>
          {/* Displays all bids and the current highest bid */}
          <p>{`All Bids = [${allBids}]`}</p>
          <h5>{`Current Highest = ${highest}`}</h5>
          {/* Form for entering a bid */}
          <article className="form">
            <label>Enter Bid:</label>
            <input
              type="number"
              name="price"
              placeholder="Bid Value"
              value={userBid}
              onChange={handleInputChange} // Calls handleInputChange on input change
            />
            <button onClick={handlePlaceBid}>Place Bid</button> {/* Calls handlePlaceBid on button click */}
          </article>
          {/* Displays status messages */}
          {statusMessage && <h5 className="status">{statusMessage}</h5>}
        </section>
      </div>
    </div>
  );
}

export default Auction; // Exports the Auction component as the default export
