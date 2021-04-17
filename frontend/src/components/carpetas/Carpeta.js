import React, { useContext } from 'react';
import carpetaContext from '../../context/carpetas/carpetaContext';
import tareaContext from '../../context/tareas/tareaContext'

const Carpeta = ({ carpeta }) => {

	// Obtengo state del form
	const carpetasContext = useContext(carpetaContext);
	const { carpetaActual } = carpetasContext;

	// Obtengo funcion de context de tarea
	const tareasContext = useContext(tareaContext);
	const { obtenerTareas } = tareasContext;

	// Funcion para agregar la carpeta actual
	const seleccionarCarpeta = carpeta => {
		carpetaActual(carpeta); // Fijar carpeta actual
		obtenerTareas(carpeta.id) // Filtra las tareas
	}
	return (
		<li>
			<button
				type="button"
				className="btn btn-blank"
				onClick={() => seleccionarCarpeta(carpeta)}
			>{carpeta.nombre}</button>
		</li >
	);
}

export default Carpeta;