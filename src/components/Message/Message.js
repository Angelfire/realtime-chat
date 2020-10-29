import React from 'react';

import './message.css';

const Message = () => {
  return (
    <div className="message-container">
      <img
        className="message-container__avatar"
        src="https://i2.wp.com/futureiot.tech/wp-content/themes/jnews-child/avatar.png?ssl=1"
        alt="holi"
      />
      <div className="msg-content">
        <p className="msg-content__author">
          Jim Halpert
          <span className="msg-content__date">9:33 am</span>
        </p>
        <div className="msg-content__texts">
          <p>I'm down!!!</p>
          <p>very down</p>
        </div>
      </div>
    </div>
  )
};

export default Message;
