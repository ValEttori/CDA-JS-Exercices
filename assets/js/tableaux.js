/////////////////////////////////////////////////////////////////////////////////////////// Premier tableau  ///////////////////////////////////////////////////////////////////////////////////////////
let exo21 = document.getElementById("table");  // J'appel l'ID du bouton

exo21.addEventListener("click", function () { tableau1() }  // Je déclenche la fonction "tableau" à partir du clic sur le bouton exo1   
);

function tableau1()  // Je crée la fonction tableau
{
    // Je déclare les variables
    var tableau = [];  // Je crée la variable tableau []
    var nombre = parseInt(prompt("Définissez la taille du tableau"));  // Affiche le texte et demande une réponse en nombre (Int)

    for (counter = 0; counter < nombre; counter++)  // Boucle (nombre de tours défini par l'utilisateur avec la variable "nombre")
    {
        var donnée = prompt("Entrez une donnée");  // Demande des données (leur nombre correspondra au nombre indiqué par l'utilisateur)
        tableau[counter] = donnée;  // La variable tableau rempli le tableau avec les données entrées par l'utilisateur
    }
    alert(tableau);  // Affichage du tableau
}

/////////////////////////////////////////////////////////////////////////////////////////// Second tableau (correction) ///////////////////////////////////////////////////////////////////////////////////////////
let exo22 = document.getElementById("table2");  // J'appel l'ID du bouton

exo22.addEventListener("click", function () { tableau2() }  // Je déclenche la fonction "tableau" à partir du clic sur le bouton exo1   
);

function tableau2()  // Je crée la fonction tableau
{
    
function SaisieTab(nb) {

    let tab = new Array();
    for (let i = 1; i <= nb; i++) {
        let index = prompt("veuillez saisir la donnée numéro " + i + " : ");

        if (index !== null && index !=="") { //si l'utilisateur a rentrer une valeur et qu'il n'a pas cliqué sur annuler
            while (isNaN(index)) {
                index = prompt("La indexs saisie n'est pas un nombre , veuillez saisir le numéro du poste a entrée");
                if (index == null) {
                    return;
                }

            }
            tab.push(index);

        }
        else
        {
            return;
        }
    }

    menutableau(tab);
}

/*
* On affiche le menu
* */
function menutableau(tab = []) {

    let selection = prompt("Que voulez-vous faire ? : \n 1) Afficher tout les poste  \n 2) Rechercher un poste spécifique \n 3) Afficher le poste maximum et la moyenne ");

    if (selection !== null && selection !=="") {
        while (isNaN(selection)) {
            selection = prompt("Veuillez indiquez le numéro correspondant à l'action que vous souhaiter effectuer : \n 1) Afficher tout les postes , \n 2) Rechercher un poste spécifique, \n 3) Afficher le poste maximum et la moyenne ");
        }

        switch (selection) {
            case '1':
                AfficherTab(tab);
                break;
            case '2':
                RechercheTab(tab);
                break;
            case '3':
                InfoTab(tab);
                break;
            default :
                alert("ce numéro de menu n'existe pas");
                menutableau(tab);
                break;
        }

    }

}
/*
* on affiche tout le contenu du tableau
* */
function AfficherTab(tab = []) {
    alert(tab.join("-")); // affiche les elements du tableau séparer par un '-'
    menutableau(tab);
}

function RechercheTab(tab = []) {
    let index = prompt("Quel index du tableau voulez-vous ?");
    if (index !== null) {
        while (isNaN(index)) { // verifie que la valeur du tableau est un nombre
            index = prompt("L'index saisie n'est pas un nombre , veuillez saisir l'index du poste que vous recherchez");
            if (index == null) { // si clique sur annuler
                return;
            }

        }
        if (tab[parseInt(index - 1)] == undefined) { // si le nombre saisie n'est pas trouver dans le tableau
            let reco = confirm("le tableau ne comporte pas cette donnée, recommencer ? ");
            if (reco) { //si il veux recommencer
                RechercheTab(tab);
            } else {
                menutableau(tab);
            }
        } else {
            alert(tab[parseInt(index - 1)]);
            RechercheTab(tab);

        }

    }
    else
    {
        menutableau(tab);
    }


}

function InfoTab(tab = []) {
    let max = Math.max.apply(null, tab); // selectionne la valeur la plus grande du tableau
    let somme = 0;
    tab.forEach(function(item){ // fait somme de tout les elements du tableau
        somme+=parseInt(item);});
    let moy = Math.round( (somme / tab.length)*100)/100; // calcule la moyenne , arrondi au dixieme pres

alert (" Le plus grand poste du tableau est "+ max + " \n La moyenne des postes est de : "+moy);
    menutableau(tab);
}
}

/////////////////////////////////////////////////////////////////////////////////////////// Tableau des prénoms (Correction) ///////////////////////////////////////////////////////////////////////////////////////////
let exo23 = document.getElementById("table3");  // J'appel l'ID du bouton

exo23.addEventListener("click", function () { tableau3() }  // Je déclenche la fonction "tableau" à partir du clic sur le bouton exo1   
);

function tableau3()  // Je crée la fonction tableau
{
    var tab = ["Andy", "Mathieu", "Paul", "Dominique", "Benjamin", "Logan", "Valentin", "Mohamed"];
    var prenom = prompt("Veuillez écrire un prénom");

for (let i = 0; i < tab.length; i++) {  // Je transforme les valeurs et le prénom indiqué en majuscules pour éviter la casse (toUpperCase)
    tab[i] = tab[i].toUpperCase();
};
prenomMaj = prenom.toUpperCase();

var check = tab.includes(prenomMaj);  // On demande le prénom

// La variable check va comparer les prénoms du tableau avec celui rentré en paramettre et renvoyer true si il y est et false si non
if (check)

// Abréviation pour dire "si check vaut true"
{
    // La fonction splice va supprimer l'élément et l'index qui ce trouve a l'index du tableau qu'on lui donne
    tab.splice(tab.indexOf(prenomMaj), 1);
    // Affiche une valeur vide
    tab.push("")

}
alert(tab);
}

/////////////////////////////////////////////////////////////////////////////////////////// Tri à bulles ///////////////////////////////////////////////////////////////////////////////////////////
let exo24 = document.getElementById("table4");  // J'appel l'ID du bouton

exo24.addEventListener("click", function () { table4() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function table4()  // Je crée la fonction
{
   var MaxTableau = 8;
   var K,L,I,J;
   var Tableau = new Array(15, 10, 23, 2, 8, 9, 14, 16);

   document.write("Avant:");
   for(K = 0; K < MaxTableau; K++) document.write(Tableau[K],", ");

   for(I = MaxTableau - 2;I >= 0; I--) {
       for(J = 0; J <= I; J++) {
           if(Tableau[J + 1] < Tableau[J]) {
               var t = Tableau[J + 1];
               Tableau[J + 1] = Tableau[J];
               Tableau[J] = t;
           }
       }
   }
   document.write("<br>Après:");
   for(L = 0; L < MaxTableau; L++) {
       document.write(Tableau[L],", ");
   }
   document.write("<br>");
}   
