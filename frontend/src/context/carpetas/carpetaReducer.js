import {
	AGREGAR_CARPETA,
	FORMULARIO_CARPETA,
	OBTENER_CARPETAS,
	VALIDAR_FORMULARIO,
	CARPETA_ACTUAL,
	ELIMINAR_CARPETA,
	CARPETA_ERROR
} from '../../types'

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case FORMULARIO_CARPETA:
			return {
				...state,
				formulario: true
			}
		case OBTENER_CARPETAS:
			return {
				...state,
				carpetas: action.payload
			}
		case AGREGAR_CARPETA:
			return {
				...state,
				carpetas: [...state.carpetas, action.payload],
				formulario: false,
				errorformulario: false
			}
		case VALIDAR_FORMULARIO:
			return {
				...state,
				errorformulario: true
			}
		case CARPETA_ACTUAL:
			return {
				...state,
				carpeta: state.carpetas.find(carpeta => carpeta.id === action.payload.id)
				// carpeta: action.payload
			}
		case ELIMINAR_CARPETA:
			return {
				...state,
				carpetas: state.carpetas.filter(carpeta => carpeta.id !== action.payload),
				carpeta: null
			}
		case CARPETA_ERROR:
			return {
				...state,
				mensaje: action.payload
			}
		default:
			return state;
	}
}