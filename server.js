const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/restaurants');

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./routes'))

// NOTE: run
app.listen(process.env.PORT || 3000, () => console.log('Listening on port ' + app.get('port')))