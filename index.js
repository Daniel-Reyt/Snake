var canvas = document.getElementById('zone');
var ctx = canvas.getContext('2d');
var intervalID;

ctx.fillStyle = "#f1c40f";
var largeur = hauteur = 20;
var x = Math.trunc(canvas.width / 2);
var y = Math.trunc(canvas.height / 2);
ctx.fillRect(x, y, largeur, hauteur);

var trace = [];
var tailleTrace = 50;
var sautTrace = 10;
var tailleMaxTrace = 1000; // Cette valeur sera changé plus tard

var hist, compteBoucle = 0;

window.onload = function() {
    var intervalID = setInterval(game, 10);
    document.addEventListener("keydown", keyboard);
}

function game() {
    x += depX;
    y += depY;
    // On augmente tailleTrace toutes les secondes (soit 100 boucles)
    if (tailleTrace <= tailleMaxTrace) {
        if ((compteBoucle++) % 100 == 1) {
            tailleTrace += sautTrace;
        }
    }
}

function keyboard(evt) {
    function keyboard(evt) {
        switch (evt.keyCode) {
            case 37:
                // touche gauche
                if (hist == 39) { break; }
                depX = -1;
                depY = 0;
                hist = evt.keyCode;
                break;
            case 38:
                // touche haut
                if (hist == 40) { break; }
                depX = 0;
                depY = -1;
                hist = evt.keyCode;
                break;
            case 39:
                // touche droite
                if (hist == 37) { break; }
                depX = 1;
                depY = 0;
                hist = evt.keyCode;
                break;
            case 40:
                // touche bas
                if (hist == 38) { break; }
                depX = 0;
                depY = 1;
                hist = evt.keyCode;
                break;
            case 32:
                // touche espace pour l'arrêt
                depX = 0;
                depY = 0;
                break;
        }
    }
}