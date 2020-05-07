// La vue regarde le modèle - ici on met tout ce qui concerne l'interface du jeu

const SIZE = 40;

function initializeView(grid) {
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  canvas.height = grid.height * SIZE; // La hauteur du canvas correspond à la hauteur de la grille multipliée par le nb de cases
  canvas.width = grid.width * SIZE;
  draw(grid, context);
  displayStats(grid);
}

function draw(grid, context) {
  context.clearRect(0, 0, grid.width * SIZE, grid.height * SIZE); // Supprime la zone de dessin
  drawGrid(grid, context);
  drawBloc(grid, context);
  window.requestAnimationFrame(() => draw(grid, context)); // fonction proposée par le navigateur qui rappelle la fonction drawBloc dès que le navigateur est prêt
}

function drawCell(context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
  context.strokeStyle = "#FFFFFF";
  context.strokeRect(x * SIZE, y * SIZE, SIZE, SIZE);
}

function drawBloc(grid, context) {
  // Dessine le bloc qui est en train de descendre
  let cells = grid.bloc.cells[grid.orientation]; // On crée une variable pour naviguer plus facilement dans le tableau
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        drawCell(context, grid.x + j, grid.y + i, grid.bloc.color);
      }
    }
  }
}

function drawGrid(grid, context) {
  // Dessine la grille, donc les blocs déjà descendus
  for (let i = 0; i < grid.cells.length; i++) {
    for (let j = 0; j < grid.cells[i].length; j++) {
      let cell = grid.cells[i][j]; // On parcourt chaque cellule de la grille
      if (cell > 0) {
        // S'il y a un 0 dans la cellule, ça ne nous intéresse pas
        // S'il y a un chiffre > 0, alors cela correspond à un bloc, donc on le dessine
        drawCell(context, j, i, BLOCS[cell].color);
      }
    }
  }
}

function displayStats(grid) {
  let displayScore = document.getElementById("score");
  let displayLevel = document.getElementById("level");
  displayScore.innerText = "Score : " + grid.score;
  displayLevel.innerText = "Level : " + grid.level;
  window.requestAnimationFrame(() => displayStats(grid));
}
