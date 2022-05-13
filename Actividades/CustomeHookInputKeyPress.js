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

function useTextInput() {
	const [input, setInput] = useState();

	function onKeyDown(evt) {
		if (["a", "e", "i", "o", "u"].includes(evt.key)) {
			evt.preventDefault();
			return;
		}
		setInput(evt.target.value);
	}

	function onInput(evt) {
		setInput(evt.target.value);
	}
	//retornamos un objeto, el onInput esta vinvulado al estado y tambien tiene un value
	return {
		type: "text",
		onInput,
		onKeyDown,
		value: input,
		placeholder: "Soy un hook loco",
	};
}

export default function App() {
	const { width, height } = useWindowWidth();
	const input = useTextInput();
	//Si quiero replicar solo hago esto y cada campo tendra su sincronizacion
	const input2 = useTextInput();

	return (
		<div className='App'>
			{/* Muestra en tiempo real el tamaño de la pantalla */}
			<p>
				{height}x{width}
			</p>
			{/* pegamos son spread operator el objeto de useTextInput */}
			<input {...input} />
			<input {...input2} />
			<p>{input.value}</p>
			<p>{input2.value}</p>
		</div>
	);
}
