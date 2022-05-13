//map en productos de database

const productos = [{
    id: "1",
    name: "Camisa",
    description: "Camisa negra talle 2",
    stock: 10
},
{
    id: "2",
    name: "Jean",
    description: "Jean mom talle 24",
    stock: 20
},
{
    id: "3",
    name: "Medias",
    description: "Medias tipo socks talle unico",
    stock: 30
}];

console.log("Todos los productos: ", productos);

//recorre productos y genera uno nuevo con los datos de los nombres de los productos
const nombresProductos = productos.map(p => p.name);

console.log("Nombres de los productos: ", nombresProductos);

//Devolver un objeto directo de un arrow function donde devolvemos el nombre y el stock
const stockProductos = productos.map(
    p => ({
        name: p.name,
        stock: p.stock
    })
);

console.log("Nombres y stock de los productos: ", stockProductos);

//Sumamos el nombre con la descripcion del stock
const descripcionProductos = productos.map(
    p => ({
        descripcion: p.name + " " + p.description,
        stock: p.stock
    })
)

console.log("Nombre y descripcion de producto con su stock: ", descripcionProductos);

//Busqueda cruzada: para motores de busqueda haciendo un indice, para que cuando google scanee encuentre mas facil los contenidos de los productos, sirve para que en un filter encuentre por cualquiera de las palabras que contenga el producto
//Como un auto search performante, genera coincidencias en los resultados
const productosFiltrados = productos.map(
    p => ({
        id: p.id,
        name: p.name,
        descripcion: p.description,
        stock: p.stock,
        search: `${p.id} ${p.name} ${p.description}`
    })
)

console.log("Producto encontrado: ",productosFiltrados.filter(
    p => p.search.includes('negra')
));

//Usando el segundo parametro index, con esto pueden saber el numero de la lista
const productosFiltradosIdx = productos.map(
    (p,idx) => ({
        id: p.id,
        order: idx,
        name: p.name,
        descripcion: p.description,
        stock: p.stock,
        search: `${p.id} ${p.name} ${p.description}`
    })
)
console.log("Producto encontrado con ubicacion en lista: ",productosFiltradosIdx.filter(
    p => p.search.includes('socks')
));
