var mongo = require('mongodb')
var Restaurant = require('../models/restaurant')
var methods = {}

methods.insertOne = (req, res, next) => {
    let restaurant = new Restaurant({
        name: req.body.name,
        owner: req.body.owner,
        address: req.body.address,
        open_status: req.body.open_status
    })
    restaurant.save(function(err, record) {
        if (err) return console.error(err);
        res.json(record)
    });
} // insertOne

methods.getAll = (req, res, next) => {
    Restaurant.find()
        .then(records => {
            res.json(records)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getAll Restaurant'
            })
        })
} //getAll

methods.getById = (req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(record => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu getById Restaurant'
            })
        })
} // getById

methods.updateById = (req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(record => {
            Restaurant.updateOne({
                    "_id": new mongo.ObjectID(req.params.id)
                }, {
                    $set: {
                        "name": req.body.name || record.name,
                        "owner": req.body.owner || record.owner,
                        "address": req.body.address || record.address,
                        "open_status": req.body.open_status || record.open_status
                    }
                })
                .then((record) => {
                    res.json(record)
                })
                .catch(err => {
                    res.json({
                        err,
                        message: 'Error waktu update Restaurant'
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

methods.deleteById = (req, res, next) => {
    Restaurant.deleteOne({
            "_id": new mongo.ObjectID(req.params.id)
        })
        .then((record) => {
            res.json(record)
        })
        .catch(err => {
            res.json({
                err,
                message: 'Error waktu deleteById Restaurant'
            })
        })
} // deleteById

module.exports = methods