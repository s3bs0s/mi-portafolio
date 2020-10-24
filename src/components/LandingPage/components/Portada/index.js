import React, { useState } from 'react';

import base64 from '../../../../base64';
import './style.scss';

const Portada = () => {
  const [ getBarraEscribir, setBarraEscribir ] = useState('transparent');

  setTimeout(() => setBarraEscribir(getBarraEscribir === 'transparent' ? '#bdbdbd' : 'transparent'), 900)

  return (
    <div className='portada'>
      <div className='logo'>
        <img src={base64.code} alt='Logo'/>
      </div>
      <div className='titulos'>
        <h1>Mi portafolio</h1>
        <div className='sub-titulo'>
          <h5>Sebastian Sossa</h5>
          <span className='barra-escribir' style={{ background: getBarraEscribir }}/>
        </div>
      </div>
    </div>
  );
}

export default Portada;