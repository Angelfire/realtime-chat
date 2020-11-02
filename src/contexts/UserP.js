import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserP = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [typers, setTypers] = useState({});
  const [user, setUser] = useState('');
  const [userList, setUserList] = useState('');


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
        stickers,
        typers,
        user,
        userList,
      }}
    >
      { children }
    </UserContext.Provider>
  );
};

export default UserP;
