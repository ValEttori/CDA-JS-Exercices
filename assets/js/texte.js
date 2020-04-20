///////////////////////////////////////////////////////////////////////////////////////////  Texte  ///////////////////////////////////////////////////////////////////////////////////////////
let exo1 = document.getElementById("text");  // J'appel l'ID du bouton

exo1.addEventListener("click", function () { text() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function text()  // Je crée la fonction
{
    var lastName = prompt('Entrez votre nom :'); // prompt (ou window.prompt) demande une saisie à l'utilisateur
    var firstname = prompt('Entrez votre prénom :'); // prompt (ou window.prompt) demande une saisie à l'utilisateur
    var gender = window.confirm('Êtes-vous un homme?'); // confirm => demande une confirmation à l'utilisateur

    if (gender == true) {  // début de la condition
        // Nouvelle attribution de valeur à la variable gender
        gender = 'Monsieur';
    } else {
        // Nouvelle attribution de valeur à la variable gender
        gender = 'Madame';
    }
    // alert -> affiche un message à l'utilisateur
    alert('Bonjour ' + gender + ' ' + lastName + ' ' + firstname + '.' + '\n' + 'Bienvenue sur notre site!');
}