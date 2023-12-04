import React, { useState } from 'react';

function Auction() {
    // State variables to manage bid data
    const [highestBid, setHighestBid] = useState(0); // Tracks the highest bid
    const [allBids, setAllBids] = useState([1120, 1250, 1220]); // Contains all bids
    const [isGreater, setIsGreater] = useState(true); // Indicates if the entered bid is greater

    // Function to handle placing a bid
    const placeBid = (e) => {
        // Update all bids with the new bid value
        setAllBids([...allBids, e.target.value]); // Incorrect code - needs correction
        // Check if the entered bid is greater than any existing bid
        allBids.forEach(ele => {
            if (ele > e.target.value) {
                setIsGreater(false); // If any existing bid is greater, set isGreater to false
            }
        })
        // If the entered bid is greater than all existing bids, update the highest bid
        if (isGreater) {
            setHighestBid(e.target.value);
        }
    }

    return (
        <div>
            {/* Auction interface */}
            <h1 className='title'> Auction</h1>
            <div className='device'>
                <img src="" alt="" />
                <h4>iPhone</h4>
                <h2>$1550</h2>
            </div>
            <div className='bid'>
                {/* Display the current highest bid */}
                <h4 className='highest'>`Current highest ${highestBid}`</h4>
                {/* Form to enter a bid */}
                <form action="submit" onSubmit={placeBid}>
                    {/* Input field for entering a bid */}
                    <input type="text" placeholder='enter bid value' /> {/* Needs correction */}
                    {/* Button to submit the bid */}
                    <button>Set</button> {/* Needs correction */}
                </form>
                {/* Message for bids lower than the current highest bid */}
                <p>Your bid value is less than current highest</p>
            </div>
        </div>
    )
}

export default Auction;
