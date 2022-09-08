import React from 'react';
import './styles.css';

function contador({ clics }){
  return (
    <div className='contador'>
      {clics}
    </div>
  );
}

export default contador;