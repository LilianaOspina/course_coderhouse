import React, { useEffect, useState } from "react";

export default function App() {
	//Almacenamos el tamaño
	const [height, setHeight] = useState();
	const [width, setWidth] = useState();

	// Para declarar un event listener declaramos una funcion
	//Nos avisa cada vez que el window haga un evento resize
	function onResize(evt) {
		//Cuando venga el evento seteo los cambios
		setHeight(evt.target.innerHeight);
		setWidth(evt.target.innerWidth);

		console.log("Resized window");
	}

	useEffect(() => {
		//Al inicio registramos un event listener
		window.addEventListener("resize", onResize);

		//Siempre que agregamos un event listener hay que removerlo
		return () => {
			///Lo podemos remover con la referencia a la funcion
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<div className='App'>
			{/* Muestra en tiempo real el tamaño de la pantalla */}
			<p>
				{height}x{width}
			</p>
		</div>
	);
}
