// Le contrôleur interagit sur le modèle - tout ce qui permet au joueur d'interagir avec le jeu

function initializeController(grid) {
  window.onkeydown = function (event) {
    // On écoute les touches du clavier pour les récupérer
    // console.log(event.code);
    switch (event.code) {
      case "ArrowUp":
        incrementOrientation(grid);
        break;
      case "ArrowRight":
        incrementX(grid);
        break;
      case "ArrowDown":
        update(grid);
        break;
      case "ArrowLeft":
        decrementX(grid);
        break;
    }
  };
}
