import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignInOutContainer from './containers';
function App() {
  return (
    <div className="App">
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>
      </div>
  );
}

export default App;