const express = require('express');

const router = express.Router();

const carteController = require('../controllers/carteController');

router.get('/', carteController.getAllCartes);

router.get('/:num_food', carteController.getCarteByFood);

router.get('/:id_cartes', carteController.getOneCarte);

router.post('/', carteController.postCarte);

router.put('/', carteController.putCarte);

router.delete('/:id_cartes', carteController.deleteCarte);

module.exports = router;