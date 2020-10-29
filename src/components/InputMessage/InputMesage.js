import React from 'react';

import './inputmessage.css';

const InputMessage = () => {
  return (
    <div className="im-container">
      <div className="elements">
        <input className="elements__input" type="text" />
        <button className="elements__btn">Send</button>
      </div>
    </div>
  );
};

export default InputMessage;
