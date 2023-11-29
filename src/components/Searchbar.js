import React from 'react';
import '../App.css';

function SearchBar() {
  return (
    <div className="search-container">
      <input className="search-bar" type="text" placeholder="Search..."  />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
