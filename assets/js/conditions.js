
///////////////////////////////////////////////////////////////////////////////////////////  Parité  ///////////////////////////////////////////////////////////////////////////////////////////
let exo2 = document.getElementById("parite");  // J'appel l'ID du bouton

exo2.addEventListener("click", function () { parite() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function parite()  // Je crée la fonction
{
    var nb = window.prompt("Saisissez un nombre");
    if (nb % 2 == 0) // Si nombre pair
        alert("Ce nombre est pair");
    else // Si non nombre impair
        alert("Ce nombre est impair");
}

///////////////////////////////////////////////////////////////////////////////////////////  Age  ///////////////////////////////////////////////////////////////////////////////////////////
let exo3 = document.getElementById("age");  // J'appel l'ID du bouton

exo3.addEventListener("click", function () { age() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function age()  // Je crée la fonction
{
    var dob = window.prompt('Année de naissance');
    var today = new Date(); // Date actuelle
    var currentYear = today.getFullYear(); // Année en cours
    var age = currentYear - dob; // Age selon l'année indiquée
    // Conditions affichant un message selon l'age de l'utilisateur
    if (age < 18) {
        alert('Vous êtes mineur. Vous avez ' + age + 'ans.');
    }
    else {
        alert('Vous êtes majeur. Vous avez ' + age + 'ans.');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////  Calculatrice  ///////////////////////////////////////////////////////////////////////////////////////////
let exo4 = document.getElementById("calculatrice");  // J'appel l'ID du bouton

exo4.addEventListener("click", function () { calculatrice() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function calculatrice()  // Je crée la fonction
{
    const nb1 = Number(prompt('Premier nombre'));
    const nb2 = Number(prompt('Deuxième nombre'));
    let op = prompt('Opérateur');
    if (nb2 == 0 && op == '/') {
        alert('division par 0');
    }
    else {
        switch (op) {
            case '/':
                alert(nb1 / nb2);
                break;
            case '+':
                alert(nb1 + nb2);
                break;
            case '*':
                alert(nb1 * nb2);
                break;
            case '-':
                alert(nb1 - nb2);
                break;
            default:
                alert('Pov type');
        }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////  Remise  ///////////////////////////////////////////////////////////////////////////////////////////
let exo5 = document.getElementById("remise");  // J'appel l'ID du bouton

exo5.addEventListener("click", function () { remise() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function remise()  // Je crée la fonction
{
    var PU = parseFloat(prompt('Prix unitaire'));
    var QTECOM = parseInt(prompt('Quantité commandée'));
    var TOT = PU * QTECOM;
    var PORT = 0.02 * TOT;
    var REM5 = TOT * 0.05;
    var REM10 = TOT * 0.1;
    var PAP = 0;
    // Si les informations renseignées ne sont pas des nombres, on renvoie une erreur
    if (isNaN(PU && QTECOM)) {
      alert('Erreur, saisissez des nombres');
    }
    else {
      // Si TOT est supérieur à 500, le Prix à Payer sera de TOT - la Remise de 10
      if (TOT > 500) {
        PAP = TOT - REM10;
        alert('Le prix à payer sera de ' + PAP + '€.');
      }
      // Sinon Si TOT supérieur à 200 ET TOT inférieur ou égal à 500, le prix à payer sera de TOT - la Remise de 10%, + le port 
      else if (TOT > 200 && TOT <= 500) {
        // Si le port est inférieur à 6, il sera minimum de 6€
        if (PORT < 6) {
          PORT = 6;
        }
        else {
          PORT = 0.02 * TOT;
        }
        PAP = TOT - REM10 + PORT;
        alert('Le prix à payer sera de ' + PAP + '€.');
      }
      // Sinon Si TOT inférieur ou égal à 200 ET TOT supérieur ou égal à 100, le prix à payer sera de TOT - Remise de 5% + le port de 6€
      else if (TOT <= 200 && TOT >= 100) {
        PAP = TOT - REM5 + 6;
        alert('Le prix à payer sera de ' + PAP + '€.');
      }
      // Sinon, le prix à payer sera de TOT + le port de 6€
      else {
        PAP = TOT + 6;
        alert('Le prix à payer sera de ' + PAP.toFixed(2) + '€.'); // PAP.tofixed(2) ===> Fixe la valeur de PAP à deux décimales
      }
    }
}

///////////////////////////////////////////////////////////////////////////////////////////  Participation  ///////////////////////////////////////////////////////////////////////////////////////////
let exo6 = document.getElementById("participation");  // J'appel l'ID du bouton

exo6.addEventListener("click", function () { participation() }  // Je déclenche la fonction à partir du clic sur le bouton
);

function participation()  // Je crée la fonction
{
    var celib = window.confirm('Êtes-vous célibataire?');
    var salary = parseFloat(window.prompt('Indiquez votre salaire :'));
    if (isNaN(salary)) {
        alert('Veuillez saisir un nombre valide svp!'); // information de l'erreur
    }
    var children = window.prompt('Combien avez-vous d\'enfant?');
    if (isNaN(children)) {
        alert('Veuillez saisir un nombre valide svp!'); // information de l'erreur
    }
    var tot = 0;
    switch (celib) {
        // si le salarié est marié 
        case true:
        tot = tot + 25; // tot += 25;
        tot = (tot + (children * 10));
        // condition vérifiant le salaire
        if (salary < 1200) {
            tot = tot + 10;
        }
        // si la participation est supérieur à 50, on la plafonne à 50 
        if (tot > 50) {
            tot = 50;
        }
        break;
        // si le salarié est célibataire
        case false:
        tot = tot + 20; // tot += 20;
        tot = (tot + (children * 10));
        // condition vérifiant le salaire
        if (salary < 1200) {
            tot = tot + 10;
        }
        // si la participation est supérieur à 50, on la plafonne à 50 
        if (tot > 50) {
            tot = 50;
        }
        break;
    }
    // affichage de la participation
    alert('La participation patronnale sera de ' + tot + '%');
}