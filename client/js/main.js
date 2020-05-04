const BLOC_L = {
  cells: [
    // Tableau à double-entrée
    [true, true, false], // Ligne 1
    [true, true, true], // Ligne 2
  ],
};

const BLOC_L_rot = {
  cells: [
    [true, true],
    [true, false],
    [true, false],
  ],
};

const BLOC_L_rot2 = {
  cells: [
    [true, true, true],
    [true, true, false],
  ],
};

const BLOC_L_rot3 = {
  cells: [
    [false, true],
    [false, true],
    [true, true],
  ],
};

const BLOC_T = {
  cells: [
    [true, true, true],
    [false, true, false],
  ],
};

const BLOC_T_rot = {
  cells: [
    [true, false],
    [true, true],
    [true, false],
  ],
};

const BLOC_T_rot2 = {
  cells: [
    [false, true, false],
    [true, true, true],
  ],
};

const BLOC_T_rot3 = {
  cells: [
    [false, true],
    [true, true],
    [false, true],
  ],
};

const BLOC_I = {
  cells: [[true, true, true, true]],
};

const BLOC_I_rot = {
  cells: [[true], [true], [true], [true]],
};

const BLOC_Z = {
  cells: [
    [true, true, false],
    [false, true, true],
  ],
};

const BLOC_Z_rot = {
  cells: [
    [false, true],
    [true, true],
    [true, false],
  ],
};

const GRID = {
  cells: [], // Sauvegarde les pièces qui sont déjà descendues pour que la pièce suivante ne puisse pas descendre jusqu'en bas
  width: 12,
  height: 18,
};

var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
canvas.height = window.innerHeight; // On peut annuler l'effet "étiré" en définissant la hauteur de la zone de dessin en JS

function draw(bloc) {
  for (let i = 0; i < bloc.cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < bloc.cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (bloc.cells[i][j]) {
        context.strokeStyle = "#FFFFFF";
        context.strokeRect(j * 40, i * 40, 40, 40);
        context.fillStyle = "rgba(0, 102, 102, 0.8)";
        context.fillRect(j * 40, i * 40, 40, 40);
      }
      console.log(bloc.cells[i][j]);
    }
  }
}

draw(BLOC_Z);
