import React, { useContext, useEffect } from 'react';
import Carpeta from './Carpeta';
import carpetaContext from '../../context/carpetas/carpetaContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListadoCarpetas = () => {

	// Extraer carpetas de state inicial
	const carpetasContext = useContext(carpetaContext);
	const { carpetas, obtenerCarpetas } = carpetasContext;

	useEffect(() => {
		obtenerCarpetas();
		// eslint-disable-next-line
	}, [])

	if (carpetas.length === 0) return null;

	return (
		<ul className="listado-carpetas">
			<TransitionGroup>
				{carpetas.map(carpeta => (
					<CSSTransition
						key={carpeta.id}
						timeout={200}
						classNames="carpeta"
					>
						<Carpeta
							carpeta={carpeta}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
}

export default ListadoCarpetas;