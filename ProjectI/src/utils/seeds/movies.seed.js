const mongoose = require("mongoose");

const Movie = require("../../api/movies/movies.model");

require("dotenv").config();
const DB_URL = process.env.DB_URL;

const movies = [
  {
    title: "The Matrix",
    director: "Hermanas Wachowski",
    year: 1999,
    genre: "Accion",
    img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Matrix Reloaded",
    director: "Hermanas Wachowski",
    year: 2003,
    genre: "Accion",
    img: "https://m.media-amazon.com/images/M/MV5BNDQzM2FhZmQtMzRjOC00ZDU0LWJjY2YtMWU2NTdhZGNiZTYwXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_.jpg",
  },
  {
    title: "Buscando a Nemo",
    director: "Andrew Stanton",
    year: 2003,
    genre: "Animacion",
    img: "https://m.media-amazon.com/images/I/71yHWM7jcoL.jpg",
  },
  {
    title: "Buscando a Dory",
    director: "Andrew Stanton",
    year: 2016,
    genre: "Animacion",
    img: "https://pics.filmaffinity.com/Buscando_a_Dory-418749314-mmed.jpg",
  },
  {
    title: "Interestelar",
    director: "Christopher Nolan",
    year: 2014,
    genre: "Ciencia ficcion",
    img: "https://m.media-amazon.com/images/I/71qzTzxzoCL.jpg",
  },
  {
    title: "50 primeras citas",
    director: "Peter Segal",
    year: 2004,
    genre: "Comedia romantica",
    img: "https://es.web.img3.acsta.net/pictures/14/02/18/13/24/107457.jpg",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMovies = await Movie.find();
    if (!allMovies.length) {
      console.log("No se encuentran películas");
    } else {
      console.log(`Encontradas ${allMovies.Length} películas`);
      await Movie.collection.drop();
      console.log(`Se ha eliminado la colección`);
    }
  })
  .catch((error) => {
    console.log(`No se han podido eliminar las películas`, error);
  })
  .then(async () => {
    await Movie.insertMany(movies);
    console.log(`${movies.length} agregadas a la colección`);
  })
  .catch((error) => {
    console.log(`No se han podido agregar películas a la colección`, error);
  })
  .finally(() => mongoose.disconnect());
