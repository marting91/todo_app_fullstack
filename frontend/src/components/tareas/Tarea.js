import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext'
import carpetaContext from '../../context/carpetas/carpetaContext';

const Tarea = ({ tarea }) => {

	// Extraer carpeta
	const carpetasContext = useContext(carpetaContext);
	const { carpeta } = carpetasContext;

	// Obtengo funcion de context de tarea
	const tareasContext = useContext(tareaContext);
	const { eliminarTarea, obtenerTareas, acutalizarTarea, guardarTareaActual } = tareasContext;

	// Handler boton eliminar
	const tareaEliminar = id => {
		eliminarTarea(id);
		obtenerTareas(carpeta.id);
	}

	// Modifico estado tarea
	const cambiarEstado = tarea => {
		if (tarea.estado) {
			tarea.estado = false;
		} else {
			tarea.estado = true;
		}
		acutalizarTarea(tarea)
	}

	// Editar tarea
	const seleccionarTarea = tarea => {
		guardarTareaActual(tarea);
	}

	return (
		<li className="tarea sombra">
			<p>{tarea.nombre}</p>
			<div className="estado">
				{tarea.estado
					? (
						<button
							type="button"
							className="completo"
							onClick={() => cambiarEstado(tarea)}
						>Completed</button>
					) :
					(
						<button
							type="button"
							className="incompleto"
							onClick={() => cambiarEstado(tarea)}
						>Pending</button>
					)
				}
			</div>
			<div className="acciones">
				<button
					type="button"
					className="btn btn-primario"
					onClick={() => seleccionarTarea(tarea)}
				>Editar</button>
				<button
					type="button"
					className="btn btn-secundario"
					onClick={() => tareaEliminar(tarea.id)}
				>Eliminar</button>
			</div>
		</li>
	);
}

export default Tarea;