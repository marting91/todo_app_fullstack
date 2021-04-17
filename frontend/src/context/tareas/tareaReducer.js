import {
	TAREAS_CARPETA,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
	TAREA_ACTUAL,
	ACTUALIZAR_TAREA
} from '../../types'

// eslint-disable-next-line
export default (state, action) => {
	switch (action.type) {
		case TAREAS_CARPETA:
			return {
				...state,
				// tareascarpeta: state.tareascarpeta.filter(tarea => tarea.carpetaId === action.payload),
				tareascarpeta: action.payload,
				tareaseleccionada: null,
				errortarea: false
			}
		case AGREGAR_TAREA:
			return {
				...state,
				tareascarpeta: [...state.tareascarpeta, action.payload],
				errortarea: false
			}
		case VALIDAR_TAREA:
			return {
				...state,
				errortarea: true
			}
		case ELIMINAR_TAREA:
			return {
				...state,
				tareascarpeta: state.tareascarpeta.filter(tarea => tarea.id !== action.payload)
			}
		case ACTUALIZAR_TAREA:
			return {
				...state,
				tareascarpeta: state.tareascarpeta.map(tarea => tarea.id === action.payload.id ? action.payload : tarea),
				tareaseleccionada: null
			}
		case TAREA_ACTUAL:
			return {
				...state,
				tareaseleccionada: action.payload,
				errortarea: false
			}
		default:
			return state;
	}
}