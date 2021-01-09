import React from 'react';
import Header from '../Header/Header'
import Home from '../Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckOut from '../CheckOut/CheckOut'

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
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
