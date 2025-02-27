class Rectangle {
  Largeur: number;
  Longueur: number;
  constructor(l: number, L: number) {
    this.Largeur = l;
    this.Longueur = L;
  }
  calculerSurface() {
    return this.Largeur * this.Longueur;
  }
}

class Cercle {
  Rayon: number;
  constructor(r: number) {
    this.Rayon = r;
  }
  calculerSurface() {
    return Math.PI * this.Rayon * this.Rayon;
  }
}

function afficherSurface(forme: Rectangle | Cercle): void {
  if (forme instanceof Rectangle) {
    console.log(`Ceci est un rectangle de surface ${forme.calculerSurface()}.`);
  } else if (forme instanceof Cercle) {
    console.log(`Ceci est un cercle de surface ${forme.calculerSurface()}.`);
  }
}

// Test de la fonction
const rectangle = new Rectangle(10, 5);
const cercle = new Cercle(8);

afficherSurface(rectangle); 
afficherSurface(cercle); 
