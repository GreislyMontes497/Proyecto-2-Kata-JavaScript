//Ejercicio 41 Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()

function rollDice(faces) {
  const result = Math.floor(Math.random() * faces) + 1;
  return result;
}
console.log ("Tiro de dado", rollDice (4)); 
console.log ("Tiro de dado", rollDice (6)); 
console.log ("Tiro de dado", rollDice (5));
console.log ("Tiro de dado", rollDice (7));
