const express = require('express');

const router = express.Router();
const movies = require('./movies_data')
// console.log(movies); 

router.get('/', (request, response) => {
    return response.send(movies);
});


module.exports = router;
