import React, { useEffect, useState } from "react";

import "./styles.css";

export default function App() {
	//Guardamos los valores en un estado
	const [categoriesList, setCategoriesList] = useState([]);

	//lugar correcto para hacer una request
	//Efecto de montaje
	useEffect(() => {
		//fetch hace un get automaticamente a la api de las categorias
		fetch("https://api.mercadolibre.com/sites/MLA/categories")
			.then(
				//trae una respuesta cuando la promesa se resuelva
				response => {
					//Este json es una promesa. como retornamos ese resultado, lo agarramos afuera
					return response.json();
				}
			)
			//Tomamos la respuesta retornada
			.then(categories => {
				setCategoriesList(categories);
				console.log("Categorias", categories);
			});
	}, []);

	return (
		<div className='App'>
			<h1>Categorias MercadoLibre</h1>
			<ul>
				{categoriesList.map(c => {
					return (
						<li>
							{c.id}-{c.name}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
