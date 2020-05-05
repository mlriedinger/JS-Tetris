// La vue regarde le modèle - ici on met tout ce qui concerne l'interface du jeu

const SIZE = 40;

function initializeView(grid) {
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  canvas.height = grid.height * SIZE; // La hauteur du canvas correspond à la hauteur de la grille multipliée par le nb de cases
  canvas.width = grid.width * SIZE;
  drawBloc(grid, context);
  // window.setInterval(drawBloc, 500, grid, context);
}

function drawBloc(grid, context) {
  context.clearRect(0, 0, grid.width * SIZE, grid.height * SIZE);
  let cells = grid.bloc.cells[grid.orientation]; // On crée une variable pour naviguer plus facilement dans le tableau
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        context.strokeStyle = "#FFFFFF";
        context.strokeRect(
          (grid.x + j) * SIZE,
          (grid.y + i) * SIZE,
          SIZE,
          SIZE
        );
        context.fillStyle = grid.bloc.color;
        context.fillRect((grid.x + j) * SIZE, (grid.y + i) * SIZE, SIZE, SIZE);
      }
    }
  }
  window.requestAnimationFrame(() => drawBloc(grid, context)); // fonction proposée par le navigateur qui rappelle la fonction drawBloc dès que le navigateur est prêt
}
