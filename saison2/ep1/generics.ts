// Définition de la fonction générique premierElement
function premierElement<T>(tableau: T[]): T {
    return tableau[0];
}

// Déclaration de plusieurs tableaux
const nombres: number[] = [1, 2, 3, 4, 5];
const chaines: string[] = ["Alice", "Bob", "Charlie"];
const objets: { nom: string, age: number }[] = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 }
];

// Appel de la fonction premierElement pour chaque tableau
console.log(premierElement(nombres)); 
console.log(premierElement(chaines)); 
console.log(premierElement(objets)); 