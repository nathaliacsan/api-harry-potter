const express = require('express');
const app = express()
const cors = require('cors');

const database = require('./models/repository')
database.connect()

const harryPotter = require('./routes/harrypotter-routes');

app.use(cors());
app.use(express.json());
app.use('/', harryPotter);

module.exports = app;
