// Environment dependencies
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

// Redux store initialization
import { Provider } from 'react-redux';
import store from './redux/store.js';

// Service worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
