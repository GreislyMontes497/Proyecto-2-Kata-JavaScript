/* Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters */

// Guardamos la dirección de internet (URL)
const API_URL = 'https://thronesapi.com/api/v2/Characters';

const select$$ = document.querySelector('#character-list');
const img$$ = document.querySelector('.character-image');

// Creamos una lista vacía en memoria para guardar lo que baje de internet
let charactersList = [];

// 3. Creamos la función que viaja a internet por los datos
const fetchCharacters = async () => {
    try {
        const response = await fetch(API_URL); 
        charactersList = await response.json();
        
        // Cuando ya tenemos los personajes, llamamos a la función que los mete en el desplegable
        renderSelect(charactersList);
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
};

// 4. Función que mete los nombres en el menú desplegable
const renderSelect = (characters) => {
    characters.forEach(character => {
        const option$$ = document.createElement('option');
        option$$.value = character.id;      
        option$$.textContent = character.fullName;
        
        select$$.appendChild(option$$); 
    });
};

select$$.addEventListener('change', (event) => {
    const selectedId = event.target.value; 

    const matchedCharacter = charactersList.find(char => char.id == selectedId);

    // Si existe, actualizamos la etiqueta <img> con su foto de internet
    if (matchedCharacter) {
        img$$.src = matchedCharacter.imageUrl;
    } else {
        img$$.src = "";
    }
});

fetchCharacters();
