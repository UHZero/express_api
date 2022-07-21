const DrinkModel = require('../models/DrinkModel');

class DrinkRepository {
    static async getFilteredDrinks(filters, sort) {
        return await DrinkModel.find(filters).sort([['name', sort]]).then((response) => response);
    }

    static async getOneDrink(id) {
        return await DrinkModel.findOne(id).then((response) => response);
    }

    static async postDrink(name, price, available) {
        this.name = name;
        this.price = price;
        this.available = available;
        const drink = new DrinkModel({
            name,
            price,
            available,
        });
        return await drink.save().then((response) => response);
    }
}

module.exports = {
    DrinkRepository,
};
