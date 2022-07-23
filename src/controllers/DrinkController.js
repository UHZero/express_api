const DrinkModel = require('../models/DrinkModel');
const { DrinkRepository } = require('../repository/drinkRepository');

class DrinkController {
  static get(req, res) {
    const { sort, available } = req.query;
    const filters = {};

    if (available) {
      filters.available = {
        $eq: false,
      };
    }

    DrinkRepository.getFilteredDrinks(filters, sort).then((response) => {
      res.json(response);
    });
  }

  static filter(req, res) {
    const { id } = req.params;

    DrinkRepository.getOneDrink(id).then((response) => res.json(response));
  }

  static post(req, res) {
    const { name, price, available } = req.body;

    DrinkRepository.postDrink(name, price, available).then((response) => res.json(response));
  }

  static put(req, res) {
    const { name, price, available } = req.body;
    const { id } = req.params;

    DrinkRepository.putDrink(id, name, price, available).then((response) => res.json(response));
  }

  static patch(req, res) {
    const { name, price, available } = req.body;
    const { id } = req.params;

    DrinkRepository.patchDrink(id, name, price, available).then((response) => res.json(response));
  }

  static delete(req, res) {
    const { id } = req.params;

    DrinkRepository.softdeleteDrink(id).then((response) => res.json(response));
  }
}

module.exports = DrinkController;
