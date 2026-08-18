//Ejercicio 9 Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList [i];
  }
  return sum;
}
console.log (sumNumbers(numbers));