interface Vehicule {
    Marque: string;
    Annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
    return typeof obj.Marque === 'string' && typeof obj.Annee === 'number';
}

function afficherVehicule(obj: any) {
    if (isVehicule(obj)) {
        console.log(`Le véhicule ${obj.Marque} de l'année ${obj.Annee} est valide.`);
    } else {
        console.log("Objet invalide pour un véhicule.");
    }
}

// Test de la fonction
const vehiculeValide = { Marque: "Toyota", Annee: 2020 };
const vehiculeInvalide = { Marque: "Toyota", Annee: "2020" };

afficherVehicule(vehiculeValide);
afficherVehicule(vehiculeInvalide); 