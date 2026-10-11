Una aplicación web que permite buscar Pokémon por nombre utilizando la API pública de PokéAPI.

Descripción

El proyecto permite ingresar el nombre de un Pokémon en un campo de texto y buscarlo mediante un botón. Si el Pokémon existe, se muestran su nombre, su imagen y su número en la Pokédex.

Funcionalidades
Buscar Pokémon por nombre.
Consultar información mediante la API de PokéAPI.
Mostrar el nombre del Pokémon.
Mostrar su imagen.
Mostrar su número de Pokédex.
Informar cuando el Pokémon no existe.
Avisar cuando el campo de búsqueda está vacío.
Realizar búsquedas pulsando el botón o la tecla Enter.
Estructura del proyecto
pokedex/
├── pokedex.html
├── pokedex.css
├── pokedex.js
└── README.md

Descripción de los archivos
1. pokedex.html

Contiene la estructura de la página web.

<!DOCTYPE html> indica que se utiliza HTML5.
<head> contiene los metadatos, el título y los enlaces a CSS y JavaScript.
<link> conecta el archivo pokedex.css.
<script src="pokedex.js" defer> conecta el archivo JavaScript y permite que el HTML se analice antes de ejecutar el código.
<input> permite escribir el nombre del Pokémon.
<button> inicia la búsqueda.
<div id="pokemonResult"> contiene los resultados de la búsqueda.
2. pokedex.css

Controla la apariencia visual de la aplicación.

body define la fuente, el fondo, el espaciado y la alineación del contenido.
h1 modifica el color del título principal.
input define el tamaño y el estilo del campo de búsqueda.
button personaliza el botón de búsqueda.
button:hover cambia el color del botón cuando el cursor pasa sobre él.
#pokemonResult define el espacio destinado a los resultados.
#pokemonResult img establece el tamaño y la representación de la imagen del Pokémon.
3. pokedex.js

Contiene la lógica y las funcionalidades de la aplicación.

document.getElementById() obtiene elementos del HTML mediante su identificador.
addEventListener() detecta eventos, como un clic o una pulsación de tecla.
async permite utilizar await dentro de una función.
fetch() realiza una petición HTTP a la API.
res.ok permite comprobar si la respuesta HTTP fue exitosa.
res.json() lee e interpreta el cuerpo JSON de la respuesta y devuelve una promesa con los datos procesados.
try...catch permite gestionar errores.
document.createElement() crea elementos HTML desde JavaScript.
appendChild() agrega elementos al contenedor de resultados.
textContent permite mostrar o modificar texto.
input.value obtiene el texto introducido por el usuario.
trim() elimina los espacios al principio y al final de una cadena.
toLowerCase() convierte el nombre a minúsculas.

