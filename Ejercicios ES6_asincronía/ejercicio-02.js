//2.1 Dado el siguiente array, crea una copia usando spread operators.
{
    const pointsList = [32, 54, 21, 64, 75, 43];
    const pointsListCopy = [...pointsList];
    
    console.log(pointsListCopy); // [32, 54, 21, 64, 75, 43]
}

//2.2 Dado el siguiente objeto, crea una copia usando spread operators.
{
    const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
    
    // Copia con spread operator
    const toyCopy = {...toy};
    
    console.log(toyCopy); // {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}
}

//2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

// Juntamos ambos arrays en uno nuevo
    const combinedPoints = [...pointsList, ...pointsLis2];
    
    console.log(combinedPoints); // [32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32]

//2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

// Fusionamos propiedades en un objeto único
    const mergedToy = {...toy, ...toyUpdate};
    
    console.log(mergedToy);
    // {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor', lights: 'rgb', power: [...]}

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// Extraemos de la posición 0 a la 2 (sin incluir), y de la 3 en adelante
    const colorsCleaned = [...colors.slice(0, 2), ...colors.slice(3)];
    
    console.log(colorsCleaned); 
    console.log(colors);        