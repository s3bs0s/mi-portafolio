import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Eco } from '@material-ui/icons';

import actionCreators from '../../../redux/actions/creators';
import './style.scss';

const PruebasSass = () => {
  const { count } = useSelector(state => state, () => {});
  const dispatch = useDispatch();
  const { COUNT } = actionCreators;

  return (
    <div className='header'>
      <p className='text'>
        Muy pronto, portafolio de Sebastian Sossa!
      </p>
      <p className='dynamic'>
        { count }
        <Eco
          onClick={() => dispatch(COUNT.sum())}
        />
      </p>
    </div>
  );
}

export default PruebasSass;
