import React from 'react';
import ReactDOM from 'react-dom';
import UserP from './contexts/UserP';
import App from './components/App';

const AppProvider = () => (
  <UserP>
    <App />
  </UserP>
);

ReactDOM.render(<AppProvider />, document.getElementById('app'));
