///////////////////////////////////////////////////////////////////////////////////////////  Saisie  ///////////////////////////////////////////////////////////////////////////////////////////
let exo7 = document.getElementById("saisie");  // J'appel l'ID du bouton

exo7.addEventListener("click", function () { saisie() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function saisie()  // Je crée la fonction
{
// déclaration des variables
var firstname = '';
var count = 1;
do {
    // on demande à l'utilisateur de saisir un prénom
    firstname = window.prompt('Saisissez le prénom N° ' + count + '\n ou click sur Annuler pour arréter la saisie.');
    // on vérifie la saisie, si le prénom n'est pas null ou absent
 if (firstname != null && firstname != '') {
        // on affiche le prénom ainsi que son numéro
        console.log('Prénom N° ' + count + ': ' + firstname);
        // on incrémente la variable count
        count++;
    }
 // tant que firstname est différent de null et n'est pas une chaine de caratères vide 
} while (firstname != null && firstname != '');        
}

///////////////////////////////////////////////////////////////////////////////////////////  Entier  ///////////////////////////////////////////////////////////////////////////////////////////
let exo8 = document.getElementById("entier");  // J'appel l'ID du bouton

exo8.addEventListener("click", function () { entier() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function entier()  // Je crée la fonction
{
 var nombre = parseInt(prompt("Entrez un nombre"));  // Nombre indiqué par l'utilisateur
 var stockage = 0;  // Permetra d'afficher chaque valeur de test (de 0 au nombre "test")

 for (test = 1; test < nombre; test++)  // Début de la boucle
{
 stockage = stockage + "," + test  // Toutes les valeurs de stockage jusqu'au à la valeur test entrée par l'utilisateur
}
alert(stockage); 
}

///////////////////////////////////////////////////////////////////////////////////////////  Somme des entiers  ///////////////////////////////////////////////////////////////////////////////////////////
let exo9 = document.getElementById("entier2");  // J'appel l'ID du bouton

exo9.addEventListener("click", function () { entier2() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function entier2()  // Je crée la fonction
{
 var nombre = parseInt(prompt("Entrez un nombre"));  // Nombre indiqué par l'utilisateur
 var test = 0;  // Permetra d'afficher chaque valeur de test (de 0 au nombre "test")

 for (test = 1; test < nombre; test++)  // Début de la boucle
{
 test  // Toutes les valeurs de stockage jusqu'au à la valeur test entrée par l'utilisateur
}
alert(test); 
}

///////////////////////////////////////////////////////////////////////////////////////////  Intervalle  ///////////////////////////////////////////////////////////////////////////////////////////
let exo10 = document.getElementById("intervalle");  // J'appel l'ID du bouton

exo10.addEventListener("click", function () { intervalle() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function intervalle()  // Je crée la fonction
{
var nombre1 = parseInt(window.prompt('Saisissez un premier nombre :')); // L'utilistaur doit saisir un premier nombre
var nombre2 = parseInt(window.prompt('Saisissez un second nombre :')); // L'utilistaur doit saisir un second nombre
var sum = 0;

if (nombre2 > nombre1) {  // Si le deuxième nombre est supèrieur au premier
                for (a = nombre1; a <= nombre2; a++) {  // Boucle des nombres dans l'intervalle
                    sum += a;  // Sum = Sum + a (addition des nombres de l'intervalle)
                }

            } else { // Sinon si le premier nombre est supèrieur au deuxième
                for (a = nombre2; a <= nombre1; a++) {  // Boucle des nombres dans l'intervalle
                    sum += a;  // Sum = Sum + a
                }
            }

alert(sum);  // Affichage de la variable "sum"
}

///////////////////////////////////////////////////////////////////////////////////////////  Moyenne  ///////////////////////////////////////////////////////////////////////////////////////////
let exo11 = document.getElementById("moyenne");  // J'appel l'ID du bouton

exo11.addEventListener("click", function () { moyenne() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function moyenne()  // Je crée la fonction
{
    var nbr = 1;
    var moyenne = 0;
    var sum = 0;
    var nb_notes = 0;

    while (nbr != 0) {
       nbr = parseInt(window.prompt("Saisissez un nombre"));
       sum += nbr;
       nb_notes++ ;
    }
    moyenne = sum / (nb_notes -1);
    alert("Somme : " + sum + ", Moyenne : " + moyenne);
}

///////////////////////////////////////////////////////////////////////////////////////////  Mini et Maxi  ///////////////////////////////////////////////////////////////////////////////////////////
let exo12 = document.getElementById("minMax");  // J'appel l'ID du bouton

exo12.addEventListener("click", function () { minMax() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function minMax()  // Je crée la fonction
{
var tab = Array();
var i = -1;

while (tab[++i - 1] != 0)
    tab[i] = parseInt(prompt("Saisissez le nombre n°" + (i + 1) + "\nSaisissez 0 pour arrêter"));
i -= 2;      /* Supprime le dernier passage de la boucle et le '0'*/
var min = tab[i];
var max = min;
var somme = min;  // +SUPPLEMENT+ somme avec min pour la décrémentation en début de boucle
var len = tab.length - 1; // +SUPPLEMENT+ cases du tableau pour moyenne (-1 pour enlever le '0' de fin de saisie)
while (--i != -1) /* Je décrémente en début de boucle car min et max déjà == à tab[i] */
{
    if (tab[i] < min)
        min = tab[i];
    if (tab[i] > max)
        max = tab[i];
    somme += tab[i];
}
alert("Le minimum est : " + min + "\nLe maximum est : " + max);
alert("La somme : " + somme + "\nLa moyenne : " + (somme / len));
}

///////////////////////////////////////////////////////////////////////////////////////////  Multiples  ///////////////////////////////////////////////////////////////////////////////////////////
let exo13 = document.getElementById("multiple");  // J'appel l'ID du bouton

exo13.addEventListener("click", function () { multiple() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function multiple()  // Je crée la fonction
{
 // définition des variables
 var X = parseInt(window.prompt('Saisissez un nombre :'));
 var N = parseInt(window.prompt('Saisissez le nombre de multiple :'));
 var total = 0;

 for (i = 0; i <= N; i++) {  // Début de la boucle
     total = i * X;
    }
    alert(X + ' x ' + (i - 1) + ' = ' + total);
}

///////////////////////////////////////////////////////////////////////////////////////////  Voyelles  ///////////////////////////////////////////////////////////////////////////////////////////
let exo14 = document.getElementById("voyelles");  // J'appel l'ID du bouton

exo14.addEventListener("click", function () { voyelles() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function voyelles()  // Je crée la fonction
{
 var word = window.prompt('Saisir un mot :').toLowerCase();
     var wordLength = word.length;
     var count = 0;

     for (i = 0; i < wordLength; i++) {  // Boucle
         switch (word[i]) {   // utilisation d'un switch pour vérifier le cas de chaque voyelle
             case 'a':
             case 'e':
             case 'i':
             case 'o':
             case 'u':
             case 'y':
                 // incrémentation de notre compte
                 count++;
                 break;
             default: ' ';
         }
     }
    alert('Nombre de voyelle dans le mot ' + word + ' : ' + count);
}

///////////////////////////////////////////////////////////////////////////////////////////  Tranches d'âges  ///////////////////////////////////////////////////////////////////////////////////////////
let exo15 = document.getElementById("tranche");  // J'appel l'ID du bouton

exo15.addEventListener("click", function () { tranche() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function tranche()  // Je crée la fonction
{
    var controle = /^[0-9]+$/;
// Déclaration du regex controlant que l'on ne rentre que des chiffres en paramettre
function _calcul()
// Déclaration d'une fonction
{
    // Déclaration des variables utilisé dans la fonction
    var age = 0;
    var j = 0;
    var m = 0;
    var v = 0;
    // Lancement d'une boucle tant que la variable "age" est plus petite que 100
    age = prompt("Quelle est l'age de la personne ?");
    if (age == null) {
        window.close();
    }
    else {
        if (!controle.test(age)) {
            alert("Il faut entrer un nombre \n Recommencez !");
            window.location.reload(_calcul());
            // La page est rechargé et la fonction réexcuté
        }
        else {
            age = parseInt(age);
            if (age > 100) {
                v++;
            }
            else if (age < 20) {
                j++;
            }
            else {
                m++;
            }
            while (age < 100) {
                age = parseInt(prompt("Quelle est l'age de la personne ?"));
                // Utilisation d'un parseInt pour passer la valeur de "age" en int 
                if (!controle.test(age))
                // Si la valeur rentré en paramettre grace a la fonction prompt ne correspond pas aux critères
                // du regex on entre dans la condition 
                {
                    alert("Il faut entrer un nombre \n Recommencez !");
                    window.location.reload(_calcul());
                    // La page est rechargé et la fonction réexcuté
                }
                // Incrément des compteurs correspondant aux valeurs paramettré en fonction de leur conditios
                if (age < 20) {
                    j++;
                }
                else if (age >= 20 && age <= 40) {
                    m++;
                }
                else {
                    v++;
                }
            }
        }
    }

    alert("Il y a " + j + " jeunes \n Il y a " + m + " moyens \n Il y a " + v + " vieux");
    if (confirm("Voulez vous recommencer ?") == true) {
        window.location.reload(_calcul());
        // La page est rechargé et la fonction réexcuté
    }
    else {
        window.close();
        // Fonction fermant la page
    }
}
_calcul();
// Execution de la fonction
}

///////////////////////////////////////////////////////////////////////////////////////////  Nombre premier  (Correction )///////////////////////////////////////////////////////////////////////////////////////////
let exo16 = document.getElementById("premier");  // J'appel l'ID du bouton

exo16.addEventListener("click", function () { premier() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function premier()  // Je crée la fonction
{
    var n = 2;
var number = number = parseInt(window.prompt('Saisir un nombre :'));;
// on vérifie la saisie de l'utilisateur
// tant que la saisie n'est pas un nombre
while (isNaN(number)) {
    // on renouvèle la saisie
    number = parseInt(window.prompt('Saisissez un premier nombre :'));
}
    var divide = 0;
    var bool = true;
    // boucle parcourant les entiers entre n et racine carré du nombre saisi
    while (n <= Math.sqrt(number)) {
        // on divise notre nombre par n
        divide = number / n;
        console.log('resultat: ' + divide);
        // si le resultat est différent de 0 et que le reste est égale à 0
        if ((divide != 0) && (number % n == 0)) {
            // on definit la variable bool à false
            bool = false;
            // et arrêt de la boucle
            break;
        }
        // incrémentation de n
        n++;
    }
    // si le resultat est différent de 0 et que le reste est égale à 0
    if (bool == false) {
        // information
        alert('Ce nombre n\'est pas premier');
    } else {
        // information
        alert('Ce nombre est premier');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////  Nombre magique ///////////////////////////////////////////////////////////////////////////////////////////
let exo17 = document.getElementById("magique");  // J'appel l'ID du bouton

exo17.addEventListener("click", function () { magique() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function magique()  // Je crée la fonction
{
}   