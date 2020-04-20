///////////////////////////////////////////////////////////////////////////////////////////  Image ///////////////////////////////////////////////////////////////////////////////////////////
let exo18 = document.getElementById("image");  // J'appel l'ID du bouton

exo18.addEventListener("click", function () { image() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function image()  // Je crée la fonction
{
var x = 3;
var y = 5;
var img = 'assets/img/papillon.jpg';

function produit(x, y) {
var result = Math.pow(x, 3);
var secondResult = x * y;
var text = 'Le cube de ' + x + ' est égale à ' + result;
var text2 = 'le produit de ' + x +' * ' + y + ' est égale à ' + secondResult;

// on cible un élement dans le document html afin de pouvoir faire un affichage d'une variable
document.getElementById('calcul1').innerHTML = text;
document.getElementById('calcul2').innerHTML = text2;
}
// appel de la fonction
produit(x, y);
function affichImg(img) {

    var container = document.getElementById('picture');  // récupération de l'emplacement pour afficher l'image
    var picture = document.createElement('img');  // création d'une balise pour permettre l'affichage de l'image
    picture.src = img;  // on récupère la source de l'image
    container.appendChild(picture);  // on affiche l'immage (ajout d'un 'enfant' dans notre div)
}
affichImg(img);
}   

///////////////////////////////////////////////////////////////////////////////////////////  Table de multiplication ///////////////////////////////////////////////////////////////////////////////////////////
let exo19 = document.getElementById("multi");  // J'appel l'ID du bouton

exo19.addEventListener("click", function () { multi() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function multi()  // Je crée la fonction
{
  var controle = /^[0-9]+$/;
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
function _TableMultiplication()
// Déclaration d'une fonction
{
    // Déclaration des variables utilisé dans la fonction
    var res = 0;
    var i = 0;
    var tab = [];
    var X = prompt("Entrez le nombre correspondant à la table de multiplication souhaité");
    if (X == null) {
        window.close();
    }
    else {
        X = parseInt(X);
        if (!controle.test(X))
        // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
        // du regex on entre dans la condition
        {
            alert("Il faut entrer un nombre \n Recommencez !");
            window.location.reload(_TableMultiplication());
            // La page est rechargé et la fonction réexcuté
        }
        while (i <= 10)
        // lancement d'une boucle tant que i est plus petit que 10
        {
            res = i * X;
            tab[i] = (i + " x " + X + " = " + res + "\n");
            // La valeur trouvé dans res est stocké dans un index du tableau correspondant a 
            // mon compteur "i" . Elle est stocké au sein d'une phrase
            i++;
        }
        if (tab != 0) {
            tab = tab.join("");
            alert(tab);
        }
        if (confirm("Voulez vous recommencer ?") == true) {
            window.location.reload(_TableMultiplication());
            // La page est rechargé et la fonction réexcuté
        }
    }
}
_TableMultiplication();
// Execution de la fonction
}   

///////////////////////////////////////////////////////////////////////////////////////////  Nombre de lettres ///////////////////////////////////////////////////////////////////////////////////////////
let exo20 = document.getElementById("lettre");  // J'appel l'ID du bouton

exo20.addEventListener("click", function () { lettre() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function lettre()  // Je crée la fonction
{

var phrase = window.prompt('Saisissez une phrase :');
var lettre = window.prompt('Saisissez une lettre :');

function countLetter(lettre, phrase) {  // les variables lettre et phrase sont passées en paramêtre de la fonction countLetter pour pouvoir utiliser leur valeur
  //déclaration des variables
var count = 0;
var posLetter = phrase.indexOf(lettre);  // variable définissant la position de la lettre dans le mot

while (posLetter != -1) {  // boucle permettant de compter le nombre de lettre demandée dans le mot
  count++;
  posLetter = phrase.indexOf(lettre, posLetter + 1);
}
// variable définissant l'affichage dans le html
var table = document.getElementById('table').insertAdjacentHTML('beforeend', 'Cette phrase contient ' + count + ' lettre(s) ' + lettre + '');
    }
    //appel de la fonction
countLetter();
}
