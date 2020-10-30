import React, { useContext, useEffect } from 'react';
import InputMessage from '../InputMessage/InputMesage';
import Layout from '../shared/Layout/Layout';
import Messages from '../Messages/Messages';
import axios from 'axios';
import { SocketIOContext } from '../../contexts/SocketIOP';
import { UserContext } from '../../contexts/UserP';
import { AVATAR_INITIALS, SERVER_EVENTS } from '../../Utils/const'

import './chatroom.css';

const ChatRoom = () => {
  const { setUserOnline, socket, userOnline } = useContext(SocketIOContext);
  const {
    avatar,
    setAvatar,
    setAvatarLoading,
    setMessages,
    setTypers,
    setUserList,
    user,
    userList,
  } = useContext(UserContext);

  useEffect(() => {
    socket.on(SERVER_EVENTS.IS_TYPING, typers => {
      setTypers(typers);
    });

    socket.on(SERVER_EVENTS.MESSAGE, message => {
      setMessages(message);
    });

    socket.on(SERVER_EVENTS.USER_CONNECTED, data => {
      setUserList(data);

      if (!userOnline && data === user) {
        setUserOnline(true);
      }
    });
  }, []);

  useEffect(() => {
    userList.forEach(user => {
      if (!avatar[user]) {
        setAvatarLoading(state => {
          return {
            ...state,
            [user]: true
          };
        });
        axios
          .get(`${AVATAR_INITIALS}/?name=${user}`, {
            responseType: 'blob'
          })
          .then(response => {
            setAvatar(user, URL.createObjectURL(response.data));
            setAvatarLoading(state => {
              return {
                ...state,
                [user]: false
              };
            });
          });
      }
    });
  }, [userList]);

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
