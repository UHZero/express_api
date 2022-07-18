const request = require('supertest');
const drinkModel = require('../../models/DrinkModel');
const server = require('../../server');

describe('[controllers] - DrinkController test', () => {
  const testDrink = {
    name: 'Test',
    price: 99.9,
    available: true,
  };

  const drink = new drinkModel(testDrink);

  beforeEach(async () => {
    await drink.save();
  });

  afterEach(async () => {
    await drink.delete();
  });

  it('should get a drink', async () => {
    const response = await request(server).get('/drinks').expect(200);
    expect(response._body[0].name).toBe(testDrink.name);
  });
});
