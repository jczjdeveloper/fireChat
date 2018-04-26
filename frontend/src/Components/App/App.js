import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// TO REMOVE LATER!
import logo from '../../logo.svg';
import './App.css';

// Import components
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/chat' component={Chat}/>
        </Switch>
      </MuiThemeProvider>
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
