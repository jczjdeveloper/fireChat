import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import Components
import App from './Components/App/App';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
