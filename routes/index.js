'use strict';
const router = require('express').Router()
const foodController = require('../controllers/foodController')
const restaurantController = require('../controllers/restaurantController')

// NOTE: foodController
router.post('/api/foods', foodController.insertOne)
router.put('/api/food/:id', foodController.updateById)
router.get('/api/food/:id', foodController.getById)
router.get('/api/foods', foodController.getAll)
router.delete('/api/food/:id', foodController.deleteById)

// NOTE: restaurantController
router.post('/api/restaurants', restaurantController.insertOne)
router.put('/api/restaurant/:id', restaurantController.updateById)
router.get('/api/restaurant/:id', restaurantController.getById)
router.get('/api/restaurants', restaurantController.getAll)
router.delete('/api/restaurant/:id', restaurantController.deleteById)

module.exports = router