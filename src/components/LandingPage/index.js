import React, { Fragment } from 'react';

import Seccion from '../Seccion';
import Portada from './components/Portada';
import MenuNavegacion from '../MenuNavegacion';
import base64 from '../../base64';

const LandingPage = () => {
  const tempString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos vero eligendi odio. Voluptate eaque soluta ducimus? Delectus architecto, sapiente veritatis dolores fugiat, fugit tempora magnam odit, officia illo veniam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatum soluta? Fuga, repellat optio. Quis quibusdam maxime molestias possimus autem deleniti earum sint similique, non sunt at iure officia mollitia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laudantium beatae optio corrupti tempore earum recusandae.';
  return (
    <Fragment>
      <Seccion ladosFigura='abajo-d' tipoFondo='imagen' fondoImagen={{
        backgroundImage: `url('${base64.portadaDifuminada}')`,
        paddingRight: '18px'
      }}>
        <Portada />
      </Seccion>

      <Seccion ladosFigura='arriba-i abajo-i'>
        <MenuNavegacion />
        <p style={{ fontSize: '19px' }}>
          {tempString + tempString + tempString + tempString + tempString}
        </p>
      </Seccion>
      <Seccion ladosFigura='arriba-d abajo-d' tipoFondo='color'>
        <MenuNavegacion invert={true}/>
        <p style={{ fontSize: '19px', color: '#fff' }}>
          {tempString + tempString + tempString + tempString}
        </p>
      </Seccion>
      <Seccion ladosFigura='arriba-i abajo-i'>
        <MenuNavegacion />
        <p style={{ fontSize: '19px' }}>
          {tempString + tempString + tempString + tempString + tempString}
        </p>
      </Seccion>
      <Seccion ladosFigura='arriba-d abajo-d' tipoFondo='color'>
        <MenuNavegacion invert={true}/>
        <p style={{ fontSize: '19px', color: '#fff' }}>
          {tempString + tempString + tempString + tempString + tempString}
        </p>
      </Seccion>
      <Seccion ladosFigura='arriba-i'>
        <MenuNavegacion />
        <p style={{ fontSize: '19px' }}>
          {tempString + tempString + tempString + tempString}
        </p>
      </Seccion>
    </Fragment>
  );
}

export default LandingPage;
