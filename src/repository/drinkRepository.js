const { fakeDrinkRepository } = require("./fakes/fakeDrinkRepository")
const { MongoDrinkRepository } = require("./mongo/MongoDrinkRepository")

const drinkRepository = process.env.NODE_ENV == 'test' ? fakeDrinkRepository : MongoDrinkRepository;

module.exports = {
    drinkRepository
};