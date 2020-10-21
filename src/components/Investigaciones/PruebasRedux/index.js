import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Eco } from '@material-ui/icons';

import actionCreators from '../../redux/actions/creators';

const PruebasRedux = () => {
  const { count } = useSelector(state => state, () => {});
  const dispatch = useDispatch();
  const { COUNT } = actionCreators;

  return (
    <div
      style={{
        width: '100%',
        padding: '8px 0 30px',
        background: '#1e2a40',
        textAlign: 'center',
        clipPath: 'polygon(0 0, 100% 0, 100% 66%, 0 100%)'
      }}
    >
      <p
        style={{
          fontSize: '16px',
          color: '#fff'
        }}
      >
        Muy pronto, portafolio de Sebastian Sossa!
      </p>
      <p
        style={{
          fontSize: '14px',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        { count }
        <Eco
          style={{
            marginLeft: '5px',
            fontSize: '13px',
            cursor: 'pointer'
          }}
          onClick={() => dispatch(COUNT.sum())}
        />
      </p>
    </div>
  );
}

export default PruebasRedux;
