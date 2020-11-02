import React, { createContext, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { BE_INTEGRATION } from '../Utils/const';

export const SocketIOContext = createContext({});

const SocketIOP= ({ children, userName }) => {
  const [response, setResponse] = useState(false);
  const [userOnline, setUserOnline] = useState(false);
  const [userOffline, setUserOffline] = useState('');
  const socket = useRef(
    socketIOClient(
      encodeURI(`${BE_INTEGRATION}/?username=${userName}`)
    )
  );

  return (
    <SocketIOContext.Provider
      value={{
        response,
        setResponse,
        setUserOffline,
        setUserOnline,
        socket: socket.current,
        userOffline,
        userOnline
      }}
    >
      {children}
    </SocketIOContext.Provider>
  );
};

export default SocketIOP;
