import React, { useReducer } from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import clienteAxios from '../../config/axios'

import {
	TAREAS_CARPETA,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
	TAREA_ACTUAL,
	ACTUALIZAR_TAREA
} from '../../types'

const TareaState = props => {
	const initialState = {
		tareascarpeta: [],
		errortarea: false,
		tareaseleccionada: null
	}

	// Dispatch y State
	const [state, dispatch] = useReducer(tareaReducer, initialState);

	// Obtengo tareas de una carpeta
	const obtenerTareas = async carpetaId => {
		// console.log(carpetaId);
		try {
			const resultado = await clienteAxios.get('api/folders/tasks', { params: { carpetaId } });
			// console.log("Obtener tareas")
			// console.log(resultado.data);
			dispatch({
				type: TAREAS_CARPETA,
				payload: resultado.data
			})
		} catch (error) {
			console.log(error)
		}
	}

	// Agregar tarea
	const agregarTarea = async tarea => {
		// tarea.id = Date.now();
		try {
			const resultado = await clienteAxios.post('/api/folders/tasks', tarea);
			tarea.id = resultado.data.id;
			// console.log("Agregar tarea")
			// console.log(tarea);
			dispatch({
				type: AGREGAR_TAREA,
				payload: tarea
			})
		} catch (error) {
			console.log(error)
		}

	}

	// Validacion
	const validarTarea = () => {
		dispatch({
			type: VALIDAR_TAREA
		})
	}

	// Eliminar tarea
	const eliminarTarea = async id => {

		try {
			await clienteAxios.delete(`api/folders/tasks/${id}`)
			dispatch({
				type: ELIMINAR_TAREA,
				payload: id
			})
		} catch (error) {
			console.log(error)
		}
	}

	// Editar tarea
	const guardarTareaActual = tarea => {
		dispatch({
			type: TAREA_ACTUAL,
			payload: tarea
		})
	}

	// Editar tarea
	const acutalizarTarea = async tarea => {
		try {
			const resultado = await clienteAxios.put(`/api/folders/tasks/${tarea.id}`, tarea);
			// console.log(resultado);
			dispatch({
				type: ACTUALIZAR_TAREA,
				payload: resultado.data
			})
		} catch (error) {
			console.log(error);
		}

	}

	return (
		<tareaContext.Provider
			value={{
				tareascarpeta: state.tareascarpeta,
				errortarea: state.errortarea,
				tareaseleccionada: state.tareaseleccionada,
				obtenerTareas,
				agregarTarea,
				validarTarea,
				eliminarTarea,
				guardarTareaActual,
				acutalizarTarea
			}}
		>
			{props.children}
		</tareaContext.Provider>
	)
}

export default TareaState;