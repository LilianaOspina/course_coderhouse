// Crear una promesa que resuelva en tres segundos un array de objetos de tipo producto. Al resolver, imprimirlos en consola

// { 
//   id: string, 
//   name: string, 
//   description: string, 
//   stock: number 
// }

console.clear();

const task = new Promise((resolveFn, rejectFn) => {
	setTimeout(() => {
		const producto = [{
				id: "1",
				name: "producto1",
				description: "texto1",
				stock: 10
			},
			{
				id: "2",
				name: "producto2",
				description: "texto2",
				stock: 20
			},
			{
				id: "3",
				name: "producto3",
				description: "texto3",
				stock: 30
			}
		];
		resolveFn(producto);
	}, 3000);
});

// task.then(
// 	(result) => {
// 		console.log("Resultado ", result);
// 	}
// );

//Si quiero buscar un producto en especifico por id:

task.then(
	(result) => {
		const busquedaPorId = result.filter(
			producto => producto.id === "1")
		console.log("Resultado por id: ", busquedaPorId);
	}
)