/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


//Crea un array composto da 10 automobili.

const auto = [
    {
        marca: "Citroen",
        modello: "x",
        alimentazione: "Benzina",
    },

    {
        marca: "Citroen",
        modello: "x",
        alimentazione: "Benzina",
    },

    {
        marca: "Citroen",
        modello: "x",
        alimentazione: "Benzina",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Diesel",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Diesel",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Diesel",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Gpl",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Elettrica",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Metano",
    },

    {
        marca: "Citroen",
        modello: "X",
        alimentazione: "Metano",
    },
];

/* console.log(auto); */

//Dividi le auto in tre array separati

const autoBenzina = auto.filter(controlloBenzina);

