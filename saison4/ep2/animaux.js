"use strict";
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    seDeplacer() {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}
class Chien extends Animal {
    seDeplacer() {
        console.log(`Le chien ${this.nom} court.`);
    }
}
class Chat extends Animal {
    seDeplacer() {
        console.log(`Le chat ${this.nom} saute.`);
    }
}
function faireSeDeplacer(animaux) {
    animaux.forEach(animal => animal.seDeplacer());
}
// Test des classes dérivées et de la fonction faireSeDeplacer
const rex = new Chien("boby");
const felix = new Chat("rex");
const animaux = [rex, felix];
faireSeDeplacer(animaux);
