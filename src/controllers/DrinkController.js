const DrinkModel = require('../models/DrinkModel');

class DrinkController {
  static get(req, res) {
    const { sort, available } = req.query; // query é '?'
    const filters = {}; // perguntar porque do obj vazio

    if (available) {
      filters.available = {
        $eq: false,
      };
    }

    DrinkModel.find(filters).sort([['name', sort]]).then((response) => {
      res.json(response);
    });
  }

  static filter(req, res) {
    const { name } = req.params;

    DrinkModel.findOne({
      _name: name,
    }).then((drink) => {
      res.json(drink);
    });
  }

  static post(req, res) {
    const { name, price, available } = req.body; // body é o corpo do json

    const drink = new DrinkModel({
      name,
      price,
      available,
    });

    drink.save().then((response) => {
      res.json(response);
    });
  }

  static put(req, res) {
    const { name } = req.params; // pega um unico atributo/parametro

    DrinkModel.findOneAndUpdate(
      { _name: name },
      req.body,
      {
        new: true,
        overwrite: true,
      },
    ).then((updatedDrink) => res.json(updatedDrink));
  }

  static patch(req, res) {
    const { name } = req.params;

    DrinkModel.findOneAndUpdate(
      { _name: name },
      req.body,
      {
        new: true,
      },
    ).then((updatedUser) => res.json(updatedUser));
  }

  static delete(req, res) {
    const { name } = req.params;

    DrinkModel.findOneAndUpdate({ _name: name }, {
      $set: {
        available: false,
      },
    }, {
      upsert: true, // perguntar sobre upsert
    }).then((availableDrink) => res.json(availableDrink));
  }
}

module.exports = DrinkController;
