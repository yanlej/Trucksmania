const Carte = require('../models/carteModel');

exports.getAllCartes = async (req, res, next) => {

    try {

      const [allCartes] =  await Carte.fetchAll();
      res.status(200).json(allCartes);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getOneCarte = async (req, res, next) => {

    try {

      const [OneCarte] =  await Carte.getOneCarte(req.params.id_cartes);
      res.status(200).json(OneCarte);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getCarteByFood = async (req, res, next) => {

    try {

      const [foodCarte] =  await Carte.getCarteByFood(req.params.num_food);
      res.status(200).json(foodCarte);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.postCarte = async (req, res, next) => {

    try {

      const postResponse =  await Carte.post(req.body.image_plat, req.body.nom_plat, req.body.description, req.body.prix_plat);
      res.status(201).json(postResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.putCarte = async (req, res, next) => {

    try {

      const putResponse =  await Carte.update(req.body.id_cartes, req.body.image_plat, req.body.nom_plat, req.body.description, req.body.prix_plat);
      res.status(200).json(putResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.deleteCarte = async (req, res, next) => {

    try {

      const deleteResponse =  await Carte.delete(req.params.id_cartes);
      res.status(200).json(deleteResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};