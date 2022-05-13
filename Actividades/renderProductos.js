import { useEffect, useState } from "react";
import "./styles.css";

function getFromRemote() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const productos = [
				{
					id: "1",
					name: "producto1",
					description: "texto1",
					stock: 10,
				},
				{
					id: "2",
					name: "producto2",
					description: "texto2",
					stock: 20,
				},
				{
					id: "3",
					name: "producto3",
					description: "texto3",
					stock: 30,
				},
			];
			resolve(productos);
		}, 2000);
	});
}
//Retorna una lista ordenada
function ProductList({ productos }) {
	return (
		<ul>
			{/* Por cada producto vamos a generar un render
        Listamos cada producto */}
			{productos.map(
				producto => {
					return <li key={producto.id}>{producto.name}</li>;
			})}
		</ul>
	);
}

//Cuando inicia la aplicacion levanta la home
function Home() {
	//Ponemos en el estado que por defecto no hay productos
	const [products, setProducts] = useState([]);
	//Para controlar el loading que la app esta cargando
	const [loading, setLoading] = useState(true);

	//Apenas levanta la home ponemos un efecto que inicializa
	//Se ejecuta durante el montaje
	useEffect(() => {
		console.log("Se ejecuta en el inicio");
		//buscamos los productos
		getFromRemote().then(response => {
			//Guardamos el resultado en un estado
			setProducts(response);
			//Apagamos el loading cuando vuelven los productos
			setLoading(false);
		});
	}, []);

	//Devuelve lista de productos
	return (
		<>
			{loading && <p>Loading...</p>}
			<ProductList productos={products} />
		</>
	);
}

function App() {
	return (
		// Cuando inicia la aplicacion levanta la home
		<Home />
	);
}
export default App;
