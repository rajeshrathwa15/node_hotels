const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDB connection URL
// const mongoURL = MONGO_DB_UR_LOCAL;
const mongoURL = process.env.MONGO_DB_URL;

//Set up MongoDB connection
mongoose.connect(mongoURL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
//Get the default connection 
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//define event listner for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
})
db.on('error', (err) => {
    console.error('Error connecting to MongoDB server', err);
})
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
})

module.exports = db;