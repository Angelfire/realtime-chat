import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

const UserP = ({ children }) => {
  const [avatar, setAvatar] = useState({});
  const [avatarLoading, setAvatarLoading] = useState({ 'default': false });
  const [typers, setTypers] = useState({});
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState(['default']);

  return (
    <UserContext.Provider
      value={{
        avatar,
        avatarLoading,
        messages,
        setAvatar,
        setAvatarLoading,
        setMessages: message => {
          setMessages(state => {
            return [...state, { ...message, date: new Date(message.time) }];
          });
        },
        setTypers,
        setUser,
        setUserList: onlineUser => {
          setUserList(state => {
            const currentUser = state.find(user => user === onlineUser);

            if (!currentUser) {
              return [...state, onlineUser];
            } else {
              return state;
            }
          });
        },
        typers,
        user,
        userList
      }}
    >
      { children }
    </UserContext.Provider>
  );
};

export default UserP;
