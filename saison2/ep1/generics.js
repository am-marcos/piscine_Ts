"use strict";
// Définition de la fonction générique premierElement
function premierElement(tableau) {
    return tableau[1];
}
// Déclaration de plusieurs tableaux
const nombres = [1, 2, 3, 4, 5];
const chaines = ["Alice", "Bob", "Charlie"];
const objets = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 }
];
// Appel de la fonction premierElement pour chaque tableau et affichage du résultat dans la console
console.log(premierElement(nombres));
console.log(premierElement(chaines));
console.log(premierElement(objets));
