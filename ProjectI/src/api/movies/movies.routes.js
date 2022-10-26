const express = require('express');
const Movie = require('./movies.model');
const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error)
    }
});


module.exports = router;