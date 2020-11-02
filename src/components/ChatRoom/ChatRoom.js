import React, { useContext, useEffect } from 'react';
import InputMessage from '../InputMessage/InputMesage';
import Layout from '../shared/Layout/Layout';
import Messages from '../Messages/Messages';
import { SocketIOContext } from '../../contexts/SocketIOP';
import { UserContext } from '../../contexts/UserP';
import { SERVER_EVENTS } from '../../Utils/const'

import './chatroom.css';

const ChatRoom = () => {
  const {
    setUserOffline,
    setUserOnline,
    socket,
    userOnline
  } = useContext(SocketIOContext);
  const {
    setMessages,
    setTypers,
    setUserList,
    user,
  } = useContext(UserContext);

  useEffect(() => {
    socket.on(SERVER_EVENTS.IS_TYPING, typers => {
      setTypers(typers);
    });

    socket.on(SERVER_EVENTS.MESSAGE, message => {
      setMessages(message);
    });

    socket.on(SERVER_EVENTS.USER_CONNECTED, username => {
      setUserList(username);

      if (!userOnline && username === user) {
        setUserOnline(true);
      }
    });

    socket.on(SERVER_EVENTS.USER_DISCONNECTED, username => {
      setUserOffline(username);
    });
  }, []);

  return (
    <Layout>
      <div className="cr-container">
        <Messages />
        <InputMessage />
      </div>
    </Layout>
  );
};

export default ChatRoom;
