// Récupère l'élément via son ID
var check = document.getElementById('envoie');
// Ajout d'un évènement lors du click
check.addEventListener("click", function verif(event) {
    // Déclarations des regex
    // regex demandant une première lettre en majuscule et les caractères spéciaux
    var alpha = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    // regex controlant les adresses mails , on autorise tout les carctères alphanumériques
    // ainsi que ". et -" on dis qu'il faut @ ensuite plus au moins 1 caractère alphabétique
    // puis un point suivi de 2 ou 3 caractères alphabétiques
    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    // Ce regex est pour les dates américaines car c'est la valeur renvoyer par la balise
    // de l'input type date. On demande ainsi les 4 chiffres de l'année suivi d'un "-",puis
    // on controle les 2 chiffres correspondant au mois suivi d'un "-" et enfin les 2 chiffres
    // correspondant au jour
    var birth = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    // regex controlant le code postal, on controle s'il y a bien 5 chiffres.
    var cp = /(^[0-9]{5}$)|^$/;
    // regex controlant l'adresse , il doit y avoir au moins 1 chiffre suivi de au moins
    // 1 caractère alphabétique et une prise en compte du champ vide car non obligatoire
    var adr = /(^[0-9]+[a-zA-Z-\s]+$)|^$/;
    // regex controlant la ville , le meme que alpha mais prenant en compte un champ vide car non obligatoire
    var city = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/;

    // Déclarations des variables
    // Les valeurs sont récupérées grace à la fonction getElementById
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var sexe = document.getElementById("inlineRadio1").checked;
    var sexe2 = document.getElementById("inlineRadio2").checked;
    var date = document.getElementById("date").value;
    var codepost = document.getElementById("codepost").value;
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var accept = document.getElementById("accept").checked;
    var question = document.getElementById("question").value;
    // Controle du nom
    // Vérifie que la variable respecte les paramètres
    if (!alpha.test(nom))
    {
        // Appel de l'id "errName" et affichage du message dans une balise <p> vide de la page HTML grace à la fonction textContent
        document.getElementById("errName").textContent = "Utilisez uniquement des caractères alphabétiques";
        // Retour à l'évènement déterminé dans la var check en début de page
        event.preventDefault();
    }
    else {
        // Si non, le message d'erreur n'apparait pas
        document.getElementById("errName").textContent = "";
    }
    // Controle du prénom
    if (!alpha.test(prenom)) {
        document.getElementById("errPrenom").textContent = "Veulliez entrer une adresse mail valide";
        event.preventDefault();
    }
    else {
        document.getElementById("errPrenom").textContent = "";
    }
    // Controle des booleans "sexe"
    if (sexe == false && sexe2 == false)
    // Si les deux booleans retourne false, affiche un message d'erreur
    {
        document.getElementById("errSexe").textContent = "Veulliez choisir une réponse";
    }
    else
    {
        document.getElementById("errSexe").textContent = "";
    }
    // Controle de la date de naissance
    if (!birth.test(date)) {
        document.getElementById("errDate").textContent = "Date de naissance non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("errDate").textContent = "";
    }
    // Controle du code postal
    if (!cp.test(codepost)) {
        document.getElementById("errCP").textContent = "Code postal non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("errCP").textContent = "";
    }
    // Controle de l'adresse
    if (!adr.test(adresse)) {
        document.getElementById("errAdr").textContent = "Adresse non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("errAdr").textContent = "";
    }
    // Controle de la ville
    if (!city.test(ville)) {
        document.getElementById("errVille").textContent = "Utilisez uniquement des caractères alphabétiques";
        event.preventDefault();
    }
    else {
        document.getElementById("errVille").textContent = "";
    }
    // Controle de l'email
    if (!mail.test(email)) {
        document.getElementById("errMail").textContent = "Adresse mail non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("errMail").textContent = "";
    }
    // Controle du sujet
    // Si la valeur de la balise <select> ayant l'id sujet est égal 1, on affiche le message d'erreur
    if (sujet == 1)
    {
        document.getElementById("errSujet").textContent = "Selectionnez le sujet de votre requête";
        event.preventDefault();
    }
    else {
        document.getElementById("errSujet").textContent = "";
    }
    // Controle de la checkbox
    if (accept != true) {
        document.getElementById("errAccept").textContent = "Veuillez cocher cette case";
        event.preventDefault();
    }
    else {
        document.getElementById("errAccept").textContent = "";
    }
    // Controle de la question
    // Si rien n'est écrit, on affiche le message d'erreur
    if (question == "") {
        document.getElementById("errQuest").textContent = "Ce champ est obligatoire";
        event.preventDefault();
    }
    else {
        document.getElementById("errQuest").textContent = "";
    }
});