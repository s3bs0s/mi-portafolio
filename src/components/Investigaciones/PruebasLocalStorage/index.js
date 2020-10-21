import React, { useEffect } from 'react';
import { Eco } from '@material-ui/icons';

const PruebasLocalStorage = () => {
  useEffect(() => {
    localStorage.setItem('count', 1);
  }, []);

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
        <Eco
          style={{
            marginLeft: '5px',
            fontSize: '15px',
            cursor: 'pointer'
          }}
          onClick={() => localStorage.setItem('count', Number(localStorage.getItem('count')) + 1)}
        />
      </p>
    </div>
  );
}

export default PruebasLocalStorage;
