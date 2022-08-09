const { fakeDrinkRepository } = require('./fake/fakeDrinkRepository');
const { mongoDrinkRepository } = require('./mongo/mongoDrinkRepository');

const drinkRepository = process.env.NODE_ENV === 'test' ? fakeDrinkRepository : mongoDrinkRepository;

module.exports = {
    drinkRepository,
};
