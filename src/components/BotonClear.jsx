import React from 'react';
import '../styles/BotonClear.css';

export const BotonClear = (props) => (
  <button className='boton-clear' onClick={props.manejarClear}>
    Clear
  </button>
);
