// FilterDropdown.js
import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'; // Import a CSS file for styling

const FilterDropdown = ({ label, options, selectedValue, onFilterChange }) => {
  return (
    <div className="filter-dropdown-container">
      <label className="filter-label">{label}:</label>
      <select
        value={selectedValue}
        onChange={onFilterChange}
        className="filter-select"
      >
        <option value="">All</option>
        {options && (
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

FilterDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterDropdown;