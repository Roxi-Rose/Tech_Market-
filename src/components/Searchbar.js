import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function SearchBar() {''
  const [searchTerm, setSearchTerm] = useState([]);
    const handleSearchbtn = async () => {
      try {
       axios.get(`https://6566ef4764fcff8d730f588d.mockapi.io/web`);
     } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearchbtn}>
        Search
      </button> 
    </div>
  );
}

export default SearchBar;
