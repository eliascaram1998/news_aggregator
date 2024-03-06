import React from 'react';
import { blackColor, whiteColor } from 'utils/utils.js';

const FilterButton = ({ children, onClick, ...otherProps }) => {
  
  const defaultStyle = {
    backgroundColor: blackColor,
    color: whiteColor,
    padding: '5px 25px',
    height:'35px',
    borderRadius: '5px',
    marginTop: '30px',
    cursor: 'pointer',
  };

  return (
    <button style={{ ...defaultStyle, ...otherProps.style }} onClick={onClick}>
      {children}
    </button>
  );
};

export default FilterButton;