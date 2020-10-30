import React from 'react';

import './avatar.css';

const Avatar = ({ currentUser = 'default' }) => {

  return (
    <div className="avatar-container">
      <img src={`https://ui-avatars.com/api/?name=${currentUser}`} alt={ currentUser } />
    </div>
  );
};

export default Avatar;
