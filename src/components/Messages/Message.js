import React from 'react';
import Avatar from '../Avatar/Avatar';
import { formatDate } from '../../Utils/helpers';

import './message.css';

const Message = ({ date, text, time, type, username}) => {

  return (
    <div className="message-container">
      <Avatar currentUser={ username } />
      <div className="msg-content">
        <p className="msg-content__author">
          { username }
          <span className="msg-content__date">
            {`${formatDate(time)}`}
          </span>
        </p>
        <div className="msg-content__texts">
          <p>{ text }</p>
          <p>very down</p>
        </div>
      </div>
    </div>
  )
};

export default Message;
