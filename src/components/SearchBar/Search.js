// SearchBar.js
import React from 'react';
import PropTypes from 'prop-types';
import './Search.css'; // Import a CSS file for styling

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container">
      <label htmlFor="searchInput" className="search-label">
        Search
      </label>
      <input
        type="text"
        id="searchInput"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
