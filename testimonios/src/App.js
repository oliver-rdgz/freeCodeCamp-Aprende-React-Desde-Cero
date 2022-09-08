import './App.css';
import Testimonio from './components/testimonio/testimonio.js';

function App() {
  return (
    <div className="App">
              <h1>Esto dice nuestros alumnos</h1>
      <div className='contenedor-principal'>
        <Testimonio 
          nombre='Hijo de Mr. Bean'
          pais='Inglaterra'
          imagen='1'
          cargo='Ingeniero electronico'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />

          <Testimonio 
            nombre='Capitana marvel'
            pais='EE.UU'
            imagen='2'
            cargo='Ingeniero espacial'
            empresa='nasa'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />

            <Testimonio 
            nombre='Juan Ruiz'
            pais='Mexico'
            imagen='3'
            cargo='Guru del marketing'
            empresa='Verduleria juana'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          />
      </div>
    </div>
  );
}

export default App;
