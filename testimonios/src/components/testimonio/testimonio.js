import React from 'react';
import './styles/testimonio.css';

export default function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img 
        alt='Foto del estudiante' 
        className='imagen-testimonio' 
        src={require(`./images/person${props.imagen}.jpg`)} 
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
            <strong> {props.nombre} </strong>
            en {props.pais}
        </p>
        <p className='cargo-testimonio'> 
          {props.cargo} 
          en 
          {props.empresa}
        </p>
        <p className='texto-testimonio'>
        "{props.testimonio}"
        </p>
      </div>
    </div>
  );
}