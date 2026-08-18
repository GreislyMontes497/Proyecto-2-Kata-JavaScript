//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el htmlque imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

// Array original
const albums = [
  "De Mysteriis Dom",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Elemento UL del HTML usando su ID
const container = document.getElementById('album-list');

// Recorremos el array para crear los elementos dinámicamente
albums.forEach(album => {
    // 1. Creamos la etiqueta LI en memoria
    const li = document.createElement('li');
    
    // 2. Le asignamos su estructura interna y el texto del álbum
    li.innerHTML = `
        <div class="album-info">
            <span class="album-icon">💿</span>
            <span class="album-title">${album}</span>
        </div>
        <span class="badge">Clásico</span>
    `;
    
    // 3. LI creado dentro del UL contenedor
    container.appendChild(li);
});
