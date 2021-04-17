import React from 'react';
import NuevaCarpeta from '../carpetas/NuevaCarpeta';
import ListadoCarpetas from '../carpetas/ListadoCarpetas';

const Sidebar = () => {
	return (
		<aside>
			<h1>ToDoAPP</h1>

			<NuevaCarpeta />

			<div className="carpetas">
				<h2>Folders</h2>

				<ListadoCarpetas />
			</div>
		</aside>
	);
}

export default Sidebar;