import './App.css';
import { ProctorApp, getStatistics } from  'react_proctoring_library';
function  Test(props) {
	return (
		<div>
			<h1>Proctoring Window</h1>
		</div>
	);
}


// function App() {
//   return (
//     <div className="aplicacion-tareas">
//       <div className='logo-contenedor'></div>
//         <img 
//         src= {require('./assets/logo.jpg')}
//         className='logo'
//         alt='logo de la pagina'
//         />
      
//     </div>
//   );
// }

function  App() {
	const testIdentifier = 'unique-proctoring-identifier';
	const fullScreenMessage = 'This test can only be completed in Full Screen Mode, do you want to start this test?';
	const  getStats = e  => {
		e.preventDefault();
		console.log(getStatistics(testIdentifier));
	};
	return (
    <div>
      <div className="App">
        <ProctorApp TestComponent={Test} testIdentifier={testIdentifier} fullScreenMessage={fullScreenMessage} />
      </div>
      <button  onClick={getStats}>Get Statistics</button>
    </div>
	);
}

export default App;
