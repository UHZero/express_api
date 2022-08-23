const crypto = require('crypto');

const database = [{
    _id: crypto.randomBytes(16).toString('hex'),
    name: 'WabbaLub-Dub-Dub',
    price: 99.9,
    available: true,
}];

const fakeDrinkRepository = {
    getFilteredDrinks: async (filters, sort) => database,

    getOneDrink: async (id) => database.find((item) => item._id === id),

    createDrink: async (name, price, available) => {
        const _id = crypto.randomBytes(16).toString('hex');
        const newDrink = {
            _id, name, price, available,
        };

        database.push(newDrink);
        return newDrink;
    },

    updateDrink: async (id, name, price, available) => {
        for (item in database) {
            const dataItem = database[item];
            if (dataItem._id === id) {
                dataItem.name = name;
                dataItem.price = price;
                dataItem.available = available;
            }
            return dataItem;
        }
    },

    updatePropertyDrink: async (id, param) => {
        database.forEach((item) => {
            if (item._id === id && typeof param === 'string') {
                item.name = param;
            } else if (item._id === id && typeof param === 'number') {
                item.price = param;
            } else if (item._id === id && typeof param === 'boolean') {
                item.available = param;
            }
        });
        return database.find((item) => item._id === id);
    },

    softdeleteDrink: async (id) => {
        for (item in database) {
            if (database[item]._id === id) {
                if (database[item].available) {
                    database[item].available = false;
                } else {
                    database[item].available = true;
                }
            }
        }
        return database;
    },
};
const idTests = database[0]._id;

// console.log(fakeDrinkRepository.softdeleteDrink(idTests));

module.exports = {
    fakeDrinkRepository,
};
