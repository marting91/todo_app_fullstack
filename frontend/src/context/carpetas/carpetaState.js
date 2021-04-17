import React, { useReducer } from 'react';
import carpetaContext from './carpetaContext';
import carpetaReducer from './carpetaReducer';
import clienteAxios from '../../config/axios';
import {
	AGREGAR_CARPETA,
	FORMULARIO_CARPETA,
	OBTENER_CARPETAS,
	VALIDAR_FORMULARIO,
	CARPETA_ACTUAL,
	ELIMINAR_CARPETA,
	CARPETA_ERROR
} from '../../types'


const CarpetaState = props => {

	// const carpetas = [
	// 	{ id: 1, nombre: 'Folder 1' },
	// 	{ id: 2, nombre: 'Folder 2' },
	// 	{ id: 3, nombre: 'Folder 3' }
	// ]

	const initialState = {
		carpetas: [],
		formulario: false,
		errorformulario: false,
		carpeta: null,
		mensaje: null
	}

	const [state, dispatch] = useReducer(carpetaReducer, initialState)

	//CRUD
	const mostrarFormulario = () => {
		dispatch({
			type: FORMULARIO_CARPETA
		})
	}

	// Obtener las carpetas
	const obtenerCarpetas = async () => {

		try {
			const resultado = await clienteAxios.get('/api/folders');
			// console.log(resultado.data);
			dispatch({
				type: OBTENER_CARPETAS,
				// payload: carpetas
				payload: resultado.data
			})
		} catch (error) {
			console.log(error)
		}
	}

	// Agregar nueva carpeta
	const agregarCarpeta = async carpeta => {
		// Id temporal
		// carpeta.id = Date.now()

		try {
			const resultado = await clienteAxios.post('/api/folders', carpeta);
			// console.log(resultado);
			dispatch({
				type: AGREGAR_CARPETA,
				payload: resultado.data
			})
		} catch (error) {
			console.log(error);
		}
	}

	// Valido form
	const mostrarError = () => {
		dispatch({
			type: VALIDAR_FORMULARIO
		})
	}

	// Selecciona folder
	const carpetaActual = carpeta => {
		dispatch({
			type: CARPETA_ACTUAL,
			payload: carpeta
		})
	}

	// Elimino carpeta
	const eliminarCarpeta = async carpetaId => {

		try {
			await clienteAxios.delete(`api//folders/${carpetaId}`);
			dispatch({
				type: ELIMINAR_CARPETA,
				payload: carpetaId
			})
		} catch (error) {
			const alerta = {
				msg: 'Hubo un error',
				categoria: 'alerta-error'
			}
			dispatch({
				type: CARPETA_ERROR,
				payload: alerta
			})
		}
	}

	return (
		<carpetaContext.Provider
			value={{
				carpetas: state.carpetas,
				formulario: state.formulario,
				errorformulario: state.errorformulario,
				carpeta: state.carpeta,
				mensaje: state.mensaje,
				mostrarFormulario,
				obtenerCarpetas,
				agregarCarpeta,
				mostrarError,
				carpetaActual,
				eliminarCarpeta
			}}
		>
			{props.children}
		</carpetaContext.Provider>
	)
}

export default CarpetaState;