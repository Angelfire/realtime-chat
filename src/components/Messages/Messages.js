import React, { useContext } from 'react';
import Message from './Message';
import { UserContext } from '../../contexts/UserP';

const Messages = () => {
  const { messages } = useContext(UserContext);

  return (
    <>
      { messages.map((message, i) => (
        <Message key={ i } message={ message } />
      )) }
    </>
  )
};

export default Messages;
