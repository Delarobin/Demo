var liens = document.querySelector("nav>p");

for(var i = 0; i<liens.length; i++);{

    liens[i].linkParent = "maine>article:nth-child("+ (i+1) +")";

    liens[i].addEventListener("click",toggleArticle);
}

function toggleArticle(e){

}



/*
var lien1 = document.querySelector("nav>p:nth-child(1)"); // Je trouve le premier lien
// nth-child = balise enfant du concerné, exemple selection du premier enfant de nth

var ajoutelaClasseArticle1 = function(){
    var article1 = document.querySelector("main>article:nth-child(1)");

    article1.classList.add("affiche");
};

var supprimeClasseArticle1 = function(){
    var article1 = document.querySelector("main>article:nth-child(1)");

    article1.getElementsByClassName("affiche").style.display="none";
}

lien1.addEventListener("click",ajoutelaClasseArticle1);

// lien1.addEventListenet("click",supprimeClasseArticle1);

 */
