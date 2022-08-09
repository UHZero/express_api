const DrinkModel = require('../models/DrinkModel'); // não está sendo usado
const { drinkRepository } = require('../repository/drinkRepository');

class DrinkController {
  static get(req, res) {
    const { sort, available } = req.query;
    const filters = {};

    if (available) {
      filters.available = {
        $eq: false,
      };
    }

    drinkRepository.getFilteredDrinks(filters, sort).then((response) => {
      res.json(response);
    });
  }

  static filter(req, res) {
    const { id } = req.params;

    drinkRepository.getOneDrink(id).then((response) => res.json(response));
  }

  static post(req, res) {
    const { name, price, available } = req.body;

    drinkRepository.postDrink(name, price, available).then((response) => res.json(response));
  }

  static put(req, res) {
    const { name, price, available } = req.body;
    const { id } = req.params;

    drinkRepository.putDrink(id, name, price, available).then((response) => res.json(response));
  }

  static patch(req, res) {
    const { name, price, available } = req.body;
    const { id } = req.params;

    drinkRepository.patchDrink(id, name, price, available).then((response) => res.json(response));
  }

  static delete(req, res) {
    const { id } = req.params;

    drinkRepository.softdeleteDrink(id).then((response) => res.json(response));
  }
}

module.exports = DrinkController;
