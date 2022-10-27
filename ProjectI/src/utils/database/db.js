const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.DB_URL;
if(!DB_URL) throw new Error ('No se ha podido conectar a mi DB');

const connectDb = async () => {
    try {
        const db = await mongoose.connect(DB_URL);
        const { name, host} = db.connection;
        console.log(`Estás conectado a la DB ${name} en el ${host}`);
    } catch (error) {
        console.log('No se ha podido conectar a la Db', error);
    }
};

module.exports = connectDb ;