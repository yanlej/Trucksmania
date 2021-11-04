const User = require('../models/UserModel');

exports.getAllUsers = async (req, res, next) => {

    try {

      const [allUsers] =  await User.fetchAll();
      res.status(200).json(allUsers);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.getOneUser = async (req, res, next) => {

    try {

      const [OneUser] =  await User.getOneUser(req.params.id_users);
      res.status(200).json(OneUser);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

// exports.postUser = async (req, res, next) => {

//     try {

//       const postResponse =  await User.post(req.body.nom, req.body.prenom, req.body.telephone, req.body.email, req.body.password);
//       res.status(201).json(postResponse);
        
//     } catch (err) {

//         if(!err.statusCode) {

//             err.statusCode = 500;

//         }

//         next(err);

//     }

// };

exports.putUser = async (req, res, next) => {

    try {

      const putResponse =  await User.update(req.body.id_users, req.body.nom, req.body.prenom, req.body.telephone, req.body.email, req.body.password);
      res.status(200).json(putResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};

exports.deleteUser = async (req, res, next) => {

    try {

      const deleteResponse =  await User.delete(req.params.id_users);
      res.status(200).json(deleteResponse);
        
    } catch (err) {

        if(!err.statusCode) {

            err.statusCode = 500;

        }

        next(err);

    }

};