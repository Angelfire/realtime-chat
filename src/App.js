import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join/Join';
import ChatInterceptor from './components/ChatRoom/ChatInterceptor';

import './styles/global.css';
import './styles/app.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <Join />
          </Route>
          <Route path='/chatroom'>
            <ChatInterceptor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
