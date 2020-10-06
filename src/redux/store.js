import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import countReducer from './reducers/count';

const stateInitialized = {
  count: 1
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    count: countReducer
  }),
  stateInitialized,
  composeEnchancers(applyMiddleware(thunk))
);

export default store;