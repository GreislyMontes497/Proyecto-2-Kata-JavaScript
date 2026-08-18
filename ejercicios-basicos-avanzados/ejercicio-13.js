//Ejercicio 13 Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
    const index = nameList.indexOf(nameToFind);
    if (index ===-1) {
    return "false";
    }
    return {
        found: true,  
        position: index
    }
}
console.log (nameFinder(names, "Natasha"));
console.log (nameFinder(names, "Cristian"));
