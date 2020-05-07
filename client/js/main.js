const BLOCS = { // Contient tous les blocs nécessaires au jeu
  1: {
    // BLOC L
    id: 1,
    cells: [
      // Tableau avec un tableau à double-entrée pour chaque index = tableau à 3 dimensions
      [
        // Orientation 1 du bloc
        [true, false, false], // Ligne 1 du bloc
        [true, true, true], // Ligne 2 du bloc
      ],
      [
        // Orientation 2 du bloc
        [true, true],
        [true, false],
        [true, false],
      ],
      [
        // Orientation 3 du bloc
        [true, true, true],
        [false, false, true],
      ],
      [
        // Orientation 4 du bloc
        [false, true],
        [false, true],
        [true, true],
      ],
    ],
    color: "#FFCCB3",
  },
  2: {
    // BLOC L inversé
    id: 2,
    cells: [
      [
        [false, false, true],
        [true, true, true],
      ],
      [
        [true, false],
        [true, false],
        [true, true],
      ],
      [
        [true, true, true],
        [true, false, false],
      ],
      [
        [true, true],
        [false, true],
        [false, true],
      ],
    ],
    color: "#FFAA80",
  },
  3: {
    // BLOC T
    id: 3,
    cells: [
      [
        [true, true, true],
        [false, true, false],
      ],
      [
        [true, false],
        [true, true],
        [true, false],
      ],
      [
        [false, true, false],
        [true, true, true],
      ],
      [
        [false, true],
        [true, true],
        [false, true],
      ],
    ],
    color: "#B3D9FF",
  },
  4: {
    // BLOC I
    id: 4,
    cells: [[[true, true, true, true]], [[true], [true], [true], [true]]],
    color: "#FFD699",
  },
  5: {
    // BLOC Z
    id: 5,
    cells: [
      [
        [true, true, false],
        [false, true, true],
      ],
      [
        [false, true],
        [true, true],
        [true, false],
      ],
    ],
    color: "#C6EBC6",
  },
  6: {
    // BLOC Z inversé
    id: 6,
    cells: [
      [
        [false, true, true],
        [true, true, false],
      ],
      [
        [true, false],
        [true, true],
        [false, true],
      ],
    ],
    color: "#8DD88D",
  },
  7: {
    // BLOC carré
    id: 7,
    cells: [
      [
        [true, true],
        [true, true],
      ],
    ],
    color: "#FFB3B3",
  },
};

let grid = {}; // La grille contient toutes les infos propres au jeu : le bloc qui est en train de descendre et les pièces qui sont déjà tombées
initializeModel(grid);
initializeView(grid);
initializeController(grid);


