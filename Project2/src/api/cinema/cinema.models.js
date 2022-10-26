const mongoose = require('mongoose');
const Movie = require('../movies/movies.models');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
    {

        name: { type: String, required: true },
        location: { type: String, required: true },
        movies: [{ type: mongoose.Types.ObjectId, ref: Movie}]
        // movies: [{ type: mongoose.Types.ObjectId, ref: 'movies'}] así es lo correcto, referenciando el nombre de la
        //colecci´´on en minúscula y singular

    },
    {

    timestamps: true,
});

const Cinema = mongoose.model('cinemas', cinemaSchema);
module.exports = Cinema;
