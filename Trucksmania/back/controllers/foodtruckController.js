const Foodtruck = require('../models/FoodtruckModel');


exports.getAllFoodtrucks = async (req, res, next) => {

    try {

      const [allFoodtrucks] =  await Foodtruck.fetchAll();
      res.status(200).json(allFoodtrucks);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getOneFoodtruck = async (req, res, next) => {

    try {

      const [OneFoodtruck] =  await Foodtruck.getOneFoodtruck(req.params.id_food);
      res.status(200).json(OneFoodtruck);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getFoodtruckByTheme = async (req, res, next) => {

    try {

      const [FoodtruckByTheme] =  await Foodtruck.getFoodtruckByTheme(req.params.theme);
      res.status(200).json(FoodtruckByTheme);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

// exports.postFoodtruck = async (req, res, next) => {

//     try {

//       const postResponse =  await Foodtruck.post(req.body.nom_food, req.body.description_food, req.body.theme);
//       res.status(201).json(postResponse);
        
//     } catch (err) {

//         if(!err.statusCode) {

//             err.statusCode = 500;

//         }

//         next(err);

//     }

// };

exports.putFoodtruck = async (req, res, next) => {

    try {

      const putResponse =  await Foodtruck.update(req.body.id_food, req.body.nom_food, req.body.description_food, req.body.theme);
      res.status(200).json(putResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.deleteFoodtruck = async (req, res, next) => {

    try {

      const deleteResponse =  await Foodtruck.delete(req.params.id_food);
      res.status(200).json(deleteResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};