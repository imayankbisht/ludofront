import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 Redirect
} from "react-router-dom";
import SignInOutContainer from './containers';
import Dashboard from './components/Dashboard';
efunction App() {
  return (
    <div className="App">
  <Router >
    <Switch>
      <Route path="/login" component={SignInOutContainer} />
      <Route path="/Dashboard" component={Dashboard} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}

