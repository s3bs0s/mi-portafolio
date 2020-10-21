import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Separador = props => {
  const { lado } = props;

  return <section className={['separador', lado].join(' ')}/>;
}

Separador.propTypes = {
  lado: PropTypes.string.isRequired
};

export default Separador;
