<link rel="stylesheet" type="text/css" media="all" href="./styles.css" />

<t>CoderHouse - React</t>

---

## Índice

- [C1 - Nivelacion](#c1)
    - [HTML](#c1)
- [C2 - Instalacion y configuracion del entorno](#c2)
    - [Comandos npm](#c2)
    - [create-react-app](#c2a)
- [C3 - Webpack y jsx](#c3)
    - [Sugar Syntax](#c3)
    - [Retrocompatibilidad](#c3a)
    - [jsx](#c3b)
- [C4 - Componentes](#c4)
    - [Componentes de presentacion](#c4a)
    - [Componentes contenedores](#c4b)
    - [Children](#c4c)
- [C5 - Componentes II](#c5)
    - [State hook](#c5a)
    - [Effect hook](#c5b)


# HTML

## DOCTYPE 

No es una etiqueta, sino una instrucción para indicar al navegador qué versión de HTML vamos a utilizar. 
El DOCTYPE mostrado en nuestro ejemplo anterior es del estándar HTML 5.

```html
<!DOCTYPE html>
```

Se pueden incorporar modos en el tag de DOCTYPE, que cambian la forma en que el navegador interpreta.

## Metadatos del documento

`<title>`: 

Define el título del documento, el cual se muestra en la barra de título del navegador o en las pestañas de página.

`<base>`: 

Define la URL base para las URLs relativas en la página.
Refiere a cual es cuando usamos una url cual es la url de inicio
Permite definir desde que url base van a consumir los recursos

`<link>`: 

Utilizada para enlazar JavaScript y CSS externos.

`<meta>`: 

Con esta etiqueta definimos la codificación que tendrá nuestro archivo, los mismos pueden ser:

- UTF-8 ✓ recomendado
- ANSI

> ANSI es el formato estándar de codificación de archivos utilizados en el Bloc de notas.

## Scripting

`<script>`: 

Define tanto un script interno como un enlace hacia un script externo. El lenguaje de programación es JavaScript

`<noscript>`: 

Define un contenido alternativo a mostrar cuando el navegador no soporta scripting.
Define comportamiengo cuando no hay script

## Javascript

> ### 💡
> Destructuracion:
> cuando agarro las propiedades de un objeto y las capturo en otro

Podemos declarar variables de una propiedad de un objeto en la destructuracion:

#### 📜 Ejemplo!

```js
let obj = {
    nombre: "lili",
    ocupacion: "developer",
    edad: 30
}
let {nombre: nom,ocupacion} = obj;
console.log(nom); //aparece el contenido de nombre

//tambien podemos

const leerNombre = ({nombre, ocupacion}) =>{
    console.log(`Tu nombre es ${nombre} y te dedicas a ser ${ocupacion}`);
}
leerNombre(obj);
```

otro ejemplo

Aqui creamos 2 variables, la primera con el primer valor del array y la segunda con el segundo valor del array

```js
const [primerValor, segundoValor] = [1,2]

console.log(`Aqui sale el uno ${primerValor} y aqui el dos ${segundoValor}`);

//Aqui sale el uno 1 y aqui el dos 2
```

> ### 💡
> Arrow function
> Arrastra el contexto de donde fue ejecutada

<a id='c2'></a>

# C2 - Instalacion y configuracion del entorno

## Comandos npm

Una vez instalado node tenemos el comando

```
node
```

Para ver la version

```
node -v
```

Si trabajamos con varias versiones de node descargamos nvm y listamos las versiones con:

```
nvm ls
```

Para inicializar un proyecto en node

```
npm init
```

### Dependencias en package.json

Para instalar dependencias

```
npm install nombre-dependencia
```

Para instalar las dependencias que esten en el proyecto package.json

```
npm install
```

Para desinstalar dependencias

```
npm unistall nombre-dependencia
```

Instalar dependencias en modo de desarrollo

```
npm install nombre-dependencia --save-dev 
```

**Para dejar limpios los node_modules que no estemos usando**

```
npm prune
```

Para publicar el codigo que hacemos en npm
 
```
npm publish
```

**Para instalar paquetes de manera global** Con este comando instalamos la herramienta en todo el terminal, esto disponibiliza el comando en cualquier lugar, no en un projecto en particular, si no en la version de node que estemos corriendo

```
npm install --g nombre-dependencia
```
> No estan recomendados los paquetes globales

Podemos usar npx, la `x` viene de *execute*, permite bajar y ejecutar en el mismo momento, seria hacer el install global y la ejecucion.

```
npx nombre-dependencia nombre-del-proyecto
```

> ### 💡
> Las dependencias de desarrollo son aquellas que no se van a exportar con el proyecto final si no que solo van a servir para el desarrollo de la herramienta

### scripts en package.json

Son palabras que nos permiten simplificar el proceso

#### 📜 Ejemplo!

```json
"scripts":{
    "coderscripts":"node index.js"
}
```

en consola ponemos `coderscripts` y se ejecutara `node index.js`

<a id='c2a'></a>

## create-react-app

La libreria `create-react-app` es una aplicacion que permite crear un *scaffold* es la estructura con todo lo que necesito para poder inicial un proyecto en algo

### Ejecucion 1

Instalandolo de manera global:

```
npm install --g create-react-app
```

```
create-react-app nombre-del-proyecto
```

### Ejecucion 2

Ejecutando la libreria

```
npx create-react-app nombre-del-proyecto
```

## Levantamos la aplicacion

```
npm run start
```

Esto arma un *scaffold* de react


## Convenciones

- Un directorio normal, las que no son componentes las ponemos en minuscula

ruta: src/components

mkdir: /components

- Por cada componente hacemos una carpeta nueva, las carpetas que tegan componentes las inicializamos con mayusculas

ruta: src/components/Saludar

mkdir: /Saludar

creamos el componente:

ruta: src/components/Saludar/Saludar.js

Saludar.js

> ### 💡
> control k f
> Con el codigo seleccionado; organiza todo el codigo
>
> control p
> Podemos buscar un archivo en el visual

<a id='c3'></a>

# C3 - Webpack y jsx

## Sugar Syntax

Sugar Syntax refiere a la sintaxis agregada a un lenguaje de programación con el objetivo de hacer más fácil y eficiente su utilización. 

Favorece su escritura, lectura y comprensión.

#### 📜 Ejemplos!

```js
i = i + 1	→   i++
```

- ternary operator

```js
const condition = true;
console.log(`This is ${condition ? 'correct' : 'incorrect'}`);
```

- Spread operator 

Spread = desplegar

```js
[a, ...arr]
```

```js
const array = [1,2,3,4,5];
const arr2 = [6,7,8,9,10, ...array];
console.log(arr2);
//[6,7,8,9,10,1,2,3,4,5]
```

```js
const obj = { nombre: 'coder'};
const obj2 = { ocupacion: 'codear', ...obj}
console.log(obj2);
// Object { ocupacion: "codear", nombre: "coder" }
```

- Propiedades dinámicas

```js
{ foo: "bar", [ "baz" + id ]: 42 }
```

Si no conocemos las propiedades del objeto al momento de crearlo; el nombre de la key.

```js
const obj = { nombre: 'coder'};
const num = 1;
const obj2 = {
    ocupacion: 'coder',
    //Crea una propiedad en el momento para poder computar
    ["test" + num]: 'dynamic',
    ...obj
};
console.log(obj2);
//Object { ocupacion: "coder", test1: "dynamic", nombre: "coder" }
```

- Deep matching

```js
var { a: val } = { a : 2 }
```

- Asignación en desestructuración

Ponemos un valor por defecto en caso que no haya un valor en la destructuracion

```js
var [ a = 1, b = 2, c = 3, d ] = [ 4, 5 ]
```

<a id='c3a'></a>

## Retrocompatibilidad - pollyfills

Los polyfills nos permiten hacer nuestra aplicación compatible con navegadores antiguos que no admiten de forma nativa alguna nueva funcionalidad

**¿Cómo se integra un polyfill?**

Ejemplo: core-js

`zloirock/core-js: Standard Library`

```
npm install --save core-js@3.6.5
```

se agrega a la lista de dependencias

<a id='c3b'></a>

## JSX - javascript xml

JSX es una extensión de Javascript, no de React. 

Esto significa que no hay obligación de utilizarlo, pero es recomendado en el sitio web oficial de React. 

#### 📜 Ejemplo!

```jsx
<div className="active">Hola Coders</div>
```

```js
React.createElement(
    'div', 
    { className: 'active'}, 
    'Hola Coders');
```

### Reglas generales

Los elementos deben ser balanceados. 

Por cada apertura debe haber un cierre.

```js
<img src=""> //Mal
<img src=""></img> //Es mejorable
```

Si el elemento no tiene hijos, debe idealmente ser auto-cerrado

```js
<img src="" /> //Ideal
```

<a id='c4'></a>

# C4 - Componentes

Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

![img](./img/c4.png)

Tienen responsabilidades muchas veces mayores muchas otras menores, dependiendo del contexto

>### 👍🏼 Ventajas
> ✅ Favorece la separación de responsabilidades: cada componente debe tener una única tarea.
> ✅ Al tener la lógica de estado y los elementos visuales por separado, es más fácil reutilizar los componentes.
> ✅ Se simplifica la tarea de hacer pruebas unitarias.
> ✅ Puede mejorar el rendimiento de la aplicación.
> ✅ La aplicación es más fácil de entender. 

Los componentes idealmente deberian tener una sola responsabilidad:

## prop

Le damos informacion al componente para que pueda hacer algo

Las propiedades son la forma que tiene React para pasar parámetros de un componente superior a sus children.

Es la manera de implementar el flujo de datos unidireccional

Si alguna prop es una función, el child component puede llamarla para provocar efectos secundarios en el parent

- No están limitadas a ser valores fijos como: 1 / “Alexis” / true
- Pueden ser lo que sea:

✅ **Valores comunes** num, bool, array, obj

✅ **Funciones**

✅ **Componentes**  Si los componentes son funciones, ¡entonces puedo pasar componentes! ;)

✅ **Children**

✅ **Valores inyectados por librerías** location, rutas, traducciones


### En componentes de clase:

Las propiedades enviadas al componente las recibiremos a través de this.props para acceder a un objeto en el cual tendremos todas las propiedades disponibles.

> Con las clases es muy dificil compartir el comportamiento

### En componentes funcionales

Simplemente se reciben como parámetro de la función

```js
({ name }) => <p>{name}</p> 
```

<a id='c4a'></a>

## Componentes de presentacion

Son aquellos que simplemente se limitan a mostrar datos y tienen poca o nula lógica asociada a manipulación del estado (por eso son también llamados stateless components). 

- Orientados al aspecto visual
- No tienen dependencia con fuentes de datos (ej. Flux)
- Reciben callbacks por medio de props
- Pueden ser descritos como componentes funcionales
- Normalmente no tienen estado

#### 📜 Ejemplo!

![img](./img/c4a.png)

Usando esta sintaxis, las propiedades se reciben como parámetros de la función y podemos obtener las variables que nos interesan por separado

```js
const Titulo = ({nombre}= props)=>(
    <h1>{nombre}</h1>
);

const Item = (props) =>(
    <li><a href="#">{props.valor}</a></li>
);

const Input = (props)=>(
    <input type='text' placeholder={ props.placeholder} />
);
```

<a id='c4b'></a>

## Componentes contenedores

Tienen como propósito encapsular a otros componentes y proporcionarles las propiedades que necesitan. Además se encargan de modificar el estado de la aplicación para que el usuario vea el cambio en los datos (por eso son también llamados *state components*).

- Orientados al funcionamiento de la aplicación
- Contienen componentes de presentación y/u otros contenedores 
- Se comunican con las fuentes de datos 
- Usualmente tienen estado para representar el cambio en los datos

#### 📜 Ejemplo!

![img](./img/c4b.png)

> ### 💡
> Este tipo de componentes será el encargado de realizar llamadas a las API’s externas y/o establecer la lógica a realizar en función de las acciones que realice el usuario sobre la interfaz.

<a id='c4c'></a>

## Children

Children es una manera que tiene react de permitirnos proyectar/transcluir uno o más componentes dentro otro

```js
<Component>
    <ChildComponent/>
</Component>
```

![img](./img/c4c1.png)

**Es ideal cuando:**

- Necesitamos que un elemento quede dentro de otro sin que sepan el uno del otro
- Necesitamos implementar patrones más complejos

Cuando le decimos react donde ubicar el `children`

![img](./img/c4c2.png)


Cuando enviamos varios `children` y queremos ordenarlos cada uno en particular

![img](./img/c4c3.png)

<a id='c5'></a>

# C5 - Componentes II

## Relacion de `children` y `props`

Si le agregamos `children` en el jsx:

Los inyecta como objeto si es único o como array si son muchos.

> ### 💡
> Tener cuidado para evitar errores del tipo `children[0]`, si espero un grupo de children y viene uno solo, cuando hay un único child de tipo `object`.
> asi evitamos el error indexoutoffboundexception

## Hooks

<a id='c5a'></a>

## State hook

Cuando queremos traer informacion de react; por ejemplo de un formulario, podemos usar `useState`


```js
import React, { useState } from 'react';

const [name, setName] = useState(null);
```

El primer parametro nos devuele un lugar para almacenar el estado en este ejemplo `name`, y en el segundo parametro una funcion con el cual editar este estado `setName`.

Con el uso de un manejador de eventos *EventListeners* puedo modificarlos. Por ejemplo un `onClick` `onInput`

> ### 💡
> Conectar el estado con un evento es databinding 

> #### 🎬
> Video: Clase 5 minuto 43 ejemplo submit formulario y hooks

Este hook lo que hace es guardar esta informacion; este estado fuera de la funcion, ya que cuando hacemos setName la funcion se vuelve a ejecutar, y esto ocurre en cada cambio de prop y en cada cambio de estado

### Estructura básica:

Los declaramos con *spread syntax* para simplificar


#### Reglas:

- El value es constante
  No puedo hacer `name = x`

- Se cambia con `setName`
  setName(‘Nuevo valor’)

- No llamar `setName` entre la declaración del hook y el render


#### 📜 Ejemplo: Click tracker

```js
import {useState} from 'react';

export default function App() {
  const [click, setClick] = useState(0);

  function handleClick(){
    setClick(click + 1);
  }

  return (
    <div className="App">
      <h1>Prueba click tracker</h1>
      <button onClick={handleClick}>Click</button>
      <p>{click}</p>
    </div>
  );
}

```

Agregamos la hora del ultimo click

```js
import {useState} from 'react';

export default function App() {
  const [click, setClick] = useState(0);
  const [lastClick, setLastClick] = useState('null');

  function handleClick(){
    setClick(click + 1);
    setLastClick(new Date().toTimeString());
  }

  return (
    <div className="App">
      <h1>Prueba click tracker</h1>
      <button onClick={handleClick}>Click</button>
      <p>{click}</p>
      <p>{lastClick}</p>
    </div>
  );
}

```

<a id='c5b'></a>

## Hook de efecto / useEffect

El hook de efecto sirve para: 

1. controlar el ciclo de vida
2. controlar las mutaciones (props, estado); 

Cuando un componente se inicia, cuando cambia una propiedad, cuando cambia de estado y cuando se desmonta.

Piénsalo como un filtro:

```js
useEffect(fn, filter)
```

Su estructura:

- Su primer parametro la funcion 
- Su segundo parametro: El como se comporta ese hook `[]);` que es un array vacio

![img](./img/c5.png)


### Variantes

|Variantes/filtros|    |
|------|---------|
|`[ ]` | On mount|
|`[prop]`| On mount y por cada cambio de prop|
|`[prop1, prop2]`|On mount y en cada cambio en prop1 o prop2, pueden ser varias props|
|`undefined`|useEffect(()=>{}) => Mount y en cada render|

> ### 💡
> Al inicializar un componente se ejecutan todos los hooks

#### 📜 Ejemplo orden ejecucion hooks effect

![img](./img/c5a.png)


### render effect

Si hay varios render effect se ejecutan en orden

```js
useEffect(()=>{
    console.log('Se renderiza siempre');
})
```

> ### 💡
> Se ejecuta al inicio y al renderizar

### initialize effect 

Se ejecuta al inicio / se ejecuta al montar
Se pone arriba ya que se ejecuta una unica vez

**En este efecto se llaman los recursos:** ej firebase

```js
useEffect(() => {
    console.log('Se ejecuta en el montaje');
}, []);

```

> ### 💡
> Se ejecutan al inicio y al montar

### change effect

Escucha cambios en los estados, ponemos de ejemplo que escucha clicks

**Cuando ocurren cambios como sincronizar con la base de datos se hace en este estado**

```js
useEffect(() => {
  console.log('Escucho cambios en el estado de clicks');

}, [clicks])

```

```js
useEffect(() => {
  console.log('Escucho cambios en el estado de clicks');

}, [clicks, date])

```
> ### 💡
> Se ejecuta al inicio y al cambiar el estado

## Cleanup

**A este efecto le podemos declarar una limpieza del efecto.**
Siempre que algo vaya a cambiar hay que hacer algo antes.
React deja ejecutar una funcion, antes que react renderice 


Si devuelves una función 

```js
return () => {}
```

se ejecutará el clean que quieras (ajax call, remover una suscripción, librería, etc)

```js
useEffect(() => {
  console.log('Renderizando');

  return () => {
    console.log('Limpieza');
  }
})

```

La manera de hacer una limpieza es devolviendola del mismo callback del hook

✅ Permiten mantener la consistencia de las respuestas

> ### 💡
> Por cada efecto hay una limpieza

> #### 🎬
> Video: Explicacion limpieza min 1:29

> ### 💡 Importante
> **Tanto los callbacks como los cleanups:**
> - Se ejecutan en el orden en que se hayan declarado los otros hooks respectivos
> - Recuerda que la función se destruye en cada ejecución, si tienes actividad pendiente hay que cerrarla en cada cleanup y volver a suscribirla

Los hooks se comportan simétricamente tanto con los valores observados props como con el state

>### ✅
> Acción => Limpieza => Acción => Limpieza 

> ### ❌
> Acción => Acción => Acción => Limpieza

Cualquier acción en un effect tiene una acción opuesta de limpieza, que será ejecutada antes de poder volver a ejecutar la acción.

![img](./img/c5b.png)

✅ Toda acción del effect-hook se ejecuta al montar

✅ Ningún efecto bloquea el render

✅ Todas las acciones y limpiezas se realizan en orden

✅ Si modifico el state incluido en los filtros propios habrá un loop infinito



