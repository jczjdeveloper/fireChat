import React, {Component} from 'react';
import {Switch, Route, Router} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createBrowserHistory } from 'history'

// Import components
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Chat from '../Chat/Chat';

// Creating browser history
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router history = {history}>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/chat' component={Chat}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
