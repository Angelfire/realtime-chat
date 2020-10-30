import React from 'react';

import './messages.css';

const MessageType = ({ alt, url, text, type }) => {
  return (
    <div className="message-type">
      { type === 'text' ? (
        <p>{ text }</p>
      ) : (
        <img src={ url } alt={ alt } />
      )}
    </div>
  )
};

export default MessageType;
