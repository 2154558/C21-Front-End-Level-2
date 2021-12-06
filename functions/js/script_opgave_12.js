let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom? omdat het een string is vul je antwoord in op de lijn
let myInt = 3; //dit is een variabele van het datatype integer waarom? omdat het een getal is vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen? zodat js weet dat het een value heeft vul je antwoord in op de lijn

function getName(naam){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 17 vul je antwoord in op de lijn

    // vul in wat naam is: vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde parameter de waarde noemen we een Argument vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een popup op het scherm met de tekst de naam die he hebt ingevult deze tekst staan op regel 17 van de HTML vul je antwoord in op de lijn
}

function hideMe(){ //mag je de naam van de functie veranderen? ja 
    document.getElementById("hide").style.display = "none"; 
    document.getElementById("show").style.display = "block"; 
    // wat gebeurd er in deze functie? er word bepaald welk element je wel laat zien en welke niet... en waar wordt deze in je HTML aangeroepen? 22.
}

function show(){ //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML: lijn 25.
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? pakt een element bij zijn id en dus kan hij maar 1 keer gebruikt worden.
    document.getElementById("show").style.display = "none";     
    // wat gebeurd er in deze functie? hij beslits wat er wel en niet word laten gezien.
}

function rekenen(getal){ //In op welke regel in de HTML file wordt deze functie aangeroepen: lijn 32 

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan: lijn 2 in script.js... en waar komt de waarde van getal vandaan? het id/class antwoord

    document.querySelector(".som").innerHTML = antwoord;  // wat doet querySelector? die select de class som Wat is antwoord hier? 
    
    //wat gebeurt er in deze functie? som veranderd in antwoord vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? het getal veranderd
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? ja
}

function setColor(element, kleur, size){ //In op welke regel in de HTML file wordt deze functie aangeroepen regel 44

    element.style.color = kleur; //waar komt de waarde van element vandaan css en waar komt de waarde van kleur vandaan? die komt uit de css vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van size vandaan? die komt uit de html. 

    //wat gebeurt er in deze functie? hij veranderd de grootte van de text dfhg5xaz
}

getName(myStr);
// wat gebeurd er hierboven hier kan je een naam invullen en wanneer gebeurt dat, je kan de naam veranderen van de popup.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? de naam veranderd.