
// Variable pour stocker le numéro d'élément
var numeroElement = 1;
// Fonction pour ajouter un élément à la liste
function ajouterElement() {
    // Récupérer les valeurs des champs titre et description
    var titre = document.getElementById("titreInput").value;
    var description = document.getElementById("descriptionInput").value;
    
      // Vérifier si la liste est vide
      var listeVide = document.getElementById("listeArticles").childElementCount === 0;
      
    // Créer un nouvel élément article
    var nouvelArticle = document.createElement("article");

    // Créer des éléments pour le titre et la description
    var numeroElementSpan = document.createElement("span");
    numeroElementSpan.textContent = numeroElement + ". ";
    numeroElementSpan.style.fontWeight = "bold";

    var titreElement = document.createElement("h3");
    titreElement.textContent = titre;

    var descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    // Créer des boutons pour modifier et supprimer l'élément
    var modifierBtn = document.createElement("button");
    modifierBtn.textContent = "Modifier";
    modifierBtn.onclick = function() {
        modifierElement(nouvelArticle, titreElement, descriptionElement);
    };

    var supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "Supprimer";
    supprimerBtn.onclick = function() {
        supprimerElement(nouvelArticle);
    };

    // Ajouter le titre, la description et les boutons à l'article
    nouvelArticle.appendChild(titreElement);
    nouvelArticle.appendChild(descriptionElement);
    nouvelArticle.appendChild(modifierBtn);
    nouvelArticle.appendChild(supprimerBtn);

    // Ajouter l'article à la liste
    document.getElementById("listeArticles").appendChild(nouvelArticle);

    // Effacer les champs après ajout
    document.getElementById("titreInput").value = "";
    document.getElementById("descriptionInput").value = "";

        // Incrémenter le numéro d'élément pour le prochain ajout
        numeroElement++;
     // Si la liste était vide, cacher le message de liste vide
     if (listeVide) {
        document.getElementById("listeVideMessage").style.display = "none";
    }
}

// Si la liste est vide, afficher un message
if (document.getElementById("listeArticles").childElementCount === 0) {
    var message = document.createElement("p");
    message.textContent = " La liste est vide.";
    message.id = "listeVideMessage";
    document.body.appendChild(message);
}
// Fonction pour modifier un élément de la liste
function modifierElement(article, titreElement, descriptionElement) {
    var nouveauTitre = prompt("Entrez le nouveau titre :", titreElement.textContent);
    var nouvelleDescription = prompt("Entrez la nouvelle description :", descriptionElement.textContent);

    if (nouveauTitre !== null && nouvelleDescription !== null) {
        titreElement.textContent = nouveauTitre;
        descriptionElement.textContent = nouvelleDescription;

        console.log("Article modifié :");
        console.log("Nouveau titre : " + nouveauTitre);
        console.log("Nouvelle description : " + nouvelleDescription);
    }
}

// Fonction pour supprimer un élément de la liste
function supprimerElement(article) {
    article.remove();
    console.log("Article supprimé.");
}

