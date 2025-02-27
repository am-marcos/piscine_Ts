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

// Test de la classe Animal
const leo = new Animal("Leo");
leo.seDeplacer();