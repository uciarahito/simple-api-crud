const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/restaurants');

// NOTE: set
app.set('port', process.env.PORT || 3000)

// NOTE: use
app.use(require('body-parser').urlencoded({
    extended: false
}));
app.use(require('body-parser').json());

app.use('/', require('./routes'))

// NOTE: run
app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'));
})