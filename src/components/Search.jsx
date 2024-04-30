import React from 'react'

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search your transactions"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    );
  }
  
  export default SearchBar;