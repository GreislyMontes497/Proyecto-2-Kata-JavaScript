//1.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, gender, year } = game;

console.log(title);  // 'The Last of Us 2'
console.log(gender); // ['action', 'zombie', 'survival']
console.log(year);   // 2020

//1.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); // 'Banana'
console.log(fruit2); // 'Strawberry'
console.log(fruit3); // 'Orange'

//1.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const { name, race } = animalFunction();

console.log(name); // 'Bengal Tiger'
console.log(race); // 'Tiger'

//1.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] };

//Creamos las variables name e itv desde el objeto car
const { nombre, itv } = car;

const [year1, year2, year3] = itv;

console.log(nombre);  // 'Mazda 6'
console.log(itv);   // [2015, 2011, 2020]
console.log(year1); // 2015
console.log(year2); // 2011
console.log(year3); // 2020
