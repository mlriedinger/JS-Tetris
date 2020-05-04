const BLOCS = {
  1: {
    // BLOC L
    cells: [
      // Tableau avec un tableau à double-entrée pour chaque index
      [
        [true, false, false], // Ligne 1
        [true, true, true],
      ], // Ligne 2
      [
        [true, true],
        [true, false],
        [true, false],
      ],
      [
        [true, true, true],
        [true, false, false],
      ],
      [
        [false, true],
        [false, true],
        [true, true],
      ],
    ],
    color: "#FFCCB3",
  },
  2: {
    // BLOC T
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
  3: {
    // BLOC I
    cells: [[[true, true, true, true]], [[true], [true], [true], [true]]],
    color: "#FFD699",
  },
  4: {
    // BLOC Z
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
    color: "#B3E6B3",
  },
};

var GRID = {
  cells: [], // Sauvegarde les pièces qui sont déjà descendues pour que la pièce suivante ne puisse pas descendre jusqu'en bas
  width: 12,
  height: 18,
};

drawBloc(BLOCS[2], 0);
