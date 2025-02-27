interface IAnimal {
    nom: string;
    seDeplacer(): void;
}

class Animal implements IAnimal {
    nom: string;

    constructor(nom: string) {
        this.nom = nom;
    }

    seDeplacer(): void {
        console.log(`L'animal ${this.nom} se déplace.`);
    }
}

class Chien extends Animal {
    seDeplacer(): void {
        console.log(`Le chien ${this.nom} court.`);
    }
}

class Chat extends Animal {
    seDeplacer(): void {
        console.log(`Le chat ${this.nom} saute.`);
    }
}

function faireSeDeplacer(animaux: IAnimal[]): void {
    animaux.forEach(animal => animal.seDeplacer());
}

// Test des classes dérivées et de la fonction faireSeDeplacer
const rex = new Chien("boby");
const felix = new Chat("rex");

const animaux: IAnimal[] = [rex, felix];
faireSeDeplacer(animaux); 