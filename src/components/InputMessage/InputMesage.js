import React, { useContext, useEffect, useState } from 'react';
import { SocketIOContext } from '../../contexts/SocketIOP';
import { UserContext } from '../../contexts/UserP';
import { CLIENT_EVENTS } from '../../Utils/const';
import { getGiphy } from '../../Utils/helpers';

import './inputmessage.css';

let timeout;
const InputMessage = () => {
  const [message, setMessage] = useState('');
  const [typer, setTyper] = useState('');
  const { socket, userOnline } = useContext(SocketIOContext);
  const { typers } = useContext(UserContext);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    typersMessage();
  };

  const handleSubmitMessage = () => {
    if (userOnline) {
      socket.emit(CLIENT_EVENTS.TEXT_MESSAGE, message);
    }
  }

  const typersMessage = () => {
    const typersArray = Object.keys(typers);
    const typersCount = typersArray.length;
    const oneTyper = typersCount === 1;
    const singularPlural = oneTyper ? 'is' : 'are';
    const typer = oneTyper ? typersArray[0] : 'People';
    const typing = typersCount ? `${typer} ${singularPlural} typing` : '';

    setTyper(typing);
  }

  useEffect(() => {
    if (userOnline) {
      if (message.length > 0) {
        socket.emit(CLIENT_EVENTS.TYPING, true);

        if (message.match(/\gif /gm)) {
          const tagValue = message.split('/gif ');

          if (tagValue[1].length > 1) {
            timeout = setTimeout(() => {
              getGiphy(tagValue[1]).then(resp => {
                const { image_url: url, title: alt } = resp.data;

                socket.emit(CLIENT_EVENTS.IMAGE_MESSAGE, {
                  alt,
                  url
                });
              });
            }, 3000);
          }
        }
      } else {
        socket.emit(CLIENT_EVENTS.TYPING, false);
      }
    } 
  }, [message, userOnline]);

  return (
    <div className="im-container">
      <div className="elements">
        <input
          className="elements__input"
          onChange={ handleMessageChange }
          type="text"
        />
        <button
          className="elements__btn"
          onClick={ handleSubmitMessage }
        >
          Send
        </button>
      </div>
      <p className="typers">{ typer }</p>
    </div>
  );
};

export default InputMessage;
