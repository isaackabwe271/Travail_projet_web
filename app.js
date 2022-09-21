/*Nous allons utilser la metode des  KEYCODE, l'invention des attribut et la recuperation des valeurs ou les touches.*/
// recuperation des éléments du DOM
// recuperation de toutes les touches de notre calculatrice en ajoutant le tableau
const touches = [...document.querySelectorAll('.bouton')];
// Nous allons recuperer tout les KEYCODE  associer à nos troupes.
// nous allons utiliser MAP() qui est une fonction qui prend chaque élément d'un tableau
const listkeycode =  touches.map(touche => touche.dataset.key);
// on recuper l'ecran
const ecran = document.querySelector('.ecran');

document.addEventListener('keydow', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listkeycode.includes(valeur)) {
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default: 
            const indexkeycode = listkeycode.indexOf(valeur);
            const touche = touches [indexkeycode];
            ecran.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})
