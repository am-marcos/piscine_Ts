"use strict";
// Définition de la fonction générique premierElement avec contrainte sur le type générique
function premierElement(tableau) {
    if (tableau.length > 0) {
        return tableau[0];
    }
    else {
        console.error("Le tableau est vide.");
        return undefined;
    }
}
// Déclaration de plusieurs tableaux
const nombres = [1, 2, 3, 4, 5];
const chaines = ["Alice", "Bob", "Charlie"];
const objets = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 }
];
const tableauVide = [];
// Appel de la fonction premierElement pour chaque tableau
console.log(premierElement(nombres));
console.log(premierElement(chaines));
console.log(premierElement(objets));
console.log(premierElement(tableauVide));
