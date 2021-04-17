import React from 'react';
import Sidebar from '../layout/Sidebar'
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Carpetas = () => {
	return (
		<div className="contenedor-app">
			<Sidebar />

			<div className="seccion-principal">
				<main>
					<FormTarea />
					<div className="contenedor-tareas">
						<ListadoTareas />
					</div>
				</main>
			</div>
		</div>
	);
}

export default Carpetas;