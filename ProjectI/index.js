const express = require('express');
const cors = require('cors');
require('dotenv').config();

const moviesRouter = require('./src/api/movies/movies.routes');
const connectDb = require('./src/utils/database/db');

connectDb();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const server = express();
const router = express.Router();

server.use(cors({
    origin: "*",
    credentials: true
}));

server.use(express.json());
server.use('/movies', moviesRouter);

server.listen(PORT, () => {
    console.log(`Server fucando a la max power in localhost: ${PORT}`);
});