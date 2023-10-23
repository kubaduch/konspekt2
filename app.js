const _ = require('lodash');

// Przykładowa tablica liczb
const liczby = [10, 20, 30, 40, 50];

// Oblicz średnią arytmetyczną
const srednia = _.mean(liczby);

console.log("Średnia arytmetyczna: " + srednia);
