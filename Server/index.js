const express = require("express");

// const sagas = require('./src/api/movies/movies_data.js'); //me traigo las sagas de la carpeta movies_data
// console.log(sagas);

const PORT = 3000;
const server = express();

// const router = express.Router();
const routesMovies = require('./src/api/movies/movies_routes');

server.use('/movies', routesMovies);

server.listen(PORT, () => {
    console.log(`Servidor a la espera de órdenes en http://localhost:${PORT}`);
});