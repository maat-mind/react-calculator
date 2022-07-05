import React from 'react';
import '../styles/Boton.css'

export function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };

  return (
    <div
      className={`boton-contenedor${
        esOperador(props.children) ? ' operador' : ''
      }`}>
      {props.children}
    </div>
  );
}
