let rayon = -2
do
rayon = window.prompt("Veuillez saisir un entier représentant la valeur du rayon d'un cercle en centimètres");
while (rayon<0 || Number.isInteger(rayon)) 
function alert()
{
    alert('Le cercle dont le rayon est de ' +rayon+ ' cm a une surface de ' +pSurface+ 'cm2. Son périmètre est de ' +pPerimetre+ ' cm.')
}
alert()