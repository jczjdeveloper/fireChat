import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { render } from 'react-dom';
import { createStore } from 'redux';
import { initStore } from './Components/Store/Store';
import { Provider } from 'react-redux';

// Import REDUCERS
import ChatReducer from './Components/Reducers/Chat'
import RoomReducer from './Components/Reducers/Room';
import UserReducer from './Components/Reducers/User';

// Import CSS
import './index.css';

// Import Components
import App from './Components/App/App';

// Initialize store
const store = initStore();

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
