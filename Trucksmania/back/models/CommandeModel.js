const db = require('../util/database');

module.exports = class Commande{

    constructor(quantite, prix_total){

        this.quantite = quantite;
        this.prix_total = prix_total;
    }

    static fetchAll() {

        return db.execute('SELECT * FROM commandes')
    }

    static getOneCommande(id_commandes){

        return db.execute('SELECT * FROM `commandes` WHERE id_commandes = ?', [id_commandes]);
    }

    static post(quantite, prix_total){

        return db.execute('INSERT INTO `commandes` (`quantite`, `prix_total`) VALUES (?,?)', ([quantite, prix_total]));
    }

    static update(id_commandes, quantite, prix_total){

        return db.execute('UPDATE `commandes` SET `quantite`= ?, `prix_total`= ? WHERE id_commandes = ?', ([quantite, prix_total, id_commandes]));
    }

    static delete(id_commandes){

        return db.execute('DELETE FROM `commandes` WHERE id_commandes = ?', [id_commandes]);
    }
};