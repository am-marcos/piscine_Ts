"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}
// Test de la classe Animal
const leo = new Animal("Leo");
leo.seDeplacer();
