import React from 'react';
import Box from '../shared/Box/Box';
import InputMessage from '../InputMessage/InputMesage';
import Message from '../Message/Message';

import './chatroom.css';

const ChatRoom = () => {
  return (
    <Box>
      <div className="cr-container">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <InputMessage />
      </div>
    </Box>
  );
};

export default ChatRoom;
