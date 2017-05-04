const mongoose = require('mongoose')
let Schema = mongoose.Schema

let restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    open_status: {
        type: String,
        required: true
    }
}) // restaurantSchema

let Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant