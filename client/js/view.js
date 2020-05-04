// La vue regarde le modèle

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
canvas.height = window.innerHeight; // On peut annuler l'effet "étiré" en définissant la hauteur de la zone de dessin en JS

function drawBloc(bloc, orientation) {
  let cells = bloc.cells[orientation]; // On crée une variable pour naviguer plus facilement dans le tableau
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        context.strokeStyle = "#FFFFFF";
        context.strokeRect(j * 40, i * 40, 40, 40);
        context.fillStyle = bloc.color;
        context.fillRect(j * 40, i * 40, 40, 40);
      }
    }
  }
}
