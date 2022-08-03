const request = require('supertest');
const drinkModel = require('../../models/DrinkModel');
const server = require('../../server');

describe('[controllers] - DrinkController test', () => {
  it('should get a drink', async () => {
    const response = await request(server).get('/drinks').expect(200);

    const expectedDrink = {
      name: "mujito", 
      price: 25, 
      available: true
  }
    expect(response._body[0]).toMatchObject(expectedDrink);
  });
});
