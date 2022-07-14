const request = require('supertest');
const server = require('../server');

test('test route', async () => {
  const response = await request(server)
    .get('/test')
    .expect(200);

  expect(response.ok).toBeTruthy();
});
