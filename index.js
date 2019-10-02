const express = require('express');
const mongoose = require('mongoose');
const characterRouter = require('./routes/characterRouter');
const app = express();
const bodyParser = require('body-parser');
//const Character = require('./models/characters');

const port = process.env.PORT || 3000;

//const db = mongoose.connect('mongodb://localhost:27017/characters');

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use('/characters', characterRouter);

app.use('/', (req, res) => {
    console.log('ping');
    res.send('<h2>Welcome</h2>');
});

/* app.get('/', (req, res) => {
    res.send('Its an API!');
}); */

mongoose.connect('mongodb://localhost:27017/characters', { 
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('connected to the characters database!');
});

mongoose.connection.on('error', (err) => {
    console.log(`Error connecting to database: \n${err}`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});