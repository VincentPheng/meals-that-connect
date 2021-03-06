import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

import './css/App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
          <NavBar/>
          <Switch>
              <Route path="/login"><Login/></Route>
              <Route path="/signup"><Signup/></Route>
              <Route><Home/></Route>
          </Switch>
      </Router>
    </div>
  )}
}

export default App;
