"use strict";
// Création d'une fonction qui prend en paramètre une personne et affiche son nom et son âge
function afficherPersonne(pers) {
    console.log("Bonjour, je m'appelle " + pers.nom + " et j'ai " + pers.age + " ans");
}
// Création de l'objet personne1
const personne1 = { nom: "Alice", age: 25 };
// Affichage des informations de la personne1
afficherPersonne(personne1);
