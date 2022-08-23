const request = require('supertest');
// const { drinkRepository } = require('../../repository/drinkRepository');
const server = require('../../server');

describe('[controllers] - DrinkController test', () => {
  it('should get a drink', async () => {
    const response = await request(server).get('/drinks').expect(200);

    // const newDrink = drinkRepository.createDrink('Marguerita', 29.9, true);
    const expectDrink = {
      name: 'WabbaLub-Dub-Dub',
      price: 99.9,
      available: true,
    };

    expect(response._body[0]).toMatchObject(expectDrink);
  });
});
