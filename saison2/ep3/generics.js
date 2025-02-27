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
// Définition de la fonction générique getProperty
function getProperty(obj, key) {
    return obj[key];
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
// Test de la fonction premierElement
console.log(premierElement(nombres));
console.log(premierElement(chaines));
console.log(premierElement(objets));
console.log(premierElement(tableauVide));
// Création de l'objet maVoiture respectant l'interface Voiture
const maVoiture = {
    marque: "Tesla",
    modele: "Model Y",
    annee: 2023
};
// Utilisation de la fonction getProperty pour récupérer la valeur de marque et de annee
const marque = getProperty(maVoiture, "marque");
const annee = getProperty(maVoiture, "annee");
// Affichage des valeurs récupérées
console.log(marque);
console.log(annee);
// Vérification : La ligne suivante doit lever une erreur de compilation TypeScript
//const couleur = getProperty(maVoiture, "couleur");
