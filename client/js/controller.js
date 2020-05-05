// Le contrôleur interagit sur le modèle - tout ce qui permet au joueur d'interagir avec le jeu

function initializeController(grid) {
  window.onkeydown = function (event) {
    console.log(event.code);
  };
}
