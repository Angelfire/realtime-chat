import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../shared/Layout/Layout';
import { UserContext } from '../../contexts/UserP';

import './join.css';

const Join = () => {
  const { setUser } = useContext(UserContext);

  const handleUserNameChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <Layout>
      <div className="join-container">
        <h2 className="join-container__title">Join chat</h2>
        <form className="jform">
          <label className="jform__label" htmlFor="username">
            Please enter your username
            <input
              className="jform__input"
              name="username"
              onChange={ handleUserNameChange }
              type="text"
            />
          </label>
          <Link to="/chatroom" className="jform__btn">
            Next
          </Link>
        </form>
      </div>
    </Layout>
  )
};

export default Join;