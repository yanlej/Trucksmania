const express = require('express');

const router = express.Router();

const evenementController = require('../controllers/evenementController');

router.get('/', evenementController.getAllEvents);

router.get('/:id_evenements', evenementController.getOneEvent);

router.post('/', evenementController.postEvent);

router.put('/', evenementController.putEvent);

router.delete('/:id_evenements', evenementController.deleteEvent);

module.exports = router;