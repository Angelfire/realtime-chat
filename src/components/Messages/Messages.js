import React, { useContext } from 'react';
import Message from './Message';
import { UserContext } from '../../contexts/UserP';

import './messages.css';

const Messages = () => {
  const { messages } = useContext(UserContext);

  console.log(messages);

  return (
    <div className="messages-container">
      { messages.map((message, i) => {
        const { alt= null, url = '', username, text, time, type } = message;

        return (
          <Message
            key={ i }
            alt={ alt }
            text={ text }
            type={ type }
            time={ time }
            url={ url }
            username={ username }
          />
        );
      }) }
    </div>
  )
};

export default Messages;
