//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton = document.querySelector('.showme');
console.log(boton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1Pillado = document.querySelector('#pillado');
console.log(h1Pillado);

//1.3 Usa querySelector para mostrar por consola todos los p

const todosLosP = document.querySelectorAll('p');
console.log(todosLosP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const todosLosPokemon = document.querySelectorAll('.pokemon');
console.log(todosLosPokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const todosLosTestData = document.querySelectorAll('[data-function="testMe"]');
console.log(todosLosTestData);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerPersonaje);