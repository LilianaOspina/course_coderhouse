import { useState } from "react";
import "./styles.css";

export default function App() {
	const [click, setClick] = useState(0);

	function handleClick() {
		setClick(click + 1);
	}

	return (
		<div className='App'>
			<h1>Prueba click tracker</h1>
			<button onClick={handleClick}>Click</button>
			<p>{click}</p>
		</div>
	);
}
