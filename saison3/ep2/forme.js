"use strict";
class Rectangle {
    constructor(l, L) {
        this.Largeur = l;
        this.Longueur = L;
    }
    calculerSurface() {
        return this.Largeur * this.Longueur;
    }
}
class Cercle {
    constructor(r) {
        this.Rayon = r;
    }
    calculerSurface() {
        return Math.PI * this.Rayon * this.Rayon;
    }
}
function afficherSurface(forme) {
    if (forme instanceof Rectangle) {
        console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}.`);
    }
    else if (forme instanceof Cercle) {
        console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}.`);
    }
}
// Test de la fonction
const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(8);
afficherSurface(rectangle);
afficherSurface(cercle);
