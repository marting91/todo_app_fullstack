import React, { Fragment, useState, useContext } from 'react';
import carpetaContext from '../../context/carpetas/carpetaContext';

const NuevaCarpeta = () => {

	// Obtengo state del form
	const carpetasContext = useContext(carpetaContext);
	const { formulario, errorformulario, mostrarFormulario, agregarCarpeta, mostrarError } = carpetasContext;

	// State para Carpeta
	const [carpeta, guardarCarpeta] = useState({
		nombre: ''
	});

	// Leo contenido del input
	const onChangeCarpeta = e => {
		guardarCarpeta({
			...carpeta,
			[e.target.name]: e.target.value
		})
	}

	const onSubmitCarpeta = e => {
		e.preventDefault();

		// Validacion
		if (nombre === '') {
			mostrarError();
			return;
		}
		// Agrego al state
		agregarCarpeta(carpeta);

		// Reset form
		guardarCarpeta({
			nombre: ''
		})
	}

	// Extraigo nombre de la carpeta
	const { nombre } = carpeta;
	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-block btn-primario"
				onClick={() => mostrarFormulario()}
			>New Folder</button>

			{ formulario ?
				(
					<form
						className="formulario-nueva-carpeta"
						onSubmit={onSubmitCarpeta}
					>
						<input
							type="text"
							name="nombre"
							className="input-text"
							placeholder="Name"
							value={nombre}
							onChange={onChangeCarpeta}
						/>
						<input type="submit" value="Create" className="btn btn-primario btn-block" />
					</form>
				) : null
			}

			{errorformulario ? <p className="mensaje error">Insert value</p> : null}
		</Fragment>
	);
}

export default NuevaCarpeta;