const express = require('express');

const router = express.Router();

const foodtruckController = require('../controllers/foodtruckController');


router.get('/', foodtruckController.getAllFoodtrucks);

router.get('/:theme', foodtruckController.getFoodtruckByTheme);

module.exports = router;