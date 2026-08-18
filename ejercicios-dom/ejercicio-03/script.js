/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.
 */

// 1.1 - Lista dinámica de países en el body

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

// Recorremos el array y se insertan los elementos li
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

// 1.2 - Eliminar elemento por clase
const elementToRemove = document.querySelector('.fn-remove-me');

if (elementToRemove) {
    elementToRemove.remove();
}

// 1.3 - Lista de coches dentro del div específico

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHereDiv = document.querySelector('[data-function="printHere"]');

if (printHereDiv) {
    const ulCars = document.createElement('ul');
    
    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = car;
        ulCars.appendChild(li);
    });
    
    printHereDiv.appendChild(ulCars);
}

// 1.4 y 1.6 - Divs con h4, img y botón individual de borrado

const countriesImages = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const cardsContainer = document.createElement('div');
document.body.appendChild(cardsContainer);

countriesImages.forEach(item => {
    const divCard = document.createElement('div');
    divCard.className = 'country-card';
    
    const h4 = document.createElement('h4');
    h4.textContent = item.title;
    
    const img = document.createElement('img');
    img.src = item.imgUrl;
    img.alt = item.title;
    
    // 1.6 - Creamos el botón individual para cada div
    const deleteSelfBtn = document.createElement('button');
    deleteSelfBtn.textContent = 'Eliminar este elemento';
    
    deleteSelfBtn.addEventListener('click', () => {
        divCard.remove();
    });
    
    // Metemos todos los elementos creados dentro del div de la tarjeta
    divCard.appendChild(h4);
    divCard.appendChild(img);
    divCard.appendChild(deleteSelfBtn);
    
    cardsContainer.appendChild(divCard);
});

// 1.5 - Botón general para eliminar el ÚLTIMO div

const removeLastBtn = document.createElement('button');
removeLastBtn.textContent = 'Eliminar ÚLTIMO elemento de la lista';

removeLastBtn.addEventListener('click', () => {
    const currentCards = cardsContainer.querySelectorAll('.country-card');
    
    // Si todavía queda al menos una tarjeta, borramos la última
    if (currentCards.length > 0) {
        const lastCard = currentCards[currentCards.length - 1];
        lastCard.remove();
    }
});

document.body.insertBefore(removeLastBtn, cardsContainer);
