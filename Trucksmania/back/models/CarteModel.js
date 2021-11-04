const db = require('../util/database');

module.exports = class Carte{

    constructor(image_plat, nom_plat, description, prix_plat){

        this.image_plat = image_plat;
        this.nom_plat = nom_plat;
        this.description = description;
        this.prix_plat = prix_plat;
    }

    static fetchAll() {

        return db.execute('SELECT * FROM cartes')
    }

    static getOneCarte(id_cartes){

        return db.execute('SELECT * FROM `cartes` WHERE id_cartes = ?', [id_cartes]);
    }

    static getCarteByFood(num_food){

        return db.execute('SELECT * FROM `cartes` WHERE num_food = ?', [num_food]);
    }

    static post(image_plat, nom_plat, description, prix_plat){

        return db.execute('INSERT INTO `cartes`(`image_plat`, `nom_plat`, `description`, `prix_plat`) VALUES (?,?,?,?)', ([image_plat, nom_plat, description, prix_plat]));
    }

    static update(id_cartes, image_plat, nom_plat, description, prix_plat){

        return db.execute('UPDATE `cartes` SET `image_plat`= ?, `nom_plat`= ?, `description`= ?, `prix_plat`= ? WHERE id_cartes = ?', ([image_plat, nom_plat, description, prix_plat, id_cartes]));
    }

    static delete(id_cartes){

        return db.execute('DELETE FROM `cartes` WHERE id_cartes = ?', [id_cartes]);
    }
};