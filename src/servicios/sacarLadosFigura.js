const sacarLadosFigura = lados => {
  let ladosPreparados = [], tipoPreparado = [];
  if (lados.includes('arriba')) {
    ladosPreparados.push(
      lados.includes('arriba-i')
        ? 'arriba-izquierda'
        : 'arriba-derecha'
    );
    tipoPreparado.push('arriba');
  }
  if (lados.includes('abajo')) {
    ladosPreparados.push(
      lados.includes('abajo-i')
        ? 'abajo-izquierda'
        : 'abajo-derecha'
    );
    tipoPreparado.push('abajo');
  }
  return `${ladosPreparados.join('-')} ${tipoPreparado.join(' ')}`;
};

export default sacarLadosFigura;