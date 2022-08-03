const crypto = require('crypto')

const database = [{
    _id: crypto.randomBytes(16).toString('hex'), 
    name: "mujito", 
    price: 25, 
    available: true
}];

const fakeDrinkRepository = {
    getFilteredDrinks: async (filters, sort)=> {
        return database;
    },
    getOneDrink: async (id)=>{
        return database.find(item=> item._id === id);
    },
    createDrink: async (name, price, available) => {
        const _id = crypto.randomBytes(16).toString('hex');
        const newDrink = {
            _id, name, price, available
        }

        database.push(newDrink)

        return newDrink
    },
    updateDrink: async (id, name, price, available) => {},
    updatePropertyDrink: async (id, name, price, available) => {},
    softdeleteDrink: async (id) => {},
}

module.exports = {
    fakeDrinkRepository
}