const app = require('./app');
const request = require('supertest');

test('GET /hello', async () => {
  const response = await request(app).get('/hello');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello, world!');
});
