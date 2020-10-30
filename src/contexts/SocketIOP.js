import React, { createContext, useState, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import { BE_INTEGRATION } from '../Utils/const';

export const SocketIOContext = createContext({});

const SocketIOP= ({ children, userName }) => {
  const [response, setResponse] = useState(false);
  const [userOnline, setUserOnline] = useState(false);
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
        setUserOnline,
        socket: socket.current,
        userOnline
      }}
    >
      {children}
    </SocketIOContext.Provider>
  );
};

export default SocketIOP;
