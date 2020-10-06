import actionsTypes from './types';

const actionsCreators = {
  COUNT: {
    sum: () => ({
      type: actionsTypes.COUNT.SUM
    })
  }
};

export default actionsCreators;