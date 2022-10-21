/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */

//Creo un array di animali

const animals = [
    {
        nome: 'Leone',
        famiglia: 'Felini',
        classe: 'Mammifero',
    },

    {
        nome: 'Gatto',
        famiglia: 'Felini',
        classe: 'Mammifero',
    },

    {
        nome: 'Leopardo',
        famiglia: 'Felini',
        classe: 'Mammifero',
    },

    {
        nome: 'Tigre',
        famiglia: 'Felini',
        classe: 'Mammifero',
    },

    {
        nome: 'Salmone',
        famiglia: 'Pesci',
        classe: 'Cetaceo',
    },

    {
        nome: 'Merluzzo',
        famiglia: 'Pesci',
        classe: 'Cetaceo',
    },
];

//Con filter filtro i mammiferi dai cetacei e stampo il nuovo array con solo mammiferi su console
const animalsMammiferi = animals.filter(animal => animal.classe !== 'Cetaceo');
console.log(animalsMammiferi);

