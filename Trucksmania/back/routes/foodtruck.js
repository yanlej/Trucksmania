const express = require('express');

const router = express.Router();

const foodtruckController = require('../controllers/foodtruckController');

router.get('/:id_food', foodtruckController.getOneFoodtruck);

// router.post('/', foodtruckController.postFoodtruck);

router.put('/', foodtruckController.putFoodtruck);

router.delete('/:id_food', foodtruckController.deleteFoodtruck);

module.exports = router;