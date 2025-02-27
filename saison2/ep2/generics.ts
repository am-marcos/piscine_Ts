// Définition de la fonction générique premierElement avec contrainte sur le type générique
function premierElement<T>(tableau: T[]): T | undefined {
    if (tableau.length > 0) {
        return tableau[0];
    } else {
        console.error("Le tableau est vide.");
        return undefined;
    }
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

// Appel de la fonction premierElement pour chaque tableau
console.log(premierElement(nombres));
console.log(premierElement(chaines)); 
console.log(premierElement(objets)); 
console.log(premierElement(tableauVide));