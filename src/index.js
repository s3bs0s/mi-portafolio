import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import LandingPage from './components/LandingPage';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
