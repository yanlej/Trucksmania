const User = require('../models/UserModel');
const Foodtruck = require('../models/FoodtruckModel');

const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {

    const error = validationResult(req);

    if(!error.isEmpty()) return

        
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;
    

    try {

        const hashedPassword = await bcrypt.hash(password, 12)

        const userDetails = {

            nom: lastName,
            prenom: firstName,
            telephone: phone,
            email: email,
            password: hashedPassword
        }

        const result = await User.post(userDetails);

        res.status(201).json({ message: 'Vous vous êtes bien enregistré !' });
        
    } catch (err) {

        if(!err.statusCode){
            err.statusCode = 500;
        }

        next(err);
        
    }
}

exports.signupPro = async (req, res, next) => {

    const error = validationResult(req);

    if(!error.isEmpty()) return

        const nomFood = req.body.nomFood;
        const descFood = req.body.descFood;
        const image = req.body.image;
        const theme = req.body.theme;
    
    try {

        const foodtruckDetails = {

            nom_food: nomFood,
            description_food: descFood,
            image: image,
            theme: theme
        }

        const resultFood = await Foodtruck.post(foodtruckDetails);

        res.status(201).json({ message: 'Le foodtruck a bien été enregistré !' });
        
    } catch (err) {

        if(!err.statusCode){
            
            err.statusCode = 500;
        }

        next(err);
        
    }
}


exports.login = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    try {

        const user = await User.getEmail(email);

        if(user[0].length !==1){

            const error = new Error("Aucun utilisateur trouvé avec cet email !");
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];

        const isEqual = await bcrypt.compare(password, storedUser.password);

        if(!isEqual) {

            const error = new Error("Le mot de passe n'est pas correct !");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(

            {
                email: storedUser.email,
                id_users: storedUser.id_users
            },
            'secretfortoken',
            { expiresIn: '1h'}
        );

        res.status(200).json({ token: token, id_users: storedUser.id_users });
        
    } catch (err) {

        if(!err.statusCode){
            err.statusCode = 500;
        }

        next(err);
        
    }
    

}