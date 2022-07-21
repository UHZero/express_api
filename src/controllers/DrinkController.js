const DrinkModel = require('../models/DrinkModel');
const DrinkRepository = require('../repository/drinkRepository');

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
    const { id } = req.params;

    DrinkModel.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
        overwrite: true,
      },
    ).then((updatedDrink) => res.json(updatedDrink));
  }

  static patch(req, res) {
    const { id } = req.params;

    DrinkModel.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      },
    ).then((updatedUser) => res.json(updatedUser));
  }

  static delete(req, res) {
    const { id } = req.params;

    DrinkModel.findOneAndUpdate({ _id: id }, {
      $set: {
        available: false,
      },
    }, {
      upsert: true,
    }).then((availableDrink) => res.json(availableDrink));
  }
}

module.exports = DrinkController;
