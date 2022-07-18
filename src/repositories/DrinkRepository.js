const DrinkModel = require("../models/DrinkModel")

class DrinkRepository {
    static async getFilteredDrinks(filters, sort){
        return await DrinkModel.find(filters).sort([['name', sort]]).then((response) => {
            return response
          });
    }
}

module.exports = DrinkRepository;