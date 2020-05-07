var express = require("express");
var http = require("http");
var app = express(); // On appelle une instance du module express

// On récupère le serveur du module http de nodejs, on y ajoute express et on écoute le port 80
// On écoute le port 80, aucune route n'est définie pour le moment
http.Server(app).listen(80);
() => {
  console.log("Listenning on 80");
};

// On utilise express pour qu'au chargement de la page, quand le navigateur renvoie "/", on appelle le dossier "client" qui contient l'index.html
app.use("/", express.static(__dirname + "/../client")); // static rend le dossier public tel quel, il est consultable dans la console > Sources
