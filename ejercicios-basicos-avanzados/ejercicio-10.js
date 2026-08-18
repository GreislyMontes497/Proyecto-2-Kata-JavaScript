//Ejercicio 10 Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

const numeros = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList [i];
    }
    let promedio = sum / numberList.length;
    return Math.round(promedio); 
}
console.log (average(numeros));
