import React from 'react';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from './CheckOut'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <CheckOut />
          </Route>

          <Route path="/login">
            <h1>Login</h1>
          </Route>

          {/* Default Route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
