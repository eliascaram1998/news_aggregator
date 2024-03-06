import React, { useState } from "react";
import FilterDropdown from 'components/FilterDropdown/Dropdown.js';
import FilterButton from 'components/Buttons/FilterButton';

const PreferencesModal = ({ onClose }) => {

  const handleSubmit = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Establecer preferencias</h2>
        <form onSubmit={handleSubmit}>
          <FilterDropdown
            label="Category"
          />
          <FilterDropdown
            label="Sources"
          />
          <FilterDropdown
            label="Authors"
          />
        <FilterButton>Guardar</FilterButton>
      </form>
    </div>
    </div >
  );
};

export default PreferencesModal;