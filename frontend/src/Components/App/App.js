import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// TO REMOVE LATER!
import logo from '../../logo.svg';
import './App.css';

// Import components
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </Switch>
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>
