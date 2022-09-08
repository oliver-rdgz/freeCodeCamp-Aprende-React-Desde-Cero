import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp.png';
import Boton from './componentes/boton/boton';
import Contador from './componentes/contador/contador.js';
import { useState } from 'react';

function App() {

  const [clics, setClics] = useState(0);

  const manejarClic = ()=> {
    setClics(clics+1);
  };
  
  const reiniciarContador = ()=> {
    setClics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador clics={clics} />

        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic= {manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic= {reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
