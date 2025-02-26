//création d'une interface Employe
interface Employe {
    nom: string;
    poste: string;
}

//création d'une interface Client
interface Client {
    nom: string;
    entreprise: string;
}

//Déclaration d'un type PersonnePro
type PersonnePro = Employe | Client;

// Création de la fonction afficherInfoProfessionnelle
function afficherInfoProfessionnelle(personne: PersonnePro) {
    if ('poste' in personne) {
        console.log(`Employé: ${personne.nom} travaille comme ${personne.poste}.`);
    } else if ('entreprise' in personne) {
        console.log(`Client: ${personne.nom} est associé à l'entreprise ${personne.entreprise}.`);
    }
}

// Création d'un objet employe
const employe1: Employe = { nom: "Alice", poste: "Développeur" };

// Création d'un objet client
const client1: Client = { nom: "Bob", entreprise: "Waat" };

// Appel de la fonction afficherInfoProfessionnelle avec employe1
afficherInfoProfessionnelle(employe1);

// Appel de la fonction afficherInfoProfessionnelle avec client1
afficherInfoProfessionnelle(client1);



