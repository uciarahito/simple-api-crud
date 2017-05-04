const mongoose = require('mongoose')
let Schema = mongoose.Schema

let foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    expired_date: {
        type: String,
        required: true
    }
}) // foodSchema

let Food = mongoose.model('Food', foodSchema)
module.exports = Food