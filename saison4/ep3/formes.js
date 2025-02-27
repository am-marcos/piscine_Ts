"use strict";
class Forme {
}
class Rectangle extends Forme {
    constructor(largeur, hauteur) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }
    calculerSurface() {
        return this.largeur * this.hauteur;
    }
}
class Cercle extends Forme {
    constructor(rayon) {
        super();
        this.rayon = rayon;
    }
    calculerSurface() {
        return Math.PI * this.rayon * this.rayon;
    }
}
// Test des classes Rectangle et Cercle
const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(7);
console.log(`Surface du rectangle: ${rectangle.calculerSurface()}`);
console.log(`Surface du cercle: ${cercle.calculerSurface()}`);
