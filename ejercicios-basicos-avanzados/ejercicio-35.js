//Ejercicio 35 Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no. Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const foundMutants = mutants.filter (
    mutante => mutante.power.toLowerCase() === power.toLowerCase()
  );
  if (foundMutants.length === 0) {
    return `No hay registro de mutante con el poder: "$(power)".`;
  }
  const names = foundMutants.map(mutante => mutante.name).join (`, `) ;
  return `Mutante(s) encontrado(s) con el poder "${power}": ${names}.`;
}

console.log (findMutantByPower (mutants, `teleportation`));
