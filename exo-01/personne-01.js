class Personne
{
    nom;
    prenom;
    /*salutation()
    {
        return `Bonjour ${this.prenom} ${this.nom}`;
    }*/
    constructor(prenom="", nom="")
    {
        this.prenom = prenom;
        this.nom = nom.toUpperCase();
    }
}