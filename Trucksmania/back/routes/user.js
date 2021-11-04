const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);

router.get('/:id_users', userController.getOneUser)

//router.post('/', userController.postUser);

router.put('/', userController.putUser);

router.delete('/:id_users', userController.deleteUser);

module.exports = router;