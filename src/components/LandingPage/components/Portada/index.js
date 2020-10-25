import React from 'react';

import base64 from '../../../../base64';
import './style.scss';

const Portada = () => {
  return (
    <div className='portada'>
      <div className='logo'>
        <img src={base64.logoPng} alt='Logo'/>
      </div>
      <div className='titulos'>
        <img src={base64.tituloPng} className='titulo' alt='Título'/>
        <img src={base64.subTituloPng} className='sub-titulo' alt='Sub Título'/>
      </div>
    </div>
  );
}

export default Portada;