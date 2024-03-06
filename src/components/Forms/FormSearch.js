import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar/Search.js';
import FilterButton from 'components/Buttons/FilterButton';
import './FormSearch.css';
import FilterDropdown from 'components/FilterDropdown/Dropdown.js';

const FormSearch = ({
  searchTerm,
  onSearchChange,
  dateOptions,
  handleFilterDate,
  sourceOptions,
  handleFilterSource,
  categoryOptions,
  handleFilterCategory,
  submit,
}) => {
  return (
    <div className="form-search-container">
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <FilterDropdown
        label="Date"
        options={dateOptions}
        onFilterChange={handleFilterDate}
      />
      <FilterDropdown
        label="Source"
        options={sourceOptions}
        onFilterChange={handleFilterSource}
      />
      <FilterDropdown
        label="Category"
        options={categoryOptions}
        onFilterChange={handleFilterCategory}
      />
      <FilterButton onClick={submit}>Filtrar</FilterButton>
    </div>
  );
};

FormSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  dateOptions: PropTypes.array.isRequired,
  filterDate: PropTypes.string.isRequired,
  handleFilterDate: PropTypes.func.isRequired,
  sourceOptions: PropTypes.array.isRequired,
  handleFilterSource: PropTypes.func.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  handleFilterCategory: PropTypes.func.isRequired,
};

export default FormSearch;
