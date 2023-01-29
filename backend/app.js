//Importation de express
const express = require("express");

// Importation de morgan(logger http)
const morgan = require("morgan");

const app = express();

//logger les requêtes et les reponses 
app.use(morgan("dev"));


//exportation de app.js pour pouvoir y accéder depuis un autre fichier
module.exports = app;