// Définition de la fonction générique premierElement avec contrainte sur le type générique
function premierElement<T>(tableau: T[]): T | undefined {
    if (tableau.length > 0) {
        return tableau[0];
    } else {
        console.error("Le tableau est vide.");
        return undefined;
    }
}

// Définition de la fonction générique getProperty
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Déclaration de plusieurs tableaux
const nombres: number[] = [1, 2, 3, 4, 5];
const chaines: string[] = ["Alice", "Bob", "Charlie"];
const objets: { nom: string, age: number }[] = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 }
];
const tableauVide: number[] = [];

// Test de la fonction premierElement
console.log(premierElement(nombres)); 
console.log(premierElement(chaines)); 
console.log(premierElement(objets));  
console.log(premierElement(tableauVide)); 

// Déclaration de l'interface Voiture
interface Voiture {
    marque: string;
    modele: string;
    annee: number;
}

// Création de l'objet maVoiture respectant l'interface Voiture
const maVoiture: Voiture = {
    marque: "Tesla",
    modele: "Model Y",
    annee: 2023
};

// Utilisation de la fonction getProperty pour récupérer la valeur de marque et de annee
const marque = getProperty(maVoiture, "marque");
const annee = getProperty(maVoiture, "annee");

// Affichage des valeurs récupérées
console.log(marque); 
console.log(annee);  

// Vérification : La ligne suivante doit lever une erreur de compilation TypeScript
 //const couleur = getProperty(maVoiture, "couleur");