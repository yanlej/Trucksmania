const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const User = require('../models/UserModel');
const authController = require('../controllers/authController');

router.post( '/signup',
    [

        body('lastName').not().isEmpty(),
        body('firstName').not().isEmpty(),
        body('phone').isMobilePhone(['fr-FR']),
        body('email').isEmail().withMessage('Veuillez rentré un Email valide s\'il vous plait')
        .custom(async (email) => {
            const user = await User.getEmail(email);
            if(user[0].length > 0) {
                return Promise.reject('Cet email existe déjà !')
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({ min: 8 })

    ], authController.signup
);

router.post('/signupPro',

    [
        
        body('nomFood').not().isEmpty(),
        body('descFood').not().isEmpty(),
        body('image').not().isEmpty(),
        body('theme').not().isEmpty()

    ], authController.signupPro
);

router.post( '/login', authController.login);
    

module.exports = router;