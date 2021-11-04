const db = require('../util/database');

module.exports = class Foodtruck{

    constructor(nom_food, description_food, theme){

        this.nom_food = nom_food;
        this.description_food = description_food;
        this.image = image;
        this.theme = theme;
    }

    static fetchAll() {

        return db.execute('SELECT * FROM foodtrucks');
    }

    static getOneFoodtruck(id_food){

          return db.execute('SELECT * FROM `foodtrucks` WHERE `id_food` = ?', [id_food]);
    
    }

    static getFoodtruckByTheme(theme){

        return db.execute('SELECT * FROM `foodtrucks` WHERE `theme` =  ?', [theme]);

    }

    static post(foodtruck){

        return db.execute('INSERT INTO `foodtrucks`(`nom_food`, `description_food`, `image`, `theme`) VALUES (?,?,?,?)', ([foodtruck.nom_food, foodtruck.description_food, foodtruck.image, foodtruck.theme]));
    }

    static update(id_food, nom_food, description_food, image, theme){

        return db.execute('UPDATE `foodtrucks` SET `nom_food`= ?, `description_food`= ?, `image`= ?, `theme`= ? WHERE id_food = ?', ([nom_food, description_food, image, theme, id_food]));
    }

    static delete(id_food){

        return db.execute('DELETE FROM `foodtrucks` WHERE id_food = ?', [id_food]);
    }
};