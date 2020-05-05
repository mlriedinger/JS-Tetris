// Le contrôleur interagit sur le modèle - tout ce qui permet au joueur d'interagir avec le jeu

function initializeController(grid) {
  window.onkeydown = function (event) {
    // console.log(event.code);
    switch (event.code) {
      case "ArrowUp":
        incrementOrientation(grid);
        console.log("up");
        break;
      case "ArrowRight":
        incrementX(grid);
        console.log("right");
        break;
      case "ArrowDown":
        console.log("down");
        break;
      case "ArrowLeft":
        decrementX(grid);

        console.log("left");
        break;
    }
  };
}
