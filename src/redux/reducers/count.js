import actionsTypes from '../actions/types';

/*
* Función
*/
const sum = (action, state = {}) => {
  return ++state;
};

const countReducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.COUNT.SUM:
      return sum(action, state);
    default:
      return state || 1;
  }
};

export default countReducer;