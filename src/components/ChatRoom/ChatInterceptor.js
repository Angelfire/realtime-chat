import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../contexts/UserP';
import ChatRoom from './ChatRoom';
import SocketIOP from '../../contexts/SocketIOP';

const ChatInterceptor = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/" />
  }

  return (
    <SocketIOP userName={ user }>
      <ChatRoom />
    </SocketIOP>
  );
};

export default ChatInterceptor;
