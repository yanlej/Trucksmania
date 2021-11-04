const Evenement = require('../models/EvenementModel');

exports.getAllEvents = async (req, res, next) => {

    try {

      const [allEvents] =  await Evenement.fetchAll();
      res.status(200).json(allEvents);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getOneEvent = async (req, res, next) => {

    try {

      const [OneEvent] =  await Evenement.getOneEvent(req.params.id_evenements);
      res.status(200).json(OneEvent);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.postEvent = async (req, res, next) => {

    try {

      const postResponse =  await Evenement.post(req.body.nom_event, req.body.date, req.body.horaire);
      res.status(201).json(postResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.putEvent = async (req, res, next) => {

    try {

      const putResponse =  await Evenement.update(req.body.id_evenements, req.body.nom_event, req.body.date, req.body.horaire);
      res.status(200).json(putResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.deleteEvent = async (req, res, next) => {

    try {

      const deleteResponse =  await Evenement.delete(req.params.id_evenements);
      res.status(200).json(deleteResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};