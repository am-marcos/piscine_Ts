"use strict";
// Création d'une fonction qui prend en paramètre une personne et affiche toutes les informations
function afficherPersonneAvancee(pers) {
    if (pers.adresse) {
        console.log(`Bonjour, je m'appelle ${pers.nom} (ID: ${pers.id}), j'ai ${pers.age} ans et j'habite au ${pers.adresse.rue}, ${pers.adresse.ville}.`);
    }
    else {
        console.log(`Bonjour, je m'appelle ${pers.nom} (ID: ${pers.id}) et j'ai ${pers.age} ans.`);
    }
}
// Création de l'objet personne1
const personne2 = { id: 1, nom: "Alice", age: 25, adresse: { rue: "123 Rue Principale", ville: "Paris" } };
// Appel de la fonction afficherPersonneAvancee avec personne1
afficherPersonneAvancee(personne1);
// Création de l'objet personne2 sans adresse
const personne3 = { id: 2, nom: "Bob", age: 30 };
// Appel de la fonction afficherPersonneAvancee avec personne2
afficherPersonneAvancee(personne2);
