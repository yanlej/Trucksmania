const express = require('express');

const router = express.Router();

const commandeController = require('../controllers/commandeController');

router.get('/', commandeController.getAllCommandes);

router.get('/:id_commandes', commandeController.getOneCommande);

router.post('/', commandeController.postCommande);

router.put('/', commandeController.putCommande);

router.delete('/:id_commandes', commandeController.deleteCommande);

module.exports = router;