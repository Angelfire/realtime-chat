import React from 'react';
import Box from '../shared/Box/Box';

import './join.css';

const Join = () => {
  return (
    <Box>
      <div className="join-container">
        <h2 className="join-container__title">Join chat</h2>
        <form className="jform">
          <label className="jform__label" htmlFor="username">
            Please enter your username
            <input className="jform__input" type="text" name="username" />
          </label>
          <button className="jform__btn">Next</button>
        </form>
      </div>
    </Box>
  )
};

export default Join;