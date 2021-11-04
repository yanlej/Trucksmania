const db = require('../util/database');

module.exports = class User{

    constructor(nom, prenom, telephone, email, password){

        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.email = email;
        this.password = password;
    }

    static fetchAll() {

        return db.execute('SELECT * FROM users')
    }

    static getOneUser(id_users){

        return db.execute('SELECT * FROM `users` WHERE id_users = ?', [id_users]);
    }

    static post(user){

        return db.execute('INSERT INTO `users`(`nom`, `prenom`, `telephone`, `email`, `password`) VALUES (?,?,?,?,?)', [user.nom, user.prenom, user.telephone, user.email, user.password]);
    }

    static update(id_users, nom, prenom, telephone, email, password){

        return db.execute('UPDATE `users` SET `nom`= ?, `prenom`= ?, `telephone`= ?, `email`= ?, `password`= ? WHERE id_users = ?', ([nom, prenom, telephone, email, password, id_users]));
    }

    static delete(id_users){

        return db.execute('DELETE FROM `users` WHERE id_users = ?', [id_users]);
    }

    static getEmail(email){

        return db.execute('SELECT * FROM `users` WHERE email = ?', [email]);
    }
};