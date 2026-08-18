//6.1 Dado el siguiente array, haz una suma de todos las notas de los examenes delos alumnos usando la función .reduce().

{
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);

    console.log(totalScore); 
}

//6.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().

{
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const approvedTotalScore = exams.reduce((acc, exam) => {
        // Si la nota es 5 o más, se suma; si no, se deja el acumulador como esta
        return exam.score >= 5 ? acc + exam.score : acc;
    }, 0);

    console.log(approvedTotalScore); 
}

//6.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
 // Suma total igual que en el 6.1
    const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
    
    // Dividimos por el número total de exámenes en la lista
    const averageScore = totalScore / exams.length;

    console.log(averageScore); 
    