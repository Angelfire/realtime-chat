import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserP = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [typers, setTypers] = useState({});
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState('');
  const [userOffline, setUserOffline] = useState('');

  return (
    <UserContext.Provider
      value={{
        messages,
        setMessages: message => {
          setMessages(state => {
            return [...state, { ...message }];
          });
        },
        setStickers,
        setTypers,
        setUser,
        setUserList,
        setUserOffline,
        stickers,
        typers,
        user,
        userList,
        userOffline
      }}
    >
      { children }
    </UserContext.Provider>
  );
};

export default UserP;
