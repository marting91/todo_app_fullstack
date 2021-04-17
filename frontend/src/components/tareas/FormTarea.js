import React, { useContext, useState, useEffect } from 'react'
import carpetaContext from '../../context/carpetas/carpetaContext';
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {

	// Extraer si una carpeta se selecciona
	const carpetasContext = useContext(carpetaContext);
	const { carpeta } = carpetasContext;

	// Obtengo funcion de context de tarea
	const tareasContext = useContext(tareaContext);
	const { errortarea, tareaseleccionada, agregarTarea, validarTarea, obtenerTareas, acutalizarTarea } = tareasContext;

	// Detecto tarea seleccionada
	useEffect(() => {
		if (tareaseleccionada !== null) {
			guardarTarea(tareaseleccionada)
		} else {
			guardarTarea({
				nombre: ''
			})
		}
	}, [tareaseleccionada])

	// State del form
	const [tarea, guardarTarea] = useState({
		nombre: ''
	})

	// Extraigo nombre
	const { nombre } = tarea;

	// Si no hay carpetas seleccionadas
	if (!carpeta) {
		return null;
	}

	// Leer form
	const handleChange = e => {
		guardarTarea({
			...tarea,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = async e => {
		e.preventDefault();

		// Validacion
		if (nombre.trim() === '') {
			validarTarea();
			return;
		}

		// Reviso si es edicion o creacion
		if (tareaseleccionada === null) {
			// Agregar tarea al state
			tarea.carpetaId = carpeta.id;
			tarea.estado = false
			// console.log("Antes de agregar tarea")
			// console.log(tarea)
			await agregarTarea(tarea);
		} else {
			// Actualizar tarea
			await acutalizarTarea(tarea);
		}

		// Obtener tareas del folder
		await obtenerTareas(carpeta.id);

		// Reinicio form
		guardarTarea({
			nombre: ''
		})
	}

	return (
		<div className="formulario">
			<form
				onSubmit={onSubmit}
			>
				<div className="contenedor-input">
					<input
						type="text"
						name="nombre"
						placeholder="New Task..."
						className="input-text"
						value={nombre}
						onChange={handleChange}
					/>
				</div>

				<div className="contenedor-input">
					<input
						type="submit"
						value={tareaseleccionada ? 'Edit Task' : 'Create Task'}
						className="btn btn-primario btn-submit btn-block"
					/>
				</div>
			</form>
			{errortarea ? <p className="mensaje error">Insert task name</p> : null}
		</div>
	);
}

export default FormTarea;