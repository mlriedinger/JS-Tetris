// La structure du jeu - données et règles du jeu - AUCUNE action avec le joueur

function initializeModel(grid) {
  // Initialise le modèle
  (grid.cells = []), // Sauvegarde les pièces qui sont déjà descendues pour que la pièce suivante ne puisse pas descendre jusqu'en bas
    (grid.width = 12),
    (grid.height = 18),
    (grid.bloc = null), // Stocke le bloc actuel qui est choisi aléatoirement
    (grid.orientation = -1), // Stocke l'orientation du bloc actuel
    (grid.x = -1), // Stocke les coordonnées d'abscisse du bloc actuel
    (grid.y = -1), // Stocke les coordonnées d'ordonnée du bloc actuel
    initializeGrid(grid);
  chooseBloc(grid);
  window.setInterval(update, 500, grid); // C'est setInterval qui appelle la fonction update, donc il faut lui indiquer quel paramètre passer à update
}

function initializeGrid(grid) {
  // Crée une grille vide avec des 0 pour pouvoir ensuite mémoriser l'emplacement des blocs qui sont descendus
  for (let i = 0; i < grid.height; i++) {
    grid.cells[i] = []; // Dans grid.cells, on ajoute 18 tableaux vides
    for (let j = 0; j < grid.height; j++) {
      grid.cells[i][j] = 0; // Dans chacun des 18 tableaux vides, on ajoute un tableau de 12 lignes de 0
    }
  }
}

function chooseBloc(grid) {
  // Choisi un bloc de manière aléatoire
  grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // On veut récupérer l'index du bloc donc BLOCS []
  // La fonction Math.random retourne un nombre entre 0 et 1 avec 1 non compris donc Math.floor pour retourner un entier
  // Object.keys(objet) retourne un tableau de clés, car on ne peut pas faire un .length directement sur un objet
  // Math.random retourne un nombre entre 0 et 1 alors qu'on veut un bloc dont l'index est compris entre 1 et 4 donc +1

  // Choisi une orientation du bloc de manière aléatoire
  grid.orientation = Math.floor(Math.random() * grid.bloc.cells.length);
  // La fonction Math.random retourne un nombre entre 0 et 1 avec 1 non compris donc Math.floor pour retourner un entier
  // grid.bloc.cells.length = nombre d'orientations possibles du bloc qui a été généré jsute au-dessus

  grid.x = grid.width / 2 - 1; // -1 pour que la pièce soit correctement centrée
  grid.y = 0;
}

function update(grid) {
  if (grid.y < grid.height - grid.bloc.cells[grid.orientation].length) {
    // Si la coordonnée y est inférieure à la hauteur de la zone de dessin - la hauteur du bloc actuel
    grid.y++;
  } else {
    stockBloc(grid);
    chooseBloc(grid);
    // console.log(grid.cells);
  }
}

function incrementOrientation(grid) {
  grid.orientation = (grid.orientation + 1) % grid.bloc.cells.length;
  // On incrémente grid.orientation
  // Le modulo permet de vérifier qu'il ne s'incrémentera pas au-delà du nb max d'orientations du bloc
}

function incrementX(grid) {
  if (grid.x < grid.width - grid.bloc.cells[grid.orientation][0].length) {
    grid.x++;
  }
}

function decrementX(grid) {
  if (grid.x > 0) {
    grid.x--;
  }
}

function stockBloc(grid) {
  // On boucle sur le tableau du bloc pour reporter l'id du bloc dans le tableau grid.cells
  let cells = grid.bloc.cells[grid.orientation]; // On crée une variable pour naviguer plus facilement dans le tableau
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        grid.cells[grid.y + i][grid.x + j] = grid.bloc.id; // Permet de parcourir tout le tableau du bloc et de ne pas rester seulement sur la 1ère pièce en haut à gauche
      }
    }
  }
}
