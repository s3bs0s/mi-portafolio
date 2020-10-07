import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import TestRedux from './components/TestRedux';
import TestLocalStorage from './components/TestLocalStorage';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <TestLocalStorage />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
