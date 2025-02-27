abstract class Forme {
    abstract calculerSurface(): number;
}

class Rectangle extends Forme {
    largeur: number;
    hauteur: number;

    constructor(largeur: number, hauteur: number) {
        super();
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    calculerSurface(): number {
        return this.largeur * this.hauteur;
    }
}

class Cercle extends Forme {
    rayon: number;

    constructor(rayon: number) {
        super();
        this.rayon = rayon;
    }

    calculerSurface(): number {
        return Math.PI * this.rayon * this.rayon;
    }
}

// Test des classes Rectangle et Cercle
const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(7);

console.log(`Surface du rectangle: ${rectangle.calculerSurface()}`);
console.log(`Surface du cercle: ${cercle.calculerSurface()}`);