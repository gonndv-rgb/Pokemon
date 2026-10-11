const input = document.getElementById("pokemonName");
const button = document.getElementById("searchButton");
const result = document.getElementById("pokemonResult");

// Busca un Pokémon por su nombre
async function buscarPokemon(nombre) {
    try {
        // Muestra un mensaje mientras se realiza la búsqueda
        result.textContent = "Buscando Pokémon...";

        // Consulta la API usando el nombre en minúsculas
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
        );

        // Comprueba si la respuesta fue exitosa
        if (!res.ok) {
            throw new Error("Pokémon no encontrado");
        }

        // Convierte la respuesta JSON en un objeto JavaScript
        const data = await res.json();

        // Limpia el resultado de la búsqueda anterior
        result.innerHTML = "";

        // Crea un título con el nombre del Pokémon
        const titulo = document.createElement("h2");
        titulo.textContent = data.name;

        // Crea la imagen del Pokémon
        const imagen = document.createElement("img");
        imagen.src = data.sprites.front_default;
        imagen.alt = data.name;

        // Crea un párrafo con su número de Pokédex
        const numero = document.createElement("p");
        numero.textContent = `Número: ${data.id}`;

        // Añade los elementos al contenedor de resultados
        result.appendChild(titulo);
        result.appendChild(imagen);
        result.appendChild(numero);

    } catch (error) {
        // Muestra el error si algo sale mal
        result.textContent = error.message;
    }
}

// Detecta cuando el usuario pulsa el botón
button.addEventListener("click", () => {
    // Obtiene el texto y elimina espacios sobrantes
    const nombre = input.value.trim();

    // Evita buscar si el campo está vacío
    if (nombre === "") {
        result.textContent = "Ingrese el nombre de un Pokémon";
        return;
    }

    // Llama a la función de búsqueda
    buscarPokemon(nombre);
});

// Permite buscar pulsando Enter
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        button.click();
    }
});