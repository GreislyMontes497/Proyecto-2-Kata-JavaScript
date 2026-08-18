// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDivVacio = document.createElement('div');
document.body.appendChild(nuevoDivVacio);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConP = document.createElement('div');
const parrafoInterno = document.createElement('p');
parrafoInterno.textContent = 'Este párrafo está dentro de un div (2.2)';

divConP.appendChild(parrafoInterno); // se introduce el p dentro del div
document.body.appendChild(divConP);   // se introduce el div en el HTML

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop.

const divConSeisP = document.createElement('div');

for (let i = 0; i < 6; i++) {
    const pBucle = document.createElement('p');
    pBucle.textContent = `Párrafo número ${i + 1} del bucle (2.3)`;
    divConSeisP.appendChild(pBucle);
}
document.body.appendChild(divConSeisP);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Destino = document.querySelector('h2.fn-insert-here');
h2Destino.textContent = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaUl = document.createElement('ul');

for (const app of apps) {
    const elementoLi = document.createElement('li');
    elementoLi.textContent = app;
    listaUl.appendChild(elementoLi);
}
document.body.appendChild(listaUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementosParaBorrar = document.querySelectorAll('.fn-remove-me');

for (const elemento of elementosParaBorrar) {
    elemento.remove(); 
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div de tu HTML original.
// se usa insertAdjacentElement antes del segundo div limpio en el HTML.

const todosLosDivs = document.querySelectorAll('div');
// El primer div normal del HTML original está en todosLosDivs[0], el segundo en todosLosDivs[1]
const segundoDiv = todosLosDivs[1];

const pEnMedio = document.createElement('p');
pEnMedio.textContent = 'Voy en medio!';

// .insertAdjacentElement('beforebegin') lo inserta justo antes de ese div
segundoDiv.insertAdjacentElement('beforebegin', pEnMedio);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInsertHere = document.querySelectorAll('div.fn-insert-here');

for (const divContenedor of divsInsertHere) {
    const pDentro = document.createElement('p');
    pDentro.textContent = 'Voy dentro!';
    divContenedor.appendChild(pDentro);
}

