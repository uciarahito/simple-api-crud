var mongo = require('mongodb')
var Food = require('../models/food')
var methods = {}

methods.insertOne = (req, res) => {
    let food = new Food({
        name: req.body.name,
        price: req.body.price,
        expired_date: req.body.expired_date
    })
    food.save(function(err, record) {
        if (err) return console.error(err);
        res.json(record)
    });
} // insertOne

methods.getAll = (req, res) => {
    Food.find()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll Food'
            })
        })
} //getAll

methods.getById = (req, res) => {
    Food.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Food'
            })
        })
} // getById

methods.updateById = (req, res) => {
    Food.findById(req.params.id)
        .then(record => {
            Food.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "name": req.body.name || record.name,
                        "price": req.body.price || record.price,
                        "expired_date": req.body.expired_date || record.expired_date
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update Food'
                    })
                })
        })
        .catch(err => {
            res.json({
                err,
                message: 'Data tidak ada'
            })
        })
} //updateById

methods.deleteById = (req, res) => {
    Food.deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById Food'
            })
        })
} // deleteById

module.exports = methods