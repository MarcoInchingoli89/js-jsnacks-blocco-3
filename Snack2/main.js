/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


//Creo un array di stringhe

const marvelSuperheroes = [
    'Hulk',
    'venom',
    'wolverine',
    'thor',
    'Deadpool',
    'spiderman'
];

//Metto in maiuscolo la prima lettera di ogni stringa nell'array e lo salvo nella variabile
//Con map sostituisco le stringhe vecchie con quelle nuove
const superheroesFormatted = marvelSuperheroes.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

});

console.log(superheroesFormatted);