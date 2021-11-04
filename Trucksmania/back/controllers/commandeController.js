const Commande = require('../models/CommandeModel');

exports.getAllCommandes = async (req, res, next) => {

    try {

      const [allCommandes] =  await Commande.fetchAll();
      res.status(200).json(allCommandes);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getOneCommande = async (req, res, next) => {

    try {

      const [OneCommande] =  await Commande.getOneCommande(req.params.id_commandes);
      res.status(200).json(OneCommande);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.postCommande = async (req, res, next) => {

    try {

      const postResponse =  await Commande.post(req.body.quantite, req.body.prix_total);
      res.status(201).json(postResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.putCommande = async (req, res, next) => {

    try {

      const putResponse =  await Commande.update(req.body.id_commandes, req.body.quantite, req.body.prix_total);
      res.status(200).json(putResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.deleteCommande = async (req, res, next) => {

    try {

      const deleteResponse =  await Commande.delete(req.params.id_commandes);
      res.status(200).json(deleteResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};