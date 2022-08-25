let longueur = window.prompt("Indiquez une longueur en cm");
let largeur = window.prompt("Indiquez une largeur en cm");
if (Math.sign(longueur)>=0 && Math.sign(largeur)>=0)
{
    function calcul()
    {
        let aire=parseInt(longueur)*parseInt(largeur)
        let perimetre=2*(parseInt(longueur)+parseInt(largeur))
        alert('Le rectangle a une surface de ' +aire+ ' cm2 et un périmètre de ' +perimetre+ ' cm.')
    }   
    calcul() 
}
