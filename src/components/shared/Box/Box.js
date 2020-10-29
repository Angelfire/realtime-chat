import React from 'react';

import './box.css';

const Box = ({ children }) => {
  return (
    <div className="box-container">
      { children }
    </div>
  )
};

export default Box;
