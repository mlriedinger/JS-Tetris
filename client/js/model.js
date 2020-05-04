// La structure du jeu

function initializeModel(grid) {
  // Initialise le modèle
  (grid.cells = []), // Sauvegarde les pièces qui sont déjà descendues pour que la pièce suivante ne puisse pas descendre jusqu'en bas
    (grid.width = 12),
    (grid.height = 18),
    (grid.bloc = null), // Stocke le bloc actuel qui est choisi aléatoirement
    (grid.orientation = -1), // Stocke l'orientation du bloc actuel
    (grid.x = -1), // Stocke les coordonnées d'abscisse du bloc actuel
    (grid.y = -1), // Stocke les coordonnées d'ordonnée du bloc actuel
    chooseBloc(grid);
}

function chooseBloc(grid) {
  // Choisi un bloc de manière aléatoire
  grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // On veut récupérer l'index du bloc donc BLOCS []
  // La fonction Math.random retourne un nombre entre 0 et 1 avec 1 non compris donc Math.floor pour retourner un entier
  // Object.keys(objet) retourne un tableau de clés, car on ne peut pas faire un .length directement sur un objet
  // Math.random retourne un nombre entre 0 et 1 alors qu'on veut un bloc dont l'index est compris entre 1 et 4 donc +1

  grid.orientation = Math.floor(Math.random() * grid.bloc.cells.length);
  // La fonction Math.random retourne un nombre entre 0 et 1 avec 1 non compris donc Math.floor pour retourner un entier
  // grid.bloc.cells.length = nombre d'orientations possibles du bloc qui a été généré jsute au-dessus
}
