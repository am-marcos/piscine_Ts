//création d'une interface personne
interface Personne {
    readonly id: number;
    nom: string;
    age: number;
    adresse?: Adresse;
}

//création d'une interface adresse
interface Adresse{
    rue: string;
    ville: string;
}

// Création d'une fonction qui prend en paramètre une personne et affiche toutes les informations
function afficherPersonneAvancee(pers: Personne) {
    if (pers.adresse) {
        console.log(`Bonjour, je m'appelle ${pers.nom} (ID: ${pers.id}), j'ai ${pers.age} ans et j'habite au ${pers.adresse.rue}, ${pers.adresse.ville}.`);
    } else {
        console.log(`Bonjour, je m'appelle ${pers.nom} (ID: ${pers.id}) et j'ai ${pers.age} ans.`);
    }
}

// Création de l'objet personne1
const personne2: Personne = { id: 1, nom: "Alice", age: 25, adresse: { rue: "123 Rue Principale", ville: "Paris" } };

// Appel de la fonction afficherPersonneAvancee avec personne1
afficherPersonneAvancee(personne1);

// Création de l'objet personne2 sans adresse
const personne3: Personne = { id: 2, nom: "Bob", age: 30 };

// Appel de la fonction afficherPersonneAvancee avec personne2
afficherPersonneAvancee(personne2);
