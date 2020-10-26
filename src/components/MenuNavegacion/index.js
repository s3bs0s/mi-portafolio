import React from 'react';

import './style.scss';

const MenuNavegacion = props => {
  const { invert } = props;

  return (
    <nav className='menu-navegacion'>
      <div className={['menu', invert ? 'invert' : ''].join(' ')}/>
    </nav>
  );
}

export default MenuNavegacion;
