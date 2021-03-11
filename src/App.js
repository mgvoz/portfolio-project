import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';

function App() {
	return (
		<>
			<Particles
				className='particles-canvas'
				params={{
					partciles: {
						number: {
							value: 60,
							density: {
								enable: true,
								value_area: 1200,
							},
						},
						shape: {
							type: 'square',
							stroke: {
								width: 10,
								color: '#9b8e7a',
							},
						},
					},
				}}
			/>
			<Navbar />
			<Header />
		</>
	);
}

export default App;
