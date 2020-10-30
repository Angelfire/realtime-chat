import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserP';

const Avatar = ({ currentUser = 'default' }) => {
  const { avatar } = useContext(UserContext);

  console.log(avatar);

  return (
    <div>
      {avatar[currentUser] ? (
        <img src={ avatar[currentUser] } alt={ currentUser } />
      ) : (
        <img src={ avatar['default'] } alt="default" />
      )}
    </div>
  );
};

export default Avatar;