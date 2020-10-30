import React from 'react';
import Avatar from '../Avatar/Avatar';
import MessageType from './MessageType';
import { formatDate } from '../../Utils/helpers';

import './messages.css';

const Message = ({ alt, text, time, type, url, username }) => {
  const formattedDate = formatDate(time);

  return (
    <div className="message-container">
      <Avatar currentUser={ username } />
      <div className="msg-content">
        <p className="msg-content__author">
          { username }
          <span className="msg-content__date">
            { formattedDate }
          </span>
        </p>
        <div className="msg-content__texts">
          <MessageType
            alt={ alt }
            type={ type }
            text={ text }
            url={ url } 
          />
        </div>
      </div>
    </div>
  )
};

export default Message;
