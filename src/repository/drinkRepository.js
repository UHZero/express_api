const DrinkModel = require('../models/DrinkModel');

class DrinkRepository {
    static async getFilteredDrinks(filters, sort) {
        return await DrinkModel.find(filters).sort([['name', sort]]).then((response) => response);
    }

    static async getOneDrink(id) {
        return await DrinkModel.findOne(id).then((response) => response);
    }

    static async postDrink(name, price, available) {
        const drink = new DrinkModel({
            name,
            price,
            available,
        });
        return await drink.save().then((response) => response);
    }

    static async putDrink(id, name, price, available) {
        const filters = {};
        if (id) {
            filters._id = {
                $eq: id,
            };
        }
        return await DrinkModel.findOneAndUpdate(
            id,
            {
                name,
                price,
                available,
            },
            {
                new: true,
                overwrite: true,
            },
        ).then((response) => response);
    }
}

module.exports = {
    DrinkRepository,
};
