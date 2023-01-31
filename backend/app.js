//Importation de express
const express = require("express");

// Importer Cors
const cors = require("cors");

// Importation de morgan(logger http)
const morgan = require("morgan");

// Importation du fichier data.js pour connexion à la base de donnée
const mongoose = require("./database/data");


const app = express();

//Importer body-parser
const bodyParser = require("body-parser");

//logger les requêtes et les reponses 
app.use(morgan("dev"));

// gérer les problèmes de CORS (Cross-Origin Request Sharing)
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

//transformer le corops (le body) en json objet javascript utilisable
app.use(bodyParser.json());²

// route D'authentification (auth)


//exportation de app.js pour pouvoir y accéder depuis un autre fichier
module.exports = app;