const db = require('../util/database');

module.exports = class Evenement{

    constructor(nom_event, date, horaire){

        this.nom_event = nom_event;
        this.date = date;
        this.horaire = horaire;
    }

    static fetchAll() {

        return db.execute('SELECT * FROM evenements')
    }

    static getOneEvent(id_evenements){

        return db.execute('SELECT * FROM `evenements` WHERE id_evenements = ?', [id_evenements]);
    }

    static post(nom_event, date, horaire){

        return db.execute('INSERT INTO `evenements`(`nom_event`, `date`, `horaire`) VALUES (?,?,?)', ([nom_event, date, horaire]));
    }

    static update(id_evenements, nom_event, date, horaire){

        return db.execute('UPDATE `evenements` SET `nom_event`= ?, `date`= ?, `horaire`= ? WHERE id_evenements = ?', ([nom_event, date, horaire, id_evenements]));
    }

    static delete(id_evenements){

        return db.execute('DELETE FROM `evenements` WHERE id_evenements = ?', [id_evenements]);
    }
};