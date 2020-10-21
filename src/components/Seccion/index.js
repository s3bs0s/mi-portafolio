import React from 'react';
import PropTypes from 'prop-types';

import sacarLadosFigura from '../../servicios/sacarLadosFigura';
import './style.scss';

const Seccion = props => {
  const {
    children = 'Sin contenido.',
    ladosFigura = '',
    tipoFondo,
    fondoImagen = {}
  } = props;

  return (
    <section
      className={[
        'seccion',
        sacarLadosFigura(ladosFigura),
        tipoFondo
      ].join(' ')}
      style={{ ...fondoImagen }}
    >
      { children }
    </section>
  );
}

Seccion.propTypes = {
  ladosFigura: PropTypes.oneOf([
    'arriba-i', 'arriba-d', 'abajo-i', 'abajo-d',
    'arriba-i abajo-i', 'abajo-i arriba-i',
    'arriba-d abajo-d', 'abajo-d arriba-d',
    'arriba-i abajo-d', 'abajo-d arriba-i',
    'arriba-d abajo-i', 'abajo-i arriba-d'
  ]),
  tipoFondo: PropTypes.oneOf(['imagen', 'color']),
  fondoImagen: PropTypes.object
};

export default Seccion;
