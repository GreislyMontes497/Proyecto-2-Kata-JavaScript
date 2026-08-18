//Ejercicio 14 Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  const counter = {};
  list.forEach((word) => {
    if (counter[word]) {
        counter[word]++;
    } else {
        counter [word] = 1;
    }
  });
    return counter;
}
const repeticiones = repeatCounter(words);
console.log (repeticiones);
