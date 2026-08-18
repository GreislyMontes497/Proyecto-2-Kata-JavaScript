/* Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites. */

// 1. Seleccionamos la imagen usando la clase exacta del HTML
const img$$ = document.querySelector('.random-image');

// 2. Función asíncrona para obtener los datos
const fetchRandomPokemon = async () => {
    // Generamos un número aleatorio entero entre 1 y 151 (primera generación)
    const randomId = Math.floor(Math.random() * 151) + 1;
    const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try {
        const response = await fetch(API_URL);
        const pokemonData = await response.json();

        // 3. Extraemos la imagen oficial bonita de los datos de la API
        const imageUrl = pokemonData.sprites.other['official-artwork'].front_default;

        // 4. Modificamos el atributo src del elemento inyectando la foto
        img$$.src = imageUrl;
        img$$.alt = pokemonData.name;

    } catch (error) {
        console.error("Error al recuperar el Pokémon aleatorio:", error);
    }
};

fetchRandomPokemon();
