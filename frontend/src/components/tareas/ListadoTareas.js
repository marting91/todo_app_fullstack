import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import carpetaContext from '../../context/carpetas/carpetaContext';
import tareaContext from '../../context/tareas/tareaContext'

const ListadoTareas = () => {


	// Extraer carpetas de state inicial
	const carpetasContext = useContext(carpetaContext);
	const { carpeta, eliminarCarpeta } = carpetasContext;

	// Obtengo tareas del folder
	const tareasContext = useContext(tareaContext);
	const { tareascarpeta } = tareasContext;

	// Si no hay carpetas seleccionadas
	if (!carpeta) {
		return <h2>Select folder</h2>
	}

	// Elimino carpeta
	const onClickEliminar = () => {
		eliminarCarpeta(carpeta.id)
	}

	return (
		<Fragment>
			<h2>Folder: {carpeta.nombre}</h2>

			<ul className="listado-tareas">
				{tareascarpeta.length === 0
					? (<li className="tarea"><p>No tasks</p></li>)
					:
					tareascarpeta.map(tarea => (
						<Tarea
							key={tarea.id}
							tarea={tarea}
						/>
					))

				}
			</ul>

			<button
				type="button"
				className="btn incompleto"
				onClick={onClickEliminar}
			>Delete Folder</button>
		</Fragment>
	);
}

export default ListadoTareas;