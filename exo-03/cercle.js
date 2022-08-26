class Cercle
{
    pRayon;
    pSurface;
    pPerimetre;
    
    constructor(rayon="")
    {
        this.pRayon = rayon;
    }

    calculerSurface(rayon)
    {
        this.pSurface=Math.PI*rayon**2;
    }
    calculerPerimetre(rayon)
    {
        this.pPerimetre==Math.PI*2*rayon;
    }
}

    
