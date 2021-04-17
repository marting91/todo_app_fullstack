import './App.css';
import Carpetas from './components/carpetas/Carpetas';

import CarpetaState from './context/carpetas/carpetaState';
import TareaState from './context/tareas/tareaState';

function App() {
	return (
		<CarpetaState>
			<TareaState>
				<Carpetas />
			</TareaState>
		</CarpetaState>
	);
}

export default App;
