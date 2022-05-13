import React, { useEffect, useState } from "react";

//Esto es un Customehook
//Expone los valores resultantes
function useWindowWidth() {
	const [height, setHeight] = useState();
	const [width, setWidth] = useState();

	function onResize(evt) {
		setHeight(evt.target.innerHeight);
		setWidth(evt.target.innerWidth);

		console.log("Resized window");
	}

	useEffect(() => {
		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return { width, height };
}

export default function App() {

	const { width, height } = useWindowWidth();
	
	return (
		<div className='App'>
			{/* Muestra en tiempo real el tamaño de la pantalla */}
			<p>
				{height}x{width}
			</p>
		</div>
	);
}
