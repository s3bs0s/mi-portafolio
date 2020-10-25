import React, { useState } from 'react';

import base64 from '../../../../base64';
import './style.scss';

const Portada = () => {
  const [ getBarraEscribir, setBarraEscribir ] = useState('transparent');

  setTimeout(() => setBarraEscribir(getBarraEscribir === 'transparent' ? '#bdbdbd' : 'transparent'), 900)

  return (
    <div className='portada'>
      <div className='logo'>
        <img src={base64.logoPng} alt='Logo'/>
      </div>
      <div className='titulos'>
        <img src={base64.tituloPng} alt='Título'/>
        <div className='sub-titulo'>
          <h1>Sebastian Sossa</h1>
          <span className='barra-escribir' style={{ background: getBarraEscribir }}/>
        </div>
      </div>
    </div>
  );
}

export default Portada;