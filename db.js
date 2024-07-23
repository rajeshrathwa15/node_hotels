const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//Set up MongoDB connection
mongoose.connect(mongoURL,
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
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